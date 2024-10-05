"use client";
import React, { useRef, useEffect } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

export default function GreenThingyWrapper({
  children,
  setState = null,
}: {
  children: React.ReactNode | null;
  setState: React.Dispatch<React.SetStateAction<boolean>> | null;
}) {
  const wrapperRef = useRef(null);
  const inview = useInView(wrapperRef, { once: true, amount: 0.5 });
  const controler1 = useAnimation();
  const controler2 = useAnimation();

  useEffect(() => {
    if (inview) {
      console.log("inview", inview);
      controler1.start("visible");
      controler2.start("visible");
      if (setState) {
        setState(true);
      }
    }
  }, [inview]);

  return (
    <div className="  w-fit  relative overflow-hidden " ref={wrapperRef}>
      <motion.div
        variants={{
          initial: {
            y: 75,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
          },
        }}
        initial="initial"
        animate={controler1}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          initial: {
            left: "0",
          },
          visible: {
            left: "100%",
          },
        }}
        initial="initial"
        animate={controler2}
        transition={{ duration: 0.25, ease: "easeIn", delay: 0.25 }}
        className=" absolute top-4 bottom-4 left-0 right-0 w-full h-full bg-[#13ffaa] z-20 "
      ></motion.div>
    </div>
  );
}
