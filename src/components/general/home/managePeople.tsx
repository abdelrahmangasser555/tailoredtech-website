"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/acernityComponents/animatedTooltip";
const people =[
  {
    id: 1,
    name: "Abdelrahman Gasser",
    designation: "Founder & CEO",
    image: "/images/boody.jpg",
  },
  {
    id: 2,
    name: "Gasser Mahmoud",
    designation: "Full Stack Developer",
    image: "/images/gasser mahmoud.png",
  },
  {
    id: 3,
    name: "Fares Wael",
    designation: "Full Stack Developer",
    image: "/images/fares.png",
  },
  {
    id: 4,
    name: "Ahmed Tamer",
    designation: "UI&UX Designer",
    image: "/images/moshka.png",
  },
];

export function AnimatedTooltipHome() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
