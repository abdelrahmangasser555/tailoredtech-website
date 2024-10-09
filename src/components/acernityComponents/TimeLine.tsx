"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import GreenThingyWrapper from "../animations/greenThingyanimation";
import { BackgroundBlur } from "../animations/backgroundBlur";
import { TypewriterEffectSmooth } from "./typeWrite";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const words = [
    {
      text: "Be",
    },
    {
      text: "a",
    },
    {
      text: "part",
    },
    {
      text: "of",
    },
    {
      text: "our",
    },
    {
      text: "journey",
      className: "text-[#13ffaa] ",
    },
    {
      text: ".",
    },
  ];
  return (
    <div
      className="w-full  dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
      style={{
        fontFamily: poppins.style.fontFamily,
      }}
      id="journey"
    >
      <BackgroundBlur />
      <div
        className="flex flex-col items-center justify-center h-[40rem]  "
        style={{
          scrollBehavior: "smooth",
          scrollMarginTop: "10vh",
          fontFamily: poppins.style.fontFamily,
        }}
      >
        <p className="text-white dark:text-neutral-200 text-xs sm:text-base  ">
          our journey is just getting started
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl border-white border-transparent text-white text-sm">
            Get Started
          </button>
          <Link
            className=" flex items-center  justify-center w-40 h-10 rounded-xl bg-white text-black border border-white  text-sm"
            href=""
          >
            let's Talk
          </Link>
        </div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full  bg-[#13ffaa] flex items-center justify-center">
                <div className="h-4 w-4 rounded-full  bg-neutral-800 border  border-neutral-700 p-2" />
              </div>
              <h3
                className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-[white] "
                style={{
                  fontFamily: poppins.style.fontFamily,
                  color: "white !important",
                }}
              >
                {item.title}
                <span className="text-[#13ffaa]">.</span>
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%]  dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-indigo-500 via-[#13ffaa] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
