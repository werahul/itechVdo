"use client";

import React, { useState, useEffect, useRef } from "react";
import AutoScroll from "./AutoScroll";
import AboutSwitch from "./AboutSwitch";
import TeamSection from "./TeamSection";
import Cta from "./Cta";
import Footer from "./Footer";



const images = [
  "/Images/auto1.png",
  "/Images/auto2.png",
  "/Images/auto3.png",
  "/Images/auto4.png",
  "/Images/auto5.png",
  "/Images/auto6.png",
  "/Images/auto7.png",
  "/Images/auto8.png",
  "/Images/auto9.png",
  "/Images/auto10.png",
];

const AboutBlue = () => {
  const [activeTab, setActiveTab] = useState("problems");
  const [efficiencyText, setEfficiencyText] = useState("Efficiency");
  const [percentageText, setPercentageText] = useState("90%");
  const [animationClass, setAnimationClass] = useState("expand");

  // const efficiencyTexts = [
  //   "Efficiency",
  //   "Speed",
  //   "Delivery",
  //   "Sprint",
  //   "Cost-Effectiveness",
  //   "Quality",
  //   "Cost-Reduction",
  // ];
  // const percentageTexts = ["90%", "100%", "100%", "60%", "40%", "25%", "37.5%"];
  // let index = 0;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setAnimationClass("shrink");

  //     setTimeout(() => {
  //       index = (index + 1) % efficiencyTexts.length;
  //       setEfficiencyText(efficiencyTexts[index]);
  //       setPercentageText(percentageTexts[index]);
  //       setAnimationClass("expand");
  //     }, 1000);
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const linkedinIcons = document.querySelectorAll(".linkedin-icon");

    linkedinIcons.forEach((icon) => {
      const handleMouseOver = () => {
        icon.src = "/Images/linkedinIcon.svg";
      };

      const handleMouseOut = () => {
        icon.src = "/Images/linkedinIconWhite.png";
      };

      icon.addEventListener("mouseover", handleMouseOver);
      icon.addEventListener("mouseout", handleMouseOut);

      // Cleanup event listeners on component unmount
      return () => {
        icon.removeEventListener("mouseover", handleMouseOver);
        icon.removeEventListener("mouseout", handleMouseOut);
      };
    });
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <div className="">
      <div className="pricingBg w-full lg:h-[641px] h-[350px] lg:rounded-b-[80px] rounded-b-[40px] lg:px-20 px-5 lg:pt-[300px] pt-[50px] z-10 ">
        <p className="tracking-wide font-flyHead lg:text-[64px] text-[32px] lg:leading-[74px] leading-[42px] text-[#ffffff] text-center">
          TAKING ENGINEERING INTELLIGENCE <br />
          TO THE NEXT LEVEL
        </p>
        <p className="font-inter font-normal lg:text-[18px] text-[16px] leading-[23.4px] text-[#ffffff] text-center mt-5">
          Our dedicated team is empowering Engineering Leaders with cutting-edge{" "}
          <br />
          analytics and enabling them to make efficient business decisions.
        </p>
        {/*<div className="flex justify-center items-center">
          <button className="bg-[#1FFFA3] hover:bg-transparent border boder-[#1FFFA3] rounded-[8px] w-[243px] h-[56px] font-bold text-[20px] text-[#000049] hover:text-[#1FFFA3] mt-10 ">
            Request A Demo
          </button>
        </div>*/}
      </div>
      <div className="max-container">
        <div className="lg:flex items-center lg:px-20 px-5 lg:space-x-20 lg:py-[156px] py-10">
          <div className="lg:w-[50%]">
            <p className="font-inter lg:text-[48px] text-[28px] text-[#000049]">
              Our <span className="font-semibold"> Story </span>
            </p>
            <p className="font-inter lg:text-[18px] text-[14px] lg:leading-[27px] leading-[21px] text-[#000049] mt-2">
              “Building software doesn’t have to be a black box.” Working per
              this motto, the DevBoost team makes engineering work transparent,
              provides real-time insights, offers detailed analytics and thus
              helps engineering teams achieve the right balance between speed
              and quality.
            </p>
          </div>
          <div className="lg:w-[50%] flex items-start justify-center max-container">
          <div className="videoSec w-full h-auto rounded-[10px] relative">
            <video
              ref={videoRef}
              src="/videos/aboutVdo.mp4"
              className="w-full h-auto rounded-[10px]"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              controls
            />
            {!isPlaying && (
              <img
                src="/Images/playBtn.png"
                alt="Play Button"
                className="z-10 w-[80px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                onClick={handlePlayPause}
              />
            )}
          </div>
        </div>
        </div>
        <div className="lg:px-20 lg:my-0 my-10">
          <AboutSwitch />
        </div>
        <div className="lg:py-[156px] py-10 lg:px-20 px-5 ">
          <p className="font-inter lg:text-[48px] text-[28px] text-[#000049] lg:text-center">
            Our <span className="font-semibold"> Founders </span>
          </p>

          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-6 lg:gap-y-0 gap-y-6 lg:mt-10 mt-7">
            <div className="w-full  border-2 border-[#8F2758] bg-[#8F2758] rounded-[8px] lg:flex ">
              <div className="bg-gray-300 lg:w-[263px] w-full">
                <img
                  src="/Images/tushar.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" lg:w-[70%] lg:p-7 p-4 ">
                <div className="flex justify-between items-start">
                  <div className="lg:pb-0 pb-2">
                    <p className=" font-inter font-semibold text-[24px] text-white ">
                      Tushar Doshi
                    </p>
                    <p className=" font-inter text-[16px] text-white">
                      Co-Founder, ED & CEO
                    </p>
                  </div>

                  <a
                    href="https://www.linkedin.com/in/tushar-p-doshi-21962519"
                    target="_blank"
                  >
                    <img
                      src="/Images/linkedinIconWhite.png"
                      alt="LinkedInIcon"
                      className="linkedin-icon lg:my-4 my-2"
                    />
                  </a>
                </div>

                <p className="font-inter text-white lg:text-[16px] text-[14px] lg:leading-[24px] leading-[21px] border-t border-white lg:pt-4 pt-2">
                  Ex-Independent Director, Digi Life Technologies Ltd (SGX
                  listed). Former Global Independent Distributor (American
                  Manufacturer - Health & Wellness Industry) & Advisor
                  (India-based travel tech startup).
                </p>
              </div>
            </div>
            <div className="w-full  border-2 border-[#004C3F] bg-[#004C3F] rounded-[8px] lg:flex ">
              <div className="bg-gray-300 lg:w-[263px] w-full">
                <img
                  src="/Images/aninda.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" lg:w-[70%] lg:p-7 p-4">
                <div className="flex items-start justify-between">
                  <div className=" lg:pb-0 pb-2">
                    <p className=" font-inter font-semibold text-[24px] text-white ">
                      Aninda
                    </p>
                    <p className=" font-inter text-[16px] text-white">
                      Co-Founder, Director, COO, CPTO
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/aninda-mukherjee-83319036/"
                    target="_blank"
                  >
                    <img
                      src="/Images/linkedinIconWhite.png"
                      alt="LinkedInIcon"
                      className="linkedin-icon lg:my-4 my-2"
                    />
                  </a>
                </div>

                <p className="font-inter text-white lg:text-[16px] text-[14px] lg:leading-[24px] leading-[21px] border-t border-white lg:pt-4 pt-2">
                  Former Engineering Manager - Accenture. <br />
                  Formerly managed companies including but not limited to
                  Commonwealth Bank of Australia and Telstra. Also founded
                  Plannero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wtColor py-20 lg:px-20 px-5">
        <p className="font-inter lg:text-[48px] text-[28px] text-[#ffffff] lg:text-center">
          Our <span className="font-semibold"> Leadership Team </span>
        </p>

        <TeamSection />
      </div>
    </div>
  );
};

export default AboutBlue;
