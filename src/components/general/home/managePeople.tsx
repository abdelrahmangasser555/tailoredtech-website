"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/acernityComponents/animatedTooltip";
const people = [
  {
    id: 1,
    name: "Abdelrahman Gasser",
    designation: "Founder + Full Stack Developer",
    image:
      "https://deistor4v34pj.cloudfront.net/tailored+tech+profile+pictures/profile+1.jpg",
  },
  {
    id: 2,
    name: "Yusuf Emad",
    designation: "Founder + DevOps",
    image:
      "https://deistor4v34pj.cloudfront.net/tailored+tech+profile+pictures/shorse+whats+app+rprofile.jpg",
  },
];

export function AnimatedTooltipHome() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
