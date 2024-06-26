"use client";
import React, { useEffect, useState } from "react";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);
  const [activeTab, setActiveTab] = useState("problems");
  return (
    <div>
      <Navbar />
      <section>
        <div className="pricingBg w-full h-[641px] rounded-b-[80px] px-20 pt-[300px] z-10 ">
          <p className="tracking-wide font-normal font-flyHead text-[64px] leading-[74px] text-[#ffffff] text-center uppercase">
            ENABLING ENGINEERING LEADS TO <br />
            MAKE EFFECTIVE BUSINESS DECISIONS
          </p>
          <p className="font-inter font-normal text-[18px] leading-[23.4px] text-[#ffffff] text-center mt-5">
            DevBoost is designed to help you lead your teams to focus on the{" "}
            <br />
            highest-priority tasks and deliver consistent results on time.
          </p>
        </div>
      </section>
      <div className="max-container">
        <section>
          <div className="mt-[156px] px-20">
            <div className="">
              <div className="h-[576px] BlueGra rounded-[20px] px-10 py-14 flex items-start space-x-10 relative">
                <div className="w-[50%] ">
                  {activeTab === "problems" && (
                    <img
                      src="/Images/englead1.png"
                      alt="Problems"
                      className="z-20 absolute top-20 w-[520px] backdrop-blur-[10px] bg-opacity-50"
                    />
                  )}
                  {activeTab === "solutions" && (
                    <img
                      src="/Images/englead1.png"
                      alt="Solutions"
                      className="z-20 absolute top-20 w-[520px] backdrop-blur-[10px] bg-opacity-50"
                    />
                  )}
                  {/*<div className="absolute grColor top-28 backdrop-blur-[10px] w-[500px] h-[350px] rounded-full z-10"></div>*/}
                </div>
                <div className="w-[50%]">
                  <div className="w-full h-[78px] rounded-[8px] flex items-center bg-white bg-opacity-10 px-3 mb-8">
                    <button
                      className={`w-[50%] h-[50px] rounded-[8px] ${
                        activeTab === "problems"
                          ? "bg-white font-semibold text-[#000049]"
                          : "bg-transparent font-normal text-white"
                      } font-inter text-[16px]`}
                      onClick={() => setActiveTab("problems")}
                    >
                      Problems
                    </button>
                    <button
                      className={`w-[50%] h-[50px] rounded-[8px] ${
                        activeTab === "solutions"
                          ? "bg-white font-semibold text-[#000049]"
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
                        <div className="space-y-6">
                          <li className="font-inter font-normal text-[20px] leading-[30px] list-disc text-white">
                            What&lsquo;s the status of current work and best practices
                            followed?
                          </li>

                          <li className="font-inter font-normal text-[20px] leading-[30px] list-disc text-white">
                            How well are the sprints going?
                          </li>
                          <li className="font-inter font-normal text-[20px] leading-[30px] list-disc text-white">
                            What does the quality of work look like?
                          </li>
                          <li className="font-inter font-normal text-[20px] leading-[30px] list-disc text-white">
                            How to align engineering strategy to business needs?
                          </li>
                          <li className="font-inter font-normal text-[20px] leading-[30px] list-disc text-white">
                            How to increase throughput without burning people
                            out?
                          </li>
                        </div>
                      </>
                    )}
                    {activeTab === "solutions" && (
                      <>
                        <div className="space-y-5">
                          <li className="font-inter font-normal text-[16px] leading-[24px] list-disc text-white">
                            Assess the quality and current status of work,
                            collaboration, team health and process adherence.
                          </li>
                          <li className="font-inter font-normal text-[16px] leading-[24px] list-disc text-white">
                            Analyze past delivery trends and align engineering
                            strategy with business needs.
                          </li>
                          <li className="font-inter font-normal text-[16px] leading-[24px] list-disc text-white">
                            Gain better visibility and track KPIs to measure
                            engineering performance and identify developer
                            issues, ensuring alignment between leaders and
                            teams.
                          </li>
                          <li className="font-inter font-normal text-[16px] leading-[24px] list-disc text-white">
                            Identify data patterns and consolidate program
                            information from multiple sources to provide 360°
                            actionable insights, forecasting potential issues in
                            agile development metrics.
                          </li>
                          <li className="font-inter font-normal text-[16px] leading-[24px] list-disc text-white">
                            Intelligent & real-time dashboard focusing on
                            Project Allocation, Investment Profile, & Planning
                            Accuracy.
                          </li>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className=""></div>
        <section className="py-[156px] px-20">
          <p className="text-center font-inter font-normal text-[48px] text-[#000049] mb-[48px]">
            Key <span className="font-semibold">USPs</span>
          </p>

          <div className="space-y-[70px]">
            <div className="flex items-center space-x-5 relative">
              <div className="w-[50%]">
                <img src="/Images/usp1.png" alt="Usp1" />
              </div>
              <div className="w-[50%] space-y-4">
                <p className="font-inter font-semibold text-[32px] leading-[41px] text-[#000049]">
                  Align Engineering Projects With <br /> Important Business
                  Goals
                </p>

                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    Make sure the engineering team focuses on solving issues
                    that have a significant influence on the company.
                  </p>
                </div>
                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    Invest almost one-third amount of time in developing
                    projects that will maximize revenue.
                  </p>
                </div>
              </div>
              <div class="gradient-circle2"></div>
            </div>

            <div className="flex flex-row-reverse items-center space-x-5 relative">
              <div className="w-[50%]">
                <img src="/Images/usp2.png" alt="Usp2" />
              </div>
              <div className="w-[50%] space-y-4">
                <p className="font-inter font-semibold text-[32px] leading-[41px] text-[#000049]">
                  Reporting on Engineering <br /> Success Made Easy
                </p>

                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    Report on top priority initiatives to the board.
                  </p>
                </div>
                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    Simplify the process of compiling reports on operational
                    metrics and financial performance as much as possible.
                  </p>
                </div>
              </div>
              <div class="gradient-circle"></div>
            </div>

            <div className="flex items-center space-x-5 relative
            ">
              <div className="w-[50%]">
                <img src="/Images/usp3.png" alt="Usp3" />
              </div>
              <div className="w-[50%] space-y-4">
                <p className="font-inter font-semibold text-[32px] leading-[41px] text-[#000049]">
                  Establish An Innovative And <br /> Accountable Culture
                </p>

                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    Encourage an engaged and driven engineering organization.
                  </p>
                </div>
                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    Create a team that’s proud of its enormous influence and the
                    caliber of its creative solutions.
                  </p>
                </div>
              </div>
              <div class="gradient-circle2"></div>
            </div>
          </div>
        </section>
      </div>
      <Cta />
      <Footer />
    </div>
  );
};

export default Page;
