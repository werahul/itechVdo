"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "Do I need a credit card to start a free trial?",
    answer:
      "No, you don’t need a credit card to start your free trial. When you’re installing DevBoost you might see an Order Summary page asking for your payment information. If this happens, you can click on the Complete order and begin installation button without entering any payment information.",
  },
  {
    question: "What are the differences between the Basic and Premium plans?",
    answer:
      "The Basic plan is a limited version of DevBoost that helps improve the pull request flow in teams. The Premium plan, on the other hand, offers a more holistic view into the effectiveness of the whole engineering organization, including insights on business outcomes, developer productivity, and developer experience.",
  },
  {
    question: "What’s included in the Freemium plan?",
    answer:
      "The Freemium plan contains limited but useful features and functionalities and is available for companies with less than 10 software developers.",
  },
  {
    question: "Can I pay yearly?",
    answer:
      "Contact your account manager or email us at Info@itechgenicglobal.com for more information on payment options.",
  },
];

const PricingFaq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleIconClick = (event, index) => {
    event.stopPropagation();
    toggleAccordion(index);
  };

  return (
    <div className="lg:pt-[156px] lg:pb-[156px] pt-0 pb-12 lg:px-20 px-5 max-container">
      <p className="lg:text-center font-inter font-semibold lg:text-[48px] text-[28px] text-[#000049]">
        FAQ’s
      </p>

      <div className="lg:mt-10 mt-8">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              onClick={() => toggleAccordion(index)}
              className={`w-full h-auto lg:py-10 py-7 lg:px-8 px-5 border border-[#000049] rounded-lg flex justify-between lg:mb-7 mb-6 transition-opacity duration-300 cursor-pointer ${
                isOpen ? "opacity-100" : "opacity-70"
              }`}
            >
              <div className="lg:w-[70%] w-[85%]">
                <p className="questions font-inter font-semibold lg:text-[24px] text-[18px] lg:leading-normal leading-[27px] text-[#000049]">
                  {faq.question}
                </p>
                {isOpen && (
                  <p className="answer font-inter lg:text-[18px] text-[14px] lg:leading-[27px] leading-[21px] text-[#000049] opacity-90 mt-3">
                    {faq.answer}
                  </p>
                )}
              </div>
              <div>
                <div
                  onClick={(event) => handleIconClick(event, index)}
                  className={`lg:w-[50px] w-[32px] lg:h-[50px] h-[32px] rounded-full border border-[#000049] flex items-center justify-center cursor-pointer ${
                    isOpen ? "bg-[#000049]" : ""
                  }`}
                >
                  <img
                    src={
                      isOpen
                        ? "/Images/openFaqIcon.png"
                        : "/Images/downFaqIcon.png"
                    }
                    alt="Toggle FAQ"
                    className="lg:w-auto w-[10px]"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingFaq;
