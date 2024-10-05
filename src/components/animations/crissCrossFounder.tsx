/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import React from "react";
import { Poppins } from "next/font/google";
import GreenThingyWrapper from "./greenThingyanimation";
import { Badge } from "../ui/badge";
import { Stacks } from "./stackAnimation";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaGlobe,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

type CrissCrossProps = {
  children?: React.ReactNode;
  title: string;
  description: string;
  reverse?: boolean;
  linkedin?: string;
  github?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
  website?: string;
  email?: string;
  mainIcon?: any;
  roles?: string[];
};
export function CrissCrossFounder({
  children,
  title,
  mainIcon,
  description,
  linkedin,
  github,
  twitter,
  instagram,
  facebook,
  youtube,
  website,
  email,
  roles,
  reverse = false,
}: CrissCrossProps) {
  return (
    <div
      className={` flex items-center justify-between w-[100%]  ${
        reverse && "flex-row-reverse"
      }`}
    >
      <motion.div
        className=" flex flex-col items-center justify-start p-5"
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <GreenThingyWrapper setState={null}>
          <div className=" flex items-center justify-start gap-2 mb-2">
            {mainIcon &&
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
            className={` ${poppins.className} text-2xl text-white  text-center `}
            style={{
              fontWeight: "900",
            }}
          >
            Hi I am{" "}
            <span className="text-[#13ffaa] font-extrabold">{title}</span>
            <span className="text-[white]">.</span>
          </h1>
        </GreenThingyWrapper>
        {roles && (
          <Stacks stacks={roles}>
            <></>
          </Stacks>
        )}
        <div className="flex flex-col items-start space-y-10">
          {/* Description Section */}
          <div className="p-6 bg-opacity-5 bg-black rounded-lg shadow-lg w-full">
            <p className="text-white text-lg font-semibold pl-3  pb-2 flex items-center justify-start">
              Bio<span className="text-[#13ffaa] mr-1 ">.</span>
            </p>
            <p
              className={`${poppins.className} text-md text-white opacity-70 leading-7 pl-5`}
              style={{ fontWeight: "400" }}
            >
              {description}
            </p>
          </div>
        </div>
        <GreenThingyWrapper setState={null}>
          <div className="flex flex-wrap gap-4 flex-col">
            <h1
              className={` ${poppins.className} text-2xl  text-center text-white `}
              style={{
                fontWeight: "900",
              }}
            >
              Connect with me
              <span className="text-[#13ffaa]">.</span>
            </h1>
            <div className="flex flex-wrap justify-center  gap-4">
              {linkedin && (
                <Link
                  href={linkedin}
                  target="_blank"
                  className="text-[#13ffaa] hover:text-[#49e7ad]"
                >
                  <FaLinkedin size={20} />
                </Link>
              )}
              {github && (
                <Link
                  href={github}
                  target="_blank"
                  className="text-[#13ffaa] hover:text-[#49e7ad]"
                >
                  <FaGithub size={20} />
                </Link>
              )}
              {twitter && (
                <Link
                  href={twitter}
                  target="_blank"
                  className="text-[#13ffaa] hover:text-[#49e7ad]"
                >
                  <FaTwitter size={20} />
                </Link>
              )}
              {instagram && (
                <Link
                  href={instagram}
                  target="_blank"
                  className="text-[#13ffaa] hover:text-[#49e7ad]"
                >
                  <FaInstagram size={20} />
                </Link>
              )}
              {facebook && (
                <Link
                  href={facebook}
                  target="_blank"
                  className="text-[#13ffaa] hover:text-[#49e7ad]"
                >
                  <FaFacebook size={20} />
                </Link>
              )}
              {youtube && (
                <Link
                  href={youtube}
                  target="_blank"
                  className="text-[#13ffaa] hover:text-[#49e7ad]"
                >
                  <FaYoutube size={20} />
                </Link>
              )}
              {website && (
                <Link
                  href={website}
                  target="_blank"
                  className="text-[#13ffaa] hover:text-[#49e7ad]"
                >
                  <FaGlobe size={20} />
                </Link>
              )}
              {email && (
                <Link
                  href={`mailto:${email}`}
                  target="_blank"
                  className="text-[#13ffaa] hover:text-[#49e7ad]"
                >
                  <MdEmail size={20} />
                </Link>
              )}
            </div>
          </div>
        </GreenThingyWrapper>
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
