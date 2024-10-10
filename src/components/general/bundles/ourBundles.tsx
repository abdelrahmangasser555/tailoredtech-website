"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/components/acernityComponents/outsideClick";
import { FiGlobe } from "react-icons/fi";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineComputer } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";

import { Stacks } from "@/components/animations/stackAnimation";
import { IoMdRocket } from "react-icons/io";
import { PiPuzzlePiece } from "react-icons/pi";
import { BsPuzzle } from "react-icons/bs";
import { TbPuzzle } from "react-icons/tb";
import { Poppins } from "next/font/google";
import GreenThingyWrapper from "@/components/animations/greenThingyanimation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10 "
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[10000000]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center  rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-[100%] md:h-fit md:max-h-[70%]   flex flex-col  bg-neutral-900 sm:rounded-3xl overflow-y-auto"
            >
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className=" flex items-center justify-center flex-wrap h-[30vh] py-[20px]"
              >
                {active?.mainIcon?.map((icon) => {
                  return <p className=" inline-block">{icon}</p>;
                })}
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium  text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className=" text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className=" text-xs md:text-sm lg:text-base h-[100%] md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col   hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div
                layoutId={`image-${card.title}-${id}`}
                className=" flex items-center justify-center flex-wrap h-[30vh] bg-neutral-800 rounded-xl"
              >
                {card?.mainIcon?.map((icon) => {
                  return <p className=" inline-block">{icon}</p>;
                })}
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <GreenThingyWrapper setState={null}>
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium  text-neutral-200 text-center md:text-left text-base"
                  >
                    {card.title}
                  </motion.h3>
                </GreenThingyWrapper>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className=" text-neutral-400 text-center md:text-left text-base "
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10 text-white"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description:
      "Transforms manual systems into automated workflows with data entry and reporting tools, ideal for businesses modernizing operations.",
    title: "Digitalize paper to software",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    mainIcon: [
      <LuFileSpreadsheet className="  text-error" size={80} />,
      <FaArrowRight className=" text-white" />,
      <MdOutlineComputer className=" text-[#13ffaa]" size={90} />,
    ],
    ctaText: "schedule meeting",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <>
          <h1 className=" text-[#13ffaa]">recommended to</h1>

          <p>
            ideal for businesses that still rely on manual systems or paperwork.
            If you’re looking to move from traditional methods to digital
            solutions, this bundle will help you streamline and modernize your
            processes.
          </p>
          <h1 className=" text-[#13ffaa]">Objective</h1>
          <p>
            The Digital Transformation Package is designed to turn your manual
            systems and paperwork into fully automated, digital solutions. We
            help you move away from time-consuming, error-prone methods by
            digitizing your workflows and automating repetitive tasks. This
            makes your operations faster, more accurate, and easier to manage.
          </p>
          <h1 className=" text-[#13ffaa]">Detailed description </h1>

          <p>
            Converts manual systems into automated workflows with tools for data
            entry and reporting, ideal for businesses looking to modernize
            operations.s
          </p>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-10">
              {/* Features Section */}
              <div className="p-6 bg-opacity-5 bg-black rounded-lg shadow-lg flex flex-col space-y-4">
                <p className="text-white text-lg font-semibold pl-3  pb-2 flex items-center justify-start">
                  Features<span className="text-[#13ffaa] mr-1 ">.</span>
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
                      "Paperwork digitization",
                      "System automation",
                      "Workflow management",
                      "Management dashboard",
                      "real time taking",
                      "admin dashboard",
                      "Data entry tools",
                      "Reporting tools",
                      "Process optimization",
                      "history tracking",
                    ]}
                  >
                    <></>
                  </Stacks>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="p-6 bg-opacity-5 bg-black rounded-lg shadow-lg flex flex-col space-y-4">
                <p className="text-white text-lg font-semibold pl-3  pb-2">
                  Benefits
                  <span className="text-[#13ffaa] ml-1">.</span>
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
                  <Stacks
                    stacks={[
                      "Eliminate manual work",
                      "Faster processes",
                      "Centralized data",
                      "Automated reporting",
                      "Improved accuracy",
                      "Head office management",
                      "track & avoid human errors",
                      "save money",
                    ]}
                  >
                    <></>
                  </Stacks>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    },
  },
  {
    description:
      "Offers MVP building and idea testing for entrepreneurs, providing expert support to quickly validate and launch business concepts.",
    title: "Start up launch package",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    mainIcon: [
      <HiOutlineLightBulb className="  text-yellow-400" size={90} />,
      <FaArrowRight className=" text-white" />,
      <IoMdRocket className=" text-[#13ffaa]" size={90} />,
    ],
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <>
          <h1 className=" text-[#13ffaa]">recommended to</h1>

          <p>
            This package is perfect for entrepreneurs and startup founders who
            have innovative ideas but lack the technical skills or resources to
            bring them to life. It’s ideal for those looking to quickly validate
            their concepts and get a functional product to market.
          </p>
          <h1 className=" text-[#13ffaa]">Objective</h1>
          <p>
            The Startup Launch Package helps turn your business idea into
            reality. We provide the technical support needed to develop a
            Minimum Viable Product (MVP) for real user testing. Our goal is to
            simplify the process and boost your confidence in launching your
            product.
          </p>
          <h1 className=" text-[#13ffaa]">Detailed description </h1>

          <p>
            Delivers MVP building, idea testing, and growth planning for
            entrepreneurs, providing expert technical support to quickly
            validate and launch business ideas.
          </p>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-10">
              {/* Features Section */}
              <div className="p-6 bg-opacity-5 bg-black rounded-lg shadow-lg flex flex-col space-y-4">
                <p className="text-white text-lg font-semibold pl-3  pb-2 flex items-center justify-start">
                  Features<span className="text-[#13ffaa] mr-1 ">.</span>
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
                      "Idea testing",
                      "MVP building",
                      "Growth planning",
                      "Technical help",
                      "documentation for code pace",
                      "clean coding for extensional work",
                      "integration for google analytics",
                      "integrating payment gateway",
                    ]}
                  >
                    <></>
                  </Stacks>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="p-6 bg-opacity-5 bg-black rounded-lg shadow-lg flex flex-col space-y-4">
                <p className="text-white text-lg font-semibold pl-3  pb-2">
                  Benefits
                  <span className="text-[#13ffaa] ml-1">.</span>
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
                  <Stacks
                    stacks={[
                      "Quick product launch",
                      "Lower development risk",
                      "Clear user feedback",
                      "Expert support",
                      "documentation for further development",
                      "flexible pricing",
                      "fast build measure learn feedback loop",
                    ]}
                  >
                    <></>
                  </Stacks>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    },
  },

  {
    description: `Delivers tailored integrations and ongoing support for companies
            facing specific challenges, ensuring effective personalized
            technical solutions.`,
    title: "Custom Solutions for Unique Needs",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Visit",
    mainIcon: [
      <span
        className={`${poppins.className} text-[50px] md:text-[60px] text-white font-extrabold`}
      >
        T<span className="text-[#13ffaa]">t.</span>
      </span>,
      <FaArrowRight className=" text-white" />,
      <PiPuzzlePiece className="text-[#13ffaa]" size={30} />,
      <BsPuzzle className=" text-[#13ffaa]" size={30} />,
      <TbPuzzle className="  text-[#13ffaa]" size={30} />,
    ],
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <>
          <h1 className=" text-[#13ffaa]">recommended to</h1>

          <p>
            This package is suited for companies with specific operational
            challenges that require customized solutions. If you have unique
            business needs or existing systems that aren’t performing well, this
            bundle will help you address those challenges effectively.
          </p>
          <h1 className=" text-[#13ffaa]">Objective</h1>
          <p>
            The Custom Solutions for Unique Needs package offers tailored
            technical solutions for your specific challenges. We work closely
            with you to create systems that fit your requirements, ensuring
            smooth operations so you can focus on growing your business.
          </p>
          <h1 className=" text-[#13ffaa]">Detailed description </h1>

          <p>
            Provides tailored integrations and ongoing support for companies
            facing specific challenges, ensuring personalized technical
            solutions for improved efficiency.
          </p>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-10">
              {/* Features Section */}
              <div className="p-6 bg-opacity-5 bg-black rounded-lg shadow-lg flex flex-col space-y-4">
                <p className="text-white text-lg font-semibold pl-3  pb-2 flex items-center justify-start">
                  Features<span className="text-[#13ffaa] mr-1 ">.</span>
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
                      "Custom integrations",
                      "Special tools",
                      "System improvement",
                      "Ongoing support",
                      "what ever you need ...",
                    ]}
                  >
                    <></>
                  </Stacks>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="p-6 bg-opacity-5 bg-black rounded-lg shadow-lg flex flex-col space-y-4">
                <p className="text-white text-lg font-semibold pl-3  pb-2">
                  Benefits
                  <span className="text-[#13ffaa] ml-1">.</span>
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
                  <Stacks
                    stacks={[
                      "Eliminate manual work",
                      "Faster processes",
                      "Centralized data",
                      "Automated reporting",
                      "Improved accuracy",
                      "Head office management",
                      "track & avoid human errors",
                      "save money",
                    ]}
                  >
                    <></>
                  </Stacks>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    },
  },
];
