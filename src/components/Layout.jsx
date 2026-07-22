import { trackVisitor } from "../services/analytics";
import { supabase } from "../lib/supabase";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Mark from "mark.js";
import { FaUserCircle } from "react-icons/fa";
import { Trash2, X } from "lucide-react";

export default function Layout({ children }) {

    async function fetchVisitorCount() {

        const { count, error } = await supabase
            .from("visitors")
            .select("*", {
                count: "exact",
                head: true
            });

        if (error) {
            console.error(error);
            return;
        }

        setVisitorCount(count);
    }
    const location = useLocation();
    const navigate = useNavigate();
    const [visitor, setVisitor] = useState("Visitor");
    const [input, setInput] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [searchFocused, setSearchFocused] = useState(false);
    const searchInputRef = useRef(null);
    const [matches, setMatches] = useState([]);
    const [currentMatch, setCurrentMatch] = useState(0);
    const [utcTime, setUtcTime] = useState("");
    const [visitorCount, setVisitorCount] = useState(0);
    const [history, setHistory] = useState(() => {
        return JSON.parse(localStorage.getItem("search-history")) || [];
    });



    const [navFloating, setNavFloating] = useState(false);
    const navRef = useRef(null);
    const navTriggerRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setNavFloating(!entry.isIntersecting);
            },
            {
                threshold: 0,
            }
        );

        if (navTriggerRef.current) {
            observer.observe(navTriggerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();

            setUtcTime(
                now.toLocaleTimeString("en-GB", {
                    timeZone: "UTC",
                    hour12: false,
                })
            );
        };

        updateClock();

        const interval = setInterval(updateClock, 1000);

        return () => clearInterval(interval);
    }, []);



    const currentMatchStyle = {
        backgroundColor: "#2563eb",
        color: "#fff",
        fontWeight: "700",
        borderRadius: "2px",
    };

    const highlightStyle = {
        backgroundColor: "transparent",
        color: "#2563eb",
        fontWeight: "700",
        textDecoration: "underline",
        textDecorationThickness: "2px",
        textUnderlineOffset: "3px",
    };

    const isActive = (path) => location.pathname === path;

    // Fetch visitor IP
    useEffect(() => {
        async function getVisitorInfo() {
            try {
                const res = await fetch("https://ipwho.is/");
                const data = await res.json();
                setVisitor(data.ip);
            } catch {
                setVisitor("Visitor");
            }
        }

        getVisitorInfo();
    }, []);

    // on click on recent search
    useEffect(() => {
        const pendingSearch = sessionStorage.getItem("pending-search");

        if (!pendingSearch) return;

        sessionStorage.removeItem("pending-search");

        requestAnimationFrame(() => {
            setInput(pendingSearch);
            setSearchQuery(pendingSearch);
        });
    }, [location.pathname]);

    // Clear search when page changes
    useEffect(() => {
        setInput("");
        setSearchQuery("");
        setMatches([]);
        setCurrentMatch(0);

        const root = document.getElementById("page-content");
        if (!root) return;

        new Mark(root).unmark();
    }, [location.pathname]);

    useEffect(() => {
        const handleShortcut = (e) => {
            // Ctrl + K (Windows/Linux)
            // Cmd + K (Mac)
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();

                searchInputRef.current?.focus();
            }

            // "/" focuses search when not typing
            if (
                e.key === "/" &&
                document.activeElement.tagName !== "INPUT" &&
                document.activeElement.tagName !== "TEXTAREA"
            ) {
                e.preventDefault();

                searchInputRef.current?.focus();
            }
        };

        window.addEventListener("keydown", handleShortcut);

        return () =>
            window.removeEventListener("keydown", handleShortcut);
    }, []);

    const deleteHistoryItem = (query, path) => {
        const updated = history.filter(
            (item) =>
                !(
                    item.query === query &&
                    item.path === path
                )
        );

        setHistory(updated);
        localStorage.setItem("search-history", JSON.stringify(updated));
    };

    // Search
    useEffect(() => {
        const query = searchQuery.trim();

        if (!query) return;

        const root = document.getElementById("page-content");
        if (!root) return;

        const markInstance = new Mark(root);

        markInstance.unmark({
            done: () => {
                markInstance.mark(query, {
                    separateWordSearch: false,

                    accuracy:
                        query.length <= 2
                            ? {
                                value: "exactly",
                                limiters: [
                                    " ",
                                    ".",
                                    ",",
                                    ";",
                                    ":",
                                    "(",
                                    ")",
                                    "[",
                                    "]",
                                    "{",
                                    "}",
                                    "<",
                                    ">",
                                    '"',
                                    "'",
                                    "-",
                                    "_",
                                    "/",
                                    "\\",
                                    "\n",
                                    "\t",
                                ],
                            }
                            : "partially",

                    done: (count) => {
                        if (count === 0) {
                            setMatches([]);
                            setCurrentMatch(0);
                            alert(`"${query}" not found.`);
                            return;
                        }

                        setHistory((prev) => {
                            const updated = [
                                {
                                    query,
                                    path: location.pathname,
                                },
                                ...prev.filter(
                                    (item) =>
                                        !(
                                            item.query.toLowerCase() === query.toLowerCase() &&
                                            item.path === location.pathname
                                        )
                                ),
                            ].slice(0, 10);

                            localStorage.setItem(
                                "search-history",
                                JSON.stringify(updated)
                            );

                            return updated;
                        });

                        const marks = [...root.querySelectorAll("mark")];

                        marks.forEach((mark) => {
                            Object.assign(mark.style, highlightStyle);
                        });

                        Object.assign(marks[0].style, currentMatchStyle);

                        marks[0].scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                        });

                        setMatches(marks);
                        setCurrentMatch(0);
                    },
                });
            },
        });
    }, [searchQuery]);

    // Navigate between matches
    const goToMatch = (direction) => {
        if (matches.length === 0) return;

        matches.forEach((mark) => {
            Object.assign(mark.style, highlightStyle);
        });

        let next = currentMatch + direction;

        if (next < 0)
            next = matches.length - 1;

        if (next >= matches.length)
            next = 0;

        Object.assign(matches[next].style, currentMatchStyle);

        matches[next].scrollIntoView({
            behavior: "smooth",
            block: "center",
        });

        setCurrentMatch(next);
    };

    useEffect(() => {

        async function init() {
            await trackVisitor();
            await fetchVisitorCount();
        }

        init();

    }, [location.pathname]);

    return (
        <div className="container">
            <header>
                <div className="header-top">
                    <Link to="/" className="logo">
                        <span className="logo-icon">
                            <FaUserCircle size={25} color="#000" />
                        </span>
                        <span className="logo-text">
                            Welcome <span>{visitor}</span>
                        </span>
                    </Link>

                    <div className="header-right">
                        <span>Visits: {visitorCount.toString().padStart(6, "0")}</span>
                        <span>|</span>
                        <span>
                            <Link to="/admin" className={isActive("/admin") ? "active" : ""}>ADMIN</Link>
                        </span>
                        {/* <span>UTC {utcTime}</span> Time Feature currently disabled */}
                    </div>
                </div>
                <div ref={navTriggerRef}>
                    <nav>
                        <div
                            className="nav-tabs"
                            style={
                                navFloating
                                    ? {
                                        position: "fixed",
                                        top: "18px",
                                        left: "20px",
                                        zIndex: 1000,

                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "stretch",
                                        gap: "4px",

                                        width: "220px",

                                        background: "rgba(255,255,255,0.96)",
                                        backdropFilter: "blur(12px)",
                                        WebkitBackdropFilter: "blur(12px)",

                                        border: "1px solid #d0d7de",
                                        borderRadius: "8px",

                                        padding: "10px",

                                        boxShadow:
                                            "0 10px 30px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)",

                                        transition: "all .25s ease",

                                        animation: "fadeIn .25s ease",
                                    }
                                    : {}
                            }
                        >
                            {navFloating && (
                                <div
                                    style={{
                                        fontSize: "11px",
                                        fontWeight: "700",
                                        letterSpacing: "1.5px",
                                        textTransform: "uppercase",
                                        color: "#6e7781",
                                        padding: "4px 10px 8px",
                                        borderBottom: "1px solid #e5e7eb",
                                        marginBottom: "6px",
                                    }}
                                >
                                    Navigation
                                </div>
                            )}

                            <Link to="/" className={isActive("/") ? "active" : ""}>HOME</Link>
                            <Link to="/profile" className={isActive("/profile") ? "active" : ""}>PROFILE</Link>
                            <Link to="/quant" className={isActive("/quant") ? "active" : ""}>QUANT</Link>
                            <Link to="/gate" className={isActive("/gate") ? "active" : ""}>GATE</Link>
                            <Link to="/project" className={isActive("/project") ? "active" : ""}>PROJECT</Link>
                            <Link to="/algorithm" className={isActive("/algorithm") ? "active" : ""}>ALGORITHM</Link>
                            <Link to="/knowledge" className={isActive("/knowledge") ? "active" : ""}>KNOWLEDGE</Link>
                            <Link to="/research" className={isActive("/research") ? "active" : ""}>RESEARCH</Link>
                            <Link to="/logs" className={isActive("/logs") ? "active" : ""}>LOGS</Link>
                            <Link to="/achievements" className={isActive("/achievements") ? "active" : ""}>ACHIEVEMENTS</Link>
                            <Link to="/gym" className={isActive("/gym") ? "active" : ""}>GYM</Link>
                            <Link to="/contact" className={isActive("/contact") ? "active" : ""}>CONTACT</Link>
                            <Link to="/faq" className={isActive("/faq") ? "active" : ""}>FAQs</Link>
                        </div>

                        <div
                            style={{
                                position: "fixed",
                                right: "20px",
                                zIndex: 1000,
                                display: "flex",
                                alignItems: "center",
                                background: "#fff",
                                paddingRight: "10px",
                            }}
                        >
                            {/* Search Box */}
                            <div
                                style={{
                                    position: "relative",
                                    display: "inline-block",
                                }}
                            >
                                <input
                                    type="text"
                                    ref={searchInputRef}
                                    className="search-box"
                                    placeholder="Press Ctrl+K or ' / ' to Search..."
                                    value={input}
                                    onFocus={() => setSearchFocused(true)}
                                    onBlur={() => {
                                        setTimeout(() => {
                                            setSearchFocused(false);
                                        }, 150);
                                    }}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            if (searchQuery === input.trim()) {
                                                goToMatch(e.shiftKey ? -1 : 1);
                                            } else {
                                                setSearchQuery(input);
                                            }
                                        }

                                        if (e.key === "Escape") {
                                            setInput("");
                                            setSearchQuery("");
                                            setMatches([]);
                                            setCurrentMatch(0);

                                            const root = document.getElementById("page-content");
                                            if (root) new Mark(root).unmark();
                                        }
                                    }}
                                    style={{
                                        width: "220px",
                                        padding: "8px 35px 8px 12px",
                                    }}
                                />

                                {input && (
                                    <button
                                        onClick={() => {
                                            setInput("");
                                            setSearchQuery("");
                                            setMatches([]);
                                            setCurrentMatch(0);

                                            const root = document.getElementById("page-content");
                                            if (root) new Mark(root).unmark();
                                        }}
                                        style={{
                                            position: "absolute",
                                            top: "50%",
                                            right: "20px",
                                            transform: "translateY(-50%)",
                                            border: "none",
                                            background: "transparent",
                                            cursor: "pointer",
                                            padding: 0,
                                            fontSize: "18px",
                                            color: "#666",
                                            lineHeight: 1,
                                        }}
                                    >
                                        ✕
                                    </button>
                                )}

                                {/* Recent Searches */}
                                {searchFocused && input.trim() === "" && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: "100%",
                                            left: 0,
                                            width: "95%",
                                            marginTop: "6px",

                                            background: "#fff",
                                            border: "1px solid #d0d7de",
                                            borderRadius: "3px",
                                            boxShadow: "0 4px 12px rgba(0,0,0,.12)",

                                            maxHeight: "220px",
                                            overflowY: "auto",

                                            zIndex: 1001,

                                        }}
                                    >
                                        <div
                                            style={{
                                                padding: "10px 12px",
                                                fontSize: "12px",
                                                fontWeight: "600",
                                                color: "#6e7781",
                                                borderBottom: "1px solid #e5e7eb",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",

                                            }}
                                        >
                                            <span>Recent Searches</span>

                                            {history.length > 0 && (

                                                <button
                                                    onMouseDown={(e) => {
                                                        e.preventDefault();

                                                        setHistory([]);
                                                        localStorage.removeItem("search-history");
                                                    }}
                                                    style={{
                                                        border: "none",
                                                        background: "transparent",
                                                        color: "#2563eb",
                                                        cursor: "pointer",
                                                        fontSize: "11px",
                                                    }}
                                                >
                                                    <Trash2 size={14} color="black" />
                                                </button>
                                            )}
                                        </div>

                                        {history.length === 0 ? (
                                            <div
                                                style={{
                                                    padding: "14px",
                                                    color: "#777",
                                                    fontSize: "13px",
                                                    textAlign: "center",

                                                }}
                                            >
                                                No recent searches.
                                            </div>
                                        ) : (
                                            history.map((item) => (
                                                <div
                                                    key={`${item.path}-${item.query}`}
                                                    onMouseDown={(e) => {
                                                        e.preventDefault();

                                                        if (location.pathname === item.path) {
                                                            setInput(item.query);
                                                            setSearchQuery(item.query);
                                                        } else {
                                                            sessionStorage.setItem("pending-search", item.query);
                                                            navigate(item.path);
                                                        }

                                                        setSearchFocused(false);
                                                    }}
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                        padding: "10px 12px",
                                                        cursor: "pointer",
                                                        transition: ".15s",
                                                    }}
                                                    onMouseEnter={(e) =>
                                                        (e.currentTarget.style.background = "#f6f8fa")
                                                    }
                                                    onMouseLeave={(e) =>
                                                    (e.currentTarget.style.background =
                                                        "transparent")
                                                    }
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                        }}
                                                    >
                                                        <span>🕘 {item.query}</span>

                                                        <span
                                                            style={{
                                                                fontSize: "11px",
                                                                color: "#777",
                                                            }}
                                                        >
                                                            {item.path}
                                                        </span>
                                                    </div>

                                                    <button
                                                        onMouseDown={(e) => {
                                                            e.stopPropagation();
                                                            e.preventDefault();

                                                            deleteHistoryItem(item.query, item.path);
                                                        }}
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            width: "26px",
                                                            height: "26px",
                                                            border: "none",
                                                            background: "transparent",
                                                            borderRadius: "6px",
                                                            cursor: "pointer",
                                                            color: "#6e7781",
                                                            transition: ".15s",
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.background = "#f3f4f6";
                                                            e.currentTarget.style.color = "#dc2626";
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.background = "transparent";
                                                            e.currentTarget.style.color = "#6e7781";
                                                        }}
                                                    >
                                                        <X size={15} />
                                                    </button>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Match Navigation */}
                            {searchQuery.trim() && (
                                <>
                                    <button
                                        onClick={() => goToMatch(-1)}
                                        disabled={!matches.length}
                                        style={{
                                            width: "18px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        ↑
                                    </button>

                                    <span
                                        style={{
                                            minWidth: "50px",
                                            textAlign: "center",
                                            fontWeight: "400",
                                        }}
                                    >
                                        {matches.length === 0
                                            ? "0/0"
                                            : `${currentMatch + 1}/${matches.length}`}
                                    </span>

                                    <button
                                        onClick={() => goToMatch(1)}
                                        disabled={!matches.length}
                                        style={{
                                            width: "18px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        ↓
                                    </button>
                                </>
                            )}
                        </div>

                    </nav>
                </div>
            </header>

            <main id="page-content">
                {children}
            </main>

            <footer>
                <p>© 2026 Rayyan Digital Space @ https://rayyandigitalspace.vercel.app</p>
            </footer>
        </div>
    );
}