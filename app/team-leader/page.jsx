"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

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
            FACILITATING TEAM LEADERS TO <br />
            CONSTANTLY IMPROVE THE PROCESSES
          </p>
          <p className="font-inter font-normal text-[18px] leading-[23.4px] text-[#ffffff] text-center mt-5">
            DevBoost consistently lets you gauge the operations and processes
            with maximum clarity <br />
            and thus enables faster and more efficient software delivery.
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
                      src="/Images/teamLeaderVector.png"
                      alt="Problems"
                      className="z-20 absolute top-20 w-[520px] backdrop-blur-[10px] bg-opacity-50"
                    />
                  )}
                  {activeTab === "solutions" && (
                    <img
                      src="/Images/teamLeaderVector.png"
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
                        <div className="space-y-5">
                          <li className="font-inter font-normal text-[20px] leading-[30px] list-disc text-white">
                            How well are the sprints going?
                          </li>

                          <li className="font-inter font-normal text-[20px] leading-[30px] list-disc text-white">
                            How many tasks are completed daily and spillovers
                            per sprint?
                          </li>
                          <li className="font-inter font-normal text-[20px] leading-[30px] list-disc text-white">
                            What are the performance trends and time spent on
                            issues?
                          </li>
                          <li className="font-inter font-normal text-[20px] leading-[30px] list-disc text-white">
                            Where are the bugs coming from, and who is
                            responsible?
                          </li>
                          <li className="font-inter font-normal text-[20px] leading-[30px] list-disc text-white">
                            How many tasks are added, removed, or carried over,
                            and who is overutilized/ underutilized?
                          </li>
                        </div>
                      </>
                    )}
                    {activeTab === "solutions" && (
                      <>
                        <div className="space-y-5">
                          <li className="font-inter font-normal text-[16px] leading-[24px] list-disc text-white">
                            Evaluate sprint progress, task completion,
                            performance trends, time allocation, task changes,
                            and utilization levels.
                          </li>
                          <li className="font-inter font-normal text-[16px] leading-[24px] list-disc text-white">
                            Identify and fix spillovers, bug origins and sprint
                            blockers.
                          </li>
                          <li className="font-inter font-normal text-[16px] leading-[24px] list-disc text-white">
                            Improve communication between engineering leaders
                            and the development team by tracking KPIs to measure
                            performance and address developer issues
                            effectively.
                          </li>
                          <li className="font-inter font-normal text-[16px] leading-[24px] list-disc text-white">
                            Consolidate information from multiple tools to
                            identify patterns, providing 360° actionable
                            insights and forecasting potential issues to ensure
                            smooth product delivery.
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
                <img src="/Images/tl1.png" alt="tl1" />
              </div>
              <div className="w-[50%] space-y-4">
                <p className="font-inter font-semibold text-[32px] leading-[41px] text-[#000049]">
                  Deliver Quickly And Efficiently
                </p>

                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    When providing value to clients, strike the ideal balance
                    between output and speed while also maintaining the highest
                    level of software quality.
                  </p>
                </div>
                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    Consistently improve the indicators that are crucial to your
                    organization by benchmarking the performance.
                  </p>
                </div>
              </div>
              <div class="gradient-circle2"></div>
            </div>

            <div className="flex flex-row-reverse items-center space-x-5 relative">
              <div className="w-[50%]">
                <img src="/Images/tl2.png" alt="tl2" />
              </div>
              <div className="w-[50%] space-y-4">
                <p className="font-inter font-semibold text-[32px] leading-[41px] text-[#000049]">
                  Increase Operational Proficiency
                </p>

                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    To enhance accountability, workflow consistency, and hygiene
                    - establish team procedures and foster openness.
                  </p>
                </div>
                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    Use project updates and sentiment surveys in order to
                    provide qualitative insight on engineering operations.
                  </p>
                </div>
              </div>
              <div class="gradient-circle"></div>
            </div>

            <div className="flex items-center space-x-5 relative">
              <div className="w-[50%]">
                <img src="/Images/tl3.png" alt="tl3" />
              </div>
              <div className="w-[50%] space-y-4">
                <p className="font-inter font-semibold text-[32px] leading-[41px] text-[#000049]">
                  Improve Planning
                </p>

                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    Fulfill your team&lsquo;s objectives and improve delivery
                    predictability by fortifying your planning and retrospective
                    rituals.
                  </p>
                </div>
                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    Eliminate obstacles and avoid delays in order to improve
                    team unity.
                  </p>
                </div>
                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    Establish a clear understanding of accountability and the
                    division of effort as the cornerstone of a positive team
                    environment.
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
