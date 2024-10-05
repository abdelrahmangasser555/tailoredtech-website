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
export default function AboutSection() {
  return (
    <div className=" w-[70%] ">
      <BackgroundBlur />
      <div className="hr-with-text">
        <GreenThingyWrapper setState={null}>
          <span
            className={` ${poppins.className} text-[100px] text-[white] font-extrabold`}
          >
            About
            <span className="text-[#13ffaa]">.</span>
          </span>
        </GreenThingyWrapper>
        <hr />
      </div>
      <div className=" flex items-start justify-center h-[100%] ">
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
              ailored tech dolor sit amet consectetur adipisicing elit. Eaque
              beatae mollitia architecto atque dicta non quae est officiis,
              cumque, deserunt autem tenetur sed nisi excepturi aut porro at
              veritatis temporibus.
            </p>
          </GreenThingyWrapper>
          <GreenThingyWrapper setState={null}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              beatae mollitia architecto atque dicta non quae est officiis,
              cumque, deserunt autem tenetur sed nisi excepturi aut porro at
              veritatis temporibus.
            </p>
          </GreenThingyWrapper>
          <GreenThingyWrapper setState={null}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              beatae mollitia architecto atque dicta non quae est officiis,
              cumque, deserunt autem tenetur sed nisi excepturi aut porro at
              veritatis temporibus.
            </p>
          </GreenThingyWrapper>
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-[#13ffaa] rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              explore more
            </div>
          </button>
        </div>
        <div className=" flex items-center justify-start flex-col h-[100%] ml-10 w-[300px] translate-y-[-40px]">
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
