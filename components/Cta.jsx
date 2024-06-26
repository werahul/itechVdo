import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <div className="bg-[#F5F3F6]">
      <div className="lg:px-20 px-5 lg:py-[156px] py-20 max-container">
        <div className="gradient-border">
          <div className="lg:h-full h-[714px] w-full bg-[#eeeeee] rounded-[20px] absolute top-0 left-0 lg:py-16 py-8 lg:px-8 px-5 flex lg:items-center">
            <div className=" lg:flex items-start justify-between space-x-10">
              <div className="lg:w-[54%]">
                <p className="font-normal lg:text-[48px] text-[30px] lg:leading-[56px] leading-[36px] text-[#000049] font-flyHead">
                  READY TO LEAD WITH <br /> ENGINEERING INTELLIGENCE <br />{" "}
                  INNOVATION?
                </p>
                <p className="font-inter font-normal lg:text-[18px] text-[16px] lg:leading-[27px] leading-[24px] lg:mt-5 mt-[18px] text-[#000049]">
                  Multiple teams across Asia are boosting their revenue with
                  DevBoost! You too can join this growth journey.
                </p>
                <div className="lg:w-[50%] lg:hidden block mt-8">
                  <img
                    src="/Images/laptopIm.png"
                    alt=""
                    className="lg:w-[650px]"
                  />
                </div>

                <div className="lg:flex lg:space-x-3 lg:space-y-0 space-y-4 mt-7">
                  <div>
                    <Link href="/contact">
                      <p className="border border-[#00ffba] hover:border-[#000049] rounded lg:w-[197px] w-full h-[45px] flex items-center justify-center transition-colors bg-[#00ffba] text-[#000049] hover:bg-transparent font-bold font-inter boxShadowButton">
                        Request A Demo
                      </p>
                    </Link>
                  </div>
                  <div>
                    <Link href="/contact">
                      <p className="border border-[#0e0131] hover:border-[#00ffba] rounded lg:w-[230px] w-full h-[45px] flex items-center justify-center text-[#0e0131] transition-colors hover:bg-[#00ffba] hover:text-[#0e0131] font-bold font-inter boxShadowButton">
                        Try The Free Version
                      </p>
                    </Link>
                  </div>
                  <div>
                    <Link href="/pricing">
                      <p className="border border-[#0e0131] hover:border-[#00ffba] rounded lg:w-[211px] w-full h-[45px] flex items-center justify-center text-[#0e0131] transition-colors hover:bg-[#00ffba] hover:text-[#0e0131] font-bold font-inter boxShadowButton">
                        Explore Paid Plans
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:w-[50%] lg:block hidden">
                <img
                  src="/Images/laptopIm.png"
                  alt=""
                  className="lg:w-[650px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
