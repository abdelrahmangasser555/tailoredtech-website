/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import React from "react";
import { Poppins } from "next/font/google";
import GreenThingyWrapper from "./greenThingyanimation";
import { Badge } from "../ui/badge";
import { Stacks } from "./stackAnimation";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

type CrissCrossProps = {
  children?: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  features: string[];
  featureIcons?: any;
  benifitsIcons?: any;
  mainIcon?: any;
  reverse?: boolean;
};
export function CrissCross({
  children,
  title,
  description,
  benefits,
  features,
  featureIcons,
  benifitsIcons,
  mainIcon,
  reverse = false,
}: CrissCrossProps) {
  return (
    <div
      className={` displayInColumn flex items-start justify-between ${
        reverse && "flex-row-reverse"
      }`}
    >
      <motion.div
        className=" flex flex-col items-start justify-start p-5"
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <GreenThingyWrapper setState={null}>
          <div className=" flex items-center justify-start gap-2 mb-2">
            {mainIcon &&
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              mainIcon.map((icon: any, index: number) => {
                return (
                  <p key={index} className=" inline-block">
                    {icon}
                  </p>
                );
              })}
          </div>
        </GreenThingyWrapper>
        <GreenThingyWrapper setState={null}>
          <h1
            className={` ${poppins.className} text-2xl text-[#13ffaa] font-extrabold text-center `}
            style={{
              fontWeight: "900",
            }}
          >
            {title}
            <span className="text-[white]">.</span>
          </h1>
        </GreenThingyWrapper>
        <div className="flex flex-col items-start space-y-10">
          {/* Description Section */}
          <div className="p-6 bg-opacity-5 bg-black rounded-lg shadow-lg w-full">
            <p
              className={`${poppins.className} text-md text-white opacity-70 leading-7`}
              style={{ fontWeight: "400" }}
            >
              {description}
            </p>
          </div>

          {/* Features and Benefits Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Features Section */}
            <div className="p-6 bg-opacity-5 bg-black rounded-lg shadow-lg flex flex-col space-y-4">
              <p className="text-white text-lg font-semibold pl-3  pb-2 flex items-center justify-start">
                Features<span className="text-[#13ffaa] mr-1 ">.</span>
                {featureIcons?.map((icon: any, index: number) => (
                  <span key={index} className=" inline-block mr-1">
                    {icon}
                  </span>
                ))}
              </p>
              <div className="flex flex-wrap gap-2">
                {/* {features?.map((feature, index) => (
                  <Badge
                    key={index}
                    className="text-white bg-gray-700 px-3 py-1 rounded-full "
                  >
                    {feature}
                  </Badge>
                ))} */}
                <Stacks stacks={features}>
                  <></>
                </Stacks>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="p-6 bg-opacity-5 bg-black rounded-lg shadow-lg flex flex-col space-y-4">
              <p className="text-white text-lg font-semibold pl-3  pb-2">
                Benefits
                <span className="text-[#13ffaa] ml-1">.</span>
                {benifitsIcons?.map((icon: any, index: number) => (
                  <span key={index} className=" inline-block mr-1">
                    {icon}
                  </span>
                ))}
              </p>
              <div className="flex flex-wrap gap-2">
                {/* {benefits?.map((benefit, index) => (
                  <Badge
                    key={index}
                    className="text-white bg-gray-700 px-3 py-1 rounded-full "
                  >
                    {benefit}
                  </Badge>
                ))} */}
                <Stacks stacks={benefits}>
                  <></>
                </Stacks>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-col items-start justify-start p-5"
        initial={{ opacity: 0, x: reverse ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </div>
  );
}
