import React from "react";
import GreenThingyWrapper from "@/components/animations/greenThingyanimation";
import { Poppins } from "next/font/google";
import "../../allStyles.css";
import { AnimatedLineWithText } from "@/components/animations/svgCircleAnimation";
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
              <a href="#founders" className="text-white hover:text-[#13ffaa]">
                Team
              </a>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-[#13ffaa] text-lg font-bold mb-4">Services</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-white hover:text-[#13ffaa]">
                Consulting
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#13ffaa]">
                Development
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#13ffaa]">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/4">
          <h2 className="text-[#13ffaa] text-lg font-bold mb-4">Contact Us</h2>
          <ul className="space-y-2">
            <li className="text-white text-sm md:text-base">
              Email: support@tailoredtech.tech
            </li>
            <li className="text-white text-sm md:text-base">
              Phone: +123 456 7890
            </li>
            <li>
              <a
                href="mailto:abdelrahmangasser2023@gmail.com"
                className="text-white hover:text-[#13ffaa]"
              >
                Support Center
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm md:text-base">
        &copy; 2024 tailored tech. All rights reserved.
      </div>
    </footer>
  );
}
