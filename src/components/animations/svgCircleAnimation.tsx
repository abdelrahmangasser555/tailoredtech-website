"use client";

import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function AnimatedCircleWithText({
  text,
  link,
}: {
  text: string;
  link?: string | null;
}) {
  const router = useRouter();
  function handleClick() {
    if (link) {
      router.push(link);
    }
  }
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="relative flex justify-center items-center text-white"
      style={{ width: "200px", height: "200px" }} // Ensures container for the circle and text
    >
      {/* Text in the center */}
      <motion.button
        className="absolute text-lg font-bold cursor-pointer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onClick={handleClick}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {text}
      </motion.button>

      {/* Animated SVG Circle */}
      <motion.svg
        initial={{ rotate: 0 }}
        whileInView={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "linear",
        }}
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M100,20 C120,20 140,30 160,60 C180,90 180,110 160,140 C140,170 120,180 100,180 C80,180 60,170 40,140 C20,110 20,90 40,60 C60,30 80,20 100,20 Z"
          fill="none"
          stroke="#13ffaa"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.svg>
    </motion.div>
  );
}

export function AnimatedLineWithText({
  text,
  children,
  strokeColor,
  style,
  width,
  delay,
}: {
  text?: string;
  width?: string;
  children?: React.ReactNode | null;
  strokeColor?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: delay || 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <span
      className=" mx-[5px] inline-block "
      style={{
        ...style,
      }}
    >
      <motion.span
        className="flex flex-col justify-center items-center text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Ensures animation triggers only once when in view
        style={{
          fontFamily: poppins.style.fontFamily,
        }}
      >
        {/* Animated Text */}
        {!children ? (
          <motion.span
            className=" text-2xl md:text-4xl  font-bold text-center "
            variants={textVariants}
          >
            {text}
          </motion.span>
        ) : (
          children
        )}

        {/* Animated Curvy Line */}
        <svg
          width={width || 250}
          height="50"
          viewBox="0 0 250 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"translate-y-[-20px]"}
        >
          <motion.path
            d="
          M10,20
          C40,10 70,30 100,20
          C130,10 160,30 190,20
          C220,10 250,30 280,20
          "
            stroke={strokeColor || "#13ffaa"}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            exit={{ pathLength: 0, opacity: 0 }}
            viewport={{ once: true }}
          />
        </svg>
      </motion.span>
    </span>
  );
}
