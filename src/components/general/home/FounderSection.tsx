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
import { MdOutlineDraw } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function FounderSection({ setState }, { setState: any }) {
  return (
    <div className=" w-[70%]" id="founders" style={{ scrollMarginTop: "10vh" }}>
      <BackgroundBlur />
      <div className="hr-with-text mb-5">
        <hr />
        <GreenThingyWrapper setState={setState} index={4}>
          <span
            className={` ${poppins.className} text-[100px] text-[white] font-extrabold`}
          >
            Founders
            <span className="text-[#13ffaa]">.</span>
          </span>
        </GreenThingyWrapper>
      </div>
      <h1 className="text-center text-white mb-3">
        Hover on Each founder to know more
      </h1>
      <AnimatedTooltipHome />
      <CrissCrossFounder
        title="Abdelrahman Gasser"
        description={
          "I am a software engineer with a passion for creating software solutions that help businesses grow and scale. I have experience in creating software solutions for various industries, including healthcare, finance, and e-commerce. I am always looking for new challenges and opportunities to learn and grow."
        }
        linkedin="https://www.linkedin.com/in/abdelrahman-gasser-74571127b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        github="https://github.com/abdelrahmangasser555"
        website="https://gasserportofolio.netlify.app/"
        email="abdelrahmangasser2023@gmail.com"
        mainIcon={[
          // eslint-disable-next-line react/jsx-key
          <HiOutlineLightBulb className="text-yellow-400 text-4xl" />,
          <IoCodeSlashOutline className="text-[#13ffaa] text-4xl" />,
          <BsSuitSpade className="text-white text-4xl" />,
        ]}
        roles={["Full Stack Developer", "Entrepreneur", "Founder"]}
      >
        <div className=" w-[100%] min-w-[40vw]">
          <Image
            src="https://deistor4v34pj.cloudfront.net/2024-10-05T17-55-36.919Z-black and white me.jpg"
            alt="Abdelrahman Gasser"
            className="rounded-full h-50 w-50 md:ml-[10vw] sm:ml-0"
            width={500}
            height={500}
          />
        </div>
      </CrissCrossFounder>
      <CrissCrossFounder
        title="Yusuf Emad"
        description={
          "I am a full stack developer and entrepreneur I like building cool web apps with ai "
        }
        linkedin="https://www.linkedin.com/in/abdelrahman-gasser/"
        github="https"
        twitter="https"
        instagram="https"
        facebook="https"
        youtube="https"
        website="https"
        email="mailto"
        mainIcon={[
          // eslint-disable-next-line react/jsx-key
          <GiHorseHead className="text-blue-700 text-4xl" />,
          <FaCloud className="text-[#13ffaa] text-4xl" />,
          <BsSuitDiamondFill className=" text-teal-200 text-4xl" />,
        ]}
        roles={["Dev ops", "Entrepreneur", "Co-Founder"]}
        reverse
      >
        <div className=" w-[100%] min-w-[40vw]">
          <Image
            src="https://deistor4v34pj.cloudfront.net/2024-10-06T05-39-06.931Z-joe black image.jpg"
            alt="Abdelrahman Gasser"
            className="rounded-full h-50 w-50"
            width={500}
            height={500}
          />
        </div>
      </CrissCrossFounder>
      <CrissCrossFounder
        title="Jomana Emad"
        description={
          "I am UI/UX designer with a passion for creating something worth looking at"
        }
        linkedin="https://www.linkedin.com/in/abdelrahman-gasser/"
        instagram="https"
        facebook="https"
        email="mailto"
        mainIcon={[
          // eslint-disable-next-line react/jsx-key
          <MdOutlineDraw className="text-yellow-500 text-4xl" />,

          <FaHeart className="text-error text-4xl" />,
        ]}
        roles={["UI/UX developer", "Creative Designer"]}
      >
        <div className=" w-[100%] min-w-[40vw]">
          <BackgroundBlur />
          <Image
            src="https://deistor4v34pj.cloudfront.net/2024-10-06T05-43-53.507Z-jomana image.jpg"
            alt="jomana emad picture"
            className="rounded-full h-50 w-50 md:ml-[10vw] sm:ml-0"
            width={500}
            height={500}
          />
        </div>
      </CrissCrossFounder>
    </div>
  );
}
