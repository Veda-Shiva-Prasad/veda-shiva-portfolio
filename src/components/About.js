import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section style={styles.section}>
      {/* 1. Dynamic Background Graphics*/}
      <div style={styles.bgGraphics}>
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={styles.glowOrb}
        />
      </div>

      <div style={styles.container}>
        {/* Photo Section*/}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={styles.imageSide}
        >
          <div style={styles.imageWrapper}>
            <img
              src="/veda2.jpeg"
              alt="Veda Shiva Prasad"
              style={styles.profileImg}
            />
            {/* Decorative corner*/}
            <div style={styles.cornerTop} />
            <div style={styles.cornerBottom} />
          </div>
        </motion.div>

        {/* Text Section*/}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={styles.textSide}
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={styles.label}
          >
            DISCOVER MY JOURNEY
          </motion.span>

          <h2 style={styles.heading}>About Me</h2>

          <p style={styles.text}>
            As a <strong>MERN Stack Developer</strong> and{" "}
            <strong>MCA Graduate (2025)</strong>, I bridge the gap between
            complex backend logic and intuitive frontend experiences. With a{" "}
            <strong>CGPA of 8.9</strong>, I have cultivated a deep understanding
            of <strong>Data Structures and Algorithms (DSA)</strong> in Java,
            ensuring that every line of code I write is optimized for
            performance and scalability.
          </p>

          <p style={styles.textExtra}>
            I specialize in architecting secure systems using{" "}
            <strong>JWT & OAuth</strong>, managing state with{" "}
            <strong>React</strong>, and orchestrating containerized environments
            with <strong>Docker</strong>. My goal is to build digital products
            that aren't just functional, but are resilient and high-performing.
          </p>

          <div style={styles.educationSection}>
            <h3 style={styles.subHeading}>Education</h3>
            <div style={styles.eduItem}>
              <div style={styles.eduDot} />
              <strong>MCA (Master of Computer Applications)</strong>
              <p style={styles.eduDetails}>
                Chaitanya Deemed University | 2023 - 2025 |{" "}
                <strong>CGPA: 8.9</strong>
              </p>
            </div>
            <div style={styles.eduItem}>
              <div style={styles.eduDot} />
              <strong>B.Com (Computer Applications)</strong>
              <p style={styles.eduDetails}>
                Avinash College of Commerce | 2020 - 2023 |{" "}
                <strong>CGPA: 7.79</strong>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "120px 20px",
    position: "relative",
    background: "transparent",
    overflow: "hidden",
  },
  bgGraphics: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    pointerEvents: "none",
  },
  glowOrb: {
    position: "absolute",
    bottom: "10%",
    left: "5%",
    width: "40vw",
    height: "40vw",
    background:
      "radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)",
    borderRadius: "50%",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    gap: "80px",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  },
  imageSide: {
    flex: "1 1 350px",
    display: "flex",
    justifyContent: "center",
  },
  imageWrapper: {
    position: "relative",
    padding: "15px",
  },
  profileImg: {
    width: "300px",
    height: "450px",
    objectFit: "cover",
    objectPosition: "50% 35%", // image inside square
    borderRadius: "15px",
    border: "2px solid rgba(0,212,255,0.4)",
    boxShadow: "0 20px 50px rgba(0,212,255,0.15)",
    filter: "grayscale(20%)",
  },
  cornerTop: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "40px",
    height: "40px",
    borderTop: "4px solid #00d4ff",
    borderRight: "4px solid #00d4ff",
  },
  cornerBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "40px",
    height: "40px",
    borderBottom: "4px solid #00d4ff",
    borderLeft: "4px solid #00d4ff",
  },
  textSide: {
    flex: "1 1 500px",
  },
  label: {
    color: "#00d4ff",
    fontSize: "0.8rem",
    letterSpacing: "4px",
    fontWeight: "bold",
    display: "block",
    marginBottom: "15px",
  },
  heading: {
    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
    color: "#fff",
    marginBottom: "30px",
    fontWeight: "800",
  },
  text: {
    color: "#ccc",
    fontSize: "1.15rem",
    lineHeight: "1.8",
    marginBottom: "20px",
  },
  textExtra: {
    color: "#888",
    fontSize: "1.05rem",
    lineHeight: "1.8",
    marginBottom: "40px",
  },
  subHeading: {
    fontSize: "1.8rem",
    color: "#fff",
    marginBottom: "25px",
    fontWeight: "700",
  },
  eduItem: {
    position: "relative",
    marginBottom: "25px",
    paddingLeft: "30px",
  },
  eduDot: {
    position: "absolute",
    left: 0,
    top: "10px",
    width: "12px",
    height: "12px",
    background: "#00d4ff",
    borderRadius: "50%",
    boxShadow: "0 0 10px #00d4ff",
  },
  eduDetails: {
    color: "#aaa",
    marginTop: "5px",
  },
};

export default About;
