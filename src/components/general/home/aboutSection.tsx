import React from "react";
import "../../allStyles.css";
import { Poppins } from "next/font/google";
import { Stacks } from "@/components/animations/stackAnimation";
import GreenThingyWrapper from "@/components/animations/greenThingyanimation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BackgroundBlur } from "@/components/animations/backgroundBlur";
import HighlightEffect from "@/components/animations/theHighlightEffect";
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
              Tailored tech{" "}
              <HighlightEffect color="#13ffaa" delay={1.2}>
                creates tailored software solutions
              </HighlightEffect>{" "}
              for your business from{" "}
              <HighlightEffect color="#13ffaa" delay={1.8}>
                idea to production
              </HighlightEffect>
              . We help you achieve the{" "}
              <HighlightEffect color="#13ffaa" delay={3}>
                goal of your business
              </HighlightEffect>{" "}
              .
            </p>
          </GreenThingyWrapper>

          <GreenThingyWrapper setState={null}>
            <p>
              We assist companies with{" "}
              <HighlightEffect color="#13ffaa" delay={5}>
                automation and optimization
              </HighlightEffect>{" "}
              while you focus on your business.
            </p>
          </GreenThingyWrapper>

          <GreenThingyWrapper setState={null}>
            <p>
              Our team is{" "}
              <HighlightEffect color="#13ffaa" delay={7}>
                experienced in various technologies
              </HighlightEffect>{" "}
              and always learning to offer the best solutions.
            </p>
          </GreenThingyWrapper>

          <Link className="p-[3px] relative" href="/timeline">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-[#13ffaa] rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              explore more
            </div>
          </Link>
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
