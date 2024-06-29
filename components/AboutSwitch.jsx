import { useState, useRef } from "react";

const AboutSwitch = () => {
  const [selectedTab, setSelectedTab] = useState("Vision");
  
  const visionTabRef = useRef(null);
  const missionTabRef = useRef(null);
  const valuesTabRef = useRef(null);

  const handleTabClick = (tab, ref) => {
    setSelectedTab(tab);
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const renderContent = () => {
    switch (selectedTab) {
      case "Vision":
        return (
          <>
            <div className="lg:block flex items-center justify-center">
              <img
                src="/Images/aboutVision.png"
                alt="Vision"
                className="lg:w-[336px] w-[260px]"
              />
            </div>
            <div className="lg:w-[70%] ">
              <p className="font-inter font-normal lg:text-[16px] text-[14px] lg:leading-[24px] leading-[21px] text-[#ffffff] lg:mt-0 mt-4">
                Our vision is to bridge the divide between technology leadership
                and business leadership, ensuring seamless collaboration and
                strategic alignment. We aim to become the premier engineering
                intelligence platform for small and medium-sized enterprises
                (SMEs), providing the insights and tools necessary for informed
                decision-making, for innovation for thriving in a competitive
                landscape by realizing their full potential through advanced
                engineering intelligence solutions.
              </p>
            </div>
          </>
        );
      case "Mission":
        return (
          <>
            <div className="lg:block flex items-center justify-center">
              <img
                src="/Images/aboutMission.png"
                alt="Mission"
                className="lg:w-auto w-[327px]"
              />
            </div>
            <div className="lg:w-[60%] ">
              <p className="font-inter font-normal lg:text-[16px] text-[14px] lg:leading-[24px] leading-[21px] text-[#ffffff] lg:mt-0 mt-4">
                Our mission is to harness the power of data analytics to
                streamline business operations and processes across various
                industry verticals. By improving developers&apos; efficiency and
                productivity, we enable tech companies to meet and exceed their
                performance goals. Our engineering intelligence SaaS tool
                provides actionable insights, optimizing workflows and fostering
                innovation. We are committed to empowering businesses with the
                information they need to make informed decisions, drive growth,
                and deliver exceptional value to their customers.
              </p>
            </div>
          </>
        );
      case "Values":
        return (
          <>
            <div className="lg:block flex items-center justify-center">
              <img
                src="/Images/aboutValues.png"
                alt="Values"
                className="lg:w-auto w-[267px]"
              />
            </div>
            <div className="lg:w-[60%] ">
              <p className="font-inter font-normal lg:text-[16px] text-[14px] lg:leading-[24px] leading-[21px] text-[#ffffff] lg:mt-0 mt-4">
                Our team is driven by a commitment to innovation rooted in the
                core principles of simplification and transparency. We believe
                that by streamlining complex processes and providing clear,
                straightforward insights, we can empower our users to make more
                informed decisions.
              </p>

              <div className="grid grid-cols-2 lg:gap-x-0 gap-x-40 gap-y-8 mt-8 pr-20">
                <div className=" flex items-center space-x-2">
                  <img src="/Images/ab1.png" alt="" />
                  <p className="font-inter font-medium lg:text-[16px] text-[14px] text-white">
                    Transparency
                  </p>
                </div>
                <div className=" flex items-center space-x-2">
                  <img src="/Images/ab2.png" alt="" />
                  <p className="font-inter font-medium lg:text-[16px] text-[14px] text-white">
                    Agility
                  </p>
                </div>
                <div className=" flex items-center space-x-2">
                  <img src="/Images/ab3.png" alt="" />
                  <p className="font-inter font-medium lg:text-[16px] text-[14px] text-white">
                    Innovation
                  </p>
                </div>
                <div className=" flex items-center space-x-2">
                  <img src="/Images/ab4.png" alt="" />
                  <p className="font-inter whitespace-nowrap font-medium lg:text-[16px] text-[14px] text-white">
                    Team Work
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="lg:h-[594px] BlueGra2 rounded-[20px] lg:px-10 px-5 py-14 relative">
      <div className="bg-[#ffffff] bg-opacity-15 w-full p-3 rounded-[8px] flex items-center justify-between overflow-x-auto">
        <div
          ref={visionTabRef}
          className={`cursor-pointer ${
            selectedTab === "Vision"
              ? "bg-[#ffffff] text-[#000049] font-semibold"
              : "bg-transparent text-white font-normal opacity-70"
          } px-6 lg:h-[88px] h-[43px] min-w-[140px] lg:min-w-[350px] rounded-[8px] flex items-center space-x-3 lg:text-[21px] text-[16px]`}
          onClick={() => handleTabClick("Vision", visionTabRef)}
        >
          <img src="/Images/abVision.png" alt="Vision" className="lg:w-auto w-[33px]" />
          <p>Vision</p>
        </div>
        <div
          ref={missionTabRef}
          className={`cursor-pointer ${
            selectedTab === "Mission"
              ? "bg-[#ffffff] text-[#000049] font-semibold"
              : "bg-transparent text-white font-normal opacity-70"
          } px-6 lg:h-[88px] h-[43px] min-w-[140px] lg:min-w-[350px] rounded-[8px] flex items-center space-x-3 lg:text-[21px] text-[16px]`}
          onClick={() => handleTabClick("Mission", missionTabRef)}
        >
          <img src="/Images/abMission.png" alt="Mission" className="lg:w-auto w-[33px]" />
          <p>Mission</p>
        </div>
        <div
          ref={valuesTabRef}
          className={`cursor-pointer ${
            selectedTab === "Values"
              ? "bg-[#ffffff] text-[#000049] font-semibold"
              : "bg-transparent text-white font-normal opacity-70"
          } px-6 lg:h-[88px] h-[43px] min-w-[167px] lg:min-w-[350px] rounded-[8px] flex items-center space-x-3 lg:text-[21px] text-[16px]`}
          onClick={() => handleTabClick("Values", valuesTabRef)}
        >
          <img src="/Images/abValues.png" alt="Values" className="lg:w-auto w-[33px]" />
          <p>Values</p>
        </div>
      </div>
      <div className="visionContent lg:flex items-center lg:space-x-20 lg:px-10 py-5 lg:mt-0 mt-4">
        {renderContent()}
      </div>
    </div>
  );
};

export default AboutSwitch;
