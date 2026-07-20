import { trackInteraction } from "../services/analytics";
import styles from "./Contact.module.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaCode,
  FaTrophy,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <main className={styles.page}>

      {/* ========================================================= */}
      {/* HERO                                                      */}
      {/* ========================================================= */}

      <section className={styles.hero}>

        <p className={styles.eyebrow}>CONTACT</p>

        <h1 className={styles.title}>
          Let's start
          <br />
          a conversation.
        </h1>

        <p className={styles.subtitle}>
          Whether you're interested in quantitative development,
          systems programming, collaboration, or simply discussing
          computer science, I'd be glad to hear from you.
        </p>

      </section>

      {/* ========================================================= */}
      {/* CONTACT INFORMATION                                       */}
      {/* ========================================================= */}

      <section className={styles.section}>

        <div className={styles.sectionNumber}>I</div>

        <div className={styles.sectionContent}>

          <h2>CONTACT INFORMATION</h2>

          <div className={styles.contactGrid}>

            <div className={styles.contactCard}>
              <FaEnvelope size={18} />
              <div>
                <span>Email</span>
                <a
                  href="mailto:abc@gmail.com"
                  onClick={() => trackInteraction("email_clicked")}>rayyan.connects@gmail.com</a>
              </div>
            </div>

            <div className={styles.contactCard}>
              <FaPhone size={18} />
              <div>
                <span>Phone</span>
                <p>+91 ***041***</p>
              </div>
            </div>

            <div className={styles.contactCard}>
              <FaMapMarkerAlt size={18} />
              <div>
                <span>Location</span>
                <p>India</p>
              </div>
            </div>

            <div className={styles.contactCard}>
              <FaClock size={18} />
              <div>
                <span>Time Zone</span>
                <p>IST (UTC +05:30)</p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* PROFESSIONAL LINKS                                        */}
      {/* ========================================================= */}

      <section className={styles.section}>

        <div className={styles.sectionNumber}>II</div>

        <div className={styles.sectionContent}>

          <h2>PROFESSIONAL LINKS</h2>

          <div className={styles.linksGrid}>

            <a
              href="https://github.com/etsryn"
              onClick={() => {console.log("GitHub clicked");trackInteraction("github_clicked")}}
              className={styles.linkCard}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={18} />
              <div>
                <span>GitHub</span>
                <p>View repositories</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/rayyan-ashraf/"
              onClick={() => trackInteraction("linkedin_clicked")}
              className={styles.linkCard}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={18} />
              <div>
                <span>LinkedIn</span>
                <p>Professional profile</p>
              </div>
            </a>

            <a
              href="https://leetcode.com/u/RayyanAshraf/"
              onClick={() => trackInteraction("leetcode_clicked")}
              className={styles.linkCard}
              target="_blank"
              rel="noreferrer"
            >
              <FaCode size={18} />
              <div>
                <span>LeetCode</span>
                <p>Problem solving</p>
              </div>
            </a>

            <a
              href="https://codeforces.com/profile/Rayyan-Ashraf"
              onClick={() => trackInteraction("codeforces_clicked")}
              className={styles.linkCard}
              target="_blank"
              rel="noreferrer"
            >
              <FaTrophy size={18} />
              <div>
                <span>Codeforces</span>
                <p>Competitive programming</p>
              </div>
            </a>

          </div>

        </div>

      </section>


      {/* ========================================================= */}
      {/* CONTACT FORM                                              */}
      {/* ========================================================= */}

      <section className={styles.section}>

        <div className={styles.sectionNumber}>III</div>

        <div className={styles.sectionContent}>

          <h2>SEND A MESSAGE</h2>

          <form className={styles.form}>

            <div className={styles.inputGroup}>
              <label>Name</label>
              <input
                type="text"
                placeholder="Your name"
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Email</label>
              <input
                type="email"
                placeholder="your@email.com"
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Subject</label>
              <input
                type="text"
                placeholder="Subject"
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Message</label>
              <textarea
                rows="7"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="submit"
              className={styles.button}
            >
              <FaPaperPlane size={18} />
              Send Message
            </button>

          </form>

        </div>

      </section>

      {/* ========================================================= */}
      {/* FOOTER                                                    */}
      {/* ========================================================= */}

      <section className={styles.footer}>

        <h2>
          Let's build
          <br />
          something
          <br />
          meaningful.
        </h2>

        <p>
          Engineering begins with a conversation.
        </p>

      </section>

    </main>
  );
}