import React from "react";
import "../../allStyles.css";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import GreenThingyWrapper from "@/components/animations/greenThingyanimation";
import { Button } from "@/components/ui/button";
export function HomeNavBar() {
  return (
    <div className=" fixed glassy-nav top-0 w-[100%]">
      <div className="flex items-center space-x-4">
        <Link
          href="
            "
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-[#13ffaa]"
        >
          <FaGithub />
        </Link>
        <Link
          href="
            "
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-[#13ffaa]"
        >
          <FaLinkedin />
        </Link>
      </div>
      <GreenThingyWrapper setState={null}>
        <Button className="text-xl">Contact</Button>
      </GreenThingyWrapper>
    </div>
  );
}
