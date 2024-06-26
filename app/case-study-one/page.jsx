"use client"
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);
    
  return (
    <div>
      <Navbar />
      <section>
        <div className="pricingBg w-full h-[907px] rounded-b-[80px] px-20 pt-[300px] z-10 ">
          <p className="tracking-wide font-normal font-flyHead text-[64px] leading-[74px] text-[#ffffff] text-center uppercase">
            DEVBOOST HELPS ORGANIZATIONS TO <br />
            BOOST BUSINESS OUTCOMES
          </p>
          <p className="font-inter font-normal text-[18px] leading-[23.4px] text-[#ffffff] text-center mt-5">
            Discover how our new-age engineering intelligence solutions <br />
            have consistently been a game-changer for our clients.
          </p>
        </div>
      </section>
      <div className="max-container">
        <div className="flex items-center justify-center -mt-[330px]">
          <img src="/Images/caseStudyMain.png" alt="Main Case Banner" />
        </div>
        <section className="py-[156px] px-20">
          <p className="text-center font-inter font-normal text-[48px] text-[#000049] mb-[48px]">
            Case Study -{" "}
            <span className="font-semibold">Infeon Technology</span>
          </p>

          <div className="">
            <div className="flex flex-row-reverse items-center space-x-5 ">
              <div className="w-[50%]">
                <img src="/Images/case1Vector1.png" alt="vector1" />
              </div>
              <div className="w-[50%] space-y-4">
                <p className="font-inter font-semibold text-[32px] leading-[41px] text-[#000049]">
                  About The Client
                </p>
                <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                  Infeon Technology - one of our esteemed clients - is a leading
                  power systems innovator. They had problems in identifying
                  issues which affected their delivery quality. While they
                  tested out different ways to solve their problems, the issues
                  were not getting fully identified. DevBoost proved to be the
                  one-stop solution for them and helped them boost customer
                  satisfaction, reduce spillover and identify process gaps.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-5  mt-[50px]">
              <div className="w-[50%]">
                <img src="/Images/case1Vector2.png" alt="Vector2" />
              </div>
              <div className="w-[50%] space-y-4">
                <p className="font-inter font-semibold text-[32px] leading-[41px] text-[#000049]">
                  Problem Statement Of The Client
                </p>

                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    They had a few midsize and large-scale clients as a boutique
                    services company. For over 2 years, they always struggled to
                    identify some of the process issues that were causing lots
                    of leakage in their code and the overall delivery quality.
                  </p>
                </div>
                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    The majority of the tools that they tested including notable
                    ones assumed that their process was disciplined. But in
                    their case, the underlying processes were not perfect, hence
                    those tools were not giving them the right insights.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row-reverse items-center space-x-5 mt-[100px]">
              <div className="w-[50%]">
                <img src="/Images/case1Vector3.png" alt="Vector3" />
              </div>
              <div className="w-[50%] space-y-4">
                <p className="font-inter font-semibold text-[32px] leading-[41px] text-[#000049]">
                  Solutions That DevBoost Offered
                </p>

                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    The client then came across DevBoost and decided to give it
                    a try. After 6 months, the results were amazing.
                  </p>
                </div>
                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    DevBoost turned out to be the only tool that correlated
                    multiple data points from multiple tools and helped them
                    pinpoint their process gaps, and quality gaps.
                  </p>
                </div>
                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    The observation was that - for this client, understanding
                    the problem was the most difficult part.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-5 mt-[160px]">
              <div className="w-[50%]">
                <img src="/Images/case1Vector4.png" alt="Vector4" />
              </div>
              <div className="w-[50%] space-y-4">
                <p className="font-inter font-semibold text-[32px] leading-[41px] text-[#000049]">
                  Outcomes That Were Achieved
                </p>

                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    After using DevBoost for over 6 months, some of the notable
                    improvements were as follows - Quality of work improved
                    drastically with 95% customer satisfaction from 70%. Very
                    little rework was now needed. 
                  </p>
                </div>
                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    Process gaps were identified, where more than 90% of the
                    developers were not linking commit ID with Jira tickets and
                    there was extremely high spillover every time. After using
                    DevBoost, the spillover rate reached almost 0% and the
                    process gaps became almost negligible.
                  </p>
                </div>
                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    The client called DevBoost’s ‘what if’ advisor - a brilliant
                    innovation - which helped them know if they were on track
                    and also recommended best-fit resources if there was a
                    delay, saving them time and not needing to hire extra
                    resources.
                  </p>
                </div>
                <div className="flex space-x-0 items-start">
                  <li className="list-disc w-[15px]"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049]">
                    The client found our that instead of 8 full-time resources,
                    they could now deliver the same scope with 5 resources.
                  </p>
                </div>
              </div>
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
