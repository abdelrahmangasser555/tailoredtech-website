/* eslint-disable react/jsx-key */
import React from "react";
import { BackgroundBlur } from "@/components/animations/backgroundBlur";
import GreenThingyWrapper from "@/components/animations/greenThingyanimation";
import { Poppins } from "next/font/google";
import { AnimatedTooltipHome } from "./managePeople";
import { CrissCrossFounder } from "@/components/animations/crissCrossFounder";
import Image from "next/image";
import { IoCodeSlashOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsSuitSpade } from "react-icons/bs";
import { GiHorseHead } from "react-icons/gi";
import { FaCloud } from "react-icons/fa";
import { BsSuitDiamondFill } from "react-icons/bs";
import OneProject from "@/components/animations/oneProject";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function ProjectsSection() {
  return (
    <div className=" w-[70%]">
      <BackgroundBlur />
      <div className="hr-with-text mb-5">
        <GreenThingyWrapper setState={null}>
          <span
            className={` ${poppins.className} text-[100px] text-[white] font-extrabold`}
          >
            Projects
            <span className="text-[#13ffaa]">.</span>
          </span>
        </GreenThingyWrapper>
        <hr />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
        <OneProject
          name="Platinum Ai"
          description="Platinum Ai is a software solution that helps businesses automate their processes and improve their efficiency. It uses artificial intelligence to analyze data and make predictions, helping businesses make better decisions and grow faster."
          client="egyptain edu tech start up"
          stack={["React", "Node js", "MongoDB", "Express", "TailwindCSS"]}
          image="https://www.geckoboard.com/uploads/Sales-YTD-dashboard-example-1efebb.png"
        />
        <OneProject
          name="Platinum Ai"
          description="Platinum Ai is a software solution that helps businesses automate their processes and improve their efficiency. It uses artificial intelligence to analyze data and make predictions, helping businesses make better decisions and grow faster."
          client="egyptain edu tech start up"
          stack={["React", "Node js", "MongoDB", "Express", "TailwindCSS"]}
          image="https://www.geckoboard.com/uploads/Sales-YTD-dashboard-example-1efebb.png"
        />
        <OneProject
          name="Platinum Ai"
          description="Platinum Ai is a software solution that helps businesses automate their processes and improve their efficiency. It uses artificial intelligence to analyze data and make predictions, helping businesses make better decisions and grow faster."
          client="egyptain edu tech start up"
          stack={["React", "Node js", "MongoDB", "Express", "TailwindCSS"]}
          image="https://www.geckoboard.com/uploads/Sales-YTD-dashboard-example-1efebb.png"
        />
        <OneProject
          name="Platinum Ai"
          description="Platinum Ai is a software solution that helps businesses automate their processes and improve their efficiency. It uses artificial intelligence to analyze data and make predictions, helping businesses make better decisions and grow faster."
          client="egyptain edu tech start up"
          stack={["React", "Node js", "MongoDB", "Express", "TailwindCSS"]}
          image="https://www.geckoboard.com/uploads/Sales-YTD-dashboard-example-1efebb.png"
        />
      </div>
    </div>
  );
}
