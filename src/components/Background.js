import React from "react";
import { motion } from "framer-motion";

const Background = () => {
  const particles = Array.from({ length: 20 });
  const codeSnippets = [
    "<div>",
    "const",
    "npm install",
    "git push",
    "{...}",
    "mongoDB",
    "useEffect",
    "useState",
    "props",
    "map()",
    "axios.get()",
    "=>",
    "pip install",
    "async/await",
    "console.log",
    "Hello world",
    "React",
    "Java",
    "Node.js",
    "Express",
    "styled-components",
  ];

  return (
    <div style={styles.bgFixedContainer}>
      {/* 1. Brightened floating code snipps */}
      {codeSnippets.map((text, i) => (
        <motion.div
          key={`code-${i}`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            opacity: 0,
          }}
          animate={{
            y: -200,
            opacity: [0, 0.6, 0], // Increased brightness (0.6)
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
          style={styles.codeParticle}
        >
          {text}
        </motion.div>
      ))}

      {/* 2. Floating names*/}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * -500],
            opacity: [0, 0.4, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            ...styles.particle,
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
          }}
        />
      ))}

      {/* 3. Glowing Background Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={styles.circle1}
      />
      <motion.div
        animate={{ scale: [1.3, 1, 1.3], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 12, repeat: Infinity }}
        style={styles.circle2}
      />
    </div>
  );
};

const styles = {
  bgFixedContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    background: "#050505",
    pointerEvents: "none",
    overflow: "hidden",
  },
  codeParticle: {
    position: "absolute",
    color: "#00d4ff",
    fontFamily: "monospace",
    fontSize: "1rem",
    whiteSpace: "nowrap",
    textShadow: "0 0 12px rgba(0, 212, 255, 0.6)",
    fontWeight: "bold",
  },
  particle: {
    position: "absolute",
    width: "2px",
    height: "2px",
    backgroundColor: "#00d4ff",
    borderRadius: "50%",
  },
  circle1: {
    position: "absolute",
    top: "10%",
    left: "10%",
    width: "50vw",
    height: "50vw",
    background:
      "radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)",
    borderRadius: "50%",
  },
  circle2: {
    position: "absolute",
    bottom: "10%",
    right: "10%",
    width: "40vw",
    height: "40vw",
    background:
      "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
    borderRadius: "50%",
  },
};

export default Background;
