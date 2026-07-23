import styles from "./Project.module.css";

const StatusTag = ({ value }) => {
  const key = (value || "").toLowerCase();
  const cls =
    key === "active" || key.includes("active")
      ? styles.statusActive
      : key === "ongoing"
      ? styles.statusOngoing
      : styles.statusCompleted;
  return <span className={`${styles.status} ${cls}`}>{value}</span>;
};

const KeyValueTable = ({ rows }) => (
  <table className={`${styles.table} ${styles.keyValueTable}`}>
    <tbody>
      {rows.map(([label, value]) => (
        <tr key={label}>
          <td>{label}</td>
          <td>
            {label.toLowerCase() === "status" ? (
              <StatusTag value={value} />
            ) : (
              value
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const repoCategories = [
  [
    "Software Engineering",
    4,
    "Desktop Applications, OOP, System Design",
  ],
  [
    "Knowledge Management",
    1,
    "Documentation, Personal Knowledge Base",
  ],
  [
    "Educational Repositories",
    2,
    "Programming Resources, Notes, Challenges",
  ],
  [
    "Financial Technology",
    1,
    "Finance Platform, FinTech Concepts",
  ],
  [
    "Web Development",
    1,
    "Modern Web Applications, React",
  ],
];

const projectIndex = [
  ["P001", "To-Do Task Manager", "Desktop Application", "Completed"],
  ["P002", "PDF Manipulator", "Productivity Tool", "Completed"],
  ["P003", "File Type Converter", "Productivity Tool", "Completed"],
  [
    "P004",
    "Movie Ticket Reservation System",
    "Software Engineering",
    "Completed",
  ],
  
  ["P005", "Rayyan Notion", "Knowledge Management", "Active"],
  ["P006", "RNotion Questions", "Educational Repository", "Active"],
  ["P007", "RNotion Challenge", "Programming Challenges", "Active"],
  [
    "P008",
    "Rayyan Digital Finance Corporation (RDFC)",
    "Financial Technology",
    "Active",
  ],
  ["P009", "Sawt Al-Radd", "Web Development", "Active"],
];

const projects = [
  {
    id: "P001",
    title: "Python To-Do Task Manager",
    fields: [
      ["Category", "Desktop Application"],
      ["Language", "Python"],
      ["GUI Framework", "Tkinter"],
      ["Status", "Completed"],
    ],
    description:
      "A feature-rich desktop task management application developed using Python and Tkinter. The project demonstrates desktop GUI development, local data persistence and integration of additional utilities such as text-to-speech and webcam functionality.",
    features: [
      "Password protection",
      "Task priorities",
      "Due-date management",
      "Task completion tracking",
      "Text-to-speech support",
      "Camera integration",
      "Persistent file storage",
    ],
    concepts: [
      "GUI Programming",
      "Object-Oriented Programming",
      "File Handling",
      "Desktop Application Development",
    ],
  },
  {
    id: "P002",
    title: "PDF Manipulator",
    fields: [
      ["Category", "Productivity Tool"],
      ["Technologies", "Python, Streamlit"],
      ["Status", "Completed"],
    ],
    description:
      "PDF Manipulator is a Streamlit-based application providing multiple PDF utilities through an interactive web interface. The project demonstrates document processing and user-focused tool development.",
    features: [
      "PDF processing",
      "Document management",
      "Interactive web interface",
      "Simple workflow automation",
    ],
    concepts: [],
  },
  {
    id: "P003",
    title: "File Type Converter",
    fields: [
      ["Category", "Productivity Tool"],
      ["Technologies", "Python, Streamlit"],
      ["Status", "Completed"],
    ],
    description:
      "File Type Converter is a Streamlit application that enables users to convert files between different supported formats through a simple browser interface. The project focuses on usability, automation and document processing.",
    features: [
      "Multiple file format conversion",
      "Browser-based interface",
      "Simple workflow",
      "Streamlit application",
    ],
    concepts: [],
  },
  {
    id: "P004",
    title: "Movie Ticket Reservation System",
    fields: [
      ["Category", "Software Engineering"],
      ["Programming Language", "C++"],
      ["Concepts Used", "Object-Oriented Programming"],
      ["Status", "Completed"],
    ],
    description:
      "A console-based Movie Ticket Reservation System developed using C++. The application demonstrates Object-Oriented Programming concepts including classes, encapsulation and structured program design while simulating a movie reservation workflow.",
    features: [
      "Movie booking system",
      "Ticket reservation",
      "User interaction",
      "Console interface",
      "OOP implementation",
    ],
    concepts: [
      "Object-Oriented Programming",
      "Class Design",
      "Data Structures",
      "Software Design",
    ],
  },
  {
    id: "P005",
    title: "Rayyan Notion",
    fields: [
      ["Category", "Knowledge Management"],
      ["Technologies", "JavaScript"],
      ["Status", "Active"],
    ],
    description:
      "Rayyan Notion is a productivity-oriented repository focused on organising technical knowledge, documentation and learning material into a structured digital workspace.",
    features: [
      "Knowledge organisation",
      "Technical documentation",
      "Structured learning resources",
      "Digital workspace",
    ],
    concepts: [
      "Knowledge Management",
      "Documentation",
      "Information Organisation",
    ],
  },
  {
    id: "P006",
    title: "RNotion Questions",
    fields: [
      ["Category", "Educational Repository"],
      ["Language", "JavaScript"],
      ["Status", "Active"],
    ],
    description:
      "A structured collection of technical questions designed for learning, revision and interview preparation across multiple Computer Science domains.",
    features: [
      "Question bank",
      "Revision material",
      "Interview preparation",
      "Structured organisation",
    ],
    concepts: [
      "Knowledge Management",
      "Technical Documentation",
      "Learning Resources",
    ],
  },
  {
    id: "P007",
    title: "RNotion Challenge",
    fields: [
      ["Category", "Programming Challenges"],
      ["Language", "JavaScript"],
      ["Status", "Active"],
    ],
    description:
      "A repository containing programming challenges, problem sets and coding exercises designed to strengthen logical thinking, programming skills and algorithmic problem solving.",
    features: [
      "Coding challenges",
      "Programming exercises",
      "Skill development",
      "Problem-solving practice",
    ],
    concepts: [
      "Algorithms",
      "Problem Solving",
      "Programming Practice",
      "Logical Thinking",
    ],
  },
  {
    id: "P008",
    title: "Rayyan Digital Finance Corporation (RDFC)",
    fields: [
      ["Category", "Financial Technology"],
      ["Project Type", "Digital Finance Platform"],
      ["Primary Technologies", "Web Technologies"],
      ["Repository Status", "Active Development"],
    ],
    description:
      "Rayyan Digital Finance Corporation (RDFC) is a conceptual fintech platform developed to explore modern digital finance systems, financial services, secure transactions and scalable financial software architecture.",
    features: [
      "Digital finance platform",
      "Financial service architecture",
      "Modern web interface",
      "Scalable project structure",
      "Professional documentation",
    ],
    concepts: [
      "Financial Technology",
      "System Architecture",
      "Frontend Development",
      "Software Engineering",
    ],
  },
  {
    id: "P009",
    title: "Sawt Al-Radd",
    fields: [
      ["Category", "Web Development"],
      ["Project Type", "Informational Website"],
      ["Status", "Active"],
    ],
    description:
      "Sawt Al-Radd is a web-based project developed to publish and organize informational content in a structured and accessible format using modern frontend development practices.",
    features: [
      "Responsive web pages",
      "Content organisation",
      "Modern UI layout",
      "Structured navigation",
    ],
    concepts: [
      "Frontend Development",
      "Responsive Design",
      "Information Architecture",
      "User Experience",
    ],
  },
];

const repoStatRows = [
  ["Public Repositories", "9+"],
  [
    "Primary Languages",
    "Python · JavaScript · C++ · Java · HTML · CSS",
  ],
  [
    "Domains",
    "Software Engineering, Artificial Intelligence, Machine Learning, Data Science, Embedded Systems, Android Development, Web Development, Educational Resources",
  ],
  ["Development Period", "2023 – Present"],
  [
    "Repository Type",
    "Personal Projects, Open Source Repositories, Learning Resources, Technical Documentation",
  ],
  ["Current Status", "Active Development"],
];

export default function Project() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* ---------- Header ---------- */}
        <header className={styles.header}>
          <p className={styles.eyebrow}>Repository Archive</p>
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.subtitle}>
            A structured record of 9 repositories spanning software
            engineering, artificial intelligence, data science and
            technical documentation — 2022 to present.
          </p>
        </header>

        {/* ---------- Overview ---------- */}
        <section className={styles.section} id="overview">
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>I.</span>Overview
          </h2>
          <p className={styles.paragraph}>
            This repository archive represents my practical journey in
            Computer Science and Engineering. Every project has been
            developed with the objective of strengthening software
            engineering principles, problem-solving abilities, system
            design, debugging techniques, and technical documentation.
          </p>
          <p className={styles.paragraph}>
            My work spans multiple domains including web development,
            artificial intelligence, machine learning, data science,
            embedded systems, desktop applications, Android development,
            and educational resources. As my engineering journey
            progresses, this archive will continue expanding towards
            quantitative development, distributed systems, low-latency
            programming, and financial technologies.
          </p>
        </section>

        {/* ---------- Repository Statistics ---------- */}
        <section className={styles.section} id="statistics">
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>II.</span>Repository
            Statistics
          </h2>
          <KeyValueTable rows={repoStatRows} />
        </section>

        {/* ---------- Repository Categories ---------- */}
        <section className={styles.section} id="categories">
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>III.</span>Repository
            Categories
          </h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Category</th>
                <th>Count</th>
                <th>Primary Focus</th>
              </tr>
            </thead>
            <tbody>
              {repoCategories.map(([name, count, focus]) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td className={styles.numCell}>{count}</td>
                  <td>{focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ---------- Project Index ---------- */}
        <section className={styles.section} id="index">
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>IV.</span>Project Index
          </h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Repository</th>
                <th>Category</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {projectIndex.map(([id, name, category, status]) => (
                <tr key={id} className={styles.indexRow}>
                  <td className={styles.indexId}>{id}</td>
                  <td>{name}</td>
                  <td>{category}</td>
                  <td>
                    <StatusTag value={status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ---------- Table of Contents for Full Entries ---------- */}
        <section className={styles.section} id="contents">
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>V.</span>Project Records
          </h2>
          <ul className={styles.toc}>
            {projects.map((p) => (
              <li key={p.id} className={styles.tocItem}>
                <span className={styles.tocId}>{p.id}</span>
                <span className={styles.tocName}>{p.title}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- Individual Project Entries ---------- */}
        {projects.map((p) => (
          <article key={p.id} className={styles.projectEntry}>
            <div className={styles.projectHeader}>
              <span className={styles.projectId}>{p.id}</span>
              <h3 className={styles.projectTitle}>{p.title}</h3>
            </div>

            <div className={styles.projectMeta}>
              <KeyValueTable rows={p.fields} />
            </div>

            <p className={styles.subheading}>Description</p>
            <p className={styles.paragraph}>{p.description}</p>

            {p.features.length > 0 && (
              <>
                <p className={styles.subheading}>Major Features</p>
                <ul className={styles.list}>
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </>
            )}

            {p.concepts.length > 0 && (
              <>
                <p className={styles.subheading}>Engineering Concepts</p>
                <ul className={styles.list}>
                  {p.concepts.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </>
            )}
          </article>
        ))}

        {/* ---------- Footer ---------- */}
        <p className={styles.footerNote}>
          Record last updated 2026 · 9 entries · Compiled for reference
        </p>
      </div>
    </main>
  );
}