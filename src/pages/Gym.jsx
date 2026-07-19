export default function Gym() {

    const tableStyle = {
        width: "100%",
        borderCollapse: "collapse",
        border: "1px solid #999",
        marginTop: "12px",
        marginBottom: "20px"
    };

    const cellStyle = {
        border: "1px solid #999",
        padding: "8px"
    };

    const headingCell = {
        ...cellStyle,
        width: "220px",
        fontWeight: "bold"
    };

    return (
        <section id="gym">

            {/* ===========================================================
                               HEADER
            ============================================================ */}

            <h1>GYM</h1>

            <p>
                Strength Development • Fat Loss • Discipline • Consistency
            </p>

            <hr />



            {/* ===========================================================
                               OVERVIEW
            ============================================================ */}

            <div
                style={{
                    marginTop: "24px",
                    marginBottom: "24px"
                }}
            >

                <h2>Overview</h2>

                <p>
                    Physical fitness is an important part of my personal and
                    professional development. I approach training with the same
                    mindset that I apply to engineering—structured planning,
                    measurable progress, disciplined execution, and continuous
                    improvement.
                </p>

                <p>
                    My objective is not simply to improve appearance. I train to
                    become stronger, healthier, more resilient, and physically
                    prepared for the demanding lifestyle required in computer
                    science, quantitative development, and lifelong learning.
                </p>

                <p>
                    Every workout represents another step toward long-term
                    improvement. Rather than pursuing rapid transformation,
                    I focus on sustainable habits that produce measurable
                    progress over time.
                </p>

            </div>

            <hr />



            {/* ===========================================================
                          CURRENT STATISTICS
            ============================================================ */}

            <div
                style={{
                    marginTop: "24px",
                    marginBottom: "24px"
                }}
            >

                <h2>Current Statistics</h2>

                <table style={tableStyle}>

                    <tbody>

                        <tr>
                            <td style={headingCell}>
                                Training Status
                            </td>

                            <td style={cellStyle}>
                                Active
                            </td>
                        </tr>

                        <tr>
                            <td style={headingCell}>
                                Training Since
                            </td>

                            <td style={cellStyle}>
                                July 2026
                            </td>
                        </tr>

                        <tr>
                            <td style={headingCell}>
                                Current Phase
                            </td>

                            <td style={cellStyle}>
                                Body Recomposition
                            </td>
                        </tr>

                        <tr>
                            <td style={headingCell}>
                                Primary Goal
                            </td>

                            <td style={cellStyle}>
                                Fat Loss + Strength Development
                            </td>
                        </tr>

                        <tr>
                            <td style={headingCell}>
                                Target Physique
                            </td>

                            <td style={cellStyle}>
                                Sleeper Build
                            </td>
                        </tr>

                        <tr>
                            <td style={headingCell}>
                                Training Style
                            </td>

                            <td style={cellStyle}>
                                Progressive Overload
                            </td>
                        </tr>

                        <tr>
                            <td style={headingCell}>
                                Workout Split
                            </td>

                            <td style={cellStyle}>
                                Push • Pull • Legs
                            </td>
                        </tr>

                        <tr>
                            <td style={headingCell}>
                                Cardio
                            </td>

                            <td style={cellStyle}>
                                Regular Treadmill Sessions
                            </td>
                        </tr>

                        <tr>
                            <td style={headingCell}>
                                Nutrition
                            </td>

                            <td style={cellStyle}>
                                Sustainable Calorie Deficit
                            </td>
                        </tr>

                        <tr>
                            <td style={headingCell}>
                                Progress Tracking
                            </td>

                            <td style={cellStyle}>
                                Strength • Cardio • Nutrition • Personal Records
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>

            <hr />



            {/* ===========================================================
                             WHY I TRAIN
            ============================================================ */}

            <div
                style={{
                    marginTop: "24px",
                    marginBottom: "24px"
                }}
            >

                <h2>Why I Train</h2>

                <p>
                    Fitness is not separate from my academic and professional
                    journey—it supports it. Regular training develops
                    discipline, resilience, patience, and consistency, qualities
                    that are equally valuable in software engineering and
                    quantitative development.
                </p>

                <p>
                    Maintaining physical health improves energy levels,
                    concentration, recovery from mental fatigue, and long-term
                    productivity. My goal is to build a body capable of
                    supporting the ambitions I pursue throughout my career.
                </p>

            </div>

            <hr />



            {/* ===========================================================
                          FITNESS PHILOSOPHY
            ============================================================ */}

            <div
                style={{
                    marginTop: "24px",
                    marginBottom: "24px"
                }}
            >

                <h2>Fitness Philosophy</h2>

                <blockquote>

                    "Strength is earned through consistency,
                    not intensity alone."

                </blockquote>

                <p>
                    Sustainable progress is achieved through intelligent
                    programming, proper technique, adequate recovery, and
                    patience. Rather than chasing shortcuts, I believe that
                    consistent effort performed over months and years produces
                    meaningful, lasting results.
                </p>

                <p>
                    Success in fitness is measured not only by heavier weights,
                    but also by improved movement quality, better health,
                    increased endurance, and the ability to remain consistent
                    regardless of temporary setbacks.
                </p>

            </div>

            <hr />

                        {/* ===========================================================
                           CURRENT MISSION
            ============================================================ */}

            <div
                style={{
                    marginTop: "24px",
                    marginBottom: "24px"
                }}
            >

                <h2>Current Mission</h2>

                <table style={tableStyle}>

                    <tbody>

                        <tr>

                            <td style={headingCell}>
                                Primary Objective
                            </td>

                            <td style={cellStyle}>
                                Build a lean athletic physique while steadily
                                increasing overall strength and preserving
                                long-term health.
                            </td>

                        </tr>

                        <tr>

                            <td style={headingCell}>
                                Fat Loss
                            </td>

                            <td style={cellStyle}>
                                In Progress
                            </td>

                        </tr>

                        <tr>

                            <td style={headingCell}>
                                Lean Muscle Development
                            </td>

                            <td style={cellStyle}>
                                In Progress
                            </td>

                        </tr>

                        <tr>

                            <td style={headingCell}>
                                Strength Progression
                            </td>

                            <td style={cellStyle}>
                                Ongoing
                            </td>

                        </tr>

                        <tr>

                            <td style={headingCell}>
                                Cardiovascular Endurance
                            </td>

                            <td style={cellStyle}>
                                Ongoing
                            </td>

                        </tr>

                        <tr>

                            <td style={headingCell}>
                                Joint Health & Mobility
                            </td>

                            <td style={cellStyle}>
                                Continuous Focus
                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

            <hr />



            {/* ===========================================================
                        TRAINING METHODOLOGY
            ============================================================ */}

            <div
                style={{
                    marginTop: "24px",
                    marginBottom: "24px"
                }}
            >

                <h2>Training Methodology</h2>

                <p>
                    My training is built around progressive overload,
                    structured programming, proper exercise technique,
                    and adequate recovery. Every workout is performed
                    with the objective of improving performance while
                    maintaining correct movement patterns.
                </p>

                <p>
                    Progress is measured through objective indicators
                    including repetitions, resistance, cardiovascular
                    benchmarks, training consistency, and personal
                    records. These metrics allow informed adjustments
                    to training and nutrition over time.
                </p>

            </div>

            <hr />



            {/* ===========================================================
                    CURRENT TRAINING PROGRAM
=========================================================== */}

<div
    style={{
        marginTop: "24px",
        marginBottom: "24px"
    }}
>

    <h2>Current Training Program</h2>

    <p>
        My current workout program follows a Push-Pull-Legs (PPL)
        methodology with an emphasis on progressive overload,
        strength development, muscular hypertrophy, cardiovascular
        conditioning, and long-term sustainability.
    </p>

    <br />

    <h3>Program Information</h3>

    <table style={tableStyle}>

        <tbody>

            <tr>
                <td style={headingCell}>Program</td>
                <td style={cellStyle}>Weekly Strength Training Plan</td>
            </tr>

            <tr>
                <td style={headingCell}>Training Method</td>
                <td style={cellStyle}>Push • Pull • Legs (PPL)</td>
            </tr>

            <tr>
                <td style={headingCell}>Frequency</td>
                <td style={cellStyle}>6 Training Days / Week</td>
            </tr>

            <tr>
                <td style={headingCell}>Primary Goal</td>
                <td style={cellStyle}>
                    Fat Loss • Muscle Development • Progressive Overload
                </td>
            </tr>

        </tbody>

    </table>



    <h3>Weekly Schedule</h3>

    <table style={tableStyle}>

        <thead>

            <tr>

                <th style={cellStyle}>Day</th>
                <th style={cellStyle}>Workout</th>
                <th style={cellStyle}>Primary Focus</th>

            </tr>

        </thead>

        <tbody>

            <tr>

                <td style={cellStyle}>Day 1</td>

                <td style={cellStyle}>
                    Push (Chest • Shoulders • Triceps)
                </td>

                <td style={cellStyle}>
                    Upper-body pushing strength
                </td>

            </tr>

            <tr>

                <td style={cellStyle}>Day 2</td>

                <td style={cellStyle}>
                    Pull (Back • Biceps)
                </td>

                <td style={cellStyle}>
                    Back width & arm development
                </td>

            </tr>

            <tr>

                <td style={cellStyle}>Day 3</td>

                <td style={cellStyle}>
                    Legs (Lower Body + Core Stability)
                </td>

                <td style={cellStyle}>
                    Lower-body strength & stability
                </td>

            </tr>

            <tr>

                <td style={cellStyle}>Day 4</td>

                <td style={cellStyle}>
                    Active Recovery
                </td>

                <td style={cellStyle}>
                    Recovery • Walking • Mobility
                </td>

            </tr>

            <tr>

                <td style={cellStyle}>Day 5</td>

                <td style={cellStyle}>
                    Push (Variation)
                </td>

                <td style={cellStyle}>
                    Chest, shoulders & triceps hypertrophy
                </td>

            </tr>

            <tr>

                <td style={cellStyle}>Day 6</td>

                <td style={cellStyle}>
                    Pull (Variation) + Cardio
                </td>

                <td style={cellStyle}>
                    Back development & conditioning
                </td>

            </tr>

            <tr>

                <td style={cellStyle}>Day 7</td>

                <td style={cellStyle}>
                    Complete Rest
                </td>

                <td style={cellStyle}>
                    Full Recovery
                </td>

            </tr>

        </tbody>

    </table>



    <h3>Training Principles</h3>

    <table style={tableStyle}>

        <tbody>

            <tr>

                <td style={cellStyle}>
                    ✓ Progressive Overload
                </td>

            </tr>

            <tr>

                <td style={cellStyle}>
                    ✓ Proper Exercise Technique
                </td>

            </tr>

            <tr>

                <td style={cellStyle}>
                    ✓ Full Range of Motion
                </td>

            </tr>

            <tr>

                <td style={cellStyle}>
                    ✓ Controlled Tempo
                </td>

            </tr>

            <tr>

                <td style={cellStyle}>
                    ✓ Adequate Recovery
                </td>

            </tr>

            <tr>

                <td style={cellStyle}>
                    ✓ Consistency Over Intensity
                </td>

            </tr>

        </tbody>

    </table>



    <h3>Day-wise Exercise Breakdown</h3>

    <table style={tableStyle}>

        <thead>

            <tr>

                <th style={cellStyle}>Day</th>
                <th style={cellStyle}>Key Exercises</th>

            </tr>

        </thead>

        <tbody>

            <tr>

                <td style={cellStyle}>Day 1</td>

                <td style={cellStyle}>
                    Bench Press • Incline Dumbbell Press • Shoulder Press •
                    Lateral Raises • Triceps Pushdown • Overhead Triceps Extension
                </td>

            </tr>

            <tr>

                <td style={cellStyle}>Day 2</td>

                <td style={cellStyle}>
                    Lat Pulldown • Seated Cable Row • Barbell Row •
                    Face Pull • Barbell Curl • Hammer Curl
                </td>

            </tr>

            <tr>

                <td style={cellStyle}>Day 3</td>

                <td style={cellStyle}>
                    Squats • Leg Press • Romanian Deadlift •
                    Walking Lunges • Standing Calf Raises
                </td>

            </tr>

            <tr>

                <td style={cellStyle}>Day 4</td>

                <td style={cellStyle}>
                    Walking • Stretching • Mobility Work
                </td>

            </tr>

            <tr>

                <td style={cellStyle}>Day 5</td>

                <td style={cellStyle}>
                    Incline Barbell Press • Machine Chest Press •
                    Arnold Press • Cable Lateral Raise •
                    Dips • Triceps Pushdown
                </td>

            </tr>

            <tr>

                <td style={cellStyle}>Day 6</td>

                <td style={cellStyle}>
                    Assisted Pull-ups • Single-arm Dumbbell Row •
                    T-Bar Row • Concentration Curl • Reverse Curl •
                    Incline Walk / HIIT / Skipping
                </td>

            </tr>

            <tr>

                <td style={cellStyle}>Day 7</td>

                <td style={cellStyle}>
                    Complete Rest or Light Walking
                </td>

            </tr>

        </tbody>

    </table>

</div>

<hr />


            {/* ===========================================================
                BASELINE PERFORMANCE ASSESSMENT
=========================================================== */}

<div
    style={{
        marginTop: "24px",
        marginBottom: "24px"
    }}
>

    <h2>Baseline Performance Assessment</h2>

    <p>
        This assessment documents my initial physical performance
        baseline. All future personal records and performance
        reports will be compared against these values to objectively
        measure strength development, muscular endurance,
        cardiovascular fitness, and overall physical progress.
    </p>

    <br />

    <h3>Assessment Information</h3>

    <table style={tableStyle}>

        <tbody>

            <tr>
                <td style={headingCell}>Assessment Date</td>
                <td style={cellStyle}>16 July 2026</td>
            </tr>

            <tr>
                <td style={headingCell}>Assessment Type</td>
                <td style={cellStyle}>Initial Baseline Assessment</td>
            </tr>

            <tr>
                <td style={headingCell}>Purpose</td>
                <td style={cellStyle}>
                    Establish measurable baseline performance.
                </td>
            </tr>

            <tr>
                <td style={headingCell}>Training Status</td>
                <td style={cellStyle}>Active</td>
            </tr>

            <tr>
                <td style={headingCell}>Current Phase</td>
                <td style={cellStyle}>Body Recomposition</td>
            </tr>

            <tr>
                <td style={headingCell}>Experience Level</td>
                <td style={cellStyle}>Beginner</td>
            </tr>

        </tbody>

    </table>



    <h3>Upper Body Performance</h3>

    <table style={tableStyle}>

        <thead>

            <tr>

                <th style={cellStyle}>Muscle Group</th>
                <th style={cellStyle}>Exercise</th>
                <th style={cellStyle}>Baseline</th>
                <th style={cellStyle}>Sets</th>
                <th style={cellStyle}>Level</th>

            </tr>

        </thead>

        <tbody>

            <tr>
                <td style={cellStyle}>Chest</td>
                <td style={cellStyle}>Bench Press</td>
                <td style={cellStyle}>35 kg × 10</td>
                <td style={cellStyle}>3</td>
                <td style={cellStyle}>Beginner</td>
            </tr>

            <tr>
                <td style={cellStyle}>Shoulders</td>
                <td style={cellStyle}>Machine Shoulder Press</td>
                <td style={cellStyle}>2.5 kg / Side × 8</td>
                <td style={cellStyle}>3</td>
                <td style={cellStyle}>Beginner</td>
            </tr>

            <tr>
                <td style={cellStyle}>Back (Lats)</td>
                <td style={cellStyle}>Lat Chin Pulldown</td>
                <td style={cellStyle}>5 Plates × 8</td>
                <td style={cellStyle}>3</td>
                <td style={cellStyle}>Beginner</td>
            </tr>

            <tr>
                <td style={cellStyle}>Back (Mid)</td>
                <td style={cellStyle}>Seated Cable Row</td>
                <td style={cellStyle}>5 Plates × 10</td>
                <td style={cellStyle}>3</td>
                <td style={cellStyle}>Beginner</td>
            </tr>

            <tr>
                <td style={cellStyle}>Back & Biceps</td>
                <td style={cellStyle}>Chin Ups</td>
                <td style={cellStyle}>Plate Support × 6</td>
                <td style={cellStyle}>3</td>
                <td style={cellStyle}>Absolute Beginner</td>
            </tr>

            <tr>
                <td style={cellStyle}>Biceps</td>
                <td style={cellStyle}>Seated Dumbbell Curl</td>
                <td style={cellStyle}>7.5 kg × 10</td>
                <td style={cellStyle}>4</td>
                <td style={cellStyle}>Beginner</td>
            </tr>

            <tr>
                <td style={cellStyle}>Triceps</td>
                <td style={cellStyle}>Triceps Pushdown</td>
                <td style={cellStyle}>6 Plates × 10</td>
                <td style={cellStyle}>3</td>
                <td style={cellStyle}>Beginner</td>
            </tr>

        </tbody>

    </table>



    <h3>Lower Body & Core Performance</h3>

    <table style={tableStyle}>

        <thead>

            <tr>

                <th style={cellStyle}>Muscle Group</th>
                <th style={cellStyle}>Exercise</th>
                <th style={cellStyle}>Baseline</th>
                <th style={cellStyle}>Sets</th>
                <th style={cellStyle}>Level</th>

            </tr>

        </thead>

        <tbody>

            <tr>
                <td style={cellStyle}>Legs</td>
                <td style={cellStyle}>Leg Press</td>
                <td style={cellStyle}>20 kg / Side × 8</td>
                <td style={cellStyle}>3</td>
                <td style={cellStyle}>Beginner</td>
            </tr>

            <tr>
                <td style={cellStyle}>Abs</td>
                <td style={cellStyle}>Machine Crunch</td>
                <td style={cellStyle}>7 Plates × 15</td>
                <td style={cellStyle}>3</td>
                <td style={cellStyle}>Beginner</td>
            </tr>

            <tr>
                <td style={cellStyle}>Abs</td>
                <td style={cellStyle}>Decline Crunch</td>
                <td style={cellStyle}>12 Reps</td>
                <td style={cellStyle}>3</td>
                <td style={cellStyle}>Beginner</td>
            </tr>

            <tr>
                <td style={cellStyle}>Lower Back</td>
                <td style={cellStyle}>Machine Backward Lean</td>
                <td style={cellStyle}>Body Weight × 10</td>
                <td style={cellStyle}>3</td>
                <td style={cellStyle}>Beginner</td>
            </tr>

            <tr>
                <td style={cellStyle}>Core / Hip Flexors</td>
                <td style={cellStyle}>Machine Forward Lean</td>
                <td style={cellStyle}>Body Weight × 10</td>
                <td style={cellStyle}>3</td>
                <td style={cellStyle}>Beginner</td>
            </tr>

            <tr>
                <td style={cellStyle}>Obliques</td>
                <td style={cellStyle}>Machine Side Lean</td>
                <td style={cellStyle}>Body Weight × 10 / Side</td>
                <td style={cellStyle}>3</td>
                <td style={cellStyle}>Beginner</td>
            </tr>

        </tbody>

    </table>



    <h3>Functional Strength</h3>

    <table style={tableStyle}>

        <thead>

            <tr>

                <th style={cellStyle}>Exercise</th>
                <th style={cellStyle}>Baseline</th>
                <th style={cellStyle}>Level</th>

            </tr>

        </thead>

        <tbody>

            <tr>

                <td style={cellStyle}>Push Up</td>
                <td style={cellStyle}>1 Rep</td>
                <td style={cellStyle}>Absolute Beginner</td>

            </tr>

            <tr>

                <td style={cellStyle}>Knee Push Up</td>
                <td style={cellStyle}>5 Reps</td>
                <td style={cellStyle}>Absolute Beginner</td>

            </tr>

        </tbody>

    </table>



    <h3>Cardiovascular Performance</h3>

    <table style={tableStyle}>

        <tbody>

            <tr>
                <td style={headingCell}>Assessment Type</td>
                <td style={cellStyle}>Baseline Cardio Evaluation</td>
            </tr>

            <tr>
                <td style={headingCell}>Calories Burned</td>
                <td style={cellStyle}>100 Calories</td>
            </tr>

            <tr>
                <td style={headingCell}>Duration</td>
                <td style={cellStyle}>15 Minutes</td>
            </tr>

            <tr>
                <td style={headingCell}>Primary Speed</td>
                <td style={cellStyle}>5.5 km/h</td>
            </tr>

            <tr>
                <td style={headingCell}>Sprint Speed</td>
                <td style={cellStyle}>7.5 km/h</td>
            </tr>

            <tr>
                <td style={headingCell}>Incline</td>
                <td style={cellStyle}>10°</td>
            </tr>

            <tr>
                <td style={headingCell}>Workout Structure</td>
                <td style={cellStyle}>
                    14 min 30 sec @ 5.5 km/h →
                    30 sec @ 7.5 km/h
                </td>
            </tr>

        </tbody>

    </table>



    <h3>Assessment Summary</h3>

    <table style={tableStyle}>

        <tbody>

            <tr>
                <td style={headingCell}>Exercises Assessed</td>
                <td style={cellStyle}>15</td>
            </tr>

            <tr>
                <td style={headingCell}>Muscle Groups Evaluated</td>
                <td style={cellStyle}>10</td>
            </tr>

            <tr>
                <td style={headingCell}>Current Training Level</td>
                <td style={cellStyle}>Beginner</td>
            </tr>

            <tr>
                <td style={headingCell}>Baseline Status</td>
                <td style={cellStyle}>
                    Established Successfully ✓
                </td>
            </tr>

        </tbody>

    </table>

</div>

<hr />
            {/* ===========================================================
                         NUTRITION STRATEGY
            ============================================================ */}

            <div
                style={{
                    marginTop: "24px",
                    marginBottom: "24px"
                }}
            >

                <h2>Nutrition Strategy</h2>

                <p>
                    My nutrition focuses on sustainability rather than
                    restriction. I prioritize sufficient protein intake,
                    controlled calories, balanced carbohydrates, healthy
                    fats, hydration, and whole foods whenever possible.
                </p>

                <p>
                    The objective is to preserve muscle mass, support
                    recovery, improve performance, and achieve gradual
                    fat loss without compromising long-term health.
                </p>

            </div>

            <hr />



            {/* ===========================================================
                         RECOVERY STRATEGY
            ============================================================ */}

            <div
                style={{
                    marginTop: "24px",
                    marginBottom: "24px"
                }}
            >

                <h2>Recovery Strategy</h2>

                <table style={tableStyle}>

                    <tbody>

                        <tr>

                            <td style={headingCell}>
                                Sleep
                            </td>

                            <td style={cellStyle}>
                                Prioritized for recovery and performance.
                            </td>

                        </tr>

                        <tr>

                            <td style={headingCell}>
                                Hydration
                            </td>

                            <td style={cellStyle}>
                                Daily hydration maintained throughout
                                training sessions.
                            </td>

                        </tr>

                        <tr>

                            <td style={headingCell}>
                                Mobility
                            </td>

                            <td style={cellStyle}>
                                Warm-up and mobility exercises performed
                                before resistance training.
                            </td>

                        </tr>

                        <tr>

                            <td style={headingCell}>
                                Rest
                            </td>

                            <td style={cellStyle}>
                                Recovery days incorporated to support
                                long-term progression.
                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

            <hr />

                        {/* ===========================================================
                           EQUIPMENT USED
            ============================================================ */}

            <div
                style={{
                    marginTop: "24px",
                    marginBottom: "24px"
                }}
            >

                <h2>Equipment Used</h2>

                <table style={tableStyle}>

                    <tbody>

                        <tr>

                            <td style={headingCell}>
                                Gym Type
                            </td>

                            <td style={cellStyle}>
                                Commercial Gym
                            </td>

                        </tr>

                        <tr>

                            <td style={headingCell}>
                                Resistance Training
                            </td>

                            <td style={cellStyle}>
                                Free Weights • Machines • Cable Machines
                            </td>

                        </tr>

                        <tr>

                            <td style={headingCell}>
                                Cardio Equipment
                            </td>

                            <td style={cellStyle}>
                                Motorized Treadmill
                            </td>

                        </tr>

                        <tr>

                            <td style={headingCell}>
                                Progress Measurement
                            </td>

                            <td style={cellStyle}>
                                Personal Records • Cardio Benchmarks • Training Log
                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

            <hr />



            {/* ===========================================================
                           WORKOUT HISTORY
            ============================================================ */}

            <div
                style={{
                    marginTop: "24px",
                    marginBottom: "24px"
                }}
            >

                <h2>Workout History</h2>

                <p>
                    Every training session contributes to a growing record of
                    physical development. Documenting workouts provides an
                    objective history of performance, enables long-term
                    comparison, and highlights measurable progress over time.
                </p>

                <table style={tableStyle}>

                    <thead>

                        <tr>

                            <th style={cellStyle}>Date</th>
                            <th style={cellStyle}>Event</th>
                            <th style={cellStyle}>Description</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr>

                            <td style={cellStyle}>
                                16 July 2026
                            </td>

                            <td style={cellStyle}>
                                Initial Performance Assessment
                            </td>

                            <td style={cellStyle}>
                                Established baseline strength benchmarks and
                                documented the first complete set of personal
                                records.
                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

            <hr />



            {/* ===========================================================
                           PROGRESS TIMELINE
            ============================================================ */}

            <div
                style={{
                    marginTop: "24px",
                    marginBottom: "24px"
                }}
            >

                <h2>Progress Timeline</h2>

                <table style={tableStyle}>

                    <tbody>

                        <tr>

                            <td style={headingCell}>
                                July 2026
                            </td>

                            <td style={cellStyle}>

                                • Began structured resistance training.
                                <br /><br />

                                • Established baseline strength benchmarks.
                                <br /><br />

                                • Started body recomposition journey.
                                <br /><br />

                                • Recorded first cardio benchmark.
                                <br /><br />

                                • Began maintaining structured workout records.

                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

            <hr />



            {/* ===========================================================
                          CURRENT MILESTONES
            ============================================================ */}

            <div
                style={{
                    marginTop: "24px",
                    marginBottom: "24px"
                }}
            >

                <h2>Current Milestones</h2>

                <table style={tableStyle}>

                    <tbody>

                        <tr>

                            <td style={cellStyle}>
                                ✓ Established a consistent gym routine.
                            </td>

                        </tr>

                        <tr>

                            <td style={cellStyle}>
                                ✓ Recorded initial personal records.
                            </td>

                        </tr>

                        <tr>

                            <td style={cellStyle}>
                                ✓ Built a structured Push • Pull • Legs routine.
                            </td>

                        </tr>

                        <tr>

                            <td style={cellStyle}>
                                ✓ Established cardio performance benchmark.
                            </td>

                        </tr>

                        <tr>

                            <td style={cellStyle}>
                                ✓ Following a sustainable nutrition strategy.
                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>

            <hr />



            {/* ===========================================================
                           FUTURE MILESTONES
            ============================================================ */}

            <div
                style={{
                    marginTop: "24px",
                    marginBottom: "24px"
                }}
            >

                <h2>Future Milestones</h2>

                <table style={tableStyle}>

                    <tbody>

                        <tr>
                            <td style={cellStyle}>
                                □ Achieve a lean Sleeper Build physique.
                            </td>
                        </tr>

                        <tr>
                            <td style={cellStyle}>
                                □ Continue reducing body-fat percentage.
                            </td>
                        </tr>

                        <tr>
                            <td style={cellStyle}>
                                □ Reach intermediate strength standards across all major compound lifts.
                            </td>
                        </tr>

                        <tr>
                            <td style={cellStyle}>
                                □ Improve cardiovascular endurance and work capacity.
                            </td>
                        </tr>

                        <tr>
                            <td style={cellStyle}>
                                □ Maintain lifelong consistency in physical fitness.
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>

            <hr />



            {/* ===========================================================
                           CLOSING REMARKS
            ============================================================ */}

            <div
                style={{
                    marginTop: "24px",
                    marginBottom: "24px"
                }}
            >

                <h2>Closing Remarks</h2>

                <p>
                    Fitness is an investment in long-term performance rather
                    than a short-term objective. The discipline developed
                    through structured training strengthens not only physical
                    capability but also patience, consistency, resilience, and
                    the ability to pursue ambitious goals with sustained effort.
                </p>

                <p>
                    As my career progresses, this page will continue to evolve
                    alongside my training journey, documenting measurable
                    improvements in strength, endurance, health, and overall
                    physical development.
                </p>

            </div>

        </section>

    );

}
