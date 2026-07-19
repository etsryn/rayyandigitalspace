import styles from "./Research.module.css";

export default function Research() {
  return (
    <main className={styles.page}>

      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}

      <section className={styles.hero}>

        <p className={styles.eyebrow}>RESEARCH</p>

        <h1 className={styles.title}>
          Curiosity,
          <br />
          Analysis &
          <br />
          Discovery
        </h1>

        <p className={styles.subtitle}>
          Research is where engineering moves beyond implementation.
          I enjoy exploring how systems work, understanding why they
          behave the way they do, and applying mathematical thinking
          to solve challenging problems.
        </p>

      </section>

      {/* ====================================================== */}
      {/* CURRENT INTERESTS */}
      {/* ====================================================== */}

      <section className={styles.section}>

        <div className={styles.number}>I</div>

        <div className={styles.content}>

          <h2>Current Research Interests</h2>

          <div className={styles.grid}>

            <div className={styles.card}>
              <h3>Algorithms</h3>
              <p>
                Algorithm design, optimization techniques,
                computational complexity, and efficient problem
                solving.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Systems Programming</h3>
              <p>
                Memory management, concurrency, low-level software,
                operating systems, and performance optimization.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Artificial Intelligence</h3>
              <p>
                Machine learning, statistical modeling, data-driven
                decision making, and practical AI systems.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Quantitative Computing</h3>
              <p>
                High-performance software, numerical methods,
                mathematical modeling, and computational finance.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* CURRENT STATUS */}
      {/* ====================================================== */}

      <section className={styles.section}>

        <div className={styles.number}>II</div>

        <div className={styles.content}>

          <h2>Research Journey</h2>

          <div className={styles.note}>

            <h3>Currently Building Foundations</h3>

            <p>
              My present focus is strengthening the theoretical and
              mathematical foundations required for future research.
              This includes algorithms, probability, linear algebra,
              systems programming, optimization, and modern C++.
            </p>

          </div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* FUTURE */}
      {/* ====================================================== */}

      <section className={styles.section}>

        <div className={styles.number}>III</div>

        <div className={styles.content}>

          <h2>Future Goals</h2>

          <div className={styles.timeline}>

            <div className={styles.item}>
              <span>01</span>
              Publish my first research paper.
            </div>

            <div className={styles.item}>
              <span>02</span>
              Contribute to open-source research projects.
            </div>

            <div className={styles.item}>
              <span>03</span>
              Collaborate with researchers and engineers.
            </div>

            <div className={styles.item}>
              <span>04</span>
              Pursue graduate research in Computer Science.
            </div>

          </div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* PUBLICATIONS */}
      {/* ====================================================== */}

      <section className={styles.publication}>

        <h2>Publications</h2>

        <p>
          No publications at this stage.
          This section will be updated as future research is completed
          and published.
        </p>

      </section>

    </main>
  );
}