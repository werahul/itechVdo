"use client";

import React, { useState, useEffect } from "react";
import AutoScroll from "./AutoScroll";
import Link from "next/link";

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

const HomeBlue = () => {
  const [activeTab, setActiveTab] = useState("problems");
  const [efficiencyText, setEfficiencyText] = useState("Process");
  const [percentageText, setPercentageText] = useState("80%");
  const [animationClass, setAnimationClass] = useState("expand");

  const efficiencyTexts = [
    "Speed",
    "Delivery",
    "Sprint",
    "Cost-Effectiveness",
    "Quality",
    "Process",
  ];
  const percentageTexts = ["8X", "99%", ">50%", "60%", ">50%", ">80%"];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("shrink");

      setTimeout(() => {
        index = (index + 1) % efficiencyTexts.length;
        setEfficiencyText(efficiencyTexts[index]);
        setPercentageText(percentageTexts[index]);
        setAnimationClass("expand");
      }, 1000); // Duration of the shrink animation
    }, 4000); // Total duration for one cycle (shrink + pause + expand + pause)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="pricingBg w-full lg:h-[859px] h-[600px] lg:rounded-b-[80px] rounded-b-[40px] lg:px-20 px-5 lg:pt-[300px] pt-[50px] z-10 ">
        <p className="font-bold tracking-wide wordSpace font-flyHead lg:text-[64px] text-[32px] lg:leading-[94px] leading-[42px] text-[#ffffff] text-center">
          BOOST <br className="lg:hidden block" />
          <span
            className={`animatedText bg-[#004C3F] rounded-[8px] px-4 ${animationClass}`}
          >
            {" "}
            {efficiencyText}
          </span>{" "}
          <br className="lg:hidden block" />
          BY{" "}
          <span
            className={`animatedText bg-[#004C3F] rounded-[8px] px-4 lg:mt-0 mt-2 ${animationClass}`}
          >
            {" "}
            {percentageText}{" "}
          </span>
          <br /> WITH DEVBOOST
        </p>
        <p className="font-inter font-normal lg:text-[18px] leading-[23.4px] text-[#ffffff] text-center mt-5">
          DevBoost is an Ai based, Data-Driven platform for Faster, <br className="lg:block hidden"/> Smarter and Low Risk Software Development.
        </p>
        <div className="flex justify-center items-center">
          <Link href="/contact">
            <button className="bg-[#1FFFA3] glowEffect hover:bg-transparent border boder-[#1FFFA3] rounded-[8px] lg:w-[243px] w-[225px] h-[56px] font-bold text-[20px] text-[#000049] hover:text-[#1FFFA3] mt-10 ">
              Request A Demo
            </button>
          </Link>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center lg:-mt-[140px] -mt-[160px]">
        <img
          src="/Images/Home1.png"
          alt=""
          className="lg:w-[517px] w-[320px]"
        />
        <img
          src="/Images/Home2.png"
          alt=""
          className="lg:w-[517px] w-[320px]"
        />
      </div>
      <div className=" lg:mt-[150px] mt-20 lg:mb-2 mb-7 lg:px-0 px-5">
        <p className="font-inter font-bold lg:text-[24px] text-[20px] lg:leading-[36px] leading-[30px] lg:text-center text-[#000049] ">
          {" "}
          Loved by 100+ Engineering Teams{" "}
        </p>
        <p className="font-inter font-normal lg:text-[20px] text-[16px] lg:leading-[30px] leading-6 lg:text-center text-[#000049] ">
          {" "}
          At Startups, Unicorns, And IPO Companies
        </p>
      </div>
      <AutoScroll images={images} />

      <div className="csBg">
        <div className="max-container">
          <div className="mt-[80px] lg:px-20 px-0">
            <div className="">
              <div className="lg:h-[576px] BlueGra rounded-[20px] lg:px-10 px-5 py-14 lg:flex items-start lg:space-x-10 relative lg:mt-0 mt-5">
                <div className="lg:w-[50%] lg:mb-0 mb-10">
                  {activeTab === "problems" && (
                    <img
                      src="/Images/banner1.png"
                      alt="Problems"
                      className="z-20 lg:absolute lg:top-20 lg:w-[520px] lg:backdrop-blur-[10px] bg-opacity-50"
                    />
                  )}
                  {activeTab === "solutions" && (
                    <img
                      src="/Images/banner2.png"
                      alt="Solutions"
                      className="z-20 lg:absolute lg:top-20 lg:w-[520px] lg:backdrop-blur-[10px] bg-opacity-50"
                    />
                  )}
                  <div className="absolute grColor top-28 backdrop-blur-[10px] w-[500px] h-[350px] rounded-full z-10 lg:block hidden"></div>
                </div>
                <div className="lg:w-[50%]">
                  <div className="w-full h-[78px] rounded-[8px] flex items-center bg-white bg-opacity-10 px-3 mb-8">
                    <button
                      className={`w-[50%] h-[50px] rounded-[8px] ${
                        activeTab === "problems"
                          ? "bg-white font-bold text-[#000049]"
                          : "bg-transparent font-normal text-white"
                      } font-inter text-[16px]`}
                      onClick={() => setActiveTab("problems")}
                    >
                      Problems
                    </button>
                    <button
                      className={`w-[50%] h-[50px] rounded-[8px] ${
                        activeTab === "solutions"
                          ? "bg-white font-bold text-[#000049]"
                          : "bg-transparent font-normal text-white"
                      } font-inter text-[16px]`}
                      onClick={() => setActiveTab("solutions")}
                    >
                      Solutions
                    </button>
                  </div>
                  <div className="space-y-5">
                    {activeTab === "problems" && (
                      <>
                        <div className="">
                          <li className="font-inter font-semibold lg:text-[20px] text-[18px] lg:leading-[30px] leading-[27px] list-disc text-white">
                            Decrease In Project Visibility
                          </li>
                          <p className="font-inter font-normal lg:text-[16px] text-[14px] lg:leading-[24px] leading-[21px] text-white ml-7 mt-2">
                            Lack of clarity for the engineering leader
                            concerning the ground-level performance resulting in
                            unsustainable prioritization and broken developer
                            workflow.
                          </p>
                        </div>
                        <div className="">
                          <li className="font-inter font-semibold lg:text-[20px] text-[18px] lg:leading-[30px] leading-[27px] list-disc text-white">
                            Impact On Project Execution
                          </li>
                          <p className="font-inter font-normal lg:text-[16px] text-[14px] lg:leading-[24px] leading-[21px] text-white ml-7 mt-2">
                            Dependency issues arise in bigger teams as the
                            entire team gets disrupted even if a single person
                            is disturbed.
                          </p>
                        </div>
                        <div className="">
                          <li className="font-inter font-semibold lg:text-[20px] text-[18px] lg:leading-[30px] leading-[27px] list-disc text-white">
                            Diminishing Productivity
                          </li>
                          <p className="font-inter font-normal lg:text-[16px] text-[14px] lg:leading-[24px] leading-[21px] text-white ml-7 mt-2">
                            Resource burnout stems from situations ranging from
                            overwhelming ad hoc requests to dysfunctional work
                            conditions. Engineering leaders are not
                            well-informed about the workload and issues faced by
                            developers.
                          </p>
                        </div>
                      </>
                    )}
                    {activeTab === "solutions" && (
                      <>
                        <div className="">
                          <li className="font-inter font-semibold lg:text-[20px] text-[18px] lg:leading-[30px] leading-[27px] list-disc text-white">
                            Project Execution Transparency
                          </li>
                          <p className="font-inter font-normal lg:text-[16px] text-[14px] lg:leading-[24px] leading-[21px] text-white ml-7 mt-2">
                            Identify data patterns, consolidate program
                            information from multiple software sources and
                            provide 360° actionable insights.
                          </p>
                        </div>
                        <div className="">
                          <li className="font-inter font-semibold lg:text-[20px] text-[18px] lg:leading-[30px] leading-[27px] list-disc text-white">
                            Forecasting Project Outcomes
                          </li>
                          <p className="font-inter font-normal lg:text-[16px] text-[14px] lg:leading-[24px] leading-[21px] text-white ml-7 mt-2">
                            Correlate numerous aspects of agile development
                            metrics from multiple disparate tools and forecast
                            any potential issue that can impact the product.
                          </p>
                        </div>
                        <div className="">
                          <li className="font-inter font-semibold lg:text-[20px] text-[18px] lg:leading-[30px] leading-[27px] list-disc text-white">
                            Performance Visibility
                          </li>
                          <p className="font-inter font-normal lg:text-[16px] text-[14px] lg:leading-[24px] leading-[21px] text-white ml-7 mt-2">
                            Get better visibility between the engineering
                            leaders and the development team. Tracks KPIs to
                            measure engineering performance as well as any
                            developer issues.
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:pt-[156px] pt-20 lg:px-20 px-5">
            <p className="font-inter font-normal lg:text-[48px] text-[28px] lg:leading-[58px] leading-[38px] lg:text-center text-[#000049]">
              DevBoost Provides{" "}
              <span className="font-semibold"> Holistic View </span> & Clear
              Approach <br className="lg:block hidden" />
              To Improve <span className="font-semibold">
                Performance
              </span> & <span className="font-semibold">Delivery</span>
            </p>

            <div className="rounded-[20px] lg:px-10 pt-14 lg:flex items-center lg:space-x-10 relative">
              <div className="lg:w-[53%] z-10 lg:mb-0 mb-10">
                <img src="/Images/laptop.gif" alt="laptop" className="" />
                <a
                  href="https://leaddev.com/scaling-teams-hypergrowth/four-engineering-leadership-trends-you-need-know"
                  target="_blank"
                  className=""
                >
                  <p className="mt-2 font-inter lg:text-[12px] text-[8px] lg:whitespace-nowrap underline text-[#000049] text-center">
                    [Source:
                    https://leaddev.com/scaling-teams-hypergrowth/four-engineering-leadership-trends-you-need-know]
                  </p>
                </a>
              </div>
              <div className="lg:w-[50%]">
                <div className="flex items-start">
                  <li className="lg:text-[18px] text-[16px] lg:leading-[27px] leading-[24px] text-[#000049] list-disc"></li>
                  <p className="font-inter lg:text-[18px] text-[16px] lg:leading-[27px] leading-[24px] text-[#000049] list-disc">
                    Engineering leadership’s biggest challenge{" "}
                    <span className="font-semibold"> (45% of the time)</span> is
                    ensuring everyone is focused on the highest priority work.
                  </p>
                </div>
                <div className="flex items-start lg:mt-4 mt-2">
                  <li className="lg:text-[18px] text-[16px] lg:leading-[27px] leading-[24px] text-[#000049] list-disc"></li>
                  <p className="font-inter lg:text-[18px] text-[16px] lg:leading-[27px] leading-[24px] text-[#000049] list-disc">
                    DevBoost provides the solution to this by enabling the
                    required{" "}
                    <span className="font-semibold">transparency.</span>
                  </p>
                </div>
                <div className="flex items-start lg:mt-4 mt-2">
                  <li className="lg:text-[18px] text-[16px] lg:leading-[27px] leading-[24px] text-[#000049] list-disc"></li>
                  <p className="font-inter lg:text-[18px] text-[16px] lg:leading-[27px] leading-[24px] text-[#000049] list-disc">
                    It correlates multiple signals from various tools and
                    provides {" "}
                    <span className="font-semibold">
                      accurate health risks.
                    </span>
                  </p>
                </div>
                <Link href="/product">
                  <button className="lg:ml-6 bg-[#1FFFA3] hover:bg-transparent border hover:border-[#000049] rounded-[8px] lg:w-[243px] w-full h-[56px] font-bold text-[20px] text-[#000049] mt-10">
                    Tour The Product
                  </button>
                </Link>
              </div>
              <div className="gradient-circle3"></div>
            </div>

            <div className="lg:px-0 px-0">
              <p className=" font-inter font-normal lg:text-[48px] text-[28px] lg:leading-[58px] leading-[36px] lg:text-center text-[#000049] lg:pt-[156px] pt-20">
                Transforming{" "}
                <span className="font-semibold">Engineering Leaders</span> Into{" "}
                <br className="lg:block hidden" />{" "}
                <span className="font-semibold"> Business Leaders</span>
              </p>

              <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-5 lg:gap-y-0 gap-y-6 lg:mt-[50px mt-[35px]">
                <div className="lg:h-[519px] w-full bg-[#004C3F] p-7 rounded-[12px] ">
                  <img src="/Images/engineering.png" alt="" />
                  <p className="font-inter font-semibold lg:text-[24px] text-[20px] text-[#FFFFFF] mt-6">
                    Engineering Lead
                  </p>
                  <p className="font-inter font-normal lg:text-[16px] text-[14px] text-[#FFFFFF] lg:leading-[24px] leading-[21px] mt-3">
                    Assess the quality and current status of work,
                    collaboration, team health and process adherence. Analyze
                    past delivery trends and align engineering strategy with
                    business needs.
                  </p>
                  <Link href="engineering-lead">
                    <div className="font-inter font-semibold lg:text-[16px] text-[14px] text-[#1FFFA3] mt-4 flex items-center cursor-pointer space-x-2 hover:space-x-3 transition-all duration-100 w-[140px]">
                      <p className="">Learn More </p>
                      <img src="/Images/moreArr.png" alt="" className="" />
                    </div>
                  </Link>
                </div>
                <div className="lg:h-[519px] w-full bg-[#8F2758] p-7 rounded-[12px] ">
                  <img src="/Images/project.png" alt="" />
                  <p className="font-inter font-semibold lg:text-[24px] text-[20px] text-[#FFFFFF] mt-6">
                    Project Manager
                  </p>
                  <p className="font-inter font-normal lg:text-[16px] text-[14px] text-[#FFFFFF] lg:leading-[24px] leading-[21px] mt-3">
                    Monitor the status of delivery execution and perform root
                    cause analysis in case of delays. Check on data hygiene
                    quality, and identify blockers in SDLC and top 5 complex
                    tasks to optimize performance.
                  </p>
                  <Link href="/project-manager">
                    <div className="font-inter font-semibold lg:text-[16px] text-[14px] text-[#1FFFA3] mt-4 flex items-center cursor-pointer space-x-2 hover:space-x-3 transition-all duration-100 w-[140px]">
                      <p className="">Learn More </p>
                      <img src="/Images/moreArr.png" alt="" className="" />
                    </div>
                  </Link>
                </div>
                <div className="lg:h-[519px] w-full bg-[#000049] p-7 rounded-[12px] ">
                  <img src="/Images/teamLeader.png" alt="" />
                  <p className="font-inter font-semibold lg:text-[24px] text-[20px] text-[#FFFFFF] mt-6">
                    Team Leader
                  </p>
                  <p className="font-inter font-normal lg:text-[16px] text-[14px] text-[#FFFFFF] lg:leading-[24px] leading-[21px] mt-3 pr-5">
                    Evaluate sprint progress, task completion, performance
                    trends, time allocation, task changes, and utilization
                    levels. Identify and fix spillovers, bug origins and sprint
                    blockers.
                  </p>
                  <Link href="/team-leader">
                    <div className="font-inter font-semibold lg:text-[16px] text-[14px] text-[#1FFFA3] mt-4 flex items-center cursor-pointer space-x-2 hover:space-x-3 transition-all duration-100 w-[140px]">
                      <p className="">Learn More </p>
                      <img src="/Images/moreArr.png" alt="" className="" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlue;
