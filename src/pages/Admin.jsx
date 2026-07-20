import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import styles from "./Admin.module.css";

const ADMIN_PASSWORD = "1234";

export default function Admin() {

    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("created_at");
    const [password, setPassword] = useState("");

    const [authenticated, setAuthenticated] = useState(
        sessionStorage.getItem("admin") === "true"
    );

    const [visitors, setVisitors] = useState([]);

    useEffect(() => {

        if (authenticated) {
            loadVisitors();
        }

    }, [authenticated]);

    async function loadVisitors() {

        const { data, error } = await supabase
            .from("visitors")
            .select("*")
            .order("created_at", {
                ascending: false
            });

        if (error) {
            console.error(error);
            return;
        }

        setVisitors(data);

    }

    function login() {

        if (password === ADMIN_PASSWORD) {

            sessionStorage.setItem("admin", "true");
            setAuthenticated(true);

        } else {

            alert("Incorrect Password");

        }

    }

    function logout() {

        sessionStorage.removeItem("admin");
        setAuthenticated(false);
        setPassword("");

    }

    if (!authenticated) {

        return (

            <section className={styles.container}>

                <div className={styles.loginCard}>

                    <h1 className={styles.title}>
                        Portfolio Analytics
                    </h1>

                    <p className={styles.subtitle}>
                        Administrator Login
                    </p>

                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    <button
                        className={styles.button}
                        onClick={login}
                    >
                        Login
                    </button>

                </div>

            </section>

        );

    }

    const desktopUsers =
        visitors.filter(
            v => v.device_type === "Desktop"
        ).length;

    const mobileUsers =
        visitors.filter(
            v => v.device_type === "mobile"
        ).length;

    const darkModeUsers =
        visitors.filter(
            v => v.dark_mode
        ).length;

    const lightModeUsers =
        visitors.length - darkModeUsers;

    const uniqueBrowsers =
        new Set(
            visitors.map(v => v.browser)
        ).size;

    const uniqueOS =
        new Set(
            visitors.map(v => v.os)
        ).size;

    const uniqueLanguages =
        new Set(
            visitors.map(v => v.language)
        ).size;

    const averageCpu =
        visitors.length
            ? (
                visitors.reduce(
                    (sum, v) => sum + (v.cpu_cores || 0),
                    0
                ) / visitors.length
            ).toFixed(1)
            : 0;

    const averageMemory =
        visitors.length
            ? (
                visitors.reduce(
                    (sum, v) => sum + (v.device_memory || 0),
                    0
                ) / visitors.length
            ).toFixed(1)
            : 0;

    const filteredVisitors = visitors

        .filter((visitor) => {

            const value = search.toLowerCase();

            return (

                visitor.browser
                    ?.toLowerCase()
                    .includes(value)

                ||

                visitor.os
                    ?.toLowerCase()
                    .includes(value)

                ||

                visitor.device_type
                    ?.toLowerCase()
                    .includes(value)

                ||

                visitor.current_page
                    ?.toLowerCase()
                    .includes(value)

                ||

                visitor.language
                    ?.toLowerCase()
                    .includes(value)

            );

        })

        .sort((a, b) => {

            if (sortBy === "created_at") {

                return (
                    new Date(b.created_at)
                    -
                    new Date(a.created_at)
                );

            }

            return String(a[sortBy]).localeCompare(
                String(b[sortBy])
            );

        });

    const pageStats = visitors.reduce(
        (acc, visitor) => {

            const page =
                visitor.current_page || "/";

            acc[page] =
                (acc[page] || 0) + 1;

            return acc;

        },
        {}
    );

    const resumeDownloads =
        visitors.filter(
            v => v.downloaded_resume
        ).length;

    const githubClicks =
        visitors.filter(
            v => v.github_clicked
        ).length;

    const linkedinClicks =
        visitors.filter(
            v => v.linkedin_clicked
        ).length;

    const emailClicks =
        visitors.filter(
            v => v.email_clicked
        ).length;

    return (

        <section className={styles.container}>

            <div className={styles.header}>

                <div>

                    <h1 className={styles.title}>
                        Portfolio Analytics
                    </h1>

                    <p className={styles.subtitle}>
                        Visitor Analytics Dashboard
                    </p>

                </div>

                <div className={styles.buttonGroup}>

                    <button
                        className={styles.button}
                        onClick={loadVisitors}
                    >
                        Refresh
                    </button>

                    <button
                        className={styles.button}
                        onClick={logout}
                    >
                        Logout
                    </button>

                </div>

            </div>

            <hr className={styles.divider} />
            <section className={styles.section}>

                <div className={styles.sectionHeader}>
                    <h2 className={styles.heading}>
                        General Statistics
                    </h2>

                    <div className={styles.statsGrid}>

                        <div className={styles.statCard}>
                            <span className={styles.statTitle}>
                                Total Visitors
                            </span>

                            <span className={styles.statValue}>
                                {visitors.length}
                            </span>
                        </div>

                        <div className={styles.statCard}>
                            <span className={styles.statTitle}>
                                Desktop Users
                            </span>

                            <span className={styles.statValue}>
                                {desktopUsers}
                            </span>
                        </div>

                        <div className={styles.statCard}>
                            <span className={styles.statTitle}>
                                Mobile Users
                            </span>

                            <span className={styles.statValue}>
                                {mobileUsers}
                            </span>
                        </div>

                        <div className={styles.statCard}>
                            <span className={styles.statTitle}>
                                Dark Mode
                            </span>

                            <span className={styles.statValue}>
                                {darkModeUsers}
                            </span>
                        </div>

                        <div className={styles.statCard}>
                            <span className={styles.statTitle}>
                                Light Mode
                            </span>

                            <span className={styles.statValue}>
                                {lightModeUsers}
                            </span>
                        </div>

                        <div className={styles.statCard}>
                            <span className={styles.statTitle}>
                                Unique Browsers
                            </span>

                            <span className={styles.statValue}>
                                {uniqueBrowsers}
                            </span>
                        </div>

                        <div className={styles.statCard}>
                            <span className={styles.statTitle}>
                                Operating Systems
                            </span>

                            <span className={styles.statValue}>
                                {uniqueOS}
                            </span>
                        </div>

                        <div className={styles.statCard}>
                            <span className={styles.statTitle}>
                                Languages
                            </span>

                            <span className={styles.statValue}>
                                {uniqueLanguages}
                            </span>
                        </div>

                        <div className={styles.statCard}>
                            <span className={styles.statTitle}>
                                Avg CPU Cores
                            </span>

                            <span className={styles.statValue}>
                                {averageCpu}
                            </span>
                        </div>

                        <div className={styles.statCard}>
                            <span className={styles.statTitle}>
                                Avg Memory
                            </span>

                            <span className={styles.statValue}>
                                {averageMemory} GB
                            </span>
                        </div>

                    </div>
                </div>
            </section>
            <hr className={styles.divider} />

            <div className={styles.analyticsGrid}>

                {/* =======================
        Browsers
    ======================= */}

                <div className={styles.analyticsCard}>

                    <div className={styles.cardHeader}>

                        <h3 className={styles.cardTitle}>
                            Browsers
                        </h3>

                        <p className={styles.cardSubtitle}>
                            Browser usage among visitors
                        </p>

                    </div>

                    <div className={styles.list}>

                        {Object.entries(

                            visitors.reduce((acc, visitor) => {

                                const browser = visitor.browser || "Unknown";

                                acc[browser] = (acc[browser] || 0) + 1;

                                return acc;

                            }, {})

                        )

                            .sort((a, b) => b[1] - a[1])

                            .map(([browser, count]) => (

                                <div
                                    key={browser}
                                    className={styles.listItem}
                                >

                                    <span className={styles.listLabel}>
                                        {browser}
                                    </span>

                                    <span className={styles.badge}>
                                        {count}
                                    </span>

                                </div>

                            ))}

                    </div>

                </div>


                {/* =======================
        Operating Systems
    ======================= */}

                <div className={styles.analyticsCard}>

                    <div className={styles.cardHeader}>

                        <h3 className={styles.cardTitle}>
                            Operating Systems
                        </h3>

                        <p className={styles.cardSubtitle}>
                            Visitor operating systems
                        </p>

                    </div>

                    <div className={styles.list}>

                        {Object.entries(

                            visitors.reduce((acc, visitor) => {

                                const os = visitor.os || "Unknown";

                                acc[os] = (acc[os] || 0) + 1;

                                return acc;

                            }, {})

                        )

                            .sort((a, b) => b[1] - a[1])

                            .map(([os, count]) => (

                                <div
                                    key={os}
                                    className={styles.listItem}
                                >

                                    <span className={styles.listLabel}>
                                        {os}
                                    </span>

                                    <span className={styles.badge}>
                                        {count}
                                    </span>

                                </div>

                            ))}

                    </div>

                </div>


                {/* =======================
        Device Types
    ======================= */}

                <div className={styles.analyticsCard}>

                    <div className={styles.cardHeader}>

                        <h3 className={styles.cardTitle}>
                            Device Types
                        </h3>

                        <p className={styles.cardSubtitle}>
                            Desktop and mobile visitors
                        </p>

                    </div>

                    <div className={styles.list}>

                        {Object.entries(

                            visitors.reduce((acc, visitor) => {

                                const device = visitor.device_type || "Unknown";

                                acc[device] = (acc[device] || 0) + 1;

                                return acc;

                            }, {})

                        )

                            .sort((a, b) => b[1] - a[1])

                            .map(([device, count]) => (

                                <div
                                    key={device}
                                    className={styles.listItem}
                                >

                                    <span className={styles.listLabel}>
                                        {device}
                                    </span>

                                    <span className={styles.badge}>
                                        {count}
                                    </span>

                                </div>

                            ))}

                    </div>

                </div>

            </div>

            <hr className={styles.divider} />


            <h2 className={styles.heading}>
                Visitors
            </h2>

            <div className={styles.toolbar}>

                <input
                    className={styles.input}
                    type="text"
                    placeholder="Search browser, OS, language, page..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />

                <select
                    className={styles.select}
                    value={sortBy}
                    onChange={(e) =>
                        setSortBy(e.target.value)
                    }
                >

                    <option value="created_at">
                        Latest
                    </option>

                    <option value="browser">
                        Browser
                    </option>

                    <option value="os">
                        Operating System
                    </option>

                    <option value="device_type">
                        Device Type
                    </option>

                </select>

            </div>

            <div className={styles.tableContainer}>

                <table className={styles.table}>

                    <thead className={styles.tableHead}>

                        <tr>

                            <th>#</th>

                            <th>Browser</th>

                            <th>Operating System</th>

                            <th>Device</th>

                            <th>Language</th>

                            <th>Timezone</th>

                            <th>Screen</th>

                            <th>CPU</th>

                            <th>Memory</th>

                            <th>Dark</th>

                            <th>Current Page</th>

                            <th>Referrer</th>

                            <th>Visited</th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredVisitors.map((visitor, index) => (

                            <tr
                                key={visitor.id}
                                className={styles.row}
                            >

                                <td>{index + 1}</td>

                                <td>{visitor.browser}</td>

                                <td>{visitor.os}</td>

                                <td>{visitor.device_type}</td>

                                <td>{visitor.language}</td>

                                <td>{visitor.timezone}</td>

                                <td>

                                    {visitor.screen_width}

                                    ×

                                    {visitor.screen_height}

                                </td>

                                <td>

                                    {visitor.cpu_cores ?? "-"}

                                </td>

                                <td>

                                    {visitor.device_memory ?? "-"}

                                    {" "}GB

                                </td>

                                <td>

                                    {visitor.dark_mode
                                        ? "Yes"
                                        : "No"}

                                </td>

                                <td>

                                    {visitor.current_page || "/"}

                                </td>

                                <td>

                                    {visitor.referrer || "Direct"}

                                </td>

                                <td>

                                    {

                                        new Date(
                                            visitor.created_at
                                        ).toLocaleString()

                                    }

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            <hr className={styles.divider} />

            <h2 className={styles.heading}>
                Page Analytics
            </h2>

            <div className={styles.analyticsCard}>

                <table className={styles.table}>

                    <thead className={styles.tableHead}>

                        <tr>

                            <th>Page</th>

                            <th>Views</th>

                        </tr>

                    </thead>

                    <tbody>

                        {Object.entries(pageStats)

                            .sort((a, b) => b[1] - a[1])

                            .map(([page, views]) => (

                                <tr
                                    key={page}
                                    className={styles.row}
                                >

                                    <td>{page}</td>

                                    <td>{views}</td>

                                </tr>

                            ))}

                    </tbody>

                </table>

            </div>

            <hr className={styles.divider} />

            <h2 className={styles.heading}>
                Interaction Analytics
            </h2>

            <div className={styles.statsGrid}>

                <div className={styles.statCard}>

                    <span className={styles.statTitle}>
                        Resume Downloads
                    </span>

                    <span className={styles.statValue}>
                        {resumeDownloads}
                    </span>

                </div>

                <div className={styles.statCard}>

                    <span className={styles.statTitle}>
                        GitHub Clicks
                    </span>

                    <span className={styles.statValue}>
                        {githubClicks}
                    </span>

                </div>

                <div className={styles.statCard}>

                    <span className={styles.statTitle}>
                        LinkedIn Clicks
                    </span>

                    <span className={styles.statValue}>
                        {linkedinClicks}
                    </span>

                </div>

                <div className={styles.statCard}>

                    <span className={styles.statTitle}>
                        Email Clicks
                    </span>

                    <span className={styles.statValue}>
                        {emailClicks}
                    </span>

                </div>

            </div>

        </section>

    );

}



















// import { useEffect, useState } from "react";
// import { supabase } from "../lib/supabase";
// import styles from "./Admin.module.css";

// const ADMIN_PASSWORD = "1234";

// export default function Admin() {
//     const [search, setSearch] = useState("");
//     const [sortBy, setSortBy] = useState("created_at");
//     const [password, setPassword] = useState("");

//     const [authenticated, setAuthenticated] = useState(
//         sessionStorage.getItem("admin") === "true"
//     );

//     const [visitors, setVisitors] = useState([]);

//     useEffect(() => {

//         if (authenticated) {
//             loadVisitors();
//         }

//     }, [authenticated]);

//     async function loadVisitors() {

//         const { data, error } = await supabase
//             .from("visitors")
//             .select("*")
//             .order("created_at", {
//                 ascending: false
//             });

//         if (error) {
//             console.error(error);
//             return;
//         }

//         setVisitors(data);
//     }

//     function login() {

//         if (password === ADMIN_PASSWORD) {

//             sessionStorage.setItem("admin", "true");
//             setAuthenticated(true);

//         }
//         else {

//             alert("Incorrect Password");

//         }

//     }

//     function logout() {

//         sessionStorage.removeItem("admin");
//         setAuthenticated(false);
//         setPassword("");

//     }

//     if (!authenticated) {

//         return (

//             <section>

//                 <h1>Portfolio Analytics</h1>

//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) =>
//                         setPassword(e.target.value)
//                     }
//                 />

//                 <br /><br />

//                 <button onClick={login}>
//                     Login
//                 </button>

//             </section>

//         );

//     }

//     const desktopUsers =
//         visitors.filter(
//             v => v.device_type === "Desktop"
//         ).length;

//     const mobileUsers =
//         visitors.filter(
//             v => v.device_type === "mobile"
//         ).length;

//     const darkModeUsers =
//         visitors.filter(
//             v => v.dark_mode
//         ).length;

//     const lightModeUsers =
//         visitors.length - darkModeUsers;

//     const uniqueBrowsers =
//         new Set(visitors.map(v => v.browser)).size;

//     const uniqueOS =
//         new Set(visitors.map(v => v.os)).size;

//     const uniqueLanguages =
//         new Set(visitors.map(v => v.language)).size;

//     const averageCpu =
//         visitors.length
//             ? (
//                 visitors.reduce(
//                     (sum, v) => sum + (v.cpu_cores || 0),
//                     0
//                 ) / visitors.length
//             ).toFixed(1)
//             : 0;

//     const averageMemory =
//         visitors.length
//             ? (
//                 visitors.reduce(
//                     (sum, v) => sum + (v.device_memory || 0),
//                     0
//                 ) / visitors.length
//             ).toFixed(1)
//             : 0;

//     const filteredVisitors = visitors
//         .filter((visitor) => {

//             const value = search.toLowerCase();

//             return (

//                 visitor.browser?.toLowerCase().includes(value) ||

//                 visitor.os?.toLowerCase().includes(value) ||

//                 visitor.device_type?.toLowerCase().includes(value) ||

//                 visitor.current_page?.toLowerCase().includes(value) ||

//                 visitor.language?.toLowerCase().includes(value)

//             );

//         })

//         .sort((a, b) => {

//             if (sortBy === "created_at") {

//                 return new Date(b.created_at) - new Date(a.created_at);

//             }

//             return String(a[sortBy]).localeCompare(String(b[sortBy]));

//         });

//     const pageStats = visitors.reduce((acc, visitor) => {

//         const page = visitor.current_page || "/";

//         acc[page] = (acc[page] || 0) + 1;

//         return acc;

//     }, {});

//     const resumeDownloads =
//         visitors.filter(v => v.downloaded_resume).length;

//     const githubClicks =
//         visitors.filter(v => v.github_clicked).length;

//     const linkedinClicks =
//         visitors.filter(v => v.linkedin_clicked).length;

//     const emailClicks =
//         visitors.filter(v => v.email_clicked).length;

//     return (

//         <section>

//             <h1>Portfolio Analytics</h1>

//             <button onClick={logout}>
//                 Logout
//             </button>
//             <button onClick={loadVisitors}>
//                 Refresh
//             </button>
//             <hr />

//             <>
//                 <h2>General Statistics</h2>

//                 <p>Total Visitors : {visitors.length}</p>

//                 <p>Desktop Users : {desktopUsers}</p>

//                 <p>Mobile Users : {mobileUsers}</p>

//                 <p>Dark Mode Users : {darkModeUsers}</p>

//                 <p>Light Mode Users : {lightModeUsers}</p>

//                 <hr />

//                 <h2>Browsers</h2>

//                 {Object.entries(

//                     visitors.reduce((acc, visitor) => {

//                         const browser = visitor.browser || "Unknown";

//                         acc[browser] = (acc[browser] || 0) + 1;

//                         return acc;

//                     }, {})

//                 )
//                     .sort((a, b) => b[1] - a[1])
//                     .map(([browser, count]) => (

//                         <p key={browser}>
//                             {browser} : {count}
//                         </p>

//                     ))}

//                 <hr />

//                 <h2>Operating Systems</h2>

//                 {Object.entries(

//                     visitors.reduce((acc, visitor) => {

//                         const os = visitor.os || "Unknown";

//                         acc[os] = (acc[os] || 0) + 1;

//                         return acc;

//                     }, {})

//                 )
//                     .sort((a, b) => b[1] - a[1])
//                     .map(([os, count]) => (

//                         <p key={os}>
//                             {os} : {count}
//                         </p>

//                     ))}

//                 <hr />

//                 <h2>Device Types</h2>

//                 {Object.entries(

//                     visitors.reduce((acc, visitor) => {

//                         const device = visitor.device_type || "Desktop";

//                         acc[device] = (acc[device] || 0) + 1;

//                         return acc;

//                     }, {})

//                 )
//                     .sort((a, b) => b[1] - a[1])
//                     .map(([device, count]) => (

//                         <p key={device}>
//                             {device} : {count}
//                         </p>

//                     ))}

//             </>

//             <hr />

//             <h2>Visitors</h2>

//             <input
//                 type="text"
//                 placeholder="Search..."
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//             />

//             <select
//                 value={sortBy}
//                 onChange={(e) => setSortBy(e.target.value)}
//             >

//                 <option value="created_at">
//                     Latest
//                 </option>

//                 <option value="browser">
//                     Browser
//                 </option>

//                 <option value="os">
//                     Operating System
//                 </option>

//                 <option value="device_type">
//                     Device
//                 </option>

//             </select>

//             <br />
//             <br />

//             <table border="1" cellPadding="8">

//                 <thead>

//                     <tr>

//                         <th>#</th>

//                         <th>Browser</th>

//                         <th>OS</th>

//                         <th>Device</th>

//                         <th>Language</th>

//                         <th>Timezone</th>

//                         <th>Screen</th>

//                         <th>CPU</th>

//                         <th>Memory</th>

//                         <th>Dark</th>

//                         <th>Page</th>

//                         <th>Referrer</th>

//                         <th>Visited</th>

//                     </tr>

//                 </thead>

//                 <tbody>

//                     {filteredVisitors.map((visitor, index) => (

//                         <tr key={visitor.id}>

//                             <td>{index + 1}</td>

//                             <td>{visitor.browser}</td>

//                             <td>{visitor.os}</td>

//                             <td>{visitor.device_type}</td>

//                             <td>{visitor.language}</td>

//                             <td>{visitor.timezone}</td>

//                             <td>
//                                 {visitor.screen_width} × {visitor.screen_height}
//                             </td>

//                             <td>{visitor.cpu_cores}</td>

//                             <td>
//                                 {visitor.device_memory ?? "-"} GB
//                             </td>

//                             <td>
//                                 {visitor.dark_mode ? "Yes" : "No"}
//                             </td>

//                             <td>{visitor.current_page}</td>

//                             <td>
//                                 {visitor.referrer || "Direct"}
//                             </td>

//                             <td>
//                                 {new Date(visitor.created_at)
//                                     .toLocaleString()}
//                             </td>

//                         </tr>

//                     ))}

//                 </tbody>

//             </table>
//             <hr />

//             <h2>Page Analytics</h2>

//             <table border="1" cellPadding="8">

//                 <thead>

//                     <tr>

//                         <th>Page</th>
//                         <th>Views</th>

//                     </tr>

//                 </thead>

//                 <tbody>

//                     {Object.entries(pageStats)

//                         .sort((a, b) => b[1] - a[1])

//                         .map(([page, views]) => (

//                             <tr key={page}>

//                                 <td>{page}</td>

//                                 <td>{views}</td>

//                             </tr>

//                         ))}

//                 </tbody>

//             </table>

//             <p>Unique Browsers : {uniqueBrowsers}</p>

//             <p>Unique Operating Systems : {uniqueOS}</p>

//             <p>Unique Languages : {uniqueLanguages}</p>

//             <p>Average CPU Cores : {averageCpu}</p>

//             <p>Average Device Memory : {averageMemory} GB</p>
//             <hr />

//             <h2>Interaction Analytics</h2>

//             <p>Resume Downloads : {resumeDownloads}</p>

//             <p>GitHub Clicks : {githubClicks}</p>

//             <p>LinkedIn Clicks : {linkedinClicks}</p>

//             <p>Email Clicks : {emailClicks}</p>
//         </section>

//     );

// }