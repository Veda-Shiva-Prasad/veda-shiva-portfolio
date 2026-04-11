import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Skills",
    items: [
      { name: "HTML5", icon: "fa-brands fa-html5", color: "#E34F26" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "#1572B6" },
      { name: "JavaScript", icon: "fa-brands fa-js", color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: "fa-solid fa-wind", color: "#06B6D4" },
      { name: "React JS", icon: "fa-brands fa-react", color: "#61DAFB" },
      { name: "Redux", icon: "fa-solid fa-layer-group", color: "#764ABC" },
      { name: "Material UI", icon: "fa-solid fa-gem", color: "#0081CB" },
      { name: "Node JS", icon: "fa-brands fa-node-js", color: "#339933" },
      { name: "Express JS", icon: "fa-solid fa-server", color: "#ffffff" },
      { name: "MongoDB", icon: "fa-solid fa-database", color: "#47A248" },
      { name: "Mongoose", icon: "fa-solid fa-code-branch", color: "#880000" },
      { name: "Git", icon: "fa-brands fa-git-alt", color: "#F05032" },
      { name: "GitHub", icon: "fa-brands fa-github", color: "#ffffff" },
      { name: "MySQL", icon: "fa-solid fa-table", color: "#4479A1" },
      { name: "SQL", icon: "fa-solid fa-database", color: "#003B57" },
      { name: "Python", icon: "fa-brands fa-python", color: "#3776AB" },
      { name: "Java (DSA)", icon: "fa-brands fa-java", color: "#007396" },
      { name: "Docker", icon: "fa-brands fa-docker", color: "#2496ED" },
      {
        name: "Kubernetes",
        icon: "fa-solid fa-dharmachakra",
        color: "#326CE5",
      },
      { name: "CI/CD", icon: "fa-solid fa-infinity", color: "#00D4FF" },
    ],
  },
];

const tools = [
  { name: "VS Code", icon: "fa-solid fa-code", color: "#007ACC" },
  { name: "ChatGPT", icon: "fa-solid fa-robot", color: "#10a37f" },
  { name: "Claude AI", icon: "fa-solid fa-brain", color: "#D97757" },
  { name: "Chrome", icon: "fa-brands fa-chrome", color: "#4285F4" },
  { name: "MongoDB Compass", icon: "fa-solid fa-compass", color: "#47A248" },
  { name: "Postman", icon: "fa-solid fa-rocket", color: "#FF6C37" },
];

const Skills = () => {
  return (
    <section style={styles.section}>
      {/* Background Glow Graphic */}
      <div style={styles.bgGraphics}>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={styles.glowOrb}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={styles.content}
      >
        <h2 style={styles.sectionTitle}>Skills</h2>

        <div style={styles.skillsGrid}>
          {skillCategories[0].items.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.1,
                boxShadow: `0 10px 30px ${skill.color}44`,
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              style={styles.skillCard}
            >
              <i
                className={skill.icon}
                style={{ ...styles.icon, color: skill.color }}
              ></i>
              <span style={styles.skillName}>{skill.name}</span>
            </motion.div>
          ))}
        </div>

        <h3 style={styles.subTitle}>TOOLS AND SOFTWARE</h3>
        <div style={styles.skillsGrid}>
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={styles.toolCard}
            >
              <i
                className={tool.icon}
                style={{ ...styles.icon, color: tool.color }}
              ></i>
              <span style={styles.skillName}>{tool.name}</span>
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
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 0,
  },
  glowOrb: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "600px",
    height: "600px",
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
    fontSize: "clamp(3rem, 10vw, 5rem)",
    fontWeight: "900",
    color: "#fff",
    marginBottom: "60px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  subTitle: {
    fontSize: "1.2rem",
    color: "#888",
    marginTop: "100px",
    marginBottom: "50px",
    textAlign: "center",
    letterSpacing: "4px",
  },
  skillsGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "50px",
  },
  skillCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "110px",
    padding: "20px",
    background: "rgba(255,255,255,0.02)",
    borderRadius: "15px",
    border: "1px solid rgba(255,255,255,0.05)",
    transition: "0.3s",
  },
  toolCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "140px",
    padding: "20px",
    background: "rgba(0,212,255,0.03)",
    borderRadius: "12px",
    border: "1px solid rgba(0,212,255,0.1)",
  },
  icon: {
    fontSize: "3.5rem",
    marginBottom: "15px",
  },
  skillName: {
    color: "#fff",
    fontSize: "0.85rem",
    fontWeight: "700",
    textTransform: "uppercase",
    textAlign: "center",
  },
};

export default Skills;
