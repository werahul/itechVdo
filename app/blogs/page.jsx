"use client"
import AllBlogs from "@/components/AllBlogs";
import Cta from "@/components/Cta";
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
        <div className="pricingBg w-full lg:h-[650px] h-[390px] lg:rounded-b-[80px] rounded-b-[40px] lg:px-20 px-5 lg:pt-[300px] pt-[50px] z-10 ">
          <p className="tracking-wide font-bold font-flyHead lg:text-[64px] text-[32px] lg:leading-[74px] leading-[42px] text-[#ffffff] text-center uppercase">
            THE LATEST IN ENGINEERING <br />
            INTELLIGENCE INNOVATION
          </p>
          <p className="font-inter font-normal lg:text-[18px] text-[16px] leading-[23.4px] text-[#ffffff] text-center mt-5">
            Get the most new-age insights, stories, discussions, and pieces of{" "}
            <br className="lg:block hidden"/>
            advice for engineering teams on how to maximize business outcomes.
          </p>
        </div>
      </section>

      <AllBlogs />

      <Cta />
      <Footer />
    </div>
  );
};

export default Page;
