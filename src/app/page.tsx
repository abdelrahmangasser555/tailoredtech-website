import Image from "next/image";
import { Button } from "@/components/ui/button";
import FirstSection from "@/components/general/home/FirstSection";
import { Poppins } from "next/font/google";
import GreenThingyWrapper from "@/components/animations/greenThingyanimation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <div className=" flex items-center justify-start flex-col min-h-screen bg-[#111] py-[10vh]">
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
            >
              Creating{" "}
              <span
                className="
                text-[#13ffaa] text-extrabold 
              "
              >
                custom software solutions
              </span>{" "}
              for{" "}
              <span
                className="
              text-[#13ffaa] text-extrabold 
            "
              >
                businesses
              </span>{" "}
              and{" "}
              <span
                className="
                text-[#13ffaa] text-extrabold 
              "
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
            <Button className=" mt-5 ml-5 w-[20vw] h-[40px]">
              Get in touch
            </Button>
          </GreenThingyWrapper>
        </div>
      </FirstSection>
    </div>
  );
}
