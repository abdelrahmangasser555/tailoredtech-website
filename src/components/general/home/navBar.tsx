import React from "react";
import "../../allStyles.css";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import GreenThingyWrapper from "@/components/animations/greenThingyanimation";
import { Button } from "@/components/ui/button";
import { EncryptButton } from "../../animations/encryptionButton";
export function HomeNavBar() {
  return (
    <div className=" fixed glassy-nav top-0 w-[100%] h-[10vh]">
      <div className="flex items-center space-x-4">
        <Link
          href="https://github.com/abdelrahmangasser555"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-[#13ffaa]"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/abdelrahman-gasser-74571127b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-[#13ffaa]"
        >
          <FaLinkedin />
        </Link>
      </div>
      <EncryptButton TARGET_TEXT="let's Talk" />
    </div>
  );
}
