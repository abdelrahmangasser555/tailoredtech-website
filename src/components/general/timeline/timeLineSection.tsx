import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/acernityComponents/TimeLine";
import { BackgroundBlur } from "@/components/animations/backgroundBlur";
import { Content, Poppins } from "next/font/google";
import { Stacks } from "@/components/animations/stackAnimation";
import { title } from "process";
import Link from "next/link";
import AnimatedCircleWithText from "@/components/animations/svgCircleAnimation";
import { AnimatedLineWithText } from "@/components/animations/svgCircleAnimation";
import { useRouter } from "next/navigation";
import GreenThingyWrapper from "@/components/animations/greenThingyanimation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
export function TailoredTechTimeLine() {
  const navigation = useRouter();
  const data = [
    {
      title: "Early 2022",
      content: (
        <div
          style={{
            fontFamily: poppins.style.fontFamily,
            scrollMarginTop: "19vh",
          }}
          id="journey"
        >
          <GreenThingyWrapper setState={null}>
            <p className=" text-2xl text-neutral-200   mb-8">
              2022 is when tailored tech founders started creating{" "}
              <span className="text-[#13ffaa] mr-1 ">ai automation</span>
              pipe lines for <span className="text-[#13ffaa] ">companies</span>
            </p>
          </GreenThingyWrapper>
          <div
            className="grid sm:grid-col-1 md:grid-cols-2 gap-4"
            style={{
              fontFamily: poppins.style.fontFamily,
            }}
          >
            <div className="p-6 bg-opacity-5 bg-black rounded-lg shadow-lg flex flex-col space-y-4">
              <p className="text-white text-lg font-semibold pl-3  pb-2 flex items-center justify-start">
                Our used technologies
                <span className="text-[#13ffaa] mr-1 ">.</span>
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
                <Stacks
                  stacks={[
                    "bot press",
                    "Stack ai",
                    "voice flow",
                    "Make.com",
                    "Zapier",
                    "Wix",
                    "other automation tools...",
                  ]}
                >
                  <></>
                </Stacks>
              </div>
            </div>
            <div className="p-6 bg-opacity-5 bg-black rounded-lg shadow-lg flex flex-col space-y-4">
              <p className="text-white text-lg font-semibold pl-3  pb-2 flex items-center justify-start">
                what we offered
                <span className="text-[#13ffaa] mr-1 ">.</span>
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
                <Stacks
                  stacks={[
                    "ai agents",
                    "Costumer service chat bots",
                    "E-commerce websites",
                    "E-commerce automation",
                    "ai automation",
                    "costume ai solutions",
                    "costume solutions",
                  ]}
                >
                  <></>
                </Stacks>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "First Company System",
      content: (
        <div
          style={{
            fontFamily: poppins.style.fontFamily,
          }}
        >
          <p className=" text-2xl text-neutral-200   mb-8">
            In early 2023 we started creating{" "}
            <span className="text-[#13ffaa] mr-1 ">
              Complete software system
            </span>{" "}
            for a{" "}
            <span className="text-[#13ffaa] ">large saudi marine company</span>{" "}
            .
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/ra.tailoredtech.tech_login.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/images/ra2.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "Daas ai",
      content: (
        <div
          style={{
            fontFamily: poppins.style.fontFamily,
          }}
        >
          <h1
            className=" text-2xl text-neutral-200   mb-8"
            style={{
              fontFamily: poppins.style.fontFamily,
            }}
          >
            Have your{" "}
            <span className="text-[#13ffaa] mr-1 font-extrabold ">
              business development docs
            </span>{" "}
            in
            <AnimatedLineWithText strokeColor="#13ffaa" width="100" delay={0.8}>
              <span className="text-[#13ffaa] mr-1 "> minutes</span>
            </AnimatedLineWithText>
            not{" "}
            <AnimatedLineWithText strokeColor="red" width="100" delay={1.4}>
              <span className="text-error mr-1 ">months</span>
            </AnimatedLineWithText>
          </h1>
          <p className="  text-white ml-2 opacity-65">
            2023 we created a ai business development startup called Daas
          </p>
          <div
            className="grid sm:grid-col-1 md:grid-cols-2 gap-4"
            style={{
              fontFamily: poppins.style.fontFamily,
            }}
          >
            <div className="p-6 bg-opacity-5 bg-black rounded-lg shadow-lg flex flex-col space-y-4">
              <p className="text-white text-lg font-semibold pl-3  pb-2 flex items-center justify-start">
                what daas offers
                <span className="text-[#13ffaa] mr-1 ">.</span>
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
                <Stacks
                  stacks={[
                    "complete ai business development pipeline in minutes ✅",
                    "business intelligence ✅",
                    "business plan ✅",
                    "technical documents ✅",
                    "automation pipeline ✅",
                    "payment gateway ✅",
                    "r&d reports ✅",
                    "task management ✅",
                    "marketing plan ✅",
                  ]}
                >
                  <></>
                </Stacks>
              </div>
            </div>
            <div className="p-6 bg-opacity-5 bg-black rounded-lg shadow-lg flex flex-col space-y-4">
              <p className="text-white text-lg font-semibold pl-3  pb-2 flex items-center justify-start">
                tech stack
                <span className="text-[#13ffaa] mr-1 ">.</span>
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
                <Stacks
                  stacks={[
                    "next js",
                    "AWS",
                    "python",
                    "langchain",
                    "aws Amplify",
                    "Fawaterak",
                    "S3",
                    "Code build",
                    "Docker",
                    "ECR",
                    "Lambda",
                  ]}
                >
                  <></>
                </Stacks>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center">
            <AnimatedCircleWithText
              text={"Daas ai"}
              link="https://ai-daas.com"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Our Portfolio",
      content: (
        <div
          style={{
            fontFamily: poppins.style.fontFamily,
          }}
        >
          <p className=" text-2xl text-neutral-200   mb-8">
            In 2024 we created a portfolio{" "}
            <span className="text-[#13ffaa] mr-1 ">
              which you are visiting right now
            </span>
          </p>
          <p className=" text-white ml-2 opacity-65">
            2024 we created a portfolio website to showcase our work and
            projects
          </p>
        </div>
      ),
    },
    {
      title: "Your Turn",
      content: (
        <div
          className=" flex flex-col items-center justify-center"
          style={{
            fontFamily: poppins.style.fontFamily,
          }}
        >
          {/* <p className=" text-2xl text-neutral-200   mb-8">
            now it is your turn to be part{" "}
            <span className="text-[#13ffaa] mr-1 ">of our journey</span>
          </p> */}
          <br />
          <br />
          <br />
          <AnimatedLineWithText text="Be a part of our journey." />
          <button
            className="p-[3px] relative"
            onClick={() => {
              navigation.push("https://calendly.com/tailoredtechapp/30min");
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-[#13ffaa] rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Start journey
            </div>
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full pb-[40vh]">
      <Timeline data={data} />
    </div>
  );
}
