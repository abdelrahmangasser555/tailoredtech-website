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
import { BsSuitClub } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { BsSuitDiamond } from "react-icons/bs";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function FounderSection({ setState }, { setState: any }) {
  return (
    <div
      className=" md:w-[70%] sm:w-[95%] px-5 "
      id="founders"
      style={{ scrollMarginTop: "10vh" }}
    >
      <BackgroundBlur />
      <div className="hr-with-text mb-5">
        <hr />
        <GreenThingyWrapper setState={setState} index={4}>
          <span
            className={`mobileHeadings ${poppins.className} text-[100px] text-[white] font-extrabold`}
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
        roles={[
          "Full Stack Developer",
          "Entrepreneur",
          "Founder",
          "olympic gymnast 🤸‍♂️",
        ]}
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
        linkedin="https://www.linkedin.com/in/yusuf-emad-26561b1b2"
        github="https://github.com/YusufEmad04"
        facebook="https://www.facebook.com/yuzarcif.putivar?mibextid=ZbWKwL"
        email="yusufy2004@gmail.com"
        mainIcon={[
          // eslint-disable-next-line react/jsx-key
          <GiHorseHead className="text-blue-700 text-4xl" />,
          <FaCloud className="text-[#13ffaa] text-4xl" />,
          <BsSuitDiamond className=" text-teal-200 text-4xl" />,
        ]}
        roles={["Dev ops", "Entrepreneur", "Co-Founder", "Cat lover 🐱"]}
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
        title="Fares Wael"
        description={
          "I am front end developer who like making designs come to live and deliver value added for costumers and I bench press 50kg per dumbbell "
        }
        github="https://github.com/faresw1"
        linkedin="www.linkedin.com/in/fares-wael-1b0464292"
        instagram="https://www.instagram.com/fares_wael01?igsh=MTQ4ZnRkZmNwa3hkaA%3D%3D&utm_source=qr"
        facebook="https://www.facebook.com/profile.php?id=100086664481139&mibextid=LQQJ4d"
        email="faresacademy2006@gmail.com"
        mainIcon={[
          // eslint-disable-next-line react/jsx-key

          <FaLaptopCode className="text-blue-500 text-4xl" />,
          <BsSuitClub className="text-[#13ffaa] text-4xl" />,
        ]}
        roles={[
          "Front end developer",
          "Co-Founder",
          "UI/UX developer",
          "Gym Rat 🏋️‍♂️",
        ]}
      >
        <div className=" w-[100%] min-w-[40vw]">
          <BackgroundBlur />
          <Image
            src="https://deistor4v34pj.cloudfront.net/2024-10-07T18-52-29.525Z-fares version2.jpg"
            alt="fares wael picture"
            className="rounded-full h-50 w-50 md:ml-[10vw] sm:ml-0"
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

          <BsSuitHeart className="text-error text-4xl" />,
        ]}
        roles={["UI/UX developer", "Creative Designer"]}
        reverse
      >
        <div className=" w-[100%] min-w-[40vw]">
          <BackgroundBlur />
          <Image
            src="https://deistor4v34pj.cloudfront.net/2024-10-09T06-17-28.676Z-jomana black 2.jpg"
            alt="jomana emad picture"
            className="rounded-full h-50 w-50 "
            width={500}
            height={500}
          />
        </div>
      </CrissCrossFounder>
    </div>
  );
}
