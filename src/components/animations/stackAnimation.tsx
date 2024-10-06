"use client";
import { once } from "events";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";

const containerSkills = {
  hidden: { opacity: 0, y: 100 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};
export function Stacks({
  children,
  stacks,
}: {
  stacks: string[];
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-start items-start space-y-4 mb-2">
      {children}
      <div className="flex flex-row justify-center items-center flex-wrap gap-3 ">
        {stacks.map((stack, index) => (
          <motion.button
            variants={containerSkills}
            key={stack}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            // make the animation work only once on scroll using the once prop
            custom={index}
            transition={{
              type: "spring",
              staggerChildren: 0.2,
            }}
          >
            <Badge key={stack} className="text-white">
              {stack}
            </Badge>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
