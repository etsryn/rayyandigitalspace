import styles from "./Achievements.module.css";

export default function Achievements() {
  return (
    <main className={styles.page}>

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className={styles.hero}>

        <p className={styles.eyebrow}>ACHIEVEMENTS</p>

        <h1 className={styles.title}>
          Milestones,
          <br />
          Recognition &
          <br />
          Continuous Growth
        </h1>

        <p className={styles.subtitle}>
          Every achievement reflects persistence, disciplined learning,
          and a commitment to continuous improvement throughout my
          engineering journey.
        </p>

      </section>

      {/* ========================================================= */}
      {/* ACADEMIC */}
      {/* ========================================================= */}

      <section className={styles.section}>

        <div className={styles.sectionNumber}>I</div>

        <div className={styles.sectionContent}>

          <h2>ACADEMIC ACHIEVEMENTS</h2>

          <div className={styles.timeline}>

            <div className={styles.card}>
              <span className={styles.year}>2022 – Present</span>

              <h3>Bachelor of Technology</h3>

              <p>
                Pursuing B.Tech in Computer Science & Engineering
                with a current CGPA of <strong>8.5 / 10</strong>.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* TECHNICAL */}
      {/* ========================================================= */}

      <section className={styles.section}>

        <div className={styles.sectionNumber}>II</div>

        <div className={styles.sectionContent}>

          <h2>TECHNICAL ACHIEVEMENTS</h2>

          <div className={styles.timeline}>

            <div className={styles.card}>
              <span className={styles.year}>Portfolio</span>

              <h3>Personal Engineering Portfolio</h3>

              <p>
                Designed and developed a fully responsive portfolio
                from scratch using React, Vite and CSS Modules.
              </p>
            </div>

            <div className={styles.card}>
              <span className={styles.year}>Projects</span>

              <h3>Multiple Software Projects</h3>

              <p>
                Built projects involving machine learning,
                web development, desktop applications,
                and systems programming concepts.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* COMPETITIVE */}
      {/* ========================================================= */}

      <section className={styles.section}>

        <div className={styles.sectionNumber}>III</div>

        <div className={styles.sectionContent}>

          <h2>COMPETITIVE PROGRAMMING</h2>

          <div className={styles.timeline}>

            <div className={styles.card}>
              <span className={styles.year}>Current</span>

              <h3>Problem Solving Journey</h3>

              <p>
                Actively strengthening algorithmic thinking through
                data structures, algorithms, and competitive programming.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* CERTIFICATIONS */}
      {/* ========================================================= */}

      <section className={styles.section}>

        <div className={styles.sectionNumber}>IV</div>

        <div className={styles.sectionContent}>

          <h2>CERTIFICATIONS</h2>

          <div className={styles.timeline}>

            <div className={styles.card}>
              <span className={styles.year}>Microsoft Learn</span>

              <h3>Foundations of Data Science for Machine Learning</h3>

              <p>
                Successfully completed Microsoft's learning pathway
                covering the foundations of data science and machine
                learning.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* QUOTE */}
      {/* ========================================================= */}

      <section className={styles.footer}>

        <h2>
          Achievement is
          <br />
          a milestone,
          <br />
          not the destination.
        </h2>

      </section>

    </main>
  );
}