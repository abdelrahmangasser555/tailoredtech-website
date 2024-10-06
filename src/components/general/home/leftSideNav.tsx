"use client";

import React from "react";
import Link from "next/link";
import "../../allStyles.css";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function LeftSideNav({ Links, activeLink, setActiveLink }) {
  const router = useRouter();

  function handleClick(link, index) {
    setActiveLink(index);
    router.push(`#${link}`);
  }

  return (
    <div className="flex flex-col items-center justify-center fixed left-0 top[10vh] left-glassy-nav bg-black bg-opacity-5  ">
      <span
        className={` ${poppins.className} text-[50px] text-[white] font-extrabold  px-2 py-2`}
      >
        T<span className="text-[#13ffaa] text-[30px]">t</span>
      </span>
      {Links?.map((link, index) => (
        <button
          className={`p-2  
            ${
              activeLink === index
                ? " border-r-2 border-[#13ffaa] text-[#13ffaa]"
                : " text-white hover:text-[#13ffaa] hover:border-[#13ffaa] hover:border-r-2"
            }`}
          key={index}
          onClick={() => handleClick(link.link, index)}
          style={{
            writingMode: "vertical-rl",
            // textOrientation: "upright",
          }}
        >
          {link?.name}
        </button>
      ))}
    </div>
  );
}
