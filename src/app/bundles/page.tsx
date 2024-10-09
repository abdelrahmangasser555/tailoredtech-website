"use client";
import React, { useState } from "react";
import { TailoredTechTimeLine } from "@/components/general/timeline/timeLineSection";
import { HomeNavBar } from "@/components/general/home/navBar";
import Footer from "@/components/general/home/fotter";
import LeftSideNav from "@/components/general/home/leftSideNav";
import AnimatedCircleWithText from "@/components/animations/svgCircleAnimation";
export default function Page() {
  const [activeLink, setActiveLink] = useState(0);
  const Mylinks = [
    {
      name: "Coming soon",
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

      <div className=" h-[80vh] flex items-center justify-center">
        <AnimatedCircleWithText text="Coming soon" />
      </div>
      <Footer setState={setActiveLink} />
    </div>
  );
}
