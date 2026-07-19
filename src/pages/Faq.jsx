import styles from "./Faq.module.css";
import { Link } from "react-router-dom";

export default function Faq() {
  return (
    <main className={styles.page}>

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className={styles.hero}>

        <p className={styles.eyebrow}>FAQ</p>

        <h1 className={styles.title}>
          Frequently
          <br />
          Asked Questions
        </h1>

        <p className={styles.subtitle}>
          A collection of questions commonly asked about my
          engineering philosophy, technical interests, portfolio,
          and career aspirations.
        </p>

      </section>

      {/* ========================================================= */}
      {/* FAQ */}
      {/* ========================================================= */}

      <section className={styles.faqSection}>

        <details className={styles.item}>
          <summary>
            <span>01</span>
            Why did you build this portfolio from scratch?
          </summary>

          <p>
            I wanted complete control over architecture, performance,
            accessibility, responsiveness, and user experience instead
            of relying on templates or website builders. Every page
            reflects my engineering approach as much as my design
            decisions.
          </p>
        </details>

        <details className={styles.item}>
          <summary>
            <span>02</span>
            What areas of software engineering interest you the most?
          </summary>

          <p>
            My primary interests include quantitative development,
            systems programming, modern C++, algorithms, data
            structures, software architecture, and performance
            optimization.
          </p>
        </details>

        <details className={styles.item}>
          <summary>
            <span>03</span>
            Which technologies were used to build this portfolio?
          </summary>

          <p>
            This website is built using React, Vite, JavaScript,
            React Router, and CSS Modules with a strong focus on
            clean architecture, maintainability, and performance.
          </p>
        </details>

        <details className={styles.item}>
          <summary>
            <span>04</span>
            Do you use AI while programming?
          </summary>

          <p>
            Yes. I use AI as a productivity tool for brainstorming,
            debugging, documentation, and exploring implementation
            alternatives. Final engineering decisions, architecture,
            validation, and testing remain my responsibility.
          </p>
        </details>

        <details className={styles.item}>
          <summary>
            <span>05</span>
            What kind of opportunities are you looking for?
          </summary>

          <p>
            I am interested in opportunities involving software
            engineering, quantitative development, systems
            programming, research, and challenging technical
            problem solving.
          </p>
        </details>

        <details className={styles.item}>
          <summary>
            <span>06</span>
            Is this portfolio still under development?
          </summary>

          <p>
            Yes. Like every engineering project, this portfolio
            continues to evolve as I complete new projects, learn
            new technologies, and improve existing work.
          </p>
        </details>

        <details className={styles.item}>
          <summary>
            <span>07</span>
            Where can I explore your projects and source code?
          </summary>

          <p>
            My projects are available throughout this portfolio, with
            source code hosted on GitHub whenever appropriate.
            Documentation and implementation details accompany most
            technical projects.
          </p>
        </details>

        <details className={styles.item}>
          <summary>
            <span>08</span>
            What are your current learning goals?
          </summary>

          <p>
            I am currently deepening my understanding of modern C++,
            algorithms, low-level systems programming, software
            optimization, and quantitative engineering while building
            increasingly complex engineering projects.
          </p>
        </details>

      </section>

      {/* ========================================================= */}
      {/* CTA */}
      {/* ========================================================= */}

      <section className={styles.cta}>

        <h2>Still have a question?</h2>

        <p>
          If your question isn't covered here, feel free to reach
          out. I'd be happy to continue the conversation.
        </p>

        <Link
          to="/contact"
          className={styles.button}
        >
          Contact Me
        </Link>

      </section>

    </main>
  );
}