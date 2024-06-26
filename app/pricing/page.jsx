"use client"
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarMobile from "@/components/NavbarMobile";
import PricingBlue from "@/components/PricingBlue";
import PricingFaq from "@/components/PricingFaq";
import PricingPlan from "@/components/PricingPlan";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);
  return (
    <div>
      <Navbar />
      <NavbarMobile/>
      <PricingBlue />
      <PricingPlan />
      <PricingFaq />
      <Cta />
      <Footer />
    </div>
  );
};

export default Page;
