import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section style={styles.heroContainer}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={styles.content}
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0px" }}
          animate={{ opacity: 1, letterSpacing: "4px" }}
          transition={{ duration: 1 }}
          style={styles.greeting}
        >
          &lt; SOFTWARE ENGINEER /&gt;
        </motion.p>

        <h1 style={styles.title}>
          Hi, I'm <br />
          <span style={styles.highlight}>Veda Shiva Prasad</span>
        </h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.8 }}
          style={styles.typewriterContainer}
        >
          <p style={styles.subtitle}>
            MERN Full Stack Developer | MCA 2025 Graduate
          </p>
        </motion.div>

        <div style={styles.badgeContainer}>
          {["MongoDB", "Express", "React", "Node.js", "Java DSA", "Docker"].map(
            (tech, i) => (
              <motion.span
                key={tech}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(0, 212, 255, 0.2)",
                  borderColor: "#00d4ff",
                  boxShadow: "0 0 15px rgba(0, 212, 255, 0.4)",
                }}
                transition={{ delay: 1 + i * 0.1 }}
                style={styles.badge}
              >
                {tech}
              </motion.span>
            ),
          )}
        </div>

        {/* integrated button connect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          style={styles.buttonContainer}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(0, 212, 255, 0.6)",
              backgroundColor: "#00d4ff",
              color: "#000",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            }
            style={styles.contactBtn}
          >
            LET'S CONNECT
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          style={styles.scrollIndicator}
        >
          <div style={styles.mouse}>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={styles.wheel}
            />
          </div>
          <p style={styles.scrollText}>Explore My Work</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

const styles = {
  heroContainer: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
  },
  content: { zIndex: 1, padding: "0 20px" },
  greeting: {
    fontSize: "1rem",
    color: "#00d4ff",
    fontFamily: "monospace",
    marginBottom: "10px",
    fontWeight: "600",
  },
  title: {
    fontSize: "clamp(2.5rem, 10vw, 5.5rem)",
    fontWeight: "900",
    lineHeight: "1.1",
    marginBottom: "20px",
    color: "#fff",
  },
  highlight: { color: "#00d4ff", textShadow: "0 0 40px rgba(0,212,255,0.6)" },
  typewriterContainer: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    margin: "0 auto",
    borderRight: "3px solid #00d4ff",
    maxWidth: "fit-content",
  },
  subtitle: {
    fontSize: "clamp(0.9rem, 3vw, 1.4rem)",
    color: "#aaa",
    marginBottom: "40px",
    letterSpacing: "1px",
  },
  badgeContainer: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: "900px",
    margin: "0 auto",
  },
  badge: {
    padding: "10px 22px",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    fontSize: "0.85rem",
    color: "#fff",
    background: "rgba(255,255,255,0.04)",
    fontWeight: "600",
    transition: "0.3s all ease",
  },
  buttonContainer: {
    marginTop: "40px",
    zIndex: 10,
  },
  contactBtn: {
    padding: "15px 40px",
    background: "transparent",
    border: "2px solid #00d4ff",
    color: "#00d4ff",
    borderRadius: "30px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "none",
    transition: "0.3s all ease",
  },
  scrollIndicator: {
    position: "absolute",
    bottom: "40px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
  },
  mouse: {
    width: "22px",
    height: "35px",
    border: "2px solid #444",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    padding: "4px",
  },
  wheel: {
    width: "3px",
    height: "6px",
    background: "#00d4ff",
    borderRadius: "2px",
  },
  scrollText: {
    fontSize: "0.65rem",
    color: "#777",
    letterSpacing: "3px",
    textTransform: "uppercase",
  },
};

export default Hero;
