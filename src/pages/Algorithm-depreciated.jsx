import styles from "./Algorithm.module.css";

import {
    FaCode,
    FaSearch,
    FaSortAmountDown,
    FaProjectDiagram,
    FaBrain,
    FaCodeBranch,
    FaFont,
    FaMicrochip,
    FaChartLine,
    FaClock,
    FaLayerGroup,
    FaDatabase,
    FaCheckCircle
} from "react-icons/fa";

/* ===========================================================
   PAGE DATA
=========================================================== */

const stats = [
    { value: "52+", label: "Algorithms", sub: "Implemented" },
    { value: "10", label: "Categories", sub: "Covered" },
    { value: "100%", label: "From", sub: "Scratch" },
    { value: "8", label: "Complexity", sub: "Classes" }
];

const complexityGuide = [
    { notation: "O(1)", title: "Constant" },
    { notation: "O(log n)", title: "Logarithmic" },
    { notation: "O(√n)", title: "Square Root" },
    { notation: "O(n)", title: "Linear" },
    { notation: "O(n log n)", title: "Linearithmic" },
    { notation: "O(n²)", title: "Quadratic" },
    { notation: "O(2ⁿ)", title: "Exponential" }
];

const engineeringMetrics = [

    {
        label: "Implementation Coverage",
        value: "100%",
        description: "Algorithms implemented manually without STL."
    },

    {
        label: "Primary Language",
        value: "C++",
        description: "Modern C++ with focus on STL understanding."
    },

    {
        label: "Testing",
        value: "Edge Cases",
        description: "Boundary conditions and worst-case verification."
    },

    {
        label: "Optimization",
        value: "Time + Space",
        description: "Complexity analysis for every implementation."
    }

];

const implementationWorkflow = [

    "Understand the theoretical foundation",

    "Design brute-force approach",

    "Optimize complexity",

    "Implement from scratch",

    "Test edge cases",

    "Compare recursive & iterative variants",

    "Document observations"

];

const algorithmCategories = [

    {
        id: "01",
        height: "tall",
        icon: <FaSearch />,
        title: "Searching",
        type: "FOUNDATIONAL",

        summary: {
            algorithms: 7,
            complexity: "O(log n)",
            status: "100%"
        },

        algorithms: [
            { name: "Linear Search", complexity: "O(n)", space: "O(1)", badge: "Fundamental" },
            { name: "Binary Search", complexity: "O(log n)", space: "O(1)", badge: "Optimal" },
            { name: "Jump Search", complexity: "O(√n)", space: "O(1)", badge: "Indexed" },
            { name: "Interpolation Search", complexity: "O(log log n)", space: "O(1)", badge: "Adaptive" },
            { name: "Exponential Search", complexity: "O(log n)", space: "O(1)", badge: "Hybrid" },
            { name: "Fibonacci Search", complexity: "O(log n)", space: "O(1)", badge: "Sequence" },
            { name: "Ternary Search", complexity: "O(log₃n)", space: "O(1)", badge: "Divide" }
        ]
    },

    {
        id: "02",
        height: "large",
        icon: <FaSortAmountDown />,
        title: "Sorting",
        type: "CORE",

        summary: {
            algorithms: 11,
            complexity: "O(n log n)",
            status: "100%"
        },

        algorithms: [
            { name: "Bubble Sort", complexity: "O(n²)", space: "O(1)", badge: "Educational" },
            { name: "Selection Sort", complexity: "O(n²)", space: "O(1)", badge: "In-place" },
            { name: "Insertion Sort", complexity: "O(n²)", space: "O(1)", badge: "Adaptive" },
            { name: "Merge Sort", complexity: "O(n log n)", space: "O(n)", badge: "Stable" },
            { name: "Quick Sort", complexity: "O(n log n)", space: "O(log n)", badge: "Production" },
            { name: "Heap Sort", complexity: "O(n log n)", space: "O(1)", badge: "Heap" },
            { name: "Counting Sort", complexity: "O(n+k)", space: "O(k)", badge: "Integer" },
            { name: "Radix Sort", complexity: "O(d(n+k))", space: "O(n+k)", badge: "Digit" },
            { name: "Bucket Sort", complexity: "O(n)", space: "O(n)", badge: "Distribution" }
        ]
    },

    {
        id: "03",
        height: "medium",
        icon: <FaProjectDiagram />,
        title: "Graph",
        type: "ADVANCED",

        summary: {
            algorithms: 9,
            complexity: "O(V+E)",
            status: "85%"
        },

        algorithms: [
            { name: "BFS", complexity: "O(V+E)", space: "O(V)", badge: "Traversal" },
            { name: "DFS", complexity: "O(V+E)", space: "O(V)", badge: "Traversal" },
            { name: "Dijkstra", complexity: "O(E logV)", space: "O(V)", badge: "Shortest Path" },
            { name: "Bellman Ford", complexity: "O(VE)", space: "O(V)", badge: "Negative Edge" },
            { name: "Prim", complexity: "O(E logV)", space: "O(V)", badge: "MST" },
            { name: "Kruskal", complexity: "O(E logE)", space: "O(V)", badge: "Union Find" }
        ]
    },

    {
        id: "04",
        height: "small",
        icon: <FaBrain />,
        title: "Dynamic Programming",
        type: "OPTIMIZATION",

        summary: {
            algorithms: 8,
            complexity: "State Based",
            status: "70%"
        },

        algorithms: [
            { name: "0/1 Knapsack", complexity: "O(nW)", space: "O(W)", badge: "Classic" },
            { name: "LCS", complexity: "O(n²)", space: "O(n²)", badge: "Sequence" },
            { name: "LIS", complexity: "O(n logn)", space: "O(n)", badge: "Optimization" },
            { name: "Matrix Chain", complexity: "O(n³)", space: "O(n²)", badge: "Partition" }
        ]
    },

    {
        id: "05",
        height: "small",
        icon: <FaCodeBranch />,
        title: "Greedy",
        type: "PARADIGM",

        summary: {
            algorithms: 6,
            complexity: "Problem Based",
            status: "90%"
        },

        algorithms: [
            { name: "Activity Selection", complexity: "O(n logn)", space: "O(1)", badge: "Scheduling" },
            { name: "Fractional Knapsack", complexity: "O(n logn)", space: "O(1)", badge: "Optimization" },
            { name: "Huffman Coding", complexity: "O(n logn)", space: "O(n)", badge: "Compression" }
        ]
    },

    {
        id: "06",
        height: "medium",
        icon: <FaFont />,
        title: "String",
        type: "TEXT",

        summary: {
            algorithms: 7,
            complexity: "Linear",
            status: "60%"
        },

        algorithms: [
            { name: "KMP", complexity: "O(n+m)", space: "O(m)", badge: "Pattern" },
            { name: "Rabin Karp", complexity: "O(n+m)", space: "O(1)", badge: "Hash" },
            { name: "Z Algorithm", complexity: "O(n)", space: "O(n)", badge: "Prefix" },
            { name: "Trie", complexity: "O(L)", space: "O(ALPHABET)", badge: "Dictionary" }
        ]
    },

    {
        id: "07",
        height: "small",
        icon: <FaLayerGroup />,
        title: "Divide & Conquer",

        summary: {
            algorithms: 5,
            complexity: "Recursive",
            status: "100%"
        },

        algorithms: [
            { name: "Merge", complexity: "O(n logn)", space: "O(n)", badge: "Stable" },
            { name: "Quick", complexity: "O(n logn)", space: "O(logn)", badge: "Partition" },
            { name: "Binary Search", complexity: "O(logn)", space: "O(1)", badge: "Recursive" }
        ]
    },

    {
        id: "08",
        height: "small",
        icon: <FaMicrochip />,
        title: "Bit Manipulation",

        summary: {
            algorithms: 8,
            complexity: "O(1)",
            status: "80%"
        },

        algorithms: [
            { name: "Set Bit", complexity: "O(1)", space: "O(1)", badge: "Bitwise" },
            { name: "Clear Bit", complexity: "O(1)", space: "O(1)", badge: "Bitwise" },
            { name: "Toggle Bit", complexity: "O(1)", space: "O(1)", badge: "Bitwise" },
            { name: "Power of Two", complexity: "O(1)", space: "O(1)", badge: "Optimization" }
        ]
    },

    {
        id: "09",
        height: "medium",
        icon: <FaDatabase />,
        title: "Data Structures",

        summary: {
            algorithms: 12,
            complexity: "Mixed",
            status: "100%"
        },

        algorithms: [
            { name: "Stack", complexity: "O(1)", space: "O(n)", badge: "LIFO" },
            { name: "Queue", complexity: "O(1)", space: "O(n)", badge: "FIFO" },
            { name: "Deque", complexity: "O(1)", space: "O(n)", badge: "Double Ended" },
            { name: "Priority Queue", complexity: "O(logn)", space: "O(n)", badge: "Heap" },
            { name: "Disjoint Set", complexity: "α(n)", space: "O(n)", badge: "Union Find" }
        ]
    },

    {
        id: "10",
        height: "large",
        icon: <FaChartLine />,
        title: "Advanced Topics",

        summary: {
            algorithms: 14,
            complexity: "Mixed",
            status: "40%"
        },

        algorithms: [
            { name: "Segment Tree", complexity: "O(logn)", space: "O(4n)", badge: "Range Query" },
            { name: "Fenwick Tree", complexity: "O(logn)", space: "O(n)", badge: "BIT" },
            { name: "Sparse Table", complexity: "O(1)", space: "O(n logn)", badge: "RMQ" },
            { name: "Mo's Algorithm", complexity: "O((n+q)√n)", space: "O(n)", badge: "Offline" },
            { name: "Suffix Array", complexity: "O(n logn)", space: "O(n)", badge: "String" },
            { name: "Suffix Tree", complexity: "O(n)", space: "O(n)", badge: "Advanced" }
        ]
    }

];

/* ===========================================================
   COMPONENT
=========================================================== */

export default function Algorithm() {

    return (

        <main className={styles.page}>

            <div className={styles.layout}>


                {/* ======================================================
LEFT
====================================================== */}

                <section className={styles.main}>


                    <header className={styles.hero}>

                        <div className={styles.heroTop}>

                            <span className={styles.badge}>

                                <FaCode />

                                Algorithm Dashboard

                            </span>

                        </div>

                        <h1>

                            Algorithmic

                            <span>

                                Intelligence

                            </span>

                        </h1>

                        <p>

                            A curated engineering dashboard documenting
                            algorithms that I have implemented, analyzed,
                            optimized and continuously refined while
                            building a strong foundation in computer science
                            and systems programming.

                        </p>

                    </header>



                    <section className={styles.stats}>

                        {

                            stats.map((item) => (

                                <article
                                    className={styles.statCard}
                                    key={item.label}
                                >

                                    <h2>

                                        {item.value}

                                    </h2>

                                    <h3>

                                        {item.label}

                                    </h3>

                                    <p>

                                        {item.sub}

                                    </p>

                                </article>

                            ))

                        }

                    </section>


                    <section className={styles.featuredPanel}>

                        <div className={styles.featuredLeft}>

                            <span>

                                FEATURED IMPLEMENTATION

                            </span>

                            <h2>

                                Binary Search

                            </h2>

                            <p>

                                Implemented recursively and iteratively from scratch,
                                covering boundary conditions, overflow-safe midpoint
                                calculation, STL comparison and integration inside
                                Exponential Search.

                            </p>

                        </div>

                        <div className={styles.featuredRight}>

                            <div>

                                <strong>

                                    O(log n)

                                </strong>

                                <span>

                                    Time Complexity

                                </span>

                            </div>

                            <div>

                                <strong>

                                    O(1)

                                </strong>

                                <span>

                                    Space

                                </span>

                            </div>

                            <div>

                                <strong>

                                    2

                                </strong>

                                <span>

                                    Variants

                                </span>

                            </div>

                            <div>

                                <strong>

                                    ✓

                                </strong>

                                <span>

                                    Verified

                                </span>

                            </div>

                        </div>

                    </section>
                    <section className={styles.metricsRibbon}>

                        {

                            engineeringMetrics.map(metric => (

                                <div
                                    key={metric.label}
                                    className={styles.metricCard}
                                >

                                    <p>

                                        {metric.label}

                                    </p>

                                    <h2>

                                        {metric.value}

                                    </h2>

                                    <span>

                                        {metric.description}

                                    </span>

                                </div>

                            ))

                        }

                    </section>
                    <section className={styles.dashboardGrid}>


                        {

                            algorithmCategories.map(category => (

                                <article
                                    key={category.id}
                                    className={`${styles.algorithmCard} ${styles[category.height]}`}
                                >

                                    <div className={styles.cardTop}>

                                        <div>

                                            <div className={styles.categoryType}>

                                                {category.type}

                                            </div>

                                            <h2>

                                                {category.icon}

                                                {category.title}

                                            </h2>

                                        </div>

                                        <div className={styles.cardIndex}>

                                            {category.id}

                                        </div>

                                    </div>


                                    <div className={styles.cardSummary}>

                                        <div>

                                            <strong>

                                                {category.summary.algorithms}

                                            </strong>

                                            <span>

                                                Algorithms

                                            </span>

                                        </div>

                                        <div>

                                            <strong>

                                                {category.summary.complexity}

                                            </strong>

                                            <span>

                                                Typical

                                            </span>

                                        </div>

                                    </div>


                                    <div className={styles.algorithmList}>

                                        {

                                            category.algorithms.map(algo => (

                                                <div
                                                    key={algo.name}
                                                    className={styles.algorithmRow}
                                                >

                                                    <div className={styles.algorithmInfo}>

                                                        <h4>

                                                            {algo.name}

                                                        </h4>

                                                        <div className={styles.algorithmMeta}>

                                                            <span className={styles.badgeChip}>

                                                                {algo.badge}

                                                            </span>

                                                            <span>

                                                                Space {algo.space}

                                                            </span>

                                                        </div>

                                                    </div>

                                                    <div className={styles.algorithmRight}>

                                                        <strong>

                                                            {algo.complexity}

                                                        </strong>

                                                    </div>

                                                </div>

                                            ))

                                        }

                                    </div>

                                    <div className={styles.cardFooter}>

                                        <div>

                                            <FaCheckCircle />

                                            Implemented

                                        </div>

                                        <div>

                                            Recursive

                                        </div>

                                        <div>

                                            Iterative

                                        </div>

                                        <div>

                                            Edge Cases

                                        </div>

                                    </div>
                                    <div className={styles.cardStatus}>

                                        <div>

                                            <span>

                                                Coverage

                                            </span>

                                            <strong>

                                                {category.summary.status}

                                            </strong>

                                        </div>

                                        <div>

                                            <span>

                                                Algorithms

                                            </span>

                                            <strong>

                                                {category.summary.algorithms}

                                            </strong>

                                        </div>

                                        <div>

                                            <span>

                                                Typical

                                            </span>

                                            <strong>

                                                {category.summary.complexity}

                                            </strong>

                                        </div>

                                    </div>
                                </article>

                            ))

                        }

                    </section>
                    <section className={styles.workflowPanel}>

                        <div className={styles.workflowHeader}>

                            <h2>

                                Engineering Workflow

                            </h2>

                            <p>

                                Every algorithm follows a consistent implementation and validation process.

                            </p>

                        </div>

                        <div className={styles.workflowGrid}>

                            {

                                implementationWorkflow.map(step => (

                                    <div
                                        key={step}
                                        className={styles.workflowCard}
                                    >

                                        <div className={styles.workflowCircle}>

                                            <FaCheckCircle />

                                        </div>

                                        <h4>

                                            {step}

                                        </h4>

                                    </div>

                                ))

                            }

                        </div>

                    </section>

                </section>





                {/* ======================================================
SIDEBAR
====================================================== */}

                <aside className={styles.sidebar}>


                    <section className={styles.sideCard}>

                        <h3>

                            Engineering Philosophy

                        </h3>

                        <p>

                            Understanding an algorithm means more than
                            knowing its complexity. It means understanding
                            its trade-offs, implementation details,
                            edge cases, cache behaviour and practical
                            performance.

                        </p>

                    </section>



                    <section className={styles.sideCard}>

                        <h3>

                            Complexity Atlas

                        </h3>

                        {

                            complexityGuide.map(item => (

                                <div
                                    key={item.notation}
                                    className={styles.complexityRow}
                                >

                                    <strong>

                                        {item.notation}

                                    </strong>

                                    <span>

                                        {item.title}

                                    </span>

                                </div>

                            ))

                        }

                    </section>



                    <section className={styles.sideCard}>

                        <h3>

                            Current Focus

                        </h3>

                        <ul>

                            <li>Advanced Data Structures</li>

                            <li>Graph Algorithms</li>

                            <li>Dynamic Programming</li>

                            <li>Competitive Programming</li>

                            <li>High Performance Computing</li>

                            <li>Quantitative Development</li>

                        </ul>

                    </section>
                    <section className={styles.sideCard}>

                        <h3>

                            Engineering Notes

                        </h3>

                        <div className={styles.note}>

                            <FaClock />

                            <span>

                                Every implementation is handwritten before STL comparison.

                            </span>

                        </div>

                        <div className={styles.note}>

                            <FaBrain />

                            <span>

                                Complexity is analyzed before optimization.

                            </span>

                        </div>

                        <div className={styles.note}>

                            <FaChartLine />

                            <span>

                                Focus is on practical engineering rather than memorization.

                            </span>

                        </div>

                    </section>
                    <section className={styles.sideCard}>

                        <h3>

                            Technology Stack

                        </h3>

                        <div className={styles.techStack}>

                            <span>C++17</span>

                            <span>STL</span>

                            <span>DSA</span>

                            <span>Competitive Programming</span>

                            <span>Problem Solving</span>

                            <span>Algorithms</span>

                            <span>Complexity Analysis</span>

                            <span>Memory Optimization</span>

                        </div>

                    </section>
                </aside>

            </div>
            <section className={styles.overviewPanel}>

                <div>

                    <h2>

                        52+

                    </h2>

                    <p>

                        Algorithms Implemented

                    </p>

                </div>

                <div>

                    <h2>

                        10

                    </h2>

                    <p>

                        Core Categories

                    </p>

                </div>

                <div>

                    <h2>

                        100%

                    </h2>

                    <p>

                        Manual Implementations

                    </p>

                </div>

                <div>

                    <h2>

                        O(1) → O(2ⁿ)

                    </h2>

                    <p>

                        Complexities Studied

                    </p>

                </div>

            </section>
        </main>

    );

}