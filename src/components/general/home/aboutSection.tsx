import React from "react";
import "../../allStyles.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
export default function AboutSection() {
  return (
    <div className=" w-[70%] ">
      <div className="hr-with-text">
        <span
          className={` ${poppins.className} text-[100px] text-[white] font-extrabold`}
        >
          About
          <span className="text-[#13ffaa]">.</span>
        </span>
        <hr />
      </div>
    </div>
  );
}
