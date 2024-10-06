import React from "react";
import { EncryptButton } from "@/components/animations/encryptionButton";
import { BackgroundBlur } from "@/components/animations/backgroundBlur";
import GreenThingyWrapper from "@/components/animations/greenThingyanimation";
import { Poppins } from "next/font/google";
import "../../allStyles.css";
import Link from "next/link";
import { motion } from "framer-motion";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
export default function FinalCallAction({ setState }, { setState: any }) {
  return (
    <div
      className="md:w-[70%] sm:w-[95%] min-h-[60vh]  "
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
            className={` ${poppins.className} text-[100px] text-[white] font-extrabold`}
          >
            Take action
            <span className="text-[#13ffaa]">.</span>
          </span>
        </GreenThingyWrapper>
      </div>
      <div className="flex flex-col items-center justify-center mt-10 p-5">
        <span
          className={`${poppins.className} text-[50px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#13ffaa] via-[#ff681d] to-[#37cdbe] animate-text mb-6`}
          style={{
            fontWeight: "900",
          }}
        >
          Ready to turn your vision into reality?
        </span>
        <div className=" flex items-center justify-center gap-5">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Not interested 😢
            </div>
          </button>
          <Link
            className="p-[3px] relative "
            href={
              "https://calendly.com/abdelrahmangasser2023/software-development-consultation?month=2024-10&date=2024-10-08"
            }
            target="_blank"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-[#13ffaa] rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              yes let's talk 😃
            </div>
            <motion.span
              className="absolute text-3xl left-[37%]"
              initial={{ y: 20 }}
              animate={{ y: 5 }}
              transition={{
                type: "spring", // Use spring for a more bouncy effect
                stiffness: 200,
                damping: 10,
                mass: 0.5,
                repeat: Infinity, // Infinite loop
                repeatType: "mirror", // Smoothly reverse the motion after each cycle
              }}
            >
              👆
            </motion.span>
          </Link>
        </div>
      </div>
    </div>
  );
}
