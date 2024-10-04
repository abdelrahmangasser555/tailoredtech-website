"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ScaleUp({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-fit h-full"
    >
      {children}
    </motion.div>
  );
}
