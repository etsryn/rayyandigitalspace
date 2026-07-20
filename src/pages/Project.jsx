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
  ["Software Engineering", 5, "Desktop Applications, OOP, System Design"],
  ["Web Development", 5, "React, HTML, CSS, JavaScript"],
  [
    "Artificial Intelligence & Machine Learning",
    5,
    "NLP, AI Systems, Predictive Models",
  ],
  [
    "Data Science",
    5,
    "Analytics, Streamlit Applications, Data Processing",
  ],
  ["Embedded Systems", 1, "Arduino, Sensors, Hardware Programming"],
  [
    "Educational Repositories",
    5,
    "Programming Resources, Documentation, Notes",
  ],
  ["Knowledge Management", 3, "Productivity & Documentation"],
];

const projectIndex = [
  ["P001", "DeepVision-ExAegis", "Artificial Intelligence", "Active"],
  ["P002", "StudentVision", "Web Platform", "Active"],
  ["P003", "BuildWithRayyan", "Portfolio", "Active"],
  ["P004", "NRDAI", "Data Science", "Active"],
  [
    "P005",
    "Natural Language Processing",
    "Machine Learning",
    "Active",
  ],
  ["P006", "To-Do Task Manager", "Desktop Application", "Completed"],
  ["P007", "PDF Manipulator", "Productivity Tool", "Completed"],
  ["P008", "File Type Converter", "Productivity Tool", "Completed"],
  ["P009", "Linear Regression", "Machine Learning", "Active"],
  [
    "P010",
    "Movie Ticket Reservation System",
    "Software Engineering",
    "Completed",
  ],
  [
    "P011",
    "Ultrasonic Distance Measurement and Alarming System",
    "Embedded Systems",
    "Completed",
  ],
  ["P012", "YouTube Clone", "Frontend Development", "Completed"],
  ["P013", "Specialized Python", "Educational Repository", "Active"],
  [
    "P014",
    "GATE Computer Science Compendium",
    "Educational Repository",
    "Active",
  ],
  ["P015", "Tech Anthotheca", "Technical Library", "Active"],
  ["P016", "Git Commands", "Developer Resource", "Completed"],
  [
    "P017",
    "LeetCode Solutions",
    "Algorithms & Data Structures",
    "Ongoing",
  ],
  ["P018", "OpenAI GPTs", "Artificial Intelligence", "Active"],
  ["P019", "DataSanitized", "Data Science", "Active"],
  ["P020", "Rayyan Notion", "Knowledge Management", "Active"],
  ["P021", "RNotion Questions", "Educational Repository", "Active"],
  ["P022", "RNotion Challenge", "Programming Challenges", "Active"],
  [
    "P023",
    "Rayyan Digital Finance Corporation (RDFC)",
    "Financial Technology",
    "Active",
  ],
  ["P024", "UPI", "Financial Technology", "Active"],
  ["P025", "RayyanDigitalSpace", "Personal Website", "Completed"],
  ["P026", "For Personal Usage", "Utility Repository", "Active"],
  ["P027", "Sawt Al-Radd", "Web Development", "Active"],
  ["P028", "AWS MLU Explain", "Cloud Computing", "Active"],
];

const projects = [
  {
    id: "P001",
    title: "DeepVision-ExAegis",
    fields: [
      ["Category", "Artificial Intelligence"],
      [
        "Project Type",
        "AI-Powered Examination Proctoring System",
      ],
      [
        "Technologies",
        "HTML, CSS, JavaScript, Artificial Intelligence, Computer Vision",
      ],
      ["Status", "Active Development"],
      ["Difficulty", "Advanced"],
    ],
    description:
      "DeepVision-ExAegis is an AI-powered online examination proctoring system developed to enhance the integrity of remote assessments. The project combines artificial intelligence, computer vision and behavioural analysis techniques to monitor candidates, detect suspicious activities and assist institutions in conducting secure online examinations.",
    features: [
      "AI-assisted candidate monitoring",
      "Facial authentication",
      "Gaze tracking",
      "Speech activity detection",
      "Behaviour analysis",
      "Secure examination workflow",
    ],
    concepts: [
      "Artificial Intelligence",
      "Computer Vision",
      "Behaviour Analysis",
      "Frontend Development",
      "System Design",
    ],
  },
  {
    id: "P002",
    title: "StudentVision",
    fields: [
      ["Category", "Educational Platform"],
      ["Project Type", "Student Learning Platform"],
      ["Technologies", "HTML, CSS, JavaScript"],
      ["Status", "Active Development"],
      ["Difficulty", "Intermediate"],
    ],
    description:
      "StudentVision is an educational web platform designed to provide students with a centralized environment for learning Computer Science, Data Science, Artificial Intelligence and Software Development. The platform aims to simplify access to technical resources, documentation, datasets and programming materials.",
    features: [
      "Educational resource portal",
      "Dataset collection",
      "Student learning materials",
      "Structured navigation",
      "Responsive user interface",
    ],
    concepts: [
      "Frontend Development",
      "User Experience Design",
      "Information Architecture",
      "Responsive Web Design",
    ],
  },
  {
    id: "P003",
    title: "BuildWithRayyan",
    fields: [
      ["Category", "Portfolio Website"],
      ["Project Type", "Professional Engineering Portfolio"],
      ["Technologies", "React, JavaScript, HTML, CSS"],
      ["Status", "Ongoing"],
      ["Difficulty", "Advanced"],
    ],
    description:
      "BuildWithRayyan is my personal engineering portfolio developed using React. Unlike conventional portfolio websites, it documents technical projects, engineering reports, fitness analytics, learning progress, technical blogs and long-term professional development in a structured and report-oriented format.",
    features: [
      "Responsive React application",
      "Engineering documentation layout",
      "Project archive",
      "Fitness analytics dashboard",
      "Technical blog integration",
      "Professional portfolio design",
    ],
    concepts: [
      "React Components",
      "React Router",
      "Responsive Design",
      "Frontend Architecture",
      "Component Reusability",
    ],
  },
  {
    id: "P004",
    title: "NRDAI",
    fields: [
      ["Category", "Data Science & Analytics"],
      ["Project Type", "Interactive Data Analytics Dashboard"],
      ["Technologies", "Python, Streamlit, Plotly, Pandas"],
      ["Status", "Active"],
      ["Difficulty", "Advanced"],
    ],
    description:
      "NRDAI is an interactive Streamlit dashboard developed for analysing rape case statistics across Indian States and Union Territories. The project focuses on transforming historical datasets into meaningful visual insights through interactive charts, summaries and statistical exploration.",
    features: [
      "Interactive dashboards",
      "Plotly visualisations",
      "State-wise analysis",
      "Age-wise categorisation",
      "Trend analysis",
      "Statistical summaries",
    ],
    concepts: [
      "Exploratory Data Analysis",
      "Data Visualisation",
      "Dashboard Development",
      "Interactive Analytics",
    ],
  },
  {
    id: "P005",
    title: "Natural Language Processing",
    fields: [
      ["Category", "Machine Learning"],
      ["Technologies", "Python, NLP Libraries"],
      ["Status", "Active"],
      ["Focus Area", "Natural Language Processing"],
    ],
    description:
      "This repository explores Natural Language Processing through multiple experiments involving text processing, feature extraction and language understanding. It serves as a learning repository documenting practical implementation of NLP techniques.",
    features: [
      "Text preprocessing",
      "Tokenisation",
      "Feature extraction",
      "Language modelling experiments",
      "Machine learning workflows",
    ],
    concepts: [
      "Natural Language Processing",
      "Machine Learning",
      "Python Programming",
      "Data Preparation",
    ],
  },
  {
    id: "P006",
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
    id: "P007",
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
    id: "P008",
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
    id: "P009",
    title: "Linear Regression",
    fields: [
      ["Category", "Machine Learning"],
      ["Project Type", "Predictive Modelling Repository"],
      [
        "Technologies",
        "Python, NumPy, Pandas, Matplotlib, Scikit-Learn",
      ],
      ["Status", "Active"],
    ],
    description:
      "A collection of Linear Regression models demonstrating supervised learning on different datasets. The repository explores regression analysis, feature engineering, model evaluation and prediction using various machine learning workflows.",
    features: [
      "Regression model implementation",
      "Model evaluation",
      "Prediction analysis",
      "Dataset experimentation",
      "Performance comparison",
    ],
    concepts: [
      "Machine Learning",
      "Regression Analysis",
      "Data Visualization",
      "Feature Engineering",
    ],
  },
  {
    id: "P010",
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
    id: "P011",
    title: "Ultrasonic Distance Measurement and Alarming System",
    fields: [
      ["Category", "Embedded Systems"],
      ["Hardware", "Arduino Uno, Ultrasonic Sensor"],
      ["Programming Language", "Arduino C++"],
      ["Status", "Completed"],
    ],
    description:
      "An embedded system designed to continuously measure the distance of nearby objects using an ultrasonic sensor and trigger alarms whenever the measured distance crosses predefined thresholds.",
    features: [
      "Real-time distance monitoring",
      "Obstacle detection",
      "Alarm triggering",
      "Sensor integration",
      "Microcontroller programming",
    ],
    concepts: [
      "Embedded Systems",
      "Sensor Programming",
      "Arduino Development",
      "Electronics",
    ],
  },
  {
    id: "P012",
    title: "YouTube Clone",
    fields: [
      ["Category", "Frontend Development"],
      ["Technologies", "HTML, CSS"],
      ["Status", "Completed"],
    ],
    description:
      "A responsive frontend recreation of YouTube developed using HTML and CSS. The project focuses on webpage layout design, responsive styling, navigation and recreating a modern user interface.",
    features: [
      "Responsive layout",
      "Video grid interface",
      "Navigation panel",
      "Sidebar implementation",
      "Modern CSS styling",
    ],
    concepts: [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Frontend Development",
    ],
  },
  {
    id: "P013",
    title: "Specialized Python",
    fields: [
      ["Category", "Educational Repository"],
      ["Primary Language", "Python"],
      ["Repository Type", "Learning Resource"],
      ["Status", "Active"],
    ],
    description:
      "Specialized Python is a structured repository containing well-documented implementations of Python libraries used in Data Science, Machine Learning, Deep Learning and Artificial Intelligence. The repository serves as a reference library for practical development and revision.",
    features: [
      "Library-wise documentation",
      "Example implementations",
      "Machine Learning utilities",
      "Deep Learning references",
      "Data Science workflows",
    ],
    concepts: [
      "Python Programming",
      "Technical Documentation",
      "Data Science",
      "Knowledge Organisation",
    ],
  },
  {
    id: "P014",
    title: "GATE Computer Science Compendium",
    fields: [
      ["Category", "Educational Repository"],
      ["Purpose", "Competitive Examination Preparation"],
      ["Repository Type", "Knowledge Base"],
      ["Status", "Active Development"],
    ],
    description:
      "A structured repository developed for GATE Computer Science preparation containing subject-wise notes, formula sheets, algorithm implementations, previous year questions, programming references and revision material.",
    features: [
      "Subject-wise notes",
      "Formula sheets",
      "Algorithm implementations",
      "Solved PYQs",
      "Revision resources",
    ],
    concepts: [
      "Technical Documentation",
      "Knowledge Management",
      "Algorithm Design",
      "Computer Science Fundamentals",
    ],
  },
  {
    id: "P015",
    title: "Tech Anthotheca",
    fields: [
      ["Category", "Technical Library"],
      ["Repository Type", "Learning Resource"],
      ["Status", "Active"],
    ],
    description:
      "Tech Anthotheca is a curated digital library containing engineering and technology books covering Computer Science, Mathematics, Data Science, Artificial Intelligence, Programming and related technical disciplines.",
    features: [
      "Curated technical books",
      "Engineering references",
      "Programming resources",
      "Computer Science material",
      "Mathematics references",
    ],
    concepts: [
      "Knowledge Management",
      "Technical Documentation",
      "Resource Organisation",
    ],
  },
  {
    id: "P016",
    title: "Git Commands",
    fields: [
      ["Category", "Developer Resource"],
      ["Technologies", "HTML, Git"],
      ["Status", "Completed"],
    ],
    description:
      "A quick-reference repository documenting commonly used Git commands for version control, collaboration and repository management. It serves as a concise learning companion for developers.",
    features: [
      "Frequently used Git commands",
      "Version control reference",
      "Repository management guide",
      "Developer cheat sheets",
    ],
    concepts: [
      "Git",
      "Version Control",
      "Software Development Workflow",
    ],
  },
  {
    id: "P017",
    title: "LeetCode Solutions",
    fields: [
      ["Category", "Algorithms & Data Structures"],
      ["Languages", "C++, Java"],
      ["Repository Type", "Programming Practice"],
      ["Status", "Ongoing"],
    ],
    description:
      "A curated collection of LeetCode problem solutions covering Data Structures, Algorithms, Dynamic Programming, Graphs, Trees, Searching, Sorting and other fundamental programming concepts using C++ and Java.",
    features: [
      "Problem-wise solutions",
      "Multiple programming languages",
      "Algorithmic explanations",
      "Interview preparation",
      "Competitive programming practice",
    ],
    concepts: [
      "Algorithms",
      "Data Structures",
      "Problem Solving",
      "Competitive Programming",
    ],
  },
  {
    id: "P018",
    title: "OpenAI GPTs",
    fields: [
      ["Category", "Artificial Intelligence"],
      ["Project Type", "Research & Experimentation Repository"],
      [
        "Primary Technologies",
        "Python, Large Language Models, Prompt Engineering",
      ],
      ["Status", "Active"],
    ],
    description:
      "OpenAI GPTs is a repository dedicated to experimenting with modern Large Language Models, prompt engineering techniques, model deployment workflows and natural language processing applications. The repository serves as a practical learning environment for generative AI.",
    features: [
      "Prompt Engineering",
      "LLM Experiments",
      "Model Deployment Concepts",
      "Natural Language Processing",
      "AI Workflows",
    ],
    concepts: [
      "Artificial Intelligence",
      "Large Language Models",
      "Natural Language Processing",
      "Machine Learning",
    ],
  },
  {
    id: "P019",
    title: "DataSanitized",
    fields: [
      ["Category", "Data Science"],
      ["Project Type", "Dataset Repository"],
      ["Status", "Active"],
    ],
    description:
      "DataSanitized is a repository containing carefully prepared datasets that have been cleaned, structured and organised for machine learning, analytics and research purposes.",
    features: [
      "Clean datasets",
      "Structured data",
      "Ready for Machine Learning",
      "Research friendly organisation",
    ],
    concepts: [
      "Data Cleaning",
      "Data Engineering",
      "Dataset Preparation",
      "Machine Learning Pipelines",
    ],
  },
  {
    id: "P020",
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
    id: "P021",
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
    id: "P022",
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
    id: "P023",
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
    id: "P024",
    title: "UPI",
    fields: [
      ["Category", "FinTech"],
      ["Project Type", "Payment Interface Prototype"],
      ["Status", "Active"],
    ],
    description:
      "A repository exploring concepts related to Unified Payments Interface (UPI), digital transactions and modern payment systems while studying secure and efficient financial technology implementations.",
    features: [
      "Digital payment concepts",
      "Transaction workflows",
      "Modern interface design",
      "Payment system exploration",
    ],
    concepts: [
      "FinTech",
      "Payment Systems",
      "Digital Transactions",
      "Software Architecture",
    ],
  },
  {
    id: "P025",
    title: "RayyanDigitalSpace",
    fields: [
      ["Category", "Personal Website"],
      ["Technologies", "HTML, CSS, JavaScript"],
      ["Status", "Completed"],
    ],
    description:
      "RayyanDigitalSpace represents one of my earlier personal web development projects focused on creating an online presence while experimenting with responsive layouts, UI design and frontend engineering practices.",
    features: [
      "Responsive website",
      "Portfolio pages",
      "Modern navigation",
      "Clean user interface",
    ],
    concepts: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
    ],
  },
  {
    id: "P026",
    title: "For Personal Usage",
    fields: [
      ["Category", "Utility Repository"],
      ["Repository Type", "Development Utilities"],
      ["Status", "Active"],
    ],
    description:
      "A collection of reusable scripts, templates, automation utilities and helper programs developed to improve productivity during software development and experimentation.",
    features: [
      "Reusable utilities",
      "Automation scripts",
      "Developer templates",
      "Personal workflow tools",
    ],
    concepts: [
      "Automation",
      "Software Utilities",
      "Developer Productivity",
      "Code Reusability",
    ],
  },
  {
    id: "P027",
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
  {
    id: "P028",
    title: "AWS MLU Explain",
    fields: [
      ["Category", "Cloud Computing"],
      ["Project Type", "Educational Repository"],
      ["Focus Area", "AWS Machine Learning University"],
      ["Status", "Active"],
    ],
    description:
      "AWS MLU Explain documents concepts learned from AWS Machine Learning University, providing explanations, notes and implementation references related to cloud computing, machine learning and modern AI infrastructure.",
    features: [
      "AWS learning notes",
      "Machine Learning concepts",
      "Cloud computing references",
      "Technical documentation",
    ],
    concepts: [
      "Cloud Computing",
      "AWS",
      "Machine Learning",
      "Technical Documentation",
    ],
  },
];

const repoStatRows = [
  ["Public Repositories", "28+"],
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
            A structured record of 28+ repositories spanning software
            engineering, artificial intelligence, data science and
            technical documentation — 2023 to present.
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
          Record last updated 2026 · 28 entries · Compiled for reference
        </p>
      </div>
    </main>
  );
}