"use client";
import ContactBlue from "@/components/ContactBlue";
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
      <ContactBlue />
      <Footer />
    </div>
  );
};

export default Page;
