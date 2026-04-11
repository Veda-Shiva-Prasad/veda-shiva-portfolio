import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Hiding the cursor in the mobiles
    if (window.innerWidth < 768) setIsMobile(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mousePosition.x, springConfig);
  const y = useSpring(mousePosition.y, springConfig);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 30,
          height: 30,
          borderRadius: "50%",
          border: "2px solid #00d4ff",
          pointerEvents: "none",
          zIndex: 9999,
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "#00d4ff",
          pointerEvents: "none",
          zIndex: 9999,
          x: mousePosition.x,
          y: mousePosition.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

export default CustomCursor;
