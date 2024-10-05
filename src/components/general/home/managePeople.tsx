"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/acernityComponents/animatedTooltip";
const people = [
  {
    id: 1,
    name: "Abdelrahman Gasser",
    designation: "Founder + Full Stack Developer",
    image:
      "https://deistor4v34pj.cloudfront.net/2024-10-05T17-45-04.544Z-profile 1.jpg",
  },
  {
    id: 2,
    name: "Yusuf Emad",
    designation: "Founder + DevOps",
    image:
      "https://media-hbe1-1.cdn.whatsapp.net/v/t61.24694-24/328237952_445434021452552_3964852462642416082_n.jpg?ccb=11-4&oh=01_Q5AaIJ-DaAg4qgjMJvHO446IUGpfWmchV3SuuD9RSBnW6p3n&oe=670EA30A&_nc_sid=5e03e0&_nc_cat=108",
  },
  {
    id: 3,
    name: "Jomana emad",
    designation: "UI/UX Designer",
    image:
      "https://media-hbe1-1.cdn.whatsapp.net/v/t61.24694-24/434156189_417019941022249_5478058568647130362_n.jpg?ccb=11-4&oh=01_Q5AaIBl309PzQmLBRIO0gwgl8NiYgW5W2wMX-gNBvNBxNSyR&oe=670EB2E8&_nc_sid=5e03e0&_nc_cat=111",
  },
];

export function AnimatedTooltipHome() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
