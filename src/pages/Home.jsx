import styles from './Home.module.css'
import { Download, FileDown } from "lucide-react";

export default function Home() {
    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Rayyan_Ashraf_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section id="home">
            <h1>Rayyan Ashraf <sup className={styles.resumeIcon} title="Download Resume" onClick={downloadResume}><FileDown size={15} strokeWidth={1.5} /></sup></h1>

            <p>
                Graduate CS'26 • Into Quantitative Development
                <br />Low Latency • Systems • Mathematics • Finance
            </p>



            <div style={{ marginTop: "20px", marginBottom: "20px" }}>

                <p className={styles.justifyIntroduction}>
                    I am a B.Tech graduate in Computer Science Engineering with a strong interest in Quantitative Development, High-Performance Computing, Data Science, and Machine Learning. My academic background has provided me with a solid foundation in programming, algorithms, data structures, advanced mathematics, probability, statistics, and core computer science, enabling me to approach complex computational problems with analytical rigor.
                </p>
                <br />
                <p className={styles.justifyIntroduction}>
                    My goal is to build a career as a Quantitative Developer, applying high-performance C++, mathematical modeling, algorithmic thinking, and low-latency system design to develop efficient and scalable financial software. Alongside my interest in quantitative finance, I continue to explore Data Science and Machine Learning, believing that strong fundamentals, continuous learning, and disciplined problem-solving are essential for building impactful technology and tackling challenging engineering problems.
                </p>
                <br />

            </div>

            <hr></hr>


            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                <h2>What Defines Me</h2>

                <ul style={{
                    paddingLeft: "30px", // Increase or decrease as needed
                    lineHeight: "1.8",
                }}>
                    <li>Deep curiosity about how computers work beneath the surface.</li>
                    <li>Passion for solving challenging algorithmic and computational problems.</li>
                    <li>Strong analytical mindset rooted in first-principles thinking.</li>
                    <li>Interest in systems programming and performance-oriented software engineering.</li>
                    <li>Focused on writing efficient, reliable, and maintainable software.</li>
                    <li>Committed to continuous learning and consistent self-improvement, both technically and physically.</li>
                </ul>
            </div>
            <hr></hr>

            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                <h2>Philosophy</h2>

                <blockquote className={styles.philosophy}>
                    "I'm not scared to show my plans, as my ambition is protected by potential and not piracy."
                </blockquote>

                <p className={styles.justifyphilosophy}>
                    I believe that ideas alone have little value without the ability to execute them. Real advantage comes from knowledge, discipline, and the determination to turn ambition into reality. That's why I openly share my goals—not because they are easy to copy, but because meaningful achievement is built on consistent effort, continuous learning, and the potential to execute.
                </p>
            </div>
            <hr></hr>
            <div style={{ marginTop: "20px" }}>
                <h2>Navigation</h2>

                <p>
                    This portfolio is divided into dedicated sections that document
                    different aspects of my technical and personal journey.
                </p>

                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        marginTop: "10px",
                        border: "1px solid #ccc",
                    }}
                >
                    <tbody>
                        <tr>
                            <td style={{ width: "180px", verticalAlign: "top", border: "1px solid #ccc", padding: "8px" }}>
                                <strong>HOME</strong>
                            </td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                Introduction, engineering philosophy, personal overview, and navigation to the portfolio.
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                <strong>ABOUT</strong>
                            </td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                My background, education, technical journey, interests, and long-term career aspirations.
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                <strong>QUANT</strong>
                            </td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                My roadmap toward Quantitative Development, covering mathematics, finance, systems programming, and interview preparation.
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                <strong>GATE</strong>
                            </td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                Subject-wise preparation, revision plans, notes, resources, and progress tracking for GATE Computer Science.
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                <strong>PROJECTS</strong>
                            </td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                Personal, academic, AI/ML, web, systems, and software engineering projects with implementation details.
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                <strong>PROGRAMMED LIBRARIES</strong>
                            </td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                Custom libraries, reusable components, utilities, and tools developed for personal and professional use.
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                <strong>NOTES</strong>
                            </td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                Personal study notes, technical explanations, references, and learning resources across computer science.
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                <strong>PAPERS</strong>
                            </td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                Research papers, technical publications, literature reviews, and academic reading summaries.
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                <strong>LOGS</strong>
                            </td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                A chronological journal documenting my learning, development, milestones, and engineering journey.
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                <strong>ACHIEVEMENTS</strong>
                            </td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                Certifications, awards, recognitions, milestones, and notable accomplishments throughout my journey.
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                <strong>GYM</strong>
                            </td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                Workout logs, strength progression, fitness goals, body metrics, and personal records.
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                <strong>CONTACT</strong>
                            </td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                Professional contact information, social profiles, and ways to connect or collaborate.
                            </td>
                        </tr>

                        <tr>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                <strong>FAQs</strong>
                            </td>
                            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                                Frequently asked questions about my work, projects, interests, and portfolio.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
            <p className={styles.justifythanking}>
                <b>Thank you for visiting.</b>
            </p>

        </section>
    );
}