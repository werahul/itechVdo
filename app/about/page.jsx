"use client";
import AboutBlue from "@/components/AboutBlue";
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
      <NavbarMobile />
      <AboutBlue />
      <Cta />
      <Footer />
    </div>
  );
};

export default Page;
