"use client";
import Cta from "@/components/Cta";
import DevBoostIntegration from "@/components/DevBoostIntegration";
import Footer from "@/components/Footer";
import HomeBlogs from "@/components/HomeBlogs";
import Navbar from "@/components/Navbar";
import ProductFaq from "@/components/ProductFaq";
import ROICalculator from "@/components/ROICalculator";
import TestimonialSlider from "@/components/TestimonialSlider";
import React, { useEffect, useState, useRef } from "react";

const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div>
      <Navbar />
      <section>
        <div className="pricingBg w-full h-[889px] rounded-b-[80px] px-20 pt-[300px] z-10 ">
          <p className="tracking-wide font-normal font-flyHead text-[64px] leading-[74px] text-[#ffffff] text-center uppercase">
            DEVBOOST IS THE SMARTEST <br /> ENGINEERING INTELLIGENCE TOOL
          </p>
          <p className="font-inter font-normal text-[18px] leading-[23.4px] text-[#ffffff] text-center mt-5">
            An all-in-one solution that provides predictive analysis, forecasts,{" "}
            <br />
            personalized recommendations, and actionable insights
          </p>
        </div>
        <div className="px-[230px] flex items-start justify-center -mt-[340px] max-container">
          <div className="videoSec w-full h-auto rounded-[40px] relative border border-[#1FFFA3]">
            <video
              ref={videoRef}
              src="/videos/vdoProduct.mp4"
              className="w-full h-auto rounded-[40px]"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              controls
            />
            {!isPlaying && (
              <img
                src="/Images/playBtn.png"
                alt="Play Button"
                className="z-10 w-[114px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                onClick={handlePlayPause}
              />
            )}
          </div>
        </div>
      </section>
      <div className="pt-[156px] px-20">
        <div className="text-center font-inter font-normal text-[48px] text-[#000049]">
          Key <span className="font-semibold"> Benefits</span>
        </div>
        <div className="grid grid-cols-3 gap-x-12 gap-y-14 mt-[48px]">
          <div className="flex flex-col items-center justify-center">
            <img src="/Images/benefits1.png" alt="" />
            <p className="font-inter font-semibold text-[24px] text-[#000049] mt-3">
              Faster Speed To Market
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/Images/benefits2.png" alt="" />
            <p className="font-inter font-semibold text-[24px] text-[#000049] mt-3">
              On-Time Successful Release
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/Images/benefits3.png" alt="" />
            <p className="font-inter font-semibold text-[24px] text-[#000049] mt-3">
              Code Quality Improvement
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/Images/benefits4.png" alt="" />
            <p className="font-inter font-semibold text-[24px] text-[#000049] mt-3">
              Reduction In Costs
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/Images/benefits5.png" alt="" />
            <p className="font-inter font-semibold text-[24px] text-[#000049] mt-3">
              Better Process Governance
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/Images/benefits6.png" alt="" />
            <p className="font-inter font-semibold text-[24px] text-[#000049] mt-3">
              Better Utilization Of Team
            </p>
          </div>
        </div>
      </div>
      <DevBoostIntegration />
      <div className="pt-[156px] px-20">
        <div className="text-center font-inter font-normal text-[48px] text-[#000049]">
          How <span className="font-semibold"> DevBoost Works</span>
        </div>
        <p className="font-inter text-[18px] leading-[27px] text-center text-[#000049] mt-3">
          DevBoost correlates multiple signals from different tools and provides
          - precise predictive analysis, accurate health risk <br />{" "}
          predictions, forecasts, personalized recommendations, and
          risk-mitigating actionable insights along with clear steps, <br />{" "}
          thereby boosting productivity across various teams and increasing
          on-time project outcomes.
        </p>
        <img src="/Images/intTools.png" alt="" className="mt-[43px]" />
      </div>
      <ROICalculator/>
      <TestimonialSlider />
      <ProductFaq />
      <Cta />
      <Footer />
    </div>
  );
};

export default Page;
