import React from "react";
import "../../allStyles.css";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import GreenThingyWrapper from "@/components/animations/greenThingyanimation";
import { Button } from "@/components/ui/button";
import { EncryptButton } from "../../animations/encryptionButton";
import { FaTimeline } from "react-icons/fa6";
import TopNavBar from "../topNavBar";
import { Poppins } from "next/font/google";
import { FaUbuntu } from "react-icons/fa6";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
export function HomeNavBar({ index }: { index: number | null }) {
  return (
    <div className=" fixed glassy-nav top-0 w-[100%] h-[10vh]">
      <div className=" no-display-mobile flex items-center space-x-4">
        <Link
          href="https://github.com/abdelrahmangasser555"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-[#13ffaa]"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/abdelrahman-gasser-74571127b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-[#13ffaa]"
        >
          <FaLinkedin />
        </Link>
      </div>
      <div className=" no-display-mobile ">
        <TopNavBar activeIndex={index ? index : 0} />
      </div>
      <div className=" no-display-mobile">
        <EncryptButton
          TARGET_TEXT="let's Talk"
          link="https://calendly.com/abdelrahmangasser2023/software-development-consultation?month=2024-10&date=2024-10-08"
        />
      </div>
      <div className=" no-display-laptop ">
        <GreenThingyWrapper setState={null} index={6}>
          <Link
            href={"/"}
            className={`${poppins.className} no-display-laptop text-[50px] md:text-[100px] text-white font-extrabold`}
          >
            T<span className="text-[#13ffaa]">t.</span>
          </Link>
        </GreenThingyWrapper>
      </div>
      <div className=" no-display-laptop  flex items-center  gap-2">
        <Link
          href={"/bundles"}
          className=" no-display-laptop tooltip tooltip-bottom"
          data-tip="bundles"
        >
          <FaUbuntu
            className="text-[white] text-4xl hover:text-[#13ffaa]"
            style={{
              color: index === 1 ? "#13ffaa" : "white",
            }}
          />
        </Link>
        <Link
          href={"/timeline"}
          className=" no-display-laptop tooltip tooltip-bottom"
          data-tip="timeline"
        >
          <FaTimeline
            className="text-[white] text-4xl hover:text-[#13ffaa]"
            style={{
              color: index === 2 ? "#13ffaa" : "white",
            }}
          />
        </Link>
      </div>
    </div>
  );
}
