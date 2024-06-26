"use client"
import Cta from "@/components/Cta";
import DevBoostIntegration from "@/components/DevBoostIntegration";
import Footer from "@/components/Footer";
import HomeBlogs from "@/components/HomeBlogs";
import HomeBlue from "@/components/HomeBlue";
import HomeHolisticView from "@/components/HomeHolisticView";
import Navbar from "@/components/Navbar";
import NavbarMobile from "@/components/NavbarMobile";
import TestimonialSlider from "@/components/TestimonialSlider";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);
  return (
    <div>
      <Navbar />
      <NavbarMobile/>
      <HomeBlue/>
      <HomeHolisticView/>
      <DevBoostIntegration/>
      <TestimonialSlider/>
      <HomeBlogs/>
      <Cta/>
      <Footer/>
    </div>
  );
};

export default Page;
