"use client";
import React, { useState } from "react";
import { TailoredTechTimeLine } from "@/components/general/timeline/timeLineSection";
import { HomeNavBar } from "@/components/general/home/navBar";
import Footer from "@/components/general/home/fotter";
import LeftSideNav from "@/components/general/home/leftSideNav";
export default function Page() {
  const [activeLink, setActiveLink] = useState(0);
  const Mylinks = [
    {
      name: "Be a part of our journey",
      link: "journey",
    },
    {
      name: "Take action",
      link: "action",
    },
    {
      name: "Footer",
      link: "footer",
    },
  ];
  return (
    <div
      className=" flex items-center justify-start flex-col min-h-screen bg-[#111] pt-[10vh] max-w-[100vw] overflow-x-hidden"
      style={{
        scrollBehavior: "smooth",
      }}
    >
      <HomeNavBar index={2} />
      <LeftSideNav
        Links={Mylinks}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      <TailoredTechTimeLine />
      <Footer setState={setActiveLink} />
    </div>
  );
}
