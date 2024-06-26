"use client";
import React, { useState } from "react";

const PricingBlue = () => {
  // const [activePlan, setActivePlan] = useState("monthly");

  // const handlePlanChange = (plan) => {
  //   setActivePlan(plan);
  // };

  return (
    <div>
      <div className="pricingBg w-full lg:h-[1150px] h-[1800px] lg:rounded-b-[80px] rounded-b-[40px] lg:px-20 px-5 lg:pt-[300px] pt-[50px] z-10 ">
        <p className="tracking-wide font-bold font-flyHead lg:text-[64px] text-[32px] lg:leading-[74px] leading-[42px] text-[#ffffff] text-center uppercase">
          SIMPLE, TRANSPARENT <br />
          PRICING PLANS
        </p>
        <p className="font-inter font-normal lg:text-[18px] text-[16px] leading-[23.4px] text-[#ffffff] text-center mt-5">
          Get plans that suit teams of any size and help boost <br className="lg:block hidden" />
          business outcomes through accurate insights.
        </p>

        <div className="max-container">
          {/*<div className="mt-[58px] flex justify-center items-center">
            <div className="w-[461px] h-[93px] bg-white bg-opacity-15 rounded-lg p-3">
              <button
                className={`w-[50%] h-full rounded-lg font-inter text-[24px] ${
                  activePlan === "monthly"
                    ? "text-[#000049] bg-white"
                    : "text-[#ffffff] bg-transparent"
                }`}
                onClick={() => handlePlanChange("monthly")}
              >
                Monthly
              </button>
              <button
                className={`w-[50%] h-full rounded-lg font-inter text-[24px] ${
                  activePlan === "yearly"
                    ? "text-[#000049] bg-white"
                    : "text-[#ffffff] bg-transparent"
                }`}
                onClick={() => handlePlanChange("yearly")}
              >
                Yearly
              </button>
            </div>
          </div>*/}

          <div className="monthlyContent grid lg:grid-cols-3 grid-cols-1 lg:gap-x-9 lg:gap-y-0 gap-y-6 mt-[62px]">
            <div className="w-full rounded-lg h-[468px] py-10 px-5 bg-white bg-opacity-15 flex flex-col justify-center items-center">
              <p className="font-inter lg:text-[32px] text-[28px] text-white">Freemium</p>
              <p className="font-inter text-[16px] leading-[24px] text-white text-center mt-6">
                The best plan for early-stage startups. <br className="lg:block hidden"/> It helps them
                launch quickly. The <br className="lg:block hidden" /> Engineering Intelligence Innovation{" "}
                <br  className="lg:block hidden"/> can&#39;t get any better than this.
              </p>
              <p className="font-inter lg:text-[48px] text-[40px] text-white mt-10 leading-10">
                $0
              </p>
              <p className="font-inter lg:text-[18px] text-[16px] text-white mt-2">
                (Up to 10 users)
              </p>

              <button className="lg:w-[60%] w-[196px] lg:h-[60px] h-[56px] border border-[#1FFFA3] bg-transparent hover:bg-[#1FFFA3] rounded-lg text-[#1FFFA3] hover:text-[#000049] font-inter font-semibold text-[20px] mt-9">
                Start For Free
              </button>
            </div>
            <div className="w-full rounded-lg h-[468px] py-10 px-5 bg-white border-white border bg-opacity-15 flex flex-col justify-center items-center">
              <p className="font-inter lg:text-[32px] text-[28px] text-white">
                Fast-Growing Teams
              </p>
              <p className="font-inter text-[16px] leading-[24px] text-white text-center mt-6">
                This plan is best-suited for fast- <br className="lg:block hidden" />
                growing scale-ups that are eyeing <br className="lg:block hidden"/> expansion into new
                markets or <br className="lg:block hidden"/> products.
              </p>
              <p className="font-inter lg:text-[48px] text-[40px] text-white mt-10 leading-10">
                US$20
              </p>
              <p className="font-inter lg:text-[18px] text-[16px] text-white mt-2">
                (Per user per month)
              </p>

              <button className="lg:w-[60%] w-[161px] lg:h-[60px] h-[56px] border border-[#1FFFA3] hover:bg-transparent bg-[#1FFFA3] rounded-lg hover:text-[#1FFFA3] text-[#000049] font-inter font-semibold text-[20px] mt-9">
                Start Now
              </button>
            </div>
            <div className="w-full rounded-lg h-[468px] py-10 px-5 bg-white bg-opacity-15 flex flex-col justify-center items-center">
              <p className="font-inter lg:text-[32px] text-[28px] text-white">Enterprises</p>
              <p className="font-inter text-[16px] leading-[24px] text-white text-center mt-6">
                This is the perfect plan for large <br className="lg:block hidden" /> businesses that have
                multiple <br className="lg:block hidden"/>
                engineering teams working with siloed <br className="lg:block hidden"/> disparate tools.
              </p>
              <p className="font-inter lg:text-[48px] text-[40px] text-white mt-10 leading-10">
                US$30
              </p>
              <p className="font-inter lg:text-[18px] text-[16px] text-white mt-2">
                (Per user per month)
              </p>

              <button className="lg:w-[60%] w-[161px] lg:h-[60px] h-[56px] border border-[#1FFFA3] bg-transparent hover:bg-[#1FFFA3] rounded-lg text-[#1FFFA3] hover:text-[#000049] font-inter font-semibold text-[20px] mt-9">
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingBlue;
