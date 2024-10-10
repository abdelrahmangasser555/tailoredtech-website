"use client";
import React, { useState } from "react";
import { TailoredTechTimeLine } from "@/components/general/timeline/timeLineSection";
import { HomeNavBar } from "@/components/general/home/navBar";
import Footer from "@/components/general/home/fotter";
import LeftSideNav from "@/components/general/home/leftSideNav";
import AnimatedCircleWithText from "@/components/animations/svgCircleAnimation";

import { AnimatedLineWithText } from "@/components/animations/svgCircleAnimation";
import { Poppins } from "next/font/google";
import { ExpandableCardDemo } from "@/components/general/bundles/ourBundles";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
export default function Page() {
  const [activeLink, setActiveLink] = useState(0);
  const Mylinks = [
    {
      name: "Our Bundles",
      link: "journey",
    },
  ];
  return (
    <div
      className=" flex items-center justify-start flex-col min-h-screen bg-[#111] pt-[10vh] max-w-[100vw] overflow-x-hidden"
      style={{
        scrollBehavior: "smooth",
      }}
    >
      <HomeNavBar index={1} />
      <LeftSideNav
        Links={Mylinks}
        activeLink={0}
        setActiveLink={setActiveLink}
      />
      <AnimatedLineWithText>
        <h2
          className="text-center text-xl md:text-4xl font-bold w-[100%] mt-5  "
          style={{
            fontFamily: poppins.style.fontFamily,
          }}
        >
          Scalable <span className=" text-[#13ffaa] mr-1">&</span>
          Interactive <span className=" text-[#13ffaa] mr-1">&</span>{" "}
          Customizable
        </h2>
      </AnimatedLineWithText>
      {/* <GlobeBundles /> */}
      <ExpandableCardDemo />
      <div className=" h-[40vh]" />
      <Footer setState={setActiveLink} />
    </div>
  );
}
