import styles from "./Logs.module.css";

export default function Logs() {

    const logs = [
        {
            date: "24/07/2026",
            time: "IST 12:05 AM",
            message: "Completed the first traversal of the DBMS syllabus."
        },

        {
            date: "23/07/2026",
            time: "IST 07:18 PM",
            message: "Implemented iterative and recursive Binary Search."
        },
        {
            date: "22/07/2026",
            time: "IST 08:16 PM",
            message: "Refactored the GATE page into a documentation-oriented layout."
        },
        {
            date: "20/07/2026",
            time: "IST 06:28 PM",
            message: "Added Binary Search implementations to the DSA repository."
        }
    ];

    return (
        <section id="logs" className={styles.page}>

            <div className={styles.hero}>
                <h1>Engineering Journal</h1>

                <p>
                    A chronological record of technical study, engineering work,
                    research, portfolio development, and significant milestones.
                </p>
            </div>

            <div className={styles.logContainer}>

                {logs.map((log, index) => (

                    <div
                        key={index}
                        className={styles.logEntry}
                    >

                        <div className={styles.line}>

                            <span className={styles.dot}></span>

                            <span className={styles.timestamp}>

                                <span className={styles.date}>
                                    {log.date}
                                </span>

                                <span className={styles.time}>
                                    {log.time}
                                </span>

                            </span>

                            <span className={styles.separator}>
                                :
                            </span>

                            <span className={styles.message}>
                                {log.message}
                            </span>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}