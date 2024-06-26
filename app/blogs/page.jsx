"use client"
import AllBlogs from "@/components/AllBlogs";
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
        <div className="pricingBg w-full h-[650px] rounded-b-[80px] px-20 pt-[300px] z-10 ">
          <p className="tracking-wide font-bold font-flyHead text-[64px] leading-[74px] text-[#ffffff] text-center uppercase">
            THE LATEST IN ENGINEERING <br />
            INTELLIGENCE INNOVATION
          </p>
          <p className="font-inter font-normal text-[18px] leading-[23.4px] text-[#ffffff] text-center mt-5">
            Get the most new-age insights, stories, discussions, and pieces of{" "}
            <br />
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
