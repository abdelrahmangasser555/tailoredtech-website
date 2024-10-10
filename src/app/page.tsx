"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FirstSection from "@/components/general/home/FirstSection";
import { Poppins } from "next/font/google";
import GreenThingyWrapper from "@/components/animations/greenThingyanimation";
import { buttonVariants } from "@/components/ui/button";
import { HomeNavBar } from "@/components/general/home/navBar";
import AboutSection from "@/components/general/home/aboutSection";
import WeOffer from "@/components/general/home/weOffer";
// import { Globe } from "@/components/acernityComponents/featuresSections";
import ProjectsSection from "@/components/general/home/ProjectsSection";
import ScaleUp from "@/components/animations/scaleUp";
import FounderSection from "@/components/general/home/FounderSection";
import LeftSideNav from "@/components/general/home/leftSideNav";
import Footer from "@/components/general/home/fotter";
import { AnimatedLineWithText } from "@/components/animations/svgCircleAnimation";
import AnimatedCircleWithText from "@/components/animations/svgCircleAnimation";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
import { BackgroundBlur } from "@/components/animations/backgroundBlur";
import { InfiniteMovingCardsTestemonials } from "@/components/general/home/testemonials";
import FinalCallAction from "@/components/general/home/finalCallAction";

export default function Home() {
  const [activeLink, setActiveLink] = useState(0);
  const Mylinks = [
    {
      name: "Main",
      link: "main",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "We Offer",
      link: "weoffer",
    },
    {
      name: "Projects",
      link: "projects",
    },
    {
      name: "Founders",
      link: "founders",
    },
    {
      name: "Take action",
      link: "action",
    },
    {
      name: "Footer",
      link: "footer",
    },
  ];
  return (
    <div
      className=" flex items-center justify-start flex-col min-h-screen bg-[#111] pt-[10vh] max-w-[100vw] overflow-x-hidden"
      style={{
        scrollBehavior: "smooth",
      }}
    >
      <HomeNavBar index={0} />
      <LeftSideNav
        Links={Mylinks}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      <FirstSection setNav={setActiveLink}>
        <BackgroundBlur />
        <div className=" flex flex-col items-start justify-start p-5">
          <GreenThingyWrapper setState={setActiveLink} index={0}>
            <h1
              className={` mobileHeadings ${poppins.className} text-[100px] text-[white] font-extrabold`}
              style={{
                fontWeight: "900",
              }}
            >
              Tailored Tech
              <span className="text-[#13ffaa]">.</span>
            </h1>
            <p
              className={` subHeadingMobile  ${poppins.className} text-2xl  pl-3 text-white opacity-70`}
              style={{
                fontWeight: "400",
              }}
            >
              Creating{" "}
              <AnimatedLineWithText>
                <span
                  className="
                text-[#13ffaa]
                "
                  style={{
                    fontWeight: "900",
                  }}
                >
                  custom software solutions
                </span>
              </AnimatedLineWithText>
              for{" "}
              <AnimatedLineWithText
                strokeColor="#13ffaa"
                width="100"
                delay={1.2}
              >
                <span
                  className="
                text-[#13ffaa] text-extrabold 
                "
                  style={{
                    fontWeight: "900",
                  }}
                >
                  businesses
                </span>{" "}
              </AnimatedLineWithText>
              and{" "}
              <AnimatedLineWithText strokeColor="#13ffaa" width="100" delay={2}>
                <span
                  className="
                text-[#13ffaa] text-extrabold 
              "
                  style={{
                    fontWeight: "900",
                  }}
                >
                  startups
                </span>
              </AnimatedLineWithText>
            </p>
          </GreenThingyWrapper>
          <GreenThingyWrapper setState={null}>
            <p className="  text-white md:max-w-[60%] sm:w-[100%] pl-4 mt-5">
              we created software solutions for large multi national companies
              in different sectors and we are ready to help you with your next
              project
            </p>
          </GreenThingyWrapper>
          <GreenThingyWrapper setState={null}>
            <Button
              className={buttonVariants({ variant: "outline" })}
              style={{
                fontWeight: "600",
                color: "black",
                marginTop: "2rem",
                marginLeft: "1rem",
              }}
            >
              Get in touch
            </Button>
          </GreenThingyWrapper>
        </div>
      </FirstSection>
      <InfiniteMovingCardsTestemonials />

      <AboutSection setState={setActiveLink} />
      <WeOffer setState={setActiveLink} />
      <AnimatedCircleWithText text="See Bundles" link="/bundles" />
      <ProjectsSection setState={setActiveLink} />
      <FounderSection setState={setActiveLink} />
      <FinalCallAction setState={setActiveLink} />
      <Footer setState={setActiveLink} />
      {/* <ScaleUp><Globe /></ScaleUp> */}
    </div>
  );
}
