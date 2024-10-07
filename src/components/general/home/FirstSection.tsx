"use client";
import React from "react";

export default function FirstSection({
  children,
  setNav,
}: {
  children: React.ReactNode;
  setNav: any;
}) {
  return (
    <section
      className="flex items-center justify-center relative w-[80vw]"
      id="main"
    >
      <div className=" z-5 w-[100%] h-[100%]">{children}</div>
      <div className=" sm:max-h-[70vh] overflow-y-hidden absolute  top-0 left-[40%] inset-0 w-[40vw]  flex items-center flex-wrap ">
        {new Array(1000).fill(0).map((_, i) => (
          <div
            key={i}
            className=" h-4 w-4 text-white  cursor-crosshair hover:text-[#0aff9d] hover:bg-slate-400 flex items-end justify-center text-2xl transition-all  duration-500 ease-out opacity-50 hover:opacity-100"
          >
            .
          </div>
        ))}
      </div>
    </section>
  );
}
