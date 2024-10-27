"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ children, onClick }) {
  return (
    <AnimatePresence initial={false} onExitComplete={() => null}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="my-modal"
        onClick={onClick}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
