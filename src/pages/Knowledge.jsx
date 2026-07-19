import styles from "./Knowledge.module.css";

export default function Knowledge() {
  return (
    <main className={styles.page}>

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className={styles.hero}>

        <p className={styles.eyebrow}>KNOWLEDGE</p>

        <h1 className={styles.title}>
          Learning
          <br />
          Never Stops
        </h1>

        <p className={styles.subtitle}>
          I view knowledge as a continuously expanding system rather
          than a collection of isolated technologies. Every concept
          builds upon another, creating stronger engineering intuition.
        </p>

      </section>

      {/* ===================================================== */}
      {/* COMPUTER SCIENCE */}
      {/* ===================================================== */}

      <section className={styles.section}>

        <div className={styles.number}>I</div>

        <div className={styles.content}>

          <h2>Computer Science</h2>

          <ul className={styles.list}>
            <li>Data Structures & Algorithms</li>
            <li>Object-Oriented Programming</li>
            <li>Operating Systems</li>
            <li>Computer Networks</li>
            <li>Database Management Systems</li>
            <li>Compiler Design</li>
            <li>Theory of Computation</li>
            <li>Computer Organization & Architecture</li>
          </ul>

        </div>

      </section>

      {/* ===================================================== */}
      {/* MATHEMATICS */}
      {/* ===================================================== */}

      <section className={styles.section}>

        <div className={styles.number}>II</div>

        <div className={styles.content}>

          <h2>Mathematics</h2>

          <ul className={styles.list}>
            <li>Linear Algebra</li>
            <li>Probability & Statistics</li>
            <li>Discrete Mathematics</li>
            <li>Calculus</li>
            <li>Optimization</li>
          </ul>

        </div>

      </section>

      {/* ===================================================== */}
      {/* SOFTWARE ENGINEERING */}
      {/* ===================================================== */}

      <section className={styles.section}>

        <div className={styles.number}>III</div>

        <div className={styles.content}>

          <h2>Software Engineering</h2>

          <ul className={styles.list}>
            <li>Modern C++</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Git & GitHub</li>
            <li>REST APIs</li>
            <li>Software Architecture</li>
          </ul>

        </div>

      </section>

      {/* ===================================================== */}
      {/* EMERGING DOMAINS */}
      {/* ===================================================== */}

      <section className={styles.section}>

        <div className={styles.number}>IV</div>

        <div className={styles.content}>

          <h2>Currently Exploring</h2>

          <ul className={styles.list}>
            <li>Quantitative Development</li>
            <li>High-Performance Computing</li>
            <li>Machine Learning</li>
            <li>Systems Programming</li>
            <li>Performance Optimization</li>
          </ul>

        </div>

      </section>

      {/* ===================================================== */}
      {/* PHILOSOPHY */}
      {/* ===================================================== */}

      <section className={styles.footer}>

        <h2>
          Knowledge compounds
          <br />
          through consistency.
        </h2>

        <p>
          Every concept mastered today becomes the foundation
          for solving harder problems tomorrow.
        </p>

      </section>

    </main>
  );
}