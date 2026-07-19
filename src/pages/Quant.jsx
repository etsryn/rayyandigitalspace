import styles from "./Quant.module.css";

const studyDomains = [
    {
        title: "Programming",
        topics: [
            "Modern C++",
            "Python",
            "R",
            "SQL"
        ]
    },
    {
        title: "Computer Science",
        topics: [
            "Data Structures",
            "Algorithms",
            "Object-Oriented Programming",
            "Operating Systems",
            "Computer Networks",
            "Database Management Systems",
            "Computer Organization & Architecture",
            "Compiler Design",
            "Concurrency",
            "Multithreading",
            "Memory Management",
            "Linux"
        ]
    },
    {
        title: "Mathematics",
        topics: [
            "Probability",
            "Statistics",
            "Linear Algebra",
            "Discrete Mathematics",
            "Calculus",
            "Optimization",
            "Mathematical Reasoning"
        ]
    },
    {
        title: "Financial Computing",
        topics: [
            "Market Microstructure",
            "Order Book Dynamics",
            "Low-Latency Programming",
            "Financial Algorithms",
            "Performance Engineering",
            "Numerical Computing",
            "Cache Optimization",
            "Memory Optimization",
            "Financial Markets"
        ]
    }
];

const roadmap = [
    "Modern C++",
    "Advanced Data Structures",
    "Algorithms",
    "Operating Systems",
    "Computer Networks",
    "Concurrent Programming",
    "Linux Systems Programming",
    "Performance Engineering",
    "Financial Markets",
    "Quantitative Finance",
    "Low-LLatency Systems",
    "Distributed Systems"
];

const companies = [
  {
    name: "Jane Street",
    url: "https://www.janestreet.com/"
  },
  {
    name: "Citadel Securities",
    url: "https://www.citadelsecurities.com/"
  },
  {
    name: "Hudson River Trading",
    url: "https://www.hudsonrivertrading.com/"
  },
  {
    name: "Jump Trading",
    url: "https://www.jumptrading.com/"
  },
  {
    name: "Optiver",
    url: "https://optiver.com/"
  },
  {
    name: "IMC Trading",
    url: "https://www.imc.com/"
  },
  {
    name: "DRW",
    url: "https://drw.com/"
  },
  {
    name: "Tower Research Capital",
    url: "https://www.tower-research.com/"
  },
  {
    name: "Akuna Capital",
    url: "https://akunacapital.com/"
  },
  {
    name: "Two Sigma",
    url: "https://www.twosigma.com/"
  }
];

export default function Quant() {
    return (
        <main className={styles.quantPage}>
            <section className={styles.hero}>
                <h1>Quantitative Development</h1>

                <p className={styles.heroText}>
                    Quantitative Development represents the intersection of Computer
                    Science, Mathematics, Software Engineering, and Financial Markets.
                    It focuses on building highly optimized systems capable of processing
                    large volumes of market data while maintaining deterministic behavior,
                    reliability, and extremely low execution latency. My long-term
                    objective is to develop the engineering expertise required to design
                    and implement performance-critical trading infrastructure through a
                    disciplined study of computer systems, algorithmic problem solving,
                    systems programming, and modern C++.
                </p>
            </section>

            <section className={styles.section}>
                <h2>Career Objective</h2>

                <p>
                    My primary objective is to become a Quantitative Developer capable of
                    designing efficient software systems for algorithmic trading,
                    low-latency infrastructure, and financial computing. The journey is
                    centered on mastering Computer Science fundamentals, performance
                    optimization, concurrent programming, mathematical reasoning, and
                    software architecture rather than pursuing isolated technologies.
                </p>
            </section>

            <section className={styles.section}>
                <h2>Domains of Study</h2>

                <div className={styles.domainList}>
    {studyDomains.map((domain) => (
        <div key={domain.title} className={styles.domainRow}>
            <h3>{domain.title}</h3>

            <p>{domain.topics.join(" • ")}</p>
        </div>
    ))}
</div>
            </section>

            <section className={styles.section}>
                <h2>Technology Stack</h2>

                <div className={styles.stackGrid}>
                    <div className={styles.stack}>
                        <h3>Languages</h3>

                        <p>
                            C++ • Python • Java • SQL • JavaScript • HTML • CSS
                        </p>
                    </div>

                    <div className={styles.stack}>
                        <h3>Development</h3>

                        <p>
                            Git • GitHub • Visual Studio Code • Linux • Windows • MySQL
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2>Learning Roadmap</h2>

                <ol className={styles.roadmap}>
                    {roadmap.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ol>
            </section>

            <section className={styles.section}>
                <h2>Target Organizations</h2>

                <p>
                    These organizations are recognized globally for their engineering
                    culture, quantitative research, and development of sophisticated
                    trading systems. They represent the long-term environments in which I
                    aspire to contribute through continuous technical growth and rigorous
                    engineering practice.
                </p>

                <div className={styles.companyGrid}>
  {companies.map((company) => (
    <a
      key={company.name}
      href={company.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.company}
    >
      {company.name}
    </a>
  ))}
</div>
            </section>

            <section className={styles.section}>
                <h2>Current Status</h2>

                <table className={styles.statusTable}>
                    <tbody>
                        <tr>
                            <td>Primary Focus</td>
                            <td>Quantitative Development & GATE CSE</td>
                        </tr>

                        <tr>
                            <td>Primary Language</td>
                            <td>Modern C++</td>
                        </tr>

                        <tr>
                            <td>Operating Systems</td>
                            <td>Linux & Windows</td>
                        </tr>

                        <tr>
                            <td>Learning Model</td>
                            <td>Theory → Implementation → Optimization → Projects</td>
                        </tr>

                        <tr>
                            <td>Engineering Philosophy</td>
                            <td>Correctness before Optimization.</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    );
}