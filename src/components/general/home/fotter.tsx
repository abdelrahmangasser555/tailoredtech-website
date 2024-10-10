import React from "react";
import GreenThingyWrapper from "@/components/animations/greenThingyanimation";
import { Poppins } from "next/font/google";
import "../../allStyles.css";
import { AnimatedLineWithText } from "@/components/animations/svgCircleAnimation";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
export default function Footer({ setState }, { setState: any }) {
  return (
    <footer
      className="bg-gray-900 text-white py-10 w-full md:px-0 sm:px-5"
      id="footer"
      style={{ scrollMarginTop: "10vh", zIndex: 10000 }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-5">
        {/* Logo Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          {/* Space for logo */}
          <div className="mb-6">
            <div
              className="hr-with-text mb-5"
              style={{
                width: "80%",
              }}
            >
              <hr />
              <GreenThingyWrapper setState={setState} index={6}>
                <span
                  className={`${poppins.className} text-[50px] md:text-[100px] text-white font-extrabold`}
                >
                  T<span className="text-[#13ffaa]">t.</span>
                </span>
              </GreenThingyWrapper>
            </div>
          </div>
          <AnimatedLineWithText width="250">
            <p className="text-white text-sm md:text-base text-nowrap">
              Great Solutions for Greater Companies
            </p>
          </AnimatedLineWithText>
        </div>

        {/* Links Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-[#13ffaa] text-lg font-bold mb-4">About Us</h2>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="text-white hover:text-[#13ffaa]">
                Our Story
              </a>
            </li>
            <li>
              <a href="/#founders" className="text-white hover:text-[#13ffaa]">
                Team
              </a>
            </li>
            <li>
              <a href="/timeline" className="text-white hover:text-[#13ffaa]">
                timeline
              </a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-[#13ffaa] text-lg font-bold mb-4">Services</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://calendly.com/tailoredtechapp/30min"
                className="text-white hover:text-[#13ffaa]"
              >
                book consultation (free)
              </a>
            </li>
            <li>
              <a href="/bundles" className="text-white hover:text-[#13ffaa]">
                our bundles
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/4">
          <h2 className="text-[#13ffaa] text-lg font-bold mb-4">Contact Us</h2>
          <div className="  flex items-center space-x-4">
            <Link
              href="https://www.linkedin.com/company/tailoredtech-solutions/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-[#13ffaa]"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://web.facebook.com/profile.php?id=61566903934243"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-[#13ffaa]"
            >
              <FiFacebook />
            </Link>
            <Link
              href="mailto:tailoredtechapp@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-[#13ffaa]"
            >
              <MdOutlineEmail />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm md:text-base">
        &copy; 2024 tailored tech. All rights reserved.
      </div>
    </footer>
  );
}
