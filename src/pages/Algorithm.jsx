import styles from "./Algorithm.module.css";

export default function Algorithm() {
  return (
    <main className={styles.page}>

      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}

      <section className={styles.hero}>

        <p className={styles.eyebrow}>ALGORITHMS</p>

        <h1 className={styles.title}>
          Thinking
          <br />
          Before
          <br />
          Coding
        </h1>

        <p className={styles.subtitle}>
          Efficient software begins with efficient algorithms.
          I enjoy studying computational complexity, optimization,
          and algorithmic techniques that transform ideas into
          scalable solutions.
        </p>

      </section>

      {/* ====================================================== */}
      {/* SEARCHING */}
      {/* ====================================================== */}

      <section className={styles.section}>

        <div className={styles.number}>I</div>

        <div className={styles.content}>

          <h2>Searching Algorithms</h2>

          <ul className={styles.list}>
            <li>Linear Search</li>
            <li>Binary Search</li>
            <li>Jump Search</li>
            <li>Interpolation Search</li>
            <li>Exponential Search</li>
          </ul>

        </div>

      </section>

      {/* ====================================================== */}
      {/* SORTING */}
      {/* ====================================================== */}

      <section className={styles.section}>

        <div className={styles.number}>II</div>

        <div className={styles.content}>

          <h2>Sorting Algorithms</h2>

          <ul className={styles.list}>
            <li>Bubble Sort</li>
            <li>Selection Sort</li>
            <li>Insertion Sort</li>
            <li>Merge Sort</li>
            <li>Quick Sort</li>
            <li>Heap Sort</li>
            <li>Counting Sort</li>
            <li>Radix Sort</li>
          </ul>

        </div>

      </section>

      {/* ====================================================== */}
      {/* GRAPH */}
      {/* ====================================================== */}

      <section className={styles.section}>

        <div className={styles.number}>III</div>

        <div className={styles.content}>

          <h2>Graph Algorithms</h2>

          <ul className={styles.list}>
            <li>Breadth First Search (BFS)</li>
            <li>Depth First Search (DFS)</li>
            <li>Dijkstra's Algorithm</li>
            <li>Bellman–Ford Algorithm</li>
            <li>Floyd–Warshall Algorithm</li>
            <li>Kruskal's Algorithm</li>
            <li>Prim's Algorithm</li>
            <li>Topological Sorting</li>
          </ul>

        </div>

      </section>

      {/* ====================================================== */}
      {/* ADVANCED */}
      {/* ====================================================== */}

      <section className={styles.section}>

        <div className={styles.number}>IV</div>

        <div className={styles.content}>

          <h2>Advanced Techniques</h2>

          <ul className={styles.list}>
            <li>Dynamic Programming</li>
            <li>Greedy Algorithms</li>
            <li>Divide and Conquer</li>
            <li>Backtracking</li>
            <li>Branch and Bound</li>
            <li>Sliding Window</li>
            <li>Two Pointer Technique</li>
            <li>Bit Manipulation</li>
          </ul>

        </div>

      </section>

      {/* ====================================================== */}
      {/* PHILOSOPHY */}
      {/* ====================================================== */}

      <section className={styles.footer}>

        <h2>
          Every optimization
          <br />
          begins with
          <br />
          an algorithm.
        </h2>

        <p>
          Elegant algorithms reduce complexity, improve scalability,
          and reveal the true beauty of software engineering.
        </p>

      </section>

    </main>
  );
}