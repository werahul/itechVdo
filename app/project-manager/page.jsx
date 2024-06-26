"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // svd
  }, []);
  const [activeTab, setActiveTab] = useState("problems");
  return (
    <div>
      <Navbar />
      <section>
        <div className="pricingBg w-full h-[641px] rounded-b-[80px] px-20 pt-[300px] z-10 ">
          <p className="tracking-wide font-normal font-flyHead text-[64px] leading-[74px] text-[#ffffff] text-center uppercase">
            EMPOWERING PROJECT MANAGERS TO <br /> OPTIMIZE THEIR TEAM’S
            PERFORMANCE
          </p>
          <p className="font-inter font-normal text-[18px] leading-[23.4px] text-[#ffffff] text-center mt-5">
            DevBoost facilitates you to support your team confidently by
            proactively identifying and <br /> removing blockers with highly
            accurate, data-driven insights.
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
                      src="/Images/projectManager.png"
                      alt="Problems"
                      className="z-20 absolute top-20 w-[520px] backdrop-blur-[10px] bg-opacity-50"
                    />
                  )}
                  {activeTab === "solutions" && (
                    <img
                      src="/Images/projectManager.png"
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
                        <div className="space-y-4">
                          <li className="font-inter font-normal text-[18px] leading-[30px] list-disc text-white">
                            What&lsquo;s the current work status and the root cause
                            analysis of the delay? 
                          </li>

                          <li className="font-inter font-normal text-[18px] leading-[30px] list-disc text-white">
                            Are best practices followed and who are not
                            following data hygiene?
                          </li>
                          <li className="font-inter font-normal text-[18px] leading-[30px] list-disc text-white">
                            What is the quality of the feature released and what
                            issues are related to it? 
                          </li>
                          <li className="font-inter font-normal text-[18px] leading-[30px] list-disc text-white">
                            What are the blockers that are sitting across SDLC
                            and what are the impacts from the business context?
                          </li>
                          <li className="font-inter font-normal text-[18px] leading-[30px] list-disc text-white">
                            Dependency issues arise in bigger teams as the
                            entire team gets disrupted even if a single person
                            is disturbed.
                          </li>
                        </div>
                      </>
                    )}
                    {activeTab === "solutions" && (
                      <>
                        <div className="space-y-5">
                          <li className="font-inter font-normal text-[16px] leading-[24px] list-disc text-white">
                            Monitor the delivery execution status and perform
                            root cause analysis in case of delays.
                          </li>
                          <li className="font-inter font-normal text-[16px] leading-[24px] list-disc text-white">
                            Check data hygiene quality, and identify blockers in
                            SDLC and top 5 complex tasks to optimize
                            performance.
                          </li>
                          <li className="font-inter font-normal text-[16px] leading-[24px] list-disc text-white">
                            Enhance visibility and track KPIs to measure
                            engineering performance and developer issues.
                          </li>
                          <li className="font-inter font-normal text-[16px] leading-[24px] list-disc text-white">
                            Identify data patterns, consolidate information, and
                            forecast potential issues impacting the product.
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
                <img src="/Images/pm1.png" alt="Usp1" />
              </div>
              <div className="w-[50%] space-y-4">
                <p className="font-inter font-semibold text-[32px] leading-[41px] text-[#000049]">
                  Become A Data-Driven Instructor
                </p>

                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    Foster transparency and trust while standing by your teams.
                  </p>
                </div>
                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    Link the influence of an individual&lsquo;s effort to business
                    using statistics and concrete evidence.
                  </p>
                </div>
                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    Reduce thrash, pinpoint areas for skill growth, and offer
                    insightful, unbiased criticism.
                  </p>
                </div>
              </div>
              <div class="gradient-circle2"></div>
            </div>

            <div className="flex flex-row-reverse items-center space-x-5 relative">
              <div className="w-[50%]">
                <img src="/Images/pm2.png" alt="pm2" />
              </div>
              <div className="w-[50%] space-y-4">
                <p className="font-inter font-semibold text-[32px] leading-[41px] text-[#000049]">
                  Remove Bottlenecks And <br /> Blockers
                </p>

                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    Make sure your team delivers on time by preventing delays
                    and eliminating bottlenecks.
                  </p>
                </div>
                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    Set priorities and let pivotal stakeholders know how your
                    team is meeting its obligations.
                  </p>
                </div>
              </div>
              <div class="gradient-circle"></div>
            </div>

            <div className="flex items-center space-x-5 relative">
              <div className="w-[50%]">
                <img src="/Images/pm3.png" alt="pm3" />
              </div>
              <div className="w-[50%] space-y-4">
                <p className="font-inter font-semibold text-[32px] leading-[41px] text-[#000049]">
                  Maintain Project Tracking
                </p>

                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    When it comes to project delivery, be proactive by
                    projecting timelines, spotting potential delay spots, and
                    assessing trade-offs to stay on schedule.
                  </p>
                </div>
                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    Set priorities and update pivotal stakeholders on the status
                    of the delivery so as to keep everyone informed and on the
                    same page.
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
