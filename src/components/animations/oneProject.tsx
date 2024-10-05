"use client";
import { motion } from "framer-motion";
import GreenThingyWrapper from "./greenThingyanimation";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Stacks } from "./stackAnimation";

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
};

export default function OneProject({
  name,
  description,
  image,
  client,
  stack,
  link,
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
          className="flex items-center justify-center gap-2 relative mb-1 "
          initial={{ opacity: 1, rotate: 0, y: 70, scale: 1 }}
          whileHover={{ rotate: -10, y: -10, scale: 1.1 }}
        >
          <Image
            src={image}
            alt={name}
            className="w-[300px] "
            width={80}
            height={80}
          />
        </motion.div>
      </div>
      <GreenThingyWrapper setState={null}>
        <h1
          className="text-2xl font-bold text-[#13ffaa]"
          style={{
            fontWeight: "900",
            fontFamily: `${poppins.style.fontFamily}`,
          }}
        >
          {name}
          <span className="text-[white]">.</span>
        </h1>
      </GreenThingyWrapper>
      {stack.length >= 1 && (
        <Stacks stacks={stack}>
          <></>
        </Stacks>
      )}

      <div className="p-6 bg-opacity-5 bg-black rounded-lg shadow-lg w-full max-h-[200px] overflow-y-auto mb-3">
        <p
          className={`${poppins.className} text-md text-white opacity-70 leading-7 pl-5`}
          style={{ fontWeight: "400" }}
        >
          {description}
        </p>
      </div>
      <div className="p-6 bg-opacity-5 bg-black rounded-lg shadow-lg w-full">
        <p className="text-white text-lg font-semibold pl-3  pb-2 flex items-center justify-start">
          Client<span className="text-[#13ffaa] mr-1 ">.</span>
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
        >
          View project
        </a>
      )}
    </motion.div>
  );
}
