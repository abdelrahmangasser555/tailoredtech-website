import React from "react";
import { Compare } from "@/components/acernityComponents/Compare";

export function CompareHome() {
  return (
    <div className="p-4 border rounded-3xl dark:bg-neutral-900  dark:border-neutral-800 px-4">
      <Compare
        firstImage="https://deistor4v34pj.cloudfront.net/2024-10-05T12-04-02.367Z-Screenshot%202024-10-01%20182645.png"
        secondImage="https://deistor4v34pj.cloudfront.net/2024-10-05T12-06-40.608Z-Screenshot%202024-10-05%20150601.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
        autoplay={true}
      />
    </div>
  );
}
