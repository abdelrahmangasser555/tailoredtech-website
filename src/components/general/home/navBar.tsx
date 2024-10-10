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
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { FaCubesStacked } from "react-icons/fa6";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
export function HomeNavBar({ index }: { index: number | null }) {
  return (
    <div className=" fixed glassy-nav top-0 w-[100%] h-[10vh]">
      <div className=" no-display-mobile flex items-center space-x-4">
        <Link
          href="https://www.linkedin.com/company/tailoredtech-solutions/about/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-[#13ffaa]"
        >
          <FaLinkedin />
        </Link>
        <Link
          href="https://web.facebook.com/profile.php?id=61566903934243"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-[#13ffaa]"
        >
          <FiFacebook />
        </Link>
        <Link
          href="mailto:tailoredtechapp@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-[#13ffaa]"
        >
          <MdOutlineEmail />
        </Link>
      </div>
      <div className=" no-display-mobile ">
        <TopNavBar activeIndex={index ? index : 0} />
      </div>
      <div className=" no-display-mobile">
        <EncryptButton
          TARGET_TEXT="let's Talk"
          link="https://calendly.com/tailoredtechapp/30min"
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
          <FaCubesStacked
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
