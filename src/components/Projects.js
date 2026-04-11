import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SplitMate",
    description:
      "A full-stack group expense manager that automates equal/unequal splitting logic. Built with a custom UI to ensure 100% responsive user experience.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Pure CSS"],
    github: "https://github.com/Veda-Shiva-Prasad/SplitMate",
  },
  {
    title: "Wanderlust",
    description:
      "A comprehensive rental platform supporting property listings and bookings. Optimized for system stability and high-traffic user workflows.",
    tech: ["MongoDB", "Express", "Node.js", "EJS"],
    github: "https://github.com/Veda-Shiva-Prasad/Wanderlust",
  },
  {
    title: "Mental Wellness Journal",
    description:
      "A secure, private journaling application focused on user mental health. Includes mood tracking and encrypted data persistence for user privacy.",
    tech: ["React", "Node.js", "JWT", "MongoDB"],
    github: "https://github.com/Veda-Shiva-Prasad",
  },
  {
    title: "FinTracker",
    description:
      "A high-performance Personal Finance Management system. Features real-time expense tracking and dynamic data visualization to help users master their budget.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/Veda-Shiva-Prasad/FinTracker",
  },
];

const Projects = () => {
  return (
    <section style={styles.section}>
      {/* Background Glow matching*/}
      <div style={styles.bgGraphics}>
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 15, repeat: Infinity }}
          style={styles.glowOrb}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={styles.content}
      >
        <h2 style={styles.sectionTitle}>Featured Projects</h2>

        <div style={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -15,
                borderColor: "#00d4ff",
                boxShadow: "0 20px 40px rgba(0, 212, 255, 0.15)",
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={styles.card}
            >
              <div style={styles.cardHeader}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <div style={styles.dot} />
              </div>

              <p style={styles.desc}>{project.description}</p>

              <div style={styles.techStack}>
                {project.tech.map((t, i) => (
                  <span key={i} style={styles.techTag}>
                    {t}
                  </span>
                ))}
              </div>

              <div style={styles.links}>
                <motion.a
                  whileHover={{ x: 5 }}
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.iconLink}
                >
                  VIEW SOURCE <span>↗</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
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
    width: "100%",
    height: "100%",
    zIndex: 0,
    pointerEvents: "none",
  },
  glowOrb: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    height: "800px",
    background:
      "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
    borderRadius: "50%",
  },
  content: {
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: "clamp(2.5rem, 8vw, 4rem)",
    fontWeight: "900",
    marginBottom: "5rem",
    color: "#fff",
    textTransform: "uppercase",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "40px",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    padding: "40px",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    transition: "0.4s all ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  projectTitle: { fontSize: "1.8rem", color: "#00d4ff", fontWeight: "700" },
  dot: {
    width: "10px",
    height: "10px",
    background: "#00d4ff",
    borderRadius: "50%",
    boxShadow: "0 0 10px #00d4ff",
  },
  desc: {
    color: "#888",
    marginBottom: "2rem",
    lineHeight: "1.7",
    fontSize: "1.05rem",
  },
  techStack: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "2.5rem",
  },
  techTag: {
    fontSize: "0.75rem",
    color: "#fff",
    background: "rgba(255, 255, 255, 0.05)",
    padding: "6px 14px",
    borderRadius: "6px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  links: { marginTop: "auto" },
  iconLink: {
    color: "#fff",
    fontSize: "0.9rem",
    textDecoration: "none",
    fontWeight: "800",
    letterSpacing: "2px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    transition: "0.3s",
  },
};

export default Projects;
