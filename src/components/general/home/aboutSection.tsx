import React from "react";
import "../../allStyles.css";
import { Poppins } from "next/font/google";
import { Stacks } from "@/components/animations/stackAnimation";
import GreenThingyWrapper from "@/components/animations/greenThingyanimation";
import { Button } from "@/components/ui/button";
import { BackgroundBlur } from "@/components/animations/backgroundBlur";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
export default function AboutSection({ setState }: { setState: any }) {
  return (
    <div
      className=" md:w-[70%]  sm:w-[95%] px-5"
      id="about"
      // I want when the user scroll to this section he opens on the top of that section
      style={{ scrollMarginTop: "10vh" }}
    >
      <BackgroundBlur />
      <div className="hr-with-text">
        <GreenThingyWrapper setState={setState} index={1}>
          <span
            className={` mobileHeadings ${poppins.className} text-[100px] text-[white] font-extrabold`}
          >
            About
            <span className="text-[#13ffaa]">.</span>
          </span>
        </GreenThingyWrapper>
        <hr />
      </div>
      <div className=" displayInColumn flex  items-start justify-center h-[100%] ">
        <div
          className=" flex items-start justify-start flex-col text-white gap-y-5"
          style={{
            fontWeight: "400",
            font: `${poppins.style.fontFamily}`,
          }}
        >
          <GreenThingyWrapper setState={null}>
            <p>
              <span
                className=" bg-slate-500 text-[#13ffaa] text-2xl rounded-md"
                style={{
                  float: "left",
                  fontWeight: "900",
                  padding: "0.5rem",
                  margin: "0.5rem",
                }}
              >
                T
              </span>
              ailored tech create cutting edge tailored software solution for
              your business from idea to coding to production to scaling we are
              with you all the way to reach the goal of your business.
            </p>
          </GreenThingyWrapper>
          <GreenThingyWrapper setState={null}>
            <p>
              we helped many businesses create software either it was a SaaS or
              optimization for there company or automating manual processes we
              help you focus on your business and we take care of the tech.
            </p>
          </GreenThingyWrapper>
          <GreenThingyWrapper setState={null}>
            <p>
              we are a team of developers that have experience in many
              technologies and we are always learning and adapting to the new
              technologies so we can provide you with the best solution for your
              business.
            </p>
          </GreenThingyWrapper>
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-[#13ffaa] rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              explore more
            </div>
          </button>
        </div>
        <div className=" with-margin-top flex items-center justify-start flex-col h-[100%] md:ml-10 sm:ml-0 w-[300px] md:translate-y-[-40px] md:mt-0 sm:mt-10">
          <h1
            className="text-[#13ffaa] text-4xl font-extrabold text-nowrap mb-3"
            style={{
              fontWeight: "900",
              font: `${poppins.style.fontFamily}`,
            }}
          >
            Working Stacks
            <span className="text-[white]">.</span>
          </h1>
          <Stacks
            stacks={["React", "Node js", "MongoDB", "Express", "Docker", "ECR"]}
          >
            <h1 className=" text-white  text-left w-[100%]">Common Stack</h1>
          </Stacks>
          <Stacks
            stacks={[
              "Next.js",
              "Amplify",
              "AWS",
              "S3",
              "SES",
              "CLERK",
              "Docker",
            ]}
          >
            <h1 className=" text-white  text-left w-[100%] mt-4">
              Advanced Stack
            </h1>
          </Stacks>
          <Stacks
            stacks={[
              "Django",
              "Python",
              "PostgreSQL",
              "Heroku",
              "Docker",
              "Kubernetes",
              "Next js",
              "Flutter",
            ]}
          >
            <h1 className=" text-white  text-left w-[100%] mt-4">
              Complex Projects
            </h1>
          </Stacks>
        </div>
      </div>
    </div>
  );
}
