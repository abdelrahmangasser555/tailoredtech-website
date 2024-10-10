"use client";
import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function HighlightEffect({
  children,
  color,
  delay,
}: {
  children: React.ReactNode;
  color?: string;
  delay?: number;
}) {
  const controls = useAnimation();
  const myRef = React.useRef<HTMLSpanElement>(null);
  const intersectingObject = useInView(myRef);

  React.useEffect(() => {
    if (intersectingObject) {
      controls.start({ width: "100%" });
    }
  }, [intersectingObject, controls]);

  return (
    <motion.span
      ref={myRef}
      initial={{ color: "white" }}
      whileInView={{ color: "black" }}
      transition={{ duration: 0.3, delay: delay || 0.5 }}
      className="relative inline-block"
      style={{
        position: "relative",
        display: "inline-block",
        whiteSpace: "nowrap", // Prevents the text from breaking into new lines
      }}
    >
      {children}
      <motion.span
        initial={{ width: "0%" }}
        animate={controls}
        transition={{ duration: 1, delay: delay || 0.5, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          backgroundColor: color || "#13ffaa",
          zIndex: -1, // Ensures the highlight is behind the text
          width: "100%", // Ensures it covers the entire width of the text
        }}
      />
    </motion.span>
  );
}
