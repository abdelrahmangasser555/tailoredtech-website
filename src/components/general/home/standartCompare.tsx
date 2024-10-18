import React from "react";
import { Compare } from "@/components/acernityComponents/Compare";

export function CompareHome() {
  return (
    <div className="p-4 border rounded-3xl dark:bg-neutral-900  dark:border-neutral-800 px-4">
      <Compare
        firstImage="https://th.bing.com/th/id/R.15b44d88143c4f15e63eeeaaa9856bab?rik=MRu%2fx0hrSz92Kg&pid=ImgRaw&r=0"
        secondImage="https://th.bing.com/th/id/OIP.KB1miCPp2j4gNiolUYZlKwHaE8?rs=1&pid=ImgDetMain"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
        autoplay={true}
      />
    </div>
  );
}
