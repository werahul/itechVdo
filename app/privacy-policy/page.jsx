"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarMobile from "@/components/NavbarMobile";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);
  return (
    <div>
      <Navbar />
      <NavbarMobile/>
      <section>
        <div className="pricingBg w-full lg:h-[580px] h-[205px] lg:rounded-b-[80px] rounded-b-[80px] lg:px-20 px-5 lg:pt-[300px] pt-[50px] z-10 ">
          <p className="tracking-wide font-normal font-flyHead lg:text-[64px] lg:leading-[74px] text-[32px] leading-[42px] text-[#ffffff] text-center uppercase">
            Privacy Policy
          </p>
        </div>
      </section>
      <div className="max-container">
        <div className="text-[#000049] font-inter lg:px-20 px-5 lg:pt-20 pt-[56px]">
          <p className="font-semibold lg:text-[24px] text-[20px] leading-[30px]">
            DevBoost Platform And Data Usage
          </p>
          <div className="lg:text-[18px] text-[14px] lg:leading-[27px] leading-[21px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                DevBoost is a cloud-based analytics platform that is used by
                clients to analyse their end-to-end software delivery process.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                DevBoost works by mining data held in clients&apos; underlying
                software delivery toolsets (e.g. Jira, Git, Jenkins) to surface
                in customizable dashboards used by the client to optimize their
                (internal) delivery process.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                As such, DevBoost only holds data already present in these
                underlying toolsets. This includes company employee names and
                email addresses and certain actions taken by the employees (e.g.
                completing a Pull Request, transitioning a ticket).
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                The employee data is not shared with any third-party and is only
                used by the client teams themselves to improve their own
                performance over time.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                DevBoost allows analytical drill-down by workstream, team and
                individual (e.g. an individual’s Completed Tickets). However, if
                desired, the collection of personally identifiable information
                and the ability to view individuals can be disabled, so data is
                only visible at a team level.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter lg:px-20 px-5 pt-[48px]">
          <p className="font-semibold lg:text-[24px] text-[20px] leading-[30px]">
            DevBoost Use Of Personal Data And GDPR Compliance
          </p>
          <div className="lg:text-[18px] text-[14px] lg:leading-[27px] leading-[21px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                Under GDPR legislation, DevBoost is deemed the Data Processor
                and the client remains the Data Controller.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                As such, DevBoost’s use of personal data is fully GDPR
                compliant, as the client remains the Data Controller and under
                the terms of the DevBoost.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                T&Cs retains control of all data surfaced in the DevBoost
                dashboards.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                Any personal data is used for the client’s own internal purposes
                only (and DevBoost as Data Processor does not have the right to
                use the client data for its own purposes).
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter lg:px-20 px-5 pt-[48px] lg:pb-[156px] pb-20">
          <p className="font-semibold lg:text-[24px] text-[20px] leading-[30px]">
            When DevBoost Is Used By The Client
          </p>
          <div className="lg:text-[18px] text-[14px] lg:leading-[27px] leading-[21px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                A Personal Data Privacy Notice can be displayed to all users.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                All personal data is encrypted, securely held and not accessible
                to DevBoost as Data Processor without client permission.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                Only existing data held within company toolsets is collated and
                surfaced within the DevBoost dashboards (no new personal data is
                collected).
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                The data is not shared outside the client company and is only
                used by the client employees themselves to self-improve their
                own performance in the workplace.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Page;
