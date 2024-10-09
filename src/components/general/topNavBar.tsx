import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
const myLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Bundles",
    path: "/bundles",
  },
  {
    name: "Timeline",
    path: "/timeline",
  },
];

export default function TopNavBar({ activeIndex }) {
  return (
    <div
      className="
        flex
        justify-center
        gap-4
        py-4
        sticky
        top-0
        z-50
    "
    >
      {myLinks.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${
            index === activeIndex
              ? "text-[#13ffaa] border-b-2 border-[#13ffaa] "
              : "text-white"
          } hover:text-[#13ffaa]
            ${poppins.className}
          `}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
