/* eslint-disable react/jsx-key */
import React from "react";
import GreenThingyWrapper from "@/components/animations/greenThingyanimation";
import { Poppins } from "next/font/google";
import { CrissCross } from "@/components/animations/CrissCross";
import Image from "next/image";
import { BackgroundBlur } from "@/components/animations/backgroundBlur";
import { CompareHome } from "./standartCompare";
import Kanban from "../../../images/kanbanImage.png";
import { FiGlobe } from "react-icons/fi";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineComputer } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoCodeSlash } from "react-icons/io5";
import { ThreeDCardHome } from "./StartUpCard";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function WeOffer() {
  return (
    <div className=" w-[70%] pb-[10vh]">
      <BackgroundBlur />
      <div className="hr-with-text mb-5">
        <hr />
        <GreenThingyWrapper setState={null}>
          <span
            className={` ${poppins.className} text-[100px] text-[white] font-extrabold`}
          >
            We Offer
            <span className="text-[#13ffaa]">.</span>
          </span>
        </GreenThingyWrapper>
      </div>

      <CrissCross
        title="Digitalization Paper Work to Software"
        description={`
        we create softwares that digitalize your paper work to have more control analytics record tracking and more 
        
        ex  : we created a software solution to digitalize risk assessments for marine management companies
        
        `}
        benefits={[
          "Control and analytics",
          "Record tracking",
          "Automation",
          "Customization",
          "no more paper work",
          "real time data",
          "serialization ",
          "lot more ...",
        ]}
        features={[
          "dashboard",
          "record keeping",
          "costume analytics",
          "office management  board",
          "user management",
          "data tracking",
          "24/7 ai support",
          "more ...",
        ]}
        featureIcons={[<FiGlobe />, <FiGlobe />, <FiGlobe />]}
        mainIcon={[
          <LuFileSpreadsheet className="  text-error" size={30} />,
          <FaArrowRight className=" text-white" />,
          <MdOutlineComputer className=" text-[#13ffaa]" size={40} />,
        ]}
      >
        <div className="w-[100%]">
          <CompareHome />
        </div>
      </CrissCross>
      <CrissCross
        title="From Ideas to Products"
        description={`
        we create softwares for startups and companies to bring their ideas to life `}
        benefits={[
          "ideas to products",
          "product design",
          "product development",
          "product deployment",
          "product support",
          "product scaling",

          "more ...",
        ]}
        features={[
          "product design",
          "product development",
          "product deployment",
          "product support",
          "product scaling",
          "product marketing",
          "innovation",
          "more ...",
        ]}
        featureIcons={[<FiGlobe />, <FiGlobe />, <FiGlobe />]}
        mainIcon={[
          <HiOutlineLightBulb className=" text-yellow-400" size={30} />,
          <FaArrowRight className=" text-white" />,

          <IoCodeSlash className=" text-[#13ffaa]" size={30} />,
        ]}
        reverse
      >
        <div className="w-[100%]">
          <ThreeDCardHome />
        </div>
      </CrissCross>
    </div>
  );
}
