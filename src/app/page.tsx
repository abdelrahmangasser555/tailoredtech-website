import Image from "next/image";
import { Button } from "@/components/ui/button";
import FirstSection from "@/components/general/home/FirstSection";
import { Poppins } from "next/font/google";
import GreenThingyWrapper from "@/components/animations/greenThingyanimation";
import { buttonVariants } from "@/components/ui/button";
import { HomeNavBar } from "@/components/general/home/navBar";
import AboutSection from "@/components/general/home/aboutSection";
// import { Globe } from "@/components/acernityComponents/featuresSections";
import ScaleUp from "@/components/animations/scaleUp";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});
import { InfiniteMovingCardsTestemonials } from "@/components/general/home/testemonials";

export default function Home() {
  return (
    <div className=" flex items-center justify-start flex-col min-h-screen bg-[#111] py-[10vh]">
      <HomeNavBar />
      <FirstSection>
        <div className=" flex flex-col items-start justify-start p-5">
          <GreenThingyWrapper setState={null}>
            <h1
              className={` ${poppins.className} text-[100px] text-[white] font-extrabold`}
              style={{
                fontWeight: "900",
              }}
            >
              Tailored Tech
              <span className="text-[#13ffaa]">.</span>
            </h1>
            <p
              className={`${poppins.className} text-2xl  pl-3 text-white opacity-60`}
              style={{
                fontWeight: "400",
              }}
            >
              Creating{" "}
              <span
                className="
                text-[#13ffaa]
              "
                style={{
                  fontWeight: "900",
                }}
              >
                custom software solutions
              </span>{" "}
              for{" "}
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
              and{" "}
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
            </p>
          </GreenThingyWrapper>
          <GreenThingyWrapper setState={null}>
            <p className=" text-white max-w-[60%] pl-4 mt-5">
              we created costume solutions for large multi national companies in
              different sectors and we are ready to help you with your next
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

      <AboutSection />
      {/* <ScaleUp><Globe /></ScaleUp> */}
    </div>
  );
}
