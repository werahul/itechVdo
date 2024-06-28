"use client";
import Cta from "@/components/Cta";
import DevBoostIntegration from "@/components/DevBoostIntegration";
import Footer from "@/components/Footer";
import HomeBlogs from "@/components/HomeBlogs";
import Navbar from "@/components/Navbar";
import NavbarMobile from "@/components/NavbarMobile";
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
      <NavbarMobile/>
      <section>
        <div className="pricingBg w-full lg:h-[889px] h-[450px] lg:rounded-b-[80px] rounded-b-[40px] lg:px-20 px-5 lg:pt-[300px] pt-[50px] z-10 ">
          <p className="tracking-wide font-normal font-flyHead lg:text-[64px] lg:leading-[74px] text-[32px] leading-[42px] text-[#ffffff] text-center uppercase">
            DEVBOOST IS THE SMARTEST <br /> ENGINEERING INTELLIGENCE TOOL
          </p>
          <p className="font-inter font-normal lg:text-[18px] text-[16px] leading-[23.4px] text-[#ffffff] text-center mt-5">
            An all-in-one solution that provides predictive analysis, forecasts,{" "}
            <br className="lg:block hidden" />
            personalized recommendations, and actionable insights
          </p>
        </div>
        <div className="lg:px-[230px] px-5 flex items-start justify-center lg:-mt-[340px] -mt-[100px] max-container">
          <div className="videoSec w-full h-auto lg:rounded-[40px] rounded-lg relative border border-[#1FFFA3]">
            <video
              ref={videoRef}
              src="/videos/vdoProduct.mp4"
              className="w-full h-auto lg:rounded-[40px] rounded-lg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              controls
            />
            {!isPlaying && (
              <img
                src="/Images/playBtn.png"
                alt="Play Button"
                className="z-10 lg:w-[114px] w-[45px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                onClick={handlePlayPause}
              />
            )}
          </div>
        </div>
      </section>
      <div className="lg:pt-[156px] pt-20 lg:px-20 px-5">
        <div className="text-center font-inter font-normal lg:text-[48px] text-[28px] text-[#000049]">
          Key <span className="font-semibold"> Benefits</span>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-12 lg:gap-y-14 gap-y-8 mt-[48px]">
          <div className="flex flex-col items-center justify-center">
            <img src="/Images/benefits1.png" alt="" className="lg:w-auto w-[64px]" />
            <p className="font-inter font-semibold lg:text-[24px] text-[20px] text-[#000049] mt-3">
              Faster Speed To Market
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/Images/benefits2.png" alt="" className="lg:w-auto w-[64px]" />
            <p className="font-inter font-semibold lg:text-[24px] text-[20px] text-[#000049] mt-3">
              On-Time Successful Release
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/Images/benefits3.png" alt="" className="lg:w-auto w-[64px]" />
            <p className="font-inter font-semibold lg:text-[24px] text-[20px] text-[#000049] mt-3">
              Code Quality Improvement
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/Images/benefits4.png" alt="" className="lg:w-auto w-[64px]" />
            <p className="font-inter font-semibold lg:text-[24px] text-[20px] text-[#000049] mt-3">
              Reduction In Costs
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/Images/benefits5.png" alt="" className="lg:w-auto w-[64px]"/>
            <p className="font-inter font-semibold lg:text-[24px] text-[20px] text-[#000049] mt-3">
              Better Process Governance
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/Images/benefits6.png" alt="" className="lg:w-auto w-[64px]"/>
            <p className="font-inter font-semibold lg:text-[24px] text-[20px] text-[#000049] mt-3">
              Better Utilization Of Team
            </p>
          </div>
        </div>
      </div>
      <DevBoostIntegration />
      <div className="lg:py-[156px] py-20 lg:px-20 px-5">
        <div className="lg:text-center font-inter font-normal lg:text-[48px] text-[28px] text-[#000049]">
          How <span className="font-semibold"> DevBoost Works</span>
        </div>
        <p className="font-inter lg:text-[18px] lg:leading-[27px] text-[16px] leading-[24px] lg:text-center text-[#000049] mt-3">
          DevBoost correlates multiple signals from different tools and provides
          - precise predictive analysis, accurate health risk <br className="lg:block hidden"/>{" "}
          predictions, forecasts, personalized recommendations, and
          risk-mitigating actionable insights along with clear steps, <br className="lg:block hidden"/>{" "}
          thereby boosting productivity across various teams and increasing
          on-time project outcomes.
        </p>
        <img src="/Images/intTools.png" alt="" className="mt-[43px] lg:block hidden" />
        <img src="/Images/intToolsMobile.png" alt="" className="mt-[43px] lg:hidden block" />
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
