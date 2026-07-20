import styles from "./Profile.module.css";

export default function Profile() {
    return (
        <main className={styles.page}>
            {/* ========================================================= */}
            {/* HERO — CF user-profile header: handle, rating, stat strip */}
            {/* ========================================================= */}

            <section className={styles.hero}>

                <h1 className={styles.heroTitle}>
                    Building the foundations
                    <br />
                    required for;
                    <br />
                    <font color="maroon">High-Performance Software.</font>
                </h1>

                <p className={styles.heroDescription}>
                    I'm <strong>Rayyan Ashraf</strong>, a Computer Science undergraduate
                    focused on Quantitative Development. My interests lie where computer
                    science fundamentals, mathematics, and systems engineering intersect.
                    I believe the best software is built by engineers who understand what
                    happens beneath the abstraction.
                </p>

                <div className={styles.statStrip}>
                    <div className={styles.statCell}>
                        <span className={styles.statLabel}>Current Track</span>
                        <span className={styles.statValue}>Quant Dev</span>
                    </div>
                    <div className={styles.statCell}>
                        <span className={styles.statLabel}>Primary Language</span>
                        <span className={styles.statValue}>Modern C++</span>
                    </div>
                    <div className={styles.statCell}>
                        <span className={styles.statLabel}>Highest Qualification</span>
                        <span className={styles.statValue}>CS'27 Graduate</span>
                    </div>
                    <div className={styles.statCell}>
                        <span className={styles.statLabel}>Focus</span>
                        <span className={styles.statValue}>Consistent Execution</span>
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* INTRODUCTION                                              */}
            {/* ========================================================= */}

            <section className={styles.section}>
                <div className={styles.sectionNumber}>I</div>

                <div className={styles.sectionContent}>
                    <h2>Engineering Philosophy</h2>

                    <p className={styles.justifytext}>
                        I am less interested in learning frameworks than understanding the
                        principles that make them possible. My curiosity naturally moves
                        toward algorithms, memory, operating systems, compilers, computer
                        architecture, and performance engineering.
                    </p>

                    <p>Every new topic eventually becomes the same question:</p>

                    <blockquote className={styles.quote}>
                        "How does this actually work underneath?"
                    </blockquote>

                    <p>
                        That question has shaped the way I study, build software, and think
                        about engineering.
                    </p>
                </div>
            </section>

            {/* ========================================================= */}
            {/* ENGINEERING PROFILE                                       */}
            {/* ========================================================= */}

            <section className={styles.section}>
                <div className={styles.sectionNumber}>II</div>

                <div className={styles.sectionContent}>
                    <h2>Engineering Profile</h2>

                    <div className={styles.profileGrid}>
                        <div className={styles.profileItem}>
                            <span>Current Direction</span>
                            <h3>Quantitative Development</h3>
                        </div>

                        <div className={styles.profileItem}>
                            <span>Primary Language</span>
                            <h3>Modern C++</h3>
                        </div>

                        <div className={styles.profileItem}>
                            <span>Engineering Interests</span>
                            <h3>
                                Systems Programming
                                <br />
                                Algorithms
                                <br />
                                Computer Architecture
                            </h3>
                        </div>

                        <div className={styles.profileItem}>
                            <span>Mathematical Interests</span>
                            <h3>
                                Probability
                                <br />
                                Statistics
                                <br />
                                Optimization
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* PRINCIPLES — styled as accepted CF verdicts               */}
            {/* ========================================================= */}

            <section className={styles.section}>
                <div className={styles.sectionNumber}>III</div>

                <div className={styles.sectionContent}>
                    <h2>Engineering Principles</h2>

                    <div className={styles.principles}>
                        <article className={styles.principle}>
                            <h3>
                                Understand
                                <br />
                                before implementing.
                            </h3>
                            <p>
                                Correct software begins with correct understanding. Writing
                                code is usually the final step—not the first.
                            </p>
                        </article>

                        <article className={styles.principle}>
                            <h3>
                                Measure
                                <br />
                                before optimizing.
                            </h3>
                            <p>
                                Performance decisions should come from evidence rather than
                                assumptions.
                            </p>
                        </article>

                        <article className={styles.principle}>
                            <h3>
                                Fundamentals
                                <br />
                                outlive frameworks.
                            </h3>
                            <p>
                                Languages and libraries evolve continuously. Computer science
                                principles remain valuable throughout an engineering career.
                            </p>
                        </article>

                        <article className={styles.principle}>
                            <h3>
                                Discipline
                                <br />
                                compounds.
                            </h3>
                            <p>
                                Consistency creates progress—in software engineering,
                                research, and life.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* CURRENT FOCUS                                             */}
            {/* ========================================================= */}

            <section className={styles.section}>
                <div className={styles.sectionNumber}>IV</div>

                <div className={styles.sectionContent}>
                    <h2>Current Focus</h2>

                    <div className={styles.focusGrid}>
                        <div className={styles.focusCard}>
                            <span>Programming</span>
                            <h3>Modern C++</h3>
                            <p>
                                Writing clean, efficient, and maintainable code while
                                developing a deeper understanding of the language and its
                                performance characteristics.
                            </p>
                        </div>

                        <div className={styles.focusCard}>
                            <span>Computer Science</span>
                            <h3>Core Fundamentals</h3>
                            <p>
                                Algorithms, Data Structures, Operating Systems, Computer
                                Architecture, Networks, Databases, and low-level system
                                behaviour.
                            </p>
                        </div>

                        <div className={styles.focusCard}>
                            <span>Mathematics</span>
                            <h3>Probability & Statistics</h3>
                            <p>
                                Building the mathematical foundation required for
                                quantitative finance, data analysis, and algorithmic
                                decision-making.
                            </p>
                        </div>

                        <div className={styles.focusCard}>
                            <span>Career Direction</span>
                            <h3>Quantitative Development</h3>
                            <p>
                                Preparing for a career focused on high-performance software,
                                low-latency systems, and engineering where correctness and
                                efficiency matter equally.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* BEYOND ENGINEERING                                        */}
            {/* ========================================================= */}

            <section className={styles.section}>
                <div className={styles.sectionNumber}>V</div>

                <div className={styles.sectionContent}>
                    <h2>Beyond Engineering</h2>

                    <p className={styles.justifytext}>
                        I believe professional growth should be supported by personal
                        discipline. Physical fitness has become an important part of my
                        routine because it reinforces qualities that are equally valuable
                        in engineering; consistency, patience, and long-term thinking.
                    </p>

                    <p className={styles.justifytext}>
                        Whether I'm studying a difficult concept, refining a project, or
                        training in the gym, I approach improvement as a continuous
                        process rather than a destination.
                    </p>
                </div>
            </section>



            {/* ========================================================= */}
      {/* VI — ACADEMIC RECORD                                      */}
      {/* ========================================================= */}

      <section className={styles.section}>
        <div className={styles.sectionNumber}>VI</div>

        <div className={styles.sectionContent}>
          <h2>Academic Record</h2>

          <div className={styles.recordBlock}>
            <p className={styles.recordLabel}>Graduation</p>
            <table className={styles.recordTable}>
              <tbody>
                <tr>
                  <td>Degree</td>
                  <td>
                    Bachelor of Technology (B.Tech) in Computer Science &
                    Engineering
                  </td>
                </tr>
                <tr>
                  <td>Institution</td>
                  <td>Galgotias University</td>
                </tr>
                <tr>
                  <td>Duration</td>
                  <td>2022 – 2026</td>
                </tr>
                <tr>
                  <td>CGPA</td>
                  <td>
                    8.5 / 10{" "}
                    <span className={styles.cgpaNote}>(Current)</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.recordBlock}>
            <p className={styles.recordLabel}>
              Intermediate of Science (PCM)
            </p>
            <table className={styles.recordTable}>
              <tbody>
                <tr>
                  <td>Qualification</td>
                  <td>Senior Secondary Education (Class XII)</td>
                </tr>
                <tr>
                  <td>Board</td>
                  <td>Aligarh Muslim University (AMU) Board</td>
                </tr>
                <tr>
                  <td>Institution</td>
                  <td>
                    Saiyyid Hamid Senior Secondary School (SHSSS) — Boys
                  </td>
                </tr>
                <tr>
                  <td>Year of Completion</td>
                  <td>2021</td>
                </tr>
                <tr>
                  <td>Percentage</td>
                  <td>67%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.recordBlock}>
            <p className={styles.recordLabel}>High School</p>
            <table className={styles.recordTable}>
              <tbody>
                <tr>
                  <td>Qualification</td>
                  <td>Higher Secondary Education (Class X)</td>
                </tr>
                <tr>
                  <td>Board</td>
                  <td>Aligarh Muslim University (AMU) Board</td>
                </tr>
                <tr>
                  <td>Institution</td>
                  <td>
                    Syedna Tahir Saifuddin School (STS School, Minto
                    Circle)
                  </td>
                </tr>
                <tr>
                  <td>Year of Completion</td>
                  <td>2019</td>
                </tr>
                <tr>
                  <td>Percentage</td>
                  <td>73.6%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

            {/* ========================================================= */}
            {/* VISION                                                    */}
            {/* ========================================================= */}

            <section className={styles.vision}>
                <p className={styles.visionLabel}>Vision</p>

                <h2 className={styles.visionTitle}>
                    Build software where mathematics,
                    <br />
                    systems, and engineering work
                    <br />
                    together.
                </h2>

                <p className={styles.visionText}>
                    My ambition is to contribute to software that demands precision,
                    performance, and deep technical understanding; from modern C++
                    systems to the infrastructure that powers quantitative finance.
                </p>
            </section>
        </main>
    );
}

