import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <footer style={styles.footer}>
      {/* Background Effect */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={styles.bgGlow}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={styles.card}
      >
        <p style={styles.topLabel}>GET IN TOUCH</p>
        <h2 style={styles.mainTitle}>Contact.</h2>

        <div style={styles.buttonGroup}>
          <motion.a
            whileHover={{
              y: -5,
              backgroundColor: "rgba(0, 212, 255, 0.2)",
              boxShadow: "0 10px 20px rgba(0, 212, 255, 0.3)",
            }}
            href="mailto:vedashivaprasad97@gmail.com"
            style={styles.actionBtn}
          >
            EMAIL ✉️
          </motion.a>

          <motion.a
            whileHover={{
              y: -5,
              backgroundColor: "rgba(0, 212, 255, 0.2)",
              boxShadow: "0 10px 20px rgba(0, 212, 255, 0.3)",
            }}
            href="https://www.linkedin.com/in/vedashivaprasad"
            target="_blank"
            rel="noreferrer"
            style={styles.actionBtn}
          >
            LINKEDIN 🔗
          </motion.a>

          <motion.a
            whileHover={{
              y: -5,
              backgroundColor: "rgba(0, 212, 255, 0.2)",
              boxShadow: "0 10px 20px rgba(0, 212, 255, 0.3)",
            }}
            href="https://github.com/Veda-Shiva-Prasad"
            target="_blank"
            rel="noreferrer"
            style={styles.actionBtn}
          >
            GITHUB 🐙
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.05,
              backgroundColor: "#00d4ff",
              color: "#000",
            }}
            href="/resume.pdf"
            download="Veda_Shiva_Prasad_Resume"
            style={styles.resumeBtn}
          >
            RESUME ↗
          </motion.a>
        </div>

        <div style={styles.footerInfo}>
          <p style={styles.copyright}>© 2026 Veda Shiva Prasad</p>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={styles.emailText}
          >
            vedashivaprasad97@gmail.com
          </motion.p>
        </div>
      </motion.div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: "120px 20px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
  },
  bgGlow: {
    position: "absolute",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)",
    zIndex: 0,
  },
  card: {
    background: "rgba(15, 15, 27, 0.7)",
    backdropFilter: "blur(15px)",
    padding: "80px 50px",
    borderRadius: "32px",
    border: "1px solid rgba(255,255,255,0.1)",
    textAlign: "left",
    width: "100%",
    maxWidth: "1000px",
    zIndex: 1,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
  },
  topLabel: {
    color: "#00d4ff",
    fontSize: "0.9rem",
    letterSpacing: "3px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  mainTitle: {
    fontSize: "clamp(3.5rem, 10vw, 6rem)",
    fontWeight: "900",
    color: "#fff",
    marginBottom: "40px",
    letterSpacing: "-2px",
  },
  buttonGroup: { display: "flex", gap: "15px", flexWrap: "wrap" },
  actionBtn: {
    padding: "14px 28px",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "12px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: "bold",
    transition: "0.3s",
  },
  resumeBtn: {
    padding: "14px 28px",
    border: "2px solid #00d4ff",
    borderRadius: "12px",
    color: "#00d4ff",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: "bold",
    transition: "0.3s",
  },
  footerInfo: {
    marginTop: "60px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    paddingTop: "30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  copyright: { color: "#555", fontSize: "0.85rem" },
  emailText: { color: "#00d4ff", fontSize: "1rem", fontWeight: "bold" },
};

export default Contact;
