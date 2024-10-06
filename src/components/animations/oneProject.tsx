"use client";
import { motion } from "framer-motion";
import GreenThingyWrapper from "./greenThingyanimation";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Stacks } from "./stackAnimation";
import { AiOutlineExport } from "react-icons/ai";
import Link from "next/link";
import { CardBody, CardItem } from "../acernityComponents/HoverCards";
import { CardContainer } from "../acernityComponents/HoverCards";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
type OneProjectProps = {
  name: string;
  description?: string;
  image?: string;
  client?: string;
  stack?: string[];
  link?: string;
  clientLink?: string;
  index?: number;
};

export default function OneProject({
  name,
  description,
  image,
  client,
  stack,
  link,
  clientLink = null,
  index,
}: OneProjectProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center  text-white"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="bg-green/30 backdrop-blur-lg rounded-lg p-10 shadow-lg overflow-hidden mb-5">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <CardContainer className=" inter-var">
            <CardBody className=" h-[100%] mb-[-40px]">
              <CardItem
                translateZ="100"
                translateY={-20}
                translateX={20}
                rotateX={20}
                rotateZ={index % 2 === 0 ? 10 : -10}
                className="w-full mt-4"
              >
                <Link href={link ? link : "#"} target={link ? "_blank" : ""}>
                  <Image
                    src={image}
                    alt={name}
                    className="w-[300px] "
                    width={80}
                    height={80}
                  />
                </Link>
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>
      </div>
      <GreenThingyWrapper setState={null}>
        <Link href={link ? link : "#"} target={link ? "_blank" : ""}>
          <h1
            className="text-2xl font-bold text-[#13ffaa] hover:underline"
            style={{
              fontWeight: "900",
              fontFamily: `${poppins.style.fontFamily}`,
            }}
          >
            {name}
            <span className="text-[white]">.</span>
          </h1>
        </Link>
      </GreenThingyWrapper>
      {stack.length >= 1 && <Stacks stacks={stack} />}
      <GreenThingyWrapper setState={null}>
        <div className="p-6 bg-opacity-5 bg-black rounded-lg shadow-lg w-full max-h-[200px] overflow-y-auto mb-3">
          <p
            className={`${poppins.className} text-md text-white opacity-70 leading-7 pl-5`}
            style={{ fontWeight: "400" }}
          >
            {description}
          </p>
        </div>
      </GreenThingyWrapper>
      <div className="p-6 bg-opacity-5 bg-black rounded-lg shadow-lg w-full">
        <p className="text-white text-lg font-semibold pl-3  pb-2 flex items-center justify-start">
          Client<span className="text-[#13ffaa] mr-1 ">.</span>{" "}
          {clientLink && (
            <motion.span
              className=" text-[#13ffaa]"
              whileHover={{ rotate: 10, y: -4, z: 40 }}
            >
              <Link href={clientLink} target="_blank">
                <AiOutlineExport />
              </Link>
            </motion.span>
          )}
        </p>
        <p
          className={`${poppins.className} text-md text-white opacity-70 leading-7 pl-5`}
          style={{ fontWeight: "400" }}
        >
          {client}
        </p>
      </div>
      {link && (
        <a
          href={link}
          className="text-[#13ffaa] hover:text-[#13ffaa] transition-colors duration-300"
          target="_blank"
        >
          View project
        </a>
      )}
    </motion.div>
  );
}
