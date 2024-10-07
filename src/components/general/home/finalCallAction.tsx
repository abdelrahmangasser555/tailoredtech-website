"use client";
import React from "react";
import { EncryptButton } from "@/components/animations/encryptionButton";
import { BackgroundBlur } from "@/components/animations/backgroundBlur";
import GreenThingyWrapper from "@/components/animations/greenThingyanimation";
import { Poppins } from "next/font/google";
import "../../allStyles.css";
import Link from "next/link";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import CryInterested from "../../../lottie animation/cryMorty.json";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function FinalCallAction({ setState }, { setState: any }) {
  const [activeAnimation, setActiveAnimation] = React.useState(false);

  console.log(activeAnimation);
  function handleClick() {
    setActiveAnimation(true);
    setTimeout(() => {
      setActiveAnimation(false);
    }, 4500); // Animation will stop after 2 seconds.
  }

  return (
    <div
      className="md:w-[70%] sm:w-[95%] min-h-[60vh] relative"
      id="action"
      style={{
        scrollBehavior: "smooth",
        scrollMarginTop: "10vh",
      }}
    >
      <BackgroundBlur />
      <div className="hr-with-text mb-5">
        <hr />
        <GreenThingyWrapper setState={setState} index={5}>
          <span
            className={` mobileHeadings ${poppins.className} text-[100px] text-[white] font-extrabold`}
          >
            Take action
            <span className="text-[#13ffaa]">.</span>
          </span>
        </GreenThingyWrapper>
      </div>

      <div className="flex flex-col items-center justify-center mt-10 p-5 relative z-10">
        <span
          className={`${poppins.className} text-center text-[50px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#13ffaa] via-[#ff681d] to-[#37cdbe] animate-text mb-6`}
          style={{ fontWeight: "900" }}
        >
          Ready to turn your vision into reality?
        </span>

        <div className="flex items-center justify-center gap-5 relative z-20">
          <button className="p-[3px] relative" onClick={handleClick}>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg z-[-1]" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              Not interested 😢
            </div>
          </button>

          <Link
            className="p-[3px] relative"
            href={
              "https://calendly.com/abdelrahmangasser2023/software-development-consultation?month=2024-10&date=2024-10-08"
            }
            target="_blank"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-[#13ffaa] rounded-lg z-[-1]" />
            <div
              className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent text-center"
              onClick={handleClick}
            >
              Yes, let's talk 😃
            </div>

            <motion.span
              className="absolute text-3xl left-[37%]"
              initial={{ y: 20 }}
              animate={{ y: 5 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                mass: 0.5,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            >
              👆
            </motion.span>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 relative z-20">
        {activeAnimation && (
          <Lottie
            animationData={CryInterested}
            style={{ width: "200px", height: "200px" }}
          />
        )}
      </div>

      {/* Moved Lottie animation directly under the buttons */}
    </div>
  );
}
