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

export default function ProjectsSection({ setState }, { setState: any }) {
  return (
    <div
      className=" md:w-[70%] sm:w-[95%]  px-3 "
      id="projects"
      style={{ scrollMarginTop: "10vh" }}
    >
      <BackgroundBlur />
      <div className="hr-with-text mb-5">
        <GreenThingyWrapper setState={setState} index={3}>
          <span
            className={` mobileHeadings ${poppins.className} text-[100px] text-[white] font-extrabold`}
          >
            Projects
            <span className="text-[#13ffaa]">.</span>
          </span>
        </GreenThingyWrapper>
        <hr />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 items-start justify-center">
        <OneProject
          name="Daas ai"
          description="ai business development start up that create a full pipeline of your business documents and give you the ability to have cognitive management with ai "
          client="egyptian start up"
          stack={[
            "Next js",
            "Node js",
            "Amplify",
            "CDK",
            "Docker",
            "TailwindCSS",
            "Daisy Ui",
          ]}
          image="https://deistor4v34pj.cloudfront.net/2024-10-06T05-55-46.889Z-Screenshot 2024-10-06 085451.png"
          link="https://ai-daas.com/"
          index={4}
        />
        <OneProject
          name="RA system"
          description="risk assessment management system for marine management companies it include vessel management office control , review ,  real-time  , digital signatures , and more"
          client="Bahri Saudi Arabia"
          stack={[
            "React",
            "Node js",
            "MongoDB",
            "Mongo Atlas",
            "Express",
            "TailwindCSS",
            "Daisy ui",
            "S3",
            "SQl lite",
          ]}
          image="https://deistor4v34pj.cloudfront.net/2024-10-05T12-04-02.367Z-Screenshot%202024-10-01%20182645.png"
          clientLink="https://www.bahri.sa/"
          link="https://magnificent-marshmallow-687391.netlify.app/"
          index={1}
        />
        <OneProject
          name="Platinum Ai"
          description="Platinum Ai is a edu tech start up for egyptian colleges that help students taking notes finding courses and more with many ai features"
          client="egyptain edu tech start up"
          stack={["React", "Node js", "MongoDB", "Express", "TailwindCSS"]}
          image="https://deistor4v34pj.cloudfront.net/2024-10-06T06-12-40.149Z-Screenshot 2024-10-06 090104.png"
          index={2}
        />
        <OneProject
          name="RoboCup app"
          description="application that simulates and help judges track and trace there teams with a judge dashboard to manage the robocup competition"
          client="RoboCup egypt"
          stack={[
            "flutter",
            "python",
            "dynamo db",
            "db relationships",
            "user groups",
            "OAuth",
          ]}
          image="https://deistor4v34pj.cloudfront.net/2024-10-10T19-45-02.984Z-Screenshot 2024-10-10 224452.png"
          index={3}
        />
        {/* <OneProject
          name="Platinum Ai"
          description="Platinum Ai is a software solution that helps businesses automate their processes and improve their efficiency. It uses artificial intelligence to analyze data and make predictions, helping businesses make better decisions and grow faster."
          client="egyptain edu tech start up"
          stack={["React", "Node js", "MongoDB", "Express", "TailwindCSS"]}
          image="https://www.geckoboard.com/uploads/Sales-YTD-dashboard-example-1efebb.png"
          index={3}
        /> */}
      </div>
    </div>
  );
}
