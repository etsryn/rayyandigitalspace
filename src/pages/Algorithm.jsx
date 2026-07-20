import { useState } from "react";
import styles from "./Algorithm.module.css";
import {
  Code2,
  Search,
  SlidersHorizontal,
  Share2,
  Grid2x2,
  Route,
  GitBranch,
  Boxes,
  TextCursorInput,
  Puzzle,
  Sparkles,
  Brain,
  Rocket,
  Wrench,
} from "lucide-react";

const complexityGuide = [
  { color: "#22c55e", notation: "O(1)", name: "Constant" },
  { color: "#14b8a6", notation: "O(log n)", name: "Logarithmic" },
  { color: "#3b82f6", notation: "O(√n)", name: "Square Root" },
  { color: "#84cc16", notation: "O(n)", name: "Linear" },
  { color: "#f97316", notation: "O(n log n)", name: "Linearithmic" },
  { color: "#ef4444", notation: "O(n²)", name: "Quadratic" },
  { color: "#ec4899", notation: "O(2ⁿ)", name: "Exponential" },
];

const cheatSheet = [
  { notation: "O(1)", name: "Constant", example: "Access array element" },
  { notation: "O(log n)", name: "Logarithmic", example: "Binary Search" },
  { notation: "O(√n)", name: "Square Root", example: "Jump Search" },
  { notation: "O(n)", name: "Linear", example: "Linear Search" },
  { notation: "O(n log n)", name: "Linearithmic", example: "Merge Sort" },
  { notation: "O(n²)", name: "Quadratic", example: "Bubble Sort" },
  { notation: "O(2ⁿ)", name: "Exponential", example: "N-Queens" },
];

const stats = [
  { label: "Implementation", value: 100 },
  { label: "Complexity Analysis", value: 100 },
  { label: "Problem Solving", value: 100 },
  { label: "Optimization", value: 90 },
];

const approach = [
  {
    icon: Brain,
    title: "Understand",
    desc: "Learn the intuition behind the algorithm.",
  },
  {
    icon: Wrench,
    title: "Analyze",
    desc: "Prove correctness and compute complexity.",
  },
  {
    icon: Code2,
    title: "Implement",
    desc: "Code it from scratch in C++.",
  },
  {
    icon: Sparkles,
    title: "Optimize",
    desc: "Refine for performance and edge cases.",
  },
  {
    icon: Rocket,
    title: "Apply",
    desc: "Solve real problems and push boundaries.",
  },
];

const dataStructures = [
  "Arrays",
  "Strings",
  "Trees",
  "Hash Tables",
  "Stacks / Queues",
  "Heaps",
  "Graphs",
  "Disjoint Set Union",
];

const categories = [
  {
    id: "01",
    icon: Search,
    title: "Searching Algorithms",
    items: [
      ["Linear Search", "O(n)"],
      ["Binary Search", "O(log n)"],
      ["Jump Search", "O(√n)"],
      ["Interpolation Search", "O(log log n)"],
      ["Exponential Search", "O(log n)"],
      ["Fibonacci Search", "O(log n)"],
      ["Ternary Search", "O(log n)"],
    ],
  },
  {
    id: "02",
    icon: SlidersHorizontal,
    title: "Sorting Algorithms",
    items: [
      ["Bubble Sort", "O(n²)"],
      ["Selection Sort", "O(n²)"],
      ["Insertion Sort", "O(n²)"],
      ["Merge Sort", "O(n log n)"],
      ["Quick Sort", "O(n log n)"],
      ["Heap Sort", "O(n log n)"],
      ["Counting Sort", "O(n + k)"],
      ["Radix Sort", "O(nk)"],
      ["Bucket Sort", "O(n + k)"],
      ["Shell Sort", "O(n^1.5)"],
      ["Tim Sort", "O(n log n)"],
    ],
  },
  {
    id: "03",
    icon: Share2,
    title: "Graph Algorithms",
    items: [
      ["Breadth First Search (BFS)", "O(V + E)"],
      ["Depth First Search (DFS)", "O(V + E)"],
      ["Dijkstra's Algorithm", "O((V + E) log V)"],
      ["Bellman-Ford Algorithm", "O(VE)"],
      ["Floyd-Warshall Algorithm", "O(V³)"],
      ["Prim's Algorithm (MST)", "O(E log V)"],
      ["Kruskal's Algorithm (MST)", "O(E log E)"],
      ["Topological Sorting", "O(V + E)"],
      ["A* Search", "O(E log V)"],
    ],
  },
  {
    id: "04",
    icon: Grid2x2,
    title: "Dynamic Programming",
    items: [
      ["0/1 Knapsack", ""],
      ["Unbounded Knapsack", ""],
      ["Longest Common Subsequence", ""],
      ["Longest Increasing Subsequence", ""],
      ["Matrix Chain Multiplication", ""],
      ["Edit Distance", ""],
      ["Coin Change", ""],
      ["Rod Cutting", ""],
      ["Subset Sum", ""],
      ["Palindrome Partitioning", ""],
    ],
  },
  {
    id: "05",
    icon: Route,
    title: "Greedy Algorithms",
    items: [
      ["Activity Selection", ""],
      ["Fractional Knapsack", ""],
      ["Huffman Coding", ""],
      ["Minimum Spanning Tree", ""],
      ["Dijkstra's (Greedy)", ""],
    ],
  },
  {
    id: "06",
    icon: GitBranch,
    title: "Divide & Conquer",
    items: [
      ["Merge Sort", ""],
      ["Quick Sort", ""],
      ["Binary Search", ""],
      ["Strassen's Matrix Multiplication", ""],
      ["Closest Pair of Points", ""],
    ],
  },
  {
    id: "07",
    icon: Boxes,
    title: "Backtracking",
    items: [
      ["N-Queens Problem", ""],
      ["Sudoku Solver", ""],
      ["Graph Coloring", ""],
      ["Hamiltonian Cycle", ""],
      ["Subset Generations", ""],
      ["Word Search", ""],
    ],
  },
  {
    id: "08",
    icon: TextCursorInput,
    title: "String Algorithms",
    items: [
      ["Knuth-Morris-Pratt (KMP)", ""],
      ["Rabin-Karp", ""],
      ["Z Algorithm", ""],
      ["Trie (Prefix Tree)", ""],
      ["Suffix Array", ""],
      ["Manacher's Algorithm", ""],
    ],
  },
  {
    id: "09",
    icon: Puzzle,
    title: "Miscellaneous",
    items: [
      ["Bit Manipulation", ""],
      ["Sliding Window", ""],
      ["Two Pointer Technique", ""],
      ["Mo's Algorithm", ""],
      ["Randomized Algorithms", ""],
    ],
  },
  {
    id: "10",
    icon: Sparkles,
    title: "Advanced Topics",
    items: [
      ["Segment Tree", ""],
      ["Fenwick Tree (BIT)", ""],
      ["Sparse Table", ""],
      ["Heavy Light Decomposition", ""],
      ["Disjoint Set Union (DSU)", ""],
    ],
  },
];

const languages = [
  { name: "C++", color: "#00599C" },
  { name: "Python", color: "#3776AB" },
  { name: "Java", color: "#EA2D2E" },
  { name: "Rust", color: "#000000" },
];

export default function Algorithm() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* ---------- Header / Breadcrumb ---------- */}
        <div className={styles.breadcrumb}>
          <Code2 size={16} />
          <span>ALGORITHMS</span>
        </div>

        {/* ---------- Hero ---------- */}
        <section className={styles.hero}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>
              Algorithmic
              <br />
              <span className={styles.heroTitleAccent}>Intelligence.</span>
            </h1>
            <p className={styles.heroDesc}>
              A curated collection of fundamental and advanced algorithms
              that form the backbone of efficient problem solving and
              high-performance software engineering.
            </p>
          </div>

          <div className={styles.quoteCard}>
            <div className={styles.quoteCardHeader}>
              <Code2 size={16} />
              <span>What Drives Me</span>
            </div>
            <p className={styles.quoteCardText}>
              I don't just use algorithms, I study their behavior, prove
              their complexity, and implement them from scratch to
              understand every bit.
            </p>
            <span className={styles.signature}>Rayyan Ashraf</span>
          </div>
        </section>

        {/* ---------- Stat Cards ---------- */}
        <section className={styles.statGrid}>
          <div className={styles.statCard}>
            <span className={styles.statValue}>50+</span>
            <span className={styles.statLabel}>Algorithms Implemented</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>12</span>
            <span className={styles.statLabel}>Categories Covered</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>8</span>
            <span className={styles.statLabel}>Complexity Classes Mastered</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>100%</span>
            <span className={styles.statLabel}>Implemented From Scratch</span>
          </div>
        </section>

        {/* ---------- Main Grid: Categories + Sidebar ---------- */}
        <div className={styles.mainGrid}>
          {/* ----- Left: Category Cards ----- */}
          <div className={styles.categoryGrid}>
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isExpanded = expanded[cat.id];
              const visibleItems = isExpanded
                ? cat.items
                : cat.items.slice(0, 7);
              const hasMore = cat.items.length > 7;

              return (
                <div key={cat.id} className={styles.categoryCard}>
                  <div className={styles.categoryHeader}>
                    <div className={styles.categoryHeaderLeft}>
                      <Icon size={16} />
                      <span>{cat.title.toUpperCase()}</span>
                    </div>
                    <span className={styles.dotsIcon}>⋮⋮</span>
                  </div>

                  <ul className={styles.categoryList}>
                    {visibleItems.map(([name, complexity]) => (
                      <li key={name} className={styles.categoryItem}>
                        <span className={styles.categoryItemBullet}>•</span>
                        <span className={styles.categoryItemName}>{name}</span>
                        {complexity && (
                          <span className={styles.categoryItemComplexity}>
                            {complexity}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.categoryFooter}>
                    {hasMore ? (
                      <button
                        className={styles.showMoreBtn}
                        onClick={() => toggleExpand(cat.id)}
                      >
                        {isExpanded
                          ? "Show less"
                          : `+${cat.items.length - 7} more`}
                      </button>
                    ) : (
                      <span />
                    )}
                    <span className={styles.categoryNumber}>{cat.id}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ----- Right: Sidebar ----- */}
          <aside className={styles.sidebar}>
            {/* Complexity Guide */}
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>COMPLEXITY GUIDE</h3>
              <ul className={styles.complexityList}>
                {complexityGuide.map((c) => (
                  <li key={c.notation} className={styles.complexityRow}>
                    <span
                      className={styles.complexityDot}
                      style={{ backgroundColor: c.color }}
                    />
                    <span className={styles.complexityNotation}>
                      {c.notation}
                    </span>
                    <span className={styles.complexityName}>{c.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* My Approach */}
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitleBlue}>MY APPROACH</h3>
              <ul className={styles.approachList}>
                {approach.map((step) => {
                  const Icon = step.icon;
                  return (
                    <li key={step.title} className={styles.approachRow}>
                      <span className={styles.approachIconWrap}>
                        <Icon size={16} />
                      </span>
                      <div>
                        <p className={styles.approachTitle}>{step.title}</p>
                        <p className={styles.approachDesc}>{step.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Languages */}
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitleBlue}>LANGUAGES</h3>
              <div className={styles.languageGrid}>
                {languages.map((lang) => (
                  <div key={lang.name} className={styles.languageItem}>
                    <div
                      className={styles.languageIconCircle}
                      style={{ color: lang.color }}
                    >
                      {lang.name[0]}
                    </div>
                    <span className={styles.languageName}>{lang.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Structures Used */}
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitleBlue}>DATA STRUCTURES USED</h3>
              <div className={styles.dsGrid}>
                {dataStructures.map((ds) => (
                  <span key={ds} className={styles.dsChip}>
                    <span className={styles.dsChipIcon}>▤</span>
                    {ds}
                  </span>
                ))}
              </div>
            </div>

            {/* Complexity Cheat Sheet */}
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>COMPLEXITY CHEAT SHEET</h3>
              <table className={styles.cheatTable}>
                <thead>
                  <tr>
                    <th>Notation</th>
                    <th>Name</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  {cheatSheet.map((row) => (
                    <tr key={row.notation}>
                      <td className={styles.cheatNotation}>{row.notation}</td>
                      <td>{row.name}</td>
                      <td>{row.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Technical Stats */}
            <div className={styles.sidebarCard}>
              <h3 className={styles.sidebarTitle}>TECHNICAL STATS</h3>
              <div className={styles.statsBars}>
                {stats.map((s) => (
                  <div key={s.label} className={styles.statBarRow}>
                    <div className={styles.statBarLabelRow}>
                      <span>{s.label}</span>
                      <span>{s.value}%</span>
                    </div>
                    <div className={styles.statBarTrack}>
                      <div
                        className={styles.statBarFill}
                        style={{ width: `${s.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* ---------- Closing Quote ---------- */}
        <section className={styles.closingQuote}>
          <span className={styles.quoteMark}>"</span>
          <p className={styles.closingQuoteText}>
            Algorithms are not magic. They are logic, creativity, and
            mathematics expressed as code.
          </p>
          <span className={styles.closingQuoteAuthor}>— Me</span>
        </section>
      </div>
    </main>
  );
}