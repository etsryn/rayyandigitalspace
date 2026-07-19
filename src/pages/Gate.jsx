import styles from "./Gate.module.css";
import { Check, CheckCircle, BadgeCheck, LoaderCircle, Clock3, RefreshCw, Cog } from "lucide-react";

export default function Gate() {
    return (
        <section className={styles.page}>
            <div className={styles.dashboard}>



                {/* Hero */}
                <div className={`${styles.card} ${styles.hero}`}>
                    <p className={styles.tag}>ENGINEERING MASTERY</p>
                    <br />
                    <h1>Graduate Aptitude Test in Engineering (GATE) — 2027</h1>
                    <h3><sup>Computer Science & Information Technology • Data Science & Artificial Intelligence</sup></h3>
                    <h1><strong>Indian Institute of Technology Madras (IIT Madras)</strong><sub><span className={styles.meta}>~(Conducting Institute)</span></sub></h1>

                    <p className={`${styles.heroText} ${styles.justifyContent}`}>
                        My preparation for GATE is centered on mastering the core principles of Computer Science rather than simply completing an examination syllabus. Every topic I study is approached with the intention of understanding how it contributes to building efficient software, reliable systems, and better engineering decisions. I consider this preparation a long-term investment in technical depth that will support my work in systems programming, quantitative development, and other performance-critical software domains.
                    </p>
                </div>

                {/* Why GATE */}
                <div className={`${styles.card} ${styles.fullWidth}`}>
                    <div className={styles.cardTitle}>
                        Why GATE?
                    </div>

                    <p className={styles.justifyContent}>
                        GATE represents one of the strongest benchmarks for
                        analytical thinking and engineering fundamentals.
                        Preparing for it develops a deeper understanding of
                        algorithms, operating systems, computer architecture,
                        databases, networks, compilers, and mathematics.
                    </p>

                    <p className={styles.justifyContent}>
                        Beyond qualifying an examination, the preparation
                        cultivates disciplined problem solving, systematic
                        reasoning, and the ability to understand software from
                        first principles rather than relying solely on modern
                        abstractions.
                    </p>
                </div>

                {/* Subject Coverage */}
                <div className={`${styles.card} ${styles.subjectSection}`}>
                    <div className={styles.cardTitle}>
                        Examination Coverage
                    </div>

                    <div className={styles.subjectGrid}>

                        <div className={`${styles.subjectCard} ${styles.math}`}>
                            <h4>Engineering Mathematics <LoaderCircle size={15} color="red" className={styles.spinning} /></h4>
                            <p>
                                <strong>Discrete Mathematics:</strong> Propositional & First Order Logic,
                                Sets, Relations, Functions, Partial Orders, Lattices, Monoids,
                                Groups, Graphs (Connectivity, Matching, Colouring), Counting,
                                Recurrence Relations, Generating Functions.
                                <br /><br />
                                <strong>Linear Algebra:</strong> Matrices, Determinants, Systems of
                                Linear Equations, Eigenvalues, Eigenvectors, LU Decomposition.
                                <br /><br />
                                <strong>Calculus:</strong> Limits, Continuity,
                                Differentiability, Maxima & Minima, Mean Value Theorem,
                                Integration.
                                <br /><br />
                                <strong>Probability & Statistics:</strong> Random Variables,
                                Uniform, Normal, Exponential, Poisson & Binomial Distributions,
                                Mean, Median, Mode, Standard Deviation, Conditional Probability,
                                Bayes' Theorem.
                            </p>
                        </div>

                        <div className={`${styles.subjectCard} ${styles.logic}`}>
                            <h4>Digital Logic <LoaderCircle size={15} color="red" className={styles.spinning} /></h4>
                            <p>
                                Boolean Algebra, Combinational Circuits, Sequential Circuits,
                                Logic Minimization, Number Representations,
                                Fixed Point & Floating Point Computer Arithmetic.
                            </p>
                        </div>

                        <div className={`${styles.subjectCard} ${styles.coa}`}>
                            <h4>Computer Organization & Architecture <LoaderCircle size={15} color="red" className={styles.spinning} /></h4>
                            <p>
                                Machine Instructions, Addressing Modes, ALU, Datapath,
                                Control Unit, Instruction Pipelining, Pipeline Hazards,
                                Memory Hierarchy (Cache, Main Memory, Secondary Storage),
                                Interrupts, DMA, I/O Interface.
                            </p>
                        </div>

                        <div className={`${styles.subjectCard} ${styles.programming}`}>
                            <h4>Programming & Data Structures <LoaderCircle size={15} color="red" className={styles.spinning} /></h4>
                            <p>
                                Programming in C, Recursion, Arrays, Stacks, Queues,
                                Linked Lists, Trees, Binary Search Trees,
                                Binary Heaps, Graphs.
                            </p>
                        </div>

                        <div className={`${styles.subjectCard} ${styles.algorithms}`}>
                            <h4>Algorithms <LoaderCircle size={15} color="red" className={styles.spinning} /></h4>
                            <p>
                                Searching, Sorting, Hashing,
                                Asymptotic Time & Space Complexity,
                                Greedy Algorithms,
                                Divide & Conquer,
                                Dynamic Programming,
                                Graph Traversals,
                                Minimum Spanning Trees,
                                Shortest Path Algorithms.
                            </p>
                        </div>

                        <div className={`${styles.subjectCard} ${styles.toc}`}>
                            <h4>Theory of Computation <LoaderCircle size={15} color="red" className={styles.spinning} /></h4>
                            <p>
                                Regular Expressions,
                                Finite Automata,
                                Context-Free Grammars,
                                Pushdown Automata,
                                Regular & Context-Free Languages,
                                Pumping Lemma,
                                Turing Machines,
                                Undecidability.
                            </p>
                        </div>

                        <div className={`${styles.subjectCard} ${styles.compiler}`}>
                            <h4>Compiler Design <LoaderCircle size={15} color="red" className={styles.spinning} /></h4>
                            <p>
                                Lexical Analysis,
                                Parsing,
                                Syntax Directed Translation,
                                Runtime Environments,
                                Intermediate Code Generation,
                                Local Optimization,
                                Data Flow Analysis,
                                Constant Propagation,
                                Liveness Analysis,
                                Common Subexpression Elimination.
                            </p>
                        </div>

                        <div className={`${styles.subjectCard} ${styles.os}`}>
                            <h4>Operating Systems <LoaderCircle size={15} color="red" className={styles.spinning} /></h4>
                            <p>
                                System Calls,
                                Processes,
                                Threads,
                                Interprocess Communication,
                                Concurrency,
                                Synchronization,
                                Deadlock,
                                CPU Scheduling,
                                I/O Scheduling,
                                Memory Management,
                                Virtual Memory,
                                File Systems.
                            </p>
                        </div>

                        <div className={`${styles.subjectCard} ${styles.dbms}`}>
                            <h4>Databases <CheckCircle size={15} color="green"/></h4>
                            <p>
                                <span className={styles.syllabusCompleted}>ER Model</span>,
                                <span className={styles.syllabusCompleted}> Relational Algebra</span>,
                                <span className={styles.syllabusCompleted}> Tuple Calculus</span>,
                                <span className={styles.syllabusCompleted}> SQL</span>,
                                <span className={styles.syllabusCompleted}> Integrity Constraints</span>,
                                <span className={styles.syllabusCompleted}> Normal Forms</span>,
                                <span className={styles.syllabusCompleted}> File Organization</span>,
                                <span className={styles.syllabusCompleted}> Indexing (B Trees, B+ Trees)</span>,
                                <span className={styles.syllabusCompleted}> Transactions</span>,
                                <span className={styles.syllabusCompleted}> Concurrency Control</span>.
                            </p>
                        </div>

                        <div className={`${styles.subjectCard} ${styles.networks}`}>
                            <h4>Computer Networks <LoaderCircle size={15} color="red" className={styles.spinning} /></h4>
                            <p>
                                OSI & TCP/IP Models,
                                Packet, Circuit & Virtual Circuit Switching,
                                Framing,
                                Error Detection,
                                MAC,
                                Ethernet,
                                Routing Protocols,
                                IPv4,
                                CIDR,
                                ARP,
                                DHCP,
                                ICMP,
                                NAT,
                                UDP,
                                TCP,
                                Flow Control,
                                Congestion Control,
                                Sockets,
                                DNS,
                                SMTP,
                                HTTP,
                                FTP,
                                Email.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Learning Principles */}
                <div className={`${styles.card} ${styles.fullWidth}`}>
                    <div className={styles.cardTitle}>
                        Learning Principles
                    </div>

                    <div className={styles.principlesGrid}>

                        <div className={styles.principle}>
                            <span>01</span>
                            <h4>Understand Before Memorizing</h4>
                            <p className={styles.justifyContent}>
                                Concepts are learned by reasoning about them,
                                not by remembering isolated facts.
                            </p>
                        </div>

                        <div className={styles.principle}>
                            <span>02</span>
                            <h4>First Principles</h4>
                            <p className={styles.justifyContent}>
                                Every complex system can be understood by
                                studying its underlying fundamentals.
                            </p>
                        </div>

                        <div className={styles.principle}>
                            <span>03</span>
                            <h4>Consistency</h4>
                            <p className={styles.justifyContent}>
                                Long-term progress is built through continuous
                                disciplined effort.
                            </p>
                        </div>

                        <div className={styles.principle}>
                            <span>04</span>
                            <h4>Depth Over Speed</h4>
                            <p className={styles.justifyContent}>
                                A strong foundation is more valuable than
                                superficial coverage.
                            </p>
                        </div>

                        <div className={styles.principle}>
                            <span>05</span>
                            <h4>Connect Everything</h4>
                            <p className={styles.justifyContent}>
                                Operating systems, networking, databases and
                                algorithms are interconnected disciplines.
                            </p>
                        </div>

                        <div className={styles.principle}>
                            <span>06</span>
                            <h4>Never Stop Improving</h4>
                            <p className={styles.justifyContent}>
                                Learning is iterative. Every revision deepens
                                understanding.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Beyond the Examination */}
                <div className={`${styles.card} ${styles.beyond}`}>
                    <div className={styles.cardTitle}>
                        Beyond the Examination
                    </div>

                    <p className={`${styles.sectionIntro} ${styles.justifyContent}`}>
                        The knowledge developed through GATE preparation extends far beyond a
                        single examination. It strengthens the engineering mindset required for
                        building reliable, scalable and efficient computing systems.
                    </p>

                    <div className={styles.careerGrid}>

                        <div className={styles.careerCard}>
                            <h4>Systems Programming</h4>
                            <p>Understanding hardware, memory, processes and operating systems.</p>
                        </div>

                        <div className={styles.careerCard}>
                            <h4>High Performance Computing</h4>
                            <p>Optimization, concurrency and computational efficiency.</p>
                        </div>

                        <div className={styles.careerCard}>
                            <h4>Compiler Engineering</h4>
                            <p>Language design, parsing, optimization and code generation.</p>
                        </div>

                        <div className={styles.careerCard}>
                            <h4>Research</h4>
                            <p>Analytical thinking and mathematical reasoning for innovation.</p>
                        </div>

                        <div className={styles.careerCard}>
                            <h4>Quantitative Development</h4>
                            <p>Algorithmic problem solving with performance-oriented software.</p>
                        </div>

                        <div className={styles.careerCard}>
                            <h4>Software Engineering</h4>
                            <p>Applying strong CS fundamentals to large-scale software systems.</p>
                        </div>

                    </div>
                </div>

                {/* Core Competencies */}
                <div className={`${styles.card} ${styles.skills}`}>
                    <div className={styles.cardTitle}>
                        Core Competencies
                    </div>

                    <div className={styles.skillCloud}>
                        <span>Algorithms</span>
                        <span>Data Structures</span>
                        <span>Mathematics</span>
                        <span>Computer Architecture</span>
                        <span>Operating Systems</span>
                        <span>Networking</span>
                        <span>Optimization</span>
                        <span>Problem Solving</span>
                        <span>Logical Reasoning</span>
                        <span>Analytical Thinking</span>
                        <span>System Design</span>
                        <span>Software Engineering</span>
                    </div>
                </div>

                {/* Closing Banner */}
                <div className={`${styles.card} ${styles.banner}`}>
                    <h2>The destination may be an examination.</h2>

                    <h1>The journey is mastery.</h1>

                    <p>
                        Every theorem understood, every algorithm analyzed and every system
                        explored contributes to becoming a stronger engineer.
                    </p>
                </div>

            </div>
        </section>
    );
}