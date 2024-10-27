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
  {
    id: 3,
    name: "Fares wael",
    designation: "Co-founder  + Front end developer",
    image:
      "https://deistor4v34pj.cloudfront.net/tailored+tech+profile+pictures/a7la+try.jpg",
  },
  {
    id: 4,
    name: "Jomana emad",
    designation: "UI/UX Designer",
    image:
      "https://deistor4v34pj.cloudfront.net/2024-10-09T06-17-28.676Z-jomana black 2.jpg",
  },
  {
    id: 5,
    name: "Abdullah",
    designation: "Sales & PR",
    image:
      "https://deistor4v34pj.cloudfront.net/tailored+tech+profile+pictures/abdullah+image+1.jpg",
  },
];

export function AnimatedTooltipHome() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
