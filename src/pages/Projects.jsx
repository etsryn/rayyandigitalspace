export default function Projects() {

    const tableStyle = {
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "12px",
        marginBottom: "30px"
    };

    const cellStyle = {
        border: "1px solid #666",
        padding: "10px",
        textAlign: "left",
        verticalAlign: "top"
    };

    const headingCell = {
        ...cellStyle,
        fontWeight: "bold",
        width: "28%"
    };

    return (

        <section id="projects">



            {/* ===========================================================
                                OVERVIEW
            =========================================================== */}

            <h2>Overview</h2>

            <p>
                This repository archive represents my practical journey in
                Computer Science and Engineering. Every project has been
                developed with the objective of strengthening software
                engineering principles, problem-solving abilities, system
                design, debugging techniques, and technical documentation.
            </p>

            <p>
                My work spans multiple domains including web development,
                artificial intelligence, machine learning, data science,
                embedded systems, desktop applications, Android development,
                and educational resources. As my engineering journey
                progresses, this archive will continue expanding towards
                quantitative development, distributed systems, low-latency
                programming, and financial technologies.
            </p>
            <br />

            {/* ===========================================================
                            REPOSITORY STATISTICS
            =========================================================== */}

            <h2>Repository Statistics</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>
                        <td style={headingCell}>Public Repositories</td>
                        <td style={cellStyle}>28+</td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Primary Languages</td>
                        <td style={cellStyle}>
                            Python • JavaScript • C++ • Java • HTML • CSS
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Domains</td>
                        <td style={cellStyle}>
                            Software Engineering, Artificial Intelligence,
                            Machine Learning, Data Science, Embedded Systems,
                            Android Development, Web Development,
                            Educational Resources
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Development Period</td>
                        <td style={cellStyle}>2023 – Present</td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Repository Type</td>
                        <td style={cellStyle}>
                            Personal Projects, Open Source Repositories,
                            Learning Resources, Technical Documentation
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Current Status</td>
                        <td style={cellStyle}>
                            Active Development
                        </td>
                    </tr>

                </tbody>

            </table>

            {/* <br /> */}
            <br />
            {/* ===========================================================
                            REPOSITORY CATEGORIES
            =========================================================== */}

            <h2>Repository Categories</h2>

            <table style={tableStyle}>

                <thead>

                    <tr>

                        <th style={cellStyle}>
                            Category
                        </th>

                        <th style={cellStyle}>
                            Repository Count
                        </th>

                        <th style={cellStyle}>
                            Primary Focus
                        </th>

                    </tr>

                </thead>

                <tbody>

                    <tr>

                        <td style={cellStyle}>
                            Software Engineering
                        </td>

                        <td style={cellStyle}>
                            5
                        </td>

                        <td style={cellStyle}>
                            Desktop Applications, OOP, System Design
                        </td>

                    </tr>

                    <tr>

                        <td style={cellStyle}>
                            Web Development
                        </td>

                        <td style={cellStyle}>
                            5
                        </td>

                        <td style={cellStyle}>
                            React, HTML, CSS, JavaScript
                        </td>

                    </tr>

                    <tr>

                        <td style={cellStyle}>
                            Artificial Intelligence & Machine Learning
                        </td>

                        <td style={cellStyle}>
                            5
                        </td>

                        <td style={cellStyle}>
                            NLP, AI Systems, Predictive Models
                        </td>

                    </tr>

                    <tr>

                        <td style={cellStyle}>
                            Data Science
                        </td>

                        <td style={cellStyle}>
                            5
                        </td>

                        <td style={cellStyle}>
                            Analytics, Streamlit Applications,
                            Data Processing
                        </td>

                    </tr>

                    <tr>

                        <td style={cellStyle}>
                            Embedded Systems
                        </td>

                        <td style={cellStyle}>
                            1
                        </td>

                        <td style={cellStyle}>
                            Arduino, Sensors, Hardware Programming
                        </td>

                    </tr>

                    <tr>

                        <td style={cellStyle}>
                            Educational Repositories
                        </td>

                        <td style={cellStyle}>
                            5
                        </td>

                        <td style={cellStyle}>
                            Programming Resources,
                            Documentation, Notes
                        </td>

                    </tr>

                    <tr>

                        <td style={cellStyle}>
                            Knowledge Management
                        </td>

                        <td style={cellStyle}>
                            3
                        </td>

                        <td style={cellStyle}>
                            Productivity & Documentation
                        </td>

                    </tr>

                </tbody>

            </table>

            <br />

            {/* ===========================================================
                                PROJECT INDEX
            =========================================================== */}

            <h2>Project Index</h2>

            <table style={tableStyle}>

                <thead>

                    <tr>

                        <th style={cellStyle}>Project ID</th>
                        <th style={cellStyle}>Repository</th>
                        <th style={cellStyle}>Category</th>
                        <th style={cellStyle}>Status</th>

                    </tr>

                </thead>

                <tbody>

                    <tr>
                        <td style={cellStyle}>P001</td>
                        <td style={cellStyle}>DeepVision-ExAegis</td>
                        <td style={cellStyle}>Artificial Intelligence</td>
                        <td style={cellStyle}>Active</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P002</td>
                        <td style={cellStyle}>StudentVision</td>
                        <td style={cellStyle}>Web Platform</td>
                        <td style={cellStyle}>Active</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P003</td>
                        <td style={cellStyle}>BuildWithRayyan</td>
                        <td style={cellStyle}>Portfolio</td>
                        <td style={cellStyle}>Active</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P004</td>
                        <td style={cellStyle}>NRDAI</td>
                        <td style={cellStyle}>Data Science</td>
                        <td style={cellStyle}>Active</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P005</td>
                        <td style={cellStyle}>Natural Language Processing</td>
                        <td style={cellStyle}>Machine Learning</td>
                        <td style={cellStyle}>Active</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P006</td>
                        <td style={cellStyle}>To-Do Task Manager</td>
                        <td style={cellStyle}>Desktop Application</td>
                        <td style={cellStyle}>Completed</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P007</td>
                        <td style={cellStyle}>YouTube Clone</td>
                        <td style={cellStyle}>Web Development</td>
                        <td style={cellStyle}>Completed</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P008</td>
                        <td style={cellStyle}>Movie Ticket Reservation System</td>
                        <td style={cellStyle}>C++ Application</td>
                        <td style={cellStyle}>Completed</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P009</td>
                        <td style={cellStyle}>Linear Regression</td>
                        <td style={cellStyle}>Machine Learning</td>
                        <td style={cellStyle}>Active</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P010</td>
                        <td style={cellStyle}>Movie Ticket Reservation System</td>
                        <td style={cellStyle}>Software Engineering</td>
                        <td style={cellStyle}>Completed</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P011</td>
                        <td style={cellStyle}>Ultrasonic Distance Measurement and Alarming System</td>
                        <td style={cellStyle}>Embedded Systems</td>
                        <td style={cellStyle}>Completed</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P012</td>
                        <td style={cellStyle}>YouTube Clone</td>
                        <td style={cellStyle}>Frontend Development</td>
                        <td style={cellStyle}>Completed</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P013</td>
                        <td style={cellStyle}>Specialized Python</td>
                        <td style={cellStyle}>Educational Repository</td>
                        <td style={cellStyle}>Active</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P014</td>
                        <td style={cellStyle}>GATE Computer Science Compendium</td>
                        <td style={cellStyle}>Educational Repository</td>
                        <td style={cellStyle}>Active</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P015</td>
                        <td style={cellStyle}>Tech Anthotheca</td>
                        <td style={cellStyle}>Technical Library</td>
                        <td style={cellStyle}>Active</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P016</td>
                        <td style={cellStyle}>Git Commands</td>
                        <td style={cellStyle}>Developer Resource</td>
                        <td style={cellStyle}>Completed</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P017</td>
                        <td style={cellStyle}>LeetCode Solutions</td>
                        <td style={cellStyle}>Algorithms & Data Structures</td>
                        <td style={cellStyle}>Ongoing</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P018</td>
                        <td style={cellStyle}>OpenAI GPTs</td>
                        <td style={cellStyle}>Artificial Intelligence</td>
                        <td style={cellStyle}>Active</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P019</td>
                        <td style={cellStyle}>DataSanitized</td>
                        <td style={cellStyle}>Data Science</td>
                        <td style={cellStyle}>Active</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P020</td>
                        <td style={cellStyle}>Rayyan Notion</td>
                        <td style={cellStyle}>Knowledge Management</td>
                        <td style={cellStyle}>Active</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P021</td>
                        <td style={cellStyle}>RNotion Questions</td>
                        <td style={cellStyle}>Educational Repository</td>
                        <td style={cellStyle}>Active</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P022</td>
                        <td style={cellStyle}>RNotion Challenge</td>
                        <td style={cellStyle}>Programming Challenges</td>
                        <td style={cellStyle}>Active</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P023</td>
                        <td style={cellStyle}>Rayyan Digital Finance Corporation (RDFC)</td>
                        <td style={cellStyle}>Financial Technology</td>
                        <td style={cellStyle}>Active</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P024</td>
                        <td style={cellStyle}>UPI</td>
                        <td style={cellStyle}>Financial Technology</td>
                        <td style={cellStyle}>Active</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P025</td>
                        <td style={cellStyle}>RayyanDigitalSpace</td>
                        <td style={cellStyle}>Personal Website</td>
                        <td style={cellStyle}>Completed</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P026</td>
                        <td style={cellStyle}>For Personal Usage</td>
                        <td style={cellStyle}>Utility Repository</td>
                        <td style={cellStyle}>Active</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P027</td>
                        <td style={cellStyle}>Sawt Al-Radd</td>
                        <td style={cellStyle}>Web Development</td>
                        <td style={cellStyle}>Active</td>
                    </tr>

                    <tr>
                        <td style={cellStyle}>P028</td>
                        <td style={cellStyle}>AWS MLU Explain</td>
                        <td style={cellStyle}>Cloud Computing</td>
                        <td style={cellStyle}>Active</td>
                    </tr>

                </tbody>

            </table>

            <br />


            {/* ===========================================================
                            REPOSITORY STATISTICS
            =========================================================== */}

            <h2>Repository Statistics</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>
                        <td style={headingCell}>Public Repositories</td>
                        <td style={cellStyle}>28+</td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Primary Languages</td>
                        <td style={cellStyle}>
                            Python • JavaScript • C++ • Java • HTML • CSS
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Domains</td>
                        <td style={cellStyle}>
                            Software Engineering, Artificial Intelligence,
                            Machine Learning, Data Science, Embedded Systems,
                            Android Development, Web Development,
                            Educational Resources
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Development Period</td>
                        <td style={cellStyle}>2023 – Present</td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Repository Type</td>
                        <td style={cellStyle}>
                            Personal Projects, Open Source Repositories,
                            Learning Resources, Technical Documentation
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Current Status</td>
                        <td style={cellStyle}>
                            Active Development
                        </td>
                    </tr>

                </tbody>

            </table>

            <br />

            {/* ===========================================================
                            P001
=========================================================== */}

            <h2>P001 — DeepVision-ExAegis</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>
                        <td style={headingCell}>Category</td>
                        <td style={cellStyle}>Artificial Intelligence</td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Project Type</td>
                        <td style={cellStyle}>
                            AI-Powered Examination Proctoring System
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Technologies</td>
                        <td style={cellStyle}>
                            HTML, CSS, JavaScript, Artificial Intelligence, Computer Vision
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Status</td>
                        <td style={cellStyle}>
                            Active Development
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Difficulty</td>
                        <td style={cellStyle}>
                            Advanced
                        </td>
                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                DeepVision-ExAegis is an AI-powered online examination proctoring
                system developed to enhance the integrity of remote assessments.
                The project combines artificial intelligence, computer vision and
                behavioural analysis techniques to monitor candidates, detect
                suspicious activities and assist institutions in conducting secure
                online examinations.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>AI-assisted candidate monitoring</li>

                <li>Facial authentication</li>

                <li>Gaze tracking</li>

                <li>Speech activity detection</li>

                <li>Behaviour analysis</li>

                <li>Secure examination workflow</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>Artificial Intelligence</li>

                <li>Computer Vision</li>

                <li>Behaviour Analysis</li>

                <li>Frontend Development</li>

                <li>System Design</li>

            </ul>

            <br />

            {/* ===========================================================
                            P002
=========================================================== */}

            <h2>P002 — StudentVision</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>
                        <td style={headingCell}>Category</td>
                        <td style={cellStyle}>Educational Platform</td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Project Type</td>
                        <td style={cellStyle}>
                            Student Learning Platform
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Technologies</td>
                        <td style={cellStyle}>
                            HTML, CSS, JavaScript
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Status</td>
                        <td style={cellStyle}>
                            Active Development
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Difficulty</td>
                        <td style={cellStyle}>
                            Intermediate
                        </td>
                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                StudentVision is an educational web platform designed to provide
                students with a centralized environment for learning Computer
                Science, Data Science, Artificial Intelligence and Software
                Development. The platform aims to simplify access to technical
                resources, documentation, datasets and programming materials.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Educational resource portal</li>

                <li>Dataset collection</li>

                <li>Student learning materials</li>

                <li>Structured navigation</li>

                <li>Responsive user interface</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>Frontend Development</li>

                <li>User Experience Design</li>

                <li>Information Architecture</li>

                <li>Responsive Web Design</li>

            </ul>

            <br />

            {/* ===========================================================
                            P003
=========================================================== */}

            <h2>P003 — BuildWithRayyan</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>
                        <td style={headingCell}>Category</td>
                        <td style={cellStyle}>Portfolio Website</td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Project Type</td>
                        <td style={cellStyle}>
                            Professional Engineering Portfolio
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Technologies</td>
                        <td style={cellStyle}>
                            React, JavaScript, HTML, CSS
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Status</td>
                        <td style={cellStyle}>
                            Ongoing
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Difficulty</td>
                        <td style={cellStyle}>
                            Advanced
                        </td>
                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                BuildWithRayyan is my personal engineering portfolio developed
                using React. Unlike conventional portfolio websites, it documents
                technical projects, engineering reports, fitness analytics,
                learning progress, technical blogs and long-term professional
                development in a structured and report-oriented format.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Responsive React application</li>

                <li>Engineering documentation layout</li>

                <li>Project archive</li>

                <li>Fitness analytics dashboard</li>

                <li>Technical blog integration</li>

                <li>Professional portfolio design</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>React Components</li>

                <li>React Router</li>

                <li>Responsive Design</li>

                <li>Frontend Architecture</li>

                <li>Component Reusability</li>

            </ul>

            <br />
            {/* ===========================================================
                                P004
            =========================================================== */}

            <h2>P004 — NRDAI</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>
                        <td style={headingCell}>Category</td>
                        <td style={cellStyle}>Data Science & Analytics</td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Project Type</td>
                        <td style={cellStyle}>
                            Interactive Data Analytics Dashboard
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Technologies</td>
                        <td style={cellStyle}>
                            Python, Streamlit, Plotly, Pandas
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Status</td>
                        <td style={cellStyle}>
                            Active
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Difficulty</td>
                        <td style={cellStyle}>
                            Advanced
                        </td>
                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                NRDAI is an interactive Streamlit dashboard developed for
                analysing rape case statistics across Indian States and Union
                Territories. The project focuses on transforming historical
                datasets into meaningful visual insights through interactive
                charts, summaries and statistical exploration.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Interactive dashboards</li>
                <li>Plotly visualisations</li>
                <li>State-wise analysis</li>
                <li>Age-wise categorisation</li>
                <li>Trend analysis</li>
                <li>Statistical summaries</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>Exploratory Data Analysis</li>
                <li>Data Visualisation</li>
                <li>Dashboard Development</li>
                <li>Interactive Analytics</li>

            </ul>

            <br />

            {/* ===========================================================
                                P005
            =========================================================== */}

            <h2>P005 — Natural Language Processing</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>
                        <td style={headingCell}>Category</td>
                        <td style={cellStyle}>
                            Machine Learning
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Technologies</td>
                        <td style={cellStyle}>
                            Python, NLP Libraries
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Status</td>
                        <td style={cellStyle}>
                            Active
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Focus Area</td>
                        <td style={cellStyle}>
                            Natural Language Processing
                        </td>
                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                This repository explores Natural Language Processing through
                multiple experiments involving text processing, feature
                extraction and language understanding. It serves as a learning
                repository documenting practical implementation of NLP
                techniques.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Text preprocessing</li>
                <li>Tokenisation</li>
                <li>Feature extraction</li>
                <li>Language modelling experiments</li>
                <li>Machine learning workflows</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>Natural Language Processing</li>
                <li>Machine Learning</li>
                <li>Python Programming</li>
                <li>Data Preparation</li>

            </ul>

            <br />

            {/* ===========================================================
                                P006
            =========================================================== */}

            <h2>P006 — Python To-Do Task Manager</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>
                        <td style={headingCell}>Category</td>
                        <td style={cellStyle}>
                            Desktop Application
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Language</td>
                        <td style={cellStyle}>
                            Python
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>GUI Framework</td>
                        <td style={cellStyle}>
                            Tkinter
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Status</td>
                        <td style={cellStyle}>
                            Completed
                        </td>
                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                A feature-rich desktop task management application developed
                using Python and Tkinter. The project demonstrates desktop GUI
                development, local data persistence and integration of
                additional utilities such as text-to-speech and webcam
                functionality.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Password protection</li>
                <li>Task priorities</li>
                <li>Due-date management</li>
                <li>Task completion tracking</li>
                <li>Text-to-speech support</li>
                <li>Camera integration</li>
                <li>Persistent file storage</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>GUI Programming</li>
                <li>Object-Oriented Programming</li>
                <li>File Handling</li>
                <li>Desktop Application Development</li>

            </ul>

            <br />

            {/* ===========================================================
                                P007
            =========================================================== */}

            <h2>P007 — PDF Manipulator</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>
                        <td style={headingCell}>Category</td>
                        <td style={cellStyle}>
                            Productivity Tool
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Technologies</td>
                        <td style={cellStyle}>
                            Python, Streamlit
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Status</td>
                        <td style={cellStyle}>
                            Completed
                        </td>
                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                PDF Manipulator is a Streamlit-based application providing
                multiple PDF utilities through an interactive web interface.
                The project demonstrates document processing and user-focused
                tool development.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>PDF processing</li>
                <li>Document management</li>
                <li>Interactive web interface</li>
                <li>Simple workflow automation</li>

            </ul>

            <br />

            {/* ===========================================================
                                P008
            =========================================================== */}

            <h2>P008 — File Type Converter</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>
                        <td style={headingCell}>Category</td>
                        <td style={cellStyle}>
                            Productivity Tool
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Technologies</td>
                        <td style={cellStyle}>
                            Python, Streamlit
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Status</td>
                        <td style={cellStyle}>
                            Completed
                        </td>
                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                File Type Converter is a Streamlit application that enables
                users to convert files between different supported formats
                through a simple browser interface. The project focuses on
                usability, automation and document processing.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Multiple file format conversion</li>
                <li>Browser-based interface</li>
                <li>Simple workflow</li>
                <li>Streamlit application</li>

            </ul>

            <br />

            {/* ===========================================================
                                P009
            =========================================================== */}

            <h2>P009 — Linear Regression</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>
                        <td style={headingCell}>Category</td>
                        <td style={cellStyle}>
                            Machine Learning
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Project Type</td>
                        <td style={cellStyle}>
                            Predictive Modelling Repository
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Technologies</td>
                        <td style={cellStyle}>
                            Python, NumPy, Pandas,
                            Matplotlib, Scikit-Learn
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Status</td>
                        <td style={cellStyle}>
                            Active
                        </td>
                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                A collection of Linear Regression models demonstrating
                supervised learning on different datasets. The repository
                explores regression analysis, feature engineering,
                model evaluation and prediction using various machine
                learning workflows.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Regression model implementation</li>

                <li>Model evaluation</li>

                <li>Prediction analysis</li>

                <li>Dataset experimentation</li>

                <li>Performance comparison</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>Machine Learning</li>

                <li>Regression Analysis</li>

                <li>Data Visualization</li>

                <li>Feature Engineering</li>

            </ul>

            <br />

            {/* ===========================================================
                                P010
            =========================================================== */}

            <h2>P010 — Movie Ticket Reservation System</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>

                        <td style={headingCell}>
                            Category
                        </td>

                        <td style={cellStyle}>
                            Software Engineering
                        </td>

                    </tr>

                    <tr>

                        <td style={headingCell}>
                            Programming Language
                        </td>

                        <td style={cellStyle}>
                            C++
                        </td>

                    </tr>

                    <tr>

                        <td style={headingCell}>
                            Concepts Used
                        </td>

                        <td style={cellStyle}>
                            Object-Oriented Programming
                        </td>

                    </tr>

                    <tr>

                        <td style={headingCell}>
                            Status
                        </td>

                        <td style={cellStyle}>
                            Completed
                        </td>

                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                A console-based Movie Ticket Reservation System
                developed using C++. The application demonstrates
                Object-Oriented Programming concepts including classes,
                encapsulation and structured program design while
                simulating a movie reservation workflow.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Movie booking system</li>

                <li>Ticket reservation</li>

                <li>User interaction</li>

                <li>Console interface</li>

                <li>OOP implementation</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>Object-Oriented Programming</li>

                <li>Class Design</li>

                <li>Data Structures</li>

                <li>Software Design</li>

            </ul>

            <br />

            {/* ===========================================================
                                P011
            =========================================================== */}

            <h2>P011 — Ultrasonic Distance Measurement and Alarming System</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>

                        <td style={headingCell}>
                            Category
                        </td>

                        <td style={cellStyle}>
                            Embedded Systems
                        </td>

                    </tr>

                    <tr>

                        <td style={headingCell}>
                            Hardware
                        </td>

                        <td style={cellStyle}>
                            Arduino Uno, Ultrasonic Sensor
                        </td>

                    </tr>

                    <tr>

                        <td style={headingCell}>
                            Programming Language
                        </td>

                        <td style={cellStyle}>
                            Arduino C++
                        </td>

                    </tr>

                    <tr>

                        <td style={headingCell}>
                            Status
                        </td>

                        <td style={cellStyle}>
                            Completed
                        </td>

                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                An embedded system designed to continuously measure
                the distance of nearby objects using an ultrasonic
                sensor and trigger alarms whenever the measured
                distance crosses predefined thresholds.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Real-time distance monitoring</li>

                <li>Obstacle detection</li>

                <li>Alarm triggering</li>

                <li>Sensor integration</li>

                <li>Microcontroller programming</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>Embedded Systems</li>

                <li>Sensor Programming</li>

                <li>Arduino Development</li>

                <li>Electronics</li>

            </ul>

            <br />

            {/* ===========================================================
                                P012
            =========================================================== */}

            <h2>P012 — YouTube Clone</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>

                        <td style={headingCell}>
                            Category
                        </td>

                        <td style={cellStyle}>
                            Frontend Development
                        </td>

                    </tr>

                    <tr>

                        <td style={headingCell}>
                            Technologies
                        </td>

                        <td style={cellStyle}>
                            HTML, CSS
                        </td>

                    </tr>

                    <tr>

                        <td style={headingCell}>
                            Status
                        </td>

                        <td style={cellStyle}>
                            Completed
                        </td>

                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                A responsive frontend recreation of YouTube developed
                using HTML and CSS. The project focuses on webpage
                layout design, responsive styling, navigation and
                recreating a modern user interface.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Responsive layout</li>

                <li>Video grid interface</li>

                <li>Navigation panel</li>

                <li>Sidebar implementation</li>

                <li>Modern CSS styling</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>HTML5</li>

                <li>CSS3</li>

                <li>Responsive Design</li>

                <li>Frontend Development</li>

            </ul>

            <br />

            {/* ===========================================================
                                P013
            =========================================================== */}

            <h2>P013 — Specialized Python</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>
                        <td style={headingCell}>Category</td>
                        <td style={cellStyle}>
                            Educational Repository
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Primary Language</td>
                        <td style={cellStyle}>
                            Python
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Repository Type</td>
                        <td style={cellStyle}>
                            Learning Resource
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Status</td>
                        <td style={cellStyle}>
                            Active
                        </td>
                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                Specialized Python is a structured repository containing
                well-documented implementations of Python libraries used in
                Data Science, Machine Learning, Deep Learning and Artificial
                Intelligence. The repository serves as a reference library
                for practical development and revision.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Library-wise documentation</li>

                <li>Example implementations</li>

                <li>Machine Learning utilities</li>

                <li>Deep Learning references</li>

                <li>Data Science workflows</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>Python Programming</li>

                <li>Technical Documentation</li>

                <li>Data Science</li>

                <li>Knowledge Organisation</li>

            </ul>

            <br />

            {/* ===========================================================
                                P014
            =========================================================== */}

            <h2>P014 — GATE Computer Science Compendium</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>
                        <td style={headingCell}>Category</td>
                        <td style={cellStyle}>
                            Educational Repository
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Purpose</td>
                        <td style={cellStyle}>
                            Competitive Examination Preparation
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Repository Type</td>
                        <td style={cellStyle}>
                            Knowledge Base
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Status</td>
                        <td style={cellStyle}>
                            Active Development
                        </td>
                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                A structured repository developed for GATE Computer Science
                preparation containing subject-wise notes, formula sheets,
                algorithm implementations, previous year questions,
                programming references and revision material.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Subject-wise notes</li>

                <li>Formula sheets</li>

                <li>Algorithm implementations</li>

                <li>Solved PYQs</li>

                <li>Revision resources</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>Technical Documentation</li>

                <li>Knowledge Management</li>

                <li>Algorithm Design</li>

                <li>Computer Science Fundamentals</li>

            </ul>

            <br />

            {/* ===========================================================
                                P015
            =========================================================== */}

            <h2>P015 — Tech Anthotheca</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>
                        <td style={headingCell}>Category</td>
                        <td style={cellStyle}>
                            Technical Library
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Repository Type</td>
                        <td style={cellStyle}>
                            Learning Resource
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Status</td>
                        <td style={cellStyle}>
                            Active
                        </td>
                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                Tech Anthotheca is a curated digital library containing
                engineering and technology books covering Computer Science,
                Mathematics, Data Science, Artificial Intelligence,
                Programming and related technical disciplines.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Curated technical books</li>

                <li>Engineering references</li>

                <li>Programming resources</li>

                <li>Computer Science material</li>

                <li>Mathematics references</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>Knowledge Management</li>

                <li>Technical Documentation</li>

                <li>Resource Organisation</li>

            </ul>

            <br />

            {/* ===========================================================
                                P016
            =========================================================== */}

            <h2>P016 — Git Commands</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>
                        <td style={headingCell}>Category</td>
                        <td style={cellStyle}>
                            Developer Resource
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Technologies</td>
                        <td style={cellStyle}>
                            HTML, Git
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Status</td>
                        <td style={cellStyle}>
                            Completed
                        </td>
                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                A quick-reference repository documenting commonly used Git
                commands for version control, collaboration and repository
                management. It serves as a concise learning companion for
                developers.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Frequently used Git commands</li>

                <li>Version control reference</li>

                <li>Repository management guide</li>

                <li>Developer cheat sheets</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>Git</li>

                <li>Version Control</li>

                <li>Software Development Workflow</li>

            </ul>

            <br />

            {/* ===========================================================
                                P017
            =========================================================== */}

            <h2>P017 — LeetCode Solutions</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>
                        <td style={headingCell}>Category</td>
                        <td style={cellStyle}>
                            Algorithms & Data Structures
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Languages</td>
                        <td style={cellStyle}>
                            C++, Java
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Repository Type</td>
                        <td style={cellStyle}>
                            Programming Practice
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Status</td>
                        <td style={cellStyle}>
                            Ongoing
                        </td>
                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                A curated collection of LeetCode problem solutions covering
                Data Structures, Algorithms, Dynamic Programming, Graphs,
                Trees, Searching, Sorting and other fundamental programming
                concepts using C++ and Java.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Problem-wise solutions</li>

                <li>Multiple programming languages</li>

                <li>Algorithmic explanations</li>

                <li>Interview preparation</li>

                <li>Competitive programming practice</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>Algorithms</li>

                <li>Data Structures</li>

                <li>Problem Solving</li>

                <li>Competitive Programming</li>

            </ul>

            <br />

            {/* ===========================================================
                                P018
            =========================================================== */}

            <h2>P018 — OpenAI GPTs</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>
                        <td style={headingCell}>Category</td>
                        <td style={cellStyle}>
                            Artificial Intelligence
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Project Type</td>
                        <td style={cellStyle}>
                            Research & Experimentation Repository
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Primary Technologies</td>
                        <td style={cellStyle}>
                            Python, Large Language Models, Prompt Engineering
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Status</td>
                        <td style={cellStyle}>
                            Active
                        </td>
                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                OpenAI GPTs is a repository dedicated to experimenting with
                modern Large Language Models, prompt engineering techniques,
                model deployment workflows and natural language processing
                applications. The repository serves as a practical learning
                environment for generative AI.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Prompt Engineering</li>

                <li>LLM Experiments</li>

                <li>Model Deployment Concepts</li>

                <li>Natural Language Processing</li>

                <li>AI Workflows</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>Artificial Intelligence</li>

                <li>Large Language Models</li>

                <li>Natural Language Processing</li>

                <li>Machine Learning</li>

            </ul>

            <br />

            {/* ===========================================================
                                P019
            =========================================================== */}

            <h2>P019 — DataSanitized</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>
                        <td style={headingCell}>Category</td>
                        <td style={cellStyle}>
                            Data Science
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Project Type</td>
                        <td style={cellStyle}>
                            Dataset Repository
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Status</td>
                        <td style={cellStyle}>
                            Active
                        </td>
                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                DataSanitized is a repository containing carefully prepared
                datasets that have been cleaned, structured and organised for
                machine learning, analytics and research purposes.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Clean datasets</li>

                <li>Structured data</li>

                <li>Ready for Machine Learning</li>

                <li>Research friendly organisation</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>Data Cleaning</li>

                <li>Data Engineering</li>

                <li>Dataset Preparation</li>

                <li>Machine Learning Pipelines</li>

            </ul>

            <br />

            {/* ===========================================================
                                P020
            =========================================================== */}

            <h2>P020 — Rayyan Notion</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>
                        <td style={headingCell}>Category</td>
                        <td style={cellStyle}>
                            Knowledge Management
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Technologies</td>
                        <td style={cellStyle}>
                            JavaScript
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Status</td>
                        <td style={cellStyle}>
                            Active
                        </td>
                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                Rayyan Notion is a productivity-oriented repository focused
                on organising technical knowledge, documentation and learning
                material into a structured digital workspace.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Knowledge organisation</li>

                <li>Technical documentation</li>

                <li>Structured learning resources</li>

                <li>Digital workspace</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>Knowledge Management</li>

                <li>Documentation</li>

                <li>Information Organisation</li>

            </ul>

            <br />

            {/* ===========================================================
                                P021
            =========================================================== */}

            <h2>P021 — RNotion Questions</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>
                        <td style={headingCell}>Category</td>
                        <td style={cellStyle}>
                            Educational Repository
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Language</td>
                        <td style={cellStyle}>
                            JavaScript
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Status</td>
                        <td style={cellStyle}>
                            Active
                        </td>
                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                A structured collection of technical questions designed for
                learning, revision and interview preparation across multiple
                Computer Science domains.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Question bank</li>

                <li>Revision material</li>

                <li>Interview preparation</li>

                <li>Structured organisation</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>Knowledge Management</li>

                <li>Technical Documentation</li>

                <li>Learning Resources</li>

            </ul>

            <br />

            {/* ===========================================================
                                P022
            =========================================================== */}

            <h2>P022 — RNotion Challenge</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>
                        <td style={headingCell}>Category</td>
                        <td style={cellStyle}>
                            Programming Challenges
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Language</td>
                        <td style={cellStyle}>
                            JavaScript
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Status</td>
                        <td style={cellStyle}>
                            Active
                        </td>
                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                A repository containing programming challenges, problem sets
                and coding exercises designed to strengthen logical thinking,
                programming skills and algorithmic problem solving.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Coding challenges</li>

                <li>Programming exercises</li>

                <li>Skill development</li>

                <li>Problem-solving practice</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>Algorithms</li>

                <li>Problem Solving</li>

                <li>Programming Practice</li>

                <li>Logical Thinking</li>

            </ul>

            <br />

            {/* ===========================================================
                                P023
            =========================================================== */}

            <h2>P023 — Rayyan Digital Finance Corporation (RDFC)</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>
                        <td style={headingCell}>Category</td>
                        <td style={cellStyle}>
                            Financial Technology
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Project Type</td>
                        <td style={cellStyle}>
                            Digital Finance Platform
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Primary Technologies</td>
                        <td style={cellStyle}>
                            Web Technologies
                        </td>
                    </tr>

                    <tr>
                        <td style={headingCell}>Repository Status</td>
                        <td style={cellStyle}>
                            Active Development
                        </td>
                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                Rayyan Digital Finance Corporation (RDFC) is a conceptual
                fintech platform developed to explore modern digital finance
                systems, financial services, secure transactions and scalable
                financial software architecture.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Digital finance platform</li>

                <li>Financial service architecture</li>

                <li>Modern web interface</li>

                <li>Scalable project structure</li>

                <li>Professional documentation</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>Financial Technology</li>

                <li>System Architecture</li>

                <li>Frontend Development</li>

                <li>Software Engineering</li>

            </ul>

            <br />

            {/* ===========================================================
                                P024
            =========================================================== */}

            <h2>P024 — UPI</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>

                        <td style={headingCell}>
                            Category
                        </td>

                        <td style={cellStyle}>
                            FinTech
                        </td>

                    </tr>

                    <tr>

                        <td style={headingCell}>
                            Project Type
                        </td>

                        <td style={cellStyle}>
                            Payment Interface Prototype
                        </td>

                    </tr>

                    <tr>

                        <td style={headingCell}>
                            Status
                        </td>

                        <td style={cellStyle}>
                            Active
                        </td>

                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                A repository exploring concepts related to Unified Payments
                Interface (UPI), digital transactions and modern payment
                systems while studying secure and efficient financial
                technology implementations.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Digital payment concepts</li>

                <li>Transaction workflows</li>

                <li>Modern interface design</li>

                <li>Payment system exploration</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>FinTech</li>

                <li>Payment Systems</li>

                <li>Digital Transactions</li>

                <li>Software Architecture</li>

            </ul>

            <br />

            {/* ===========================================================
                                P025
            =========================================================== */}

            <h2>P025 — RayyanDigitalSpace</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>

                        <td style={headingCell}>
                            Category
                        </td>

                        <td style={cellStyle}>
                            Personal Website
                        </td>

                    </tr>

                    <tr>

                        <td style={headingCell}>
                            Technologies
                        </td>

                        <td style={cellStyle}>
                            HTML, CSS, JavaScript
                        </td>

                    </tr>

                    <tr>

                        <td style={headingCell}>
                            Status
                        </td>

                        <td style={cellStyle}>
                            Completed
                        </td>

                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                RayyanDigitalSpace represents one of my earlier personal web
                development projects focused on creating an online presence
                while experimenting with responsive layouts, UI design and
                frontend engineering practices.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Responsive website</li>

                <li>Portfolio pages</li>

                <li>Modern navigation</li>

                <li>Clean user interface</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>HTML5</li>

                <li>CSS3</li>

                <li>JavaScript</li>

                <li>Responsive Design</li>

            </ul>

            <br />

            {/* ===========================================================
                                P026
            =========================================================== */}

            <h2>P026 — For Personal Usage</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>

                        <td style={headingCell}>
                            Category
                        </td>

                        <td style={cellStyle}>
                            Utility Repository
                        </td>

                    </tr>

                    <tr>

                        <td style={headingCell}>
                            Repository Type
                        </td>

                        <td style={cellStyle}>
                            Development Utilities
                        </td>

                    </tr>

                    <tr>

                        <td style={headingCell}>
                            Status
                        </td>

                        <td style={cellStyle}>
                            Active
                        </td>

                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                A collection of reusable scripts, templates, automation
                utilities and helper programs developed to improve
                productivity during software development and experimentation.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Reusable utilities</li>

                <li>Automation scripts</li>

                <li>Developer templates</li>

                <li>Personal workflow tools</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>Automation</li>

                <li>Software Utilities</li>

                <li>Developer Productivity</li>

                <li>Code Reusability</li>

            </ul>

            <br />

            {/* ===========================================================
                                P027
            =========================================================== */}

            <h2>P027 — Sawt Al-Radd</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>

                        <td style={headingCell}>
                            Category
                        </td>

                        <td style={cellStyle}>
                            Web Development
                        </td>

                    </tr>

                    <tr>

                        <td style={headingCell}>
                            Project Type
                        </td>

                        <td style={cellStyle}>
                            Informational Website
                        </td>

                    </tr>

                    <tr>

                        <td style={headingCell}>
                            Status
                        </td>

                        <td style={cellStyle}>
                            Active
                        </td>

                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                Sawt Al-Radd is a web-based project developed to publish and
                organize informational content in a structured and accessible
                format using modern frontend development practices.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>Responsive web pages</li>

                <li>Content organisation</li>

                <li>Modern UI layout</li>

                <li>Structured navigation</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>Frontend Development</li>

                <li>Responsive Design</li>

                <li>Information Architecture</li>

                <li>User Experience</li>

            </ul>

            <br />

            {/* ===========================================================
                                P028
            =========================================================== */}

            <h2>P028 — AWS MLU Explain</h2>

            <table style={tableStyle}>

                <tbody>

                    <tr>

                        <td style={headingCell}>
                            Category
                        </td>

                        <td style={cellStyle}>
                            Cloud Computing
                        </td>

                    </tr>

                    <tr>

                        <td style={headingCell}>
                            Project Type
                        </td>

                        <td style={cellStyle}>
                            Educational Repository
                        </td>

                    </tr>

                    <tr>

                        <td style={headingCell}>
                            Focus Area
                        </td>

                        <td style={cellStyle}>
                            AWS Machine Learning University
                        </td>

                    </tr>

                    <tr>

                        <td style={headingCell}>
                            Status
                        </td>

                        <td style={cellStyle}>
                            Active
                        </td>

                    </tr>

                </tbody>

            </table>

            <h3>Description</h3>

            <p>

                AWS MLU Explain documents concepts learned from AWS Machine
                Learning University, providing explanations, notes and
                implementation references related to cloud computing,
                machine learning and modern AI infrastructure.

            </p>

            <h3>Major Features</h3>

            <ul>

                <li>AWS learning notes</li>

                <li>Machine Learning concepts</li>

                <li>Cloud computing references</li>

                <li>Technical documentation</li>

            </ul>

            <h3>Engineering Concepts</h3>

            <ul>

                <li>Cloud Computing</li>

                <li>AWS</li>

                <li>Machine Learning</li>

                <li>Technical Documentation</li>

            </ul>

            <br />

        </section>
    );
}