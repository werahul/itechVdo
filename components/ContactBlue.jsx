import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactBlue = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    option: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_8opw6uo", // replace with your service ID
        "template_rd4umfu", // replace with your template ID
        formData,
        "Y0jI3xOyAMUM4pa4G" // replace with your user ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Reset form fields
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      option: "",
      message: "",
    });
  };
  return (
    <div>
      <div className="pricingBg w-full lg:h-[641px] h-[340px] lg:rounded-b-[80px] rounded-b-[40px] lg:px-20 px-5 lg:pt-[300px] pt-[50px] z-10 ">
        <p className="tracking-wide font-flyHead lg:text-[64px] text-[32px] lg:leading-[74px] leading-[42px] text-[#ffffff] text-center uppercase">
          Have a question about DevBoost? <br /> Contact us today!
        </p>
        <p className="font-inter font-normal lg:text-[18px] text-[16px] leading-[23.4px] text-[#ffffff] text-center mt-5">
          Learn how DevBoost is the ‘Smartest Engineering Intelligence Platform’
          that empowers <br className="lg:block hidden" /> engineering leaders
          with transparency and precise, actionable insights.
        </p>
        {/*<div className="flex justify-center items-center">
      <button className="bg-[#1FFFA3] hover:bg-transparent border boder-[#1FFFA3] rounded-[8px] w-[243px] h-[56px] font-bold text-[20px] text-[#000049] hover:text-[#1FFFA3] mt-10 ">
        Request A Demo
      </button>
    </div>*/}
      </div>

      <div className="max-container">
        <div className="lg:px-20 lg:py-[156px] px-5 py-20">
          <div className="w-full  border border-[#004C3F] lg:rounded-[20px] lg:rounded-t-0 rounded-t-[20px] lg:rounded-b-0 rounded-b-[20px] lg:flex">
            <div className="lg:w-[45%] bg-[#004C3F] h-full lg:p-10 p-5 lg:rounded-tr-[0px] lg:rounded-bl-[20px] lg:rounded-tl-[20px] rounded-tl-[20px] rounded-bl-[0px] rounded-tr-[20px] ">
              <p className="font-interlg:font-semibold font-normal lg:text-[32px] text-[28px] text-white lg:pt-0 pt-10">
                Contact Information
              </p>
              <p className="font-inter  lg:text-[16px] leading-[21px] lg:leading-[22px] text-white mt-4">
                Want to talk to our team? <br />
                You can either complete the form or directly reach out to us
                with the below-mentioned contact details.
              </p>
              <div className="lg:space-y-[28px] space-y-[16px] lg:mt-16 mt-8">
                <div className="flex items-center lg:space-x-4 space-x-[6px]">
                  <div className="">
                    <img
                      src="/Images/mailIcon.png"
                      alt="mail"
                      className="lg:w-auto w-[28px]"
                    />
                  </div>
                  <div className="font-inter lg:text-[18px] text-[14px] text-white">
                    <a href="mailto:tushar.doshi@itechgenicglobal.com">
                      <p>Tushar.doshi@itechgenicglobal.com</p>
                    </a>
                    <a href="mailto:aninda.mukherjee@itechgenicglobal.com">
                      <p>Aninda.mukherjee@itechgenicglobal.com</p>
                    </a>
                  </div>
                </div>
                <div className="flex items-center lg:space-x-4 space-x-[6px]">
                  <div className="">
                    <img
                      src="/Images/phoneIcon.png"
                      alt="mail"
                      className="lg:w-auto w-[28px]"
                    />
                  </div>
                  <div className="font-inter lg:text-[18px] text-[14px] text-white">
                    <a href="tel:+919433781602">
                      <span>+91 9433781602 </span>,
                    </a>
                    <a href="tel+6596336714">
                      <span> +65 9633 6714</span>,
                    </a>
                  </div>
                </div>
                <div className="flex items-center lg:space-x-4 space-x-[6px]">
                  <div className="">
                    <img
                      src="/Images/locationIcon.png"
                      alt="mail"
                      className="lg:w-auto w-[28px]"
                    />
                  </div>
                  <div className="font-inter lg:text-[18px] text-[14px] text-white">
                    <a href="tel:9433781602">
                      <span>
                        1 Marina Blvd, Level 20, <br /> Singapore 018989{" "}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:mt-[100px] mt-[30px]">
                <img src="/Images/contactImg.png" alt="contact" />
              </div>
            </div>
            <div className="lg:py-10 lg:px-10 py-14 px-5 lg:w-[55%]">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <p className="font-inter text-[#000049] mb-2 text-[18px]">
                      Your Full Name
                    </p>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="E.g. Pihu shah"
                      className="border font-inter lg:text-[16px] text-[14px] px-5 placeholder-[#000049] border-[#000049] rounded-[8px] lg:h-[64px] h-[48px] w-full"
                    />
                  </div>
                  <div>
                    <p className="font-inter text-[#000049] mb-2 text-[18px]">
                      Your Email Id
                    </p>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="E.g. pihu1340@gmail.com"
                      className="border font-inter lg:text-[16px] text-[14px] px-5 placeholder-[#000049] border-[#000049] rounded-[8px] lg:h-[64px] h-[48px] w-full"
                    />
                  </div>
                  <div>
                    <p className="font-inter text-[#000049] mb-2 text-[18px]">
                      Your Phone No.
                    </p>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="E.g. XXX XXX 2541"
                      className="border font-inter lg:text-[16px] text-[14px] px-5 placeholder-[#000049] border-[#000049] rounded-[8px] lg:h-[64px] h-[48px] w-full"
                    />
                  </div>
                  <div>
                    <p className="font-inter text-[#000049] mb-2 text-[18px]">
                      What are you looking for?
                    </p>
                    <select
                      name="option"
                      value={formData.option}
                      onChange={handleChange}
                      className="border font-inter lg:text-[16px] text-[#000049] text-[14px] px-5 placeholder-[#000049] border-[#000049] rounded-[8px] lg:h-[64px] h-[48px] w-full"
                    >
                      <option value="" disabled selected>
                        Select an option
                      </option>
                      <option value="request-demo">Request A Demo</option>
                      <option value="start-free">Start for Free</option>
                    </select>
                  </div>
                  <div>
                    <p className="font-inter text-[#000049] mb-2 text-[18px]">
                      Your Message (optional)
                    </p>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="border font-inter lg:text-[16px] text-[14px] px-5 placeholder-[#000049] border-[#000049] rounded-[8px] lg:h-[140px] h-[105px] w-full pt-2"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-10 rounded-[8px] font-inter lg:text-[20px] text-[18px] hover:bg-[#000049] hover:text-[#1FFFA3] text-[#000049] font-semibold lg:w-[149px] lg:h-[60px] w-[126px] h-[54px] border border-[#000049]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="lg:px-20 px-5 lg:pb-[156px] pb-20">
          <p className="font-inter lg:text-[48px] text-[28px] text-[#000049] lg:text-center">
            <span className="font-semibold">Locate Us</span> Here
          </p>

          <div className="mapBg lg:block hidden lg:w-[100%] mt-6 lg:mt-9  p-8 mx-auto h-[500px] lg:rounded-[8px] ">
            <div className="bg-[#000049] text-white hidden  lg:space-x-10 justify-between lg:flex flex-col lg:flex-row lg:w-[461px] p-6 lg:rounded-[8px] ">
              <a
                href="https://www.google.com/maps/dir//1+Marina+Blvd,+Level+20,+Singapore+018989/@1.2821991,103.7702493,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31da19d2163f639f:0x251b930f8b4bce85!2m2!1d103.8526418!2d1.2821856?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="space-y-3">
                  <h3 className="font-bold font-inter text-2xl ">DevBoost</h3>
                  <p>
                    1 Marina Blvd, Level 20, Singapore <br /> 018989
                  </p>
                  <p className="text-xl flex items-center space-x-2">
                    <span>4.2</span>{" "}
                    <img
                      src="/Images/ratings.png"
                      alt="4 stars"
                      className="w-[68px]"
                    />
                  </p>

                  <button className="underline text-white font-medium cursor-pointer">
                    View larger map
                  </button>
                </div>
              </a>
              <div className="">
                <img
                  src="/Images/direction.png"
                  alt=""
                  className="w-[24px] mx-auto"
                />
                <p className="text-center text-white">Directions</p>
              </div>
            </div>
          </div>
          <div className="lg:hidden lg:space-x-4 flex flex-col  mt-5 lg:rounded-[8px] ">
            <div className="">
              <img
                src="/Images/mapMobile.png"
                alt="Map Mobile"
                className="w-full"
              />
            </div>
            <div className="px-0 mt-5">
              <a
                href="https://www.google.com/maps/dir//1+Marina+Blvd,+Level+20,+Singapore+018989/@1.2821991,103.7702493,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31da19d2163f639f:0x251b930f8b4bce85!2m2!1d103.8526418!2d1.2821856?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="space-y-3  bg-[#000049] w-[314px] rounded-[5px] text-white p-3 relative">
                  <h3 className="font-bold text-lg lg:text-2xl ">DevBoost</h3>
                  <p className="text-[12px] lg:text-base w-[70%]">
                    1 Marina Blvd, Level 20, Singapore <br /> 018989
                  </p>
                  <p className="text-xl flex items-center space-x-2">
                    <span>4.2</span>{" "}
                    <img
                      src="/Images/ratings.png"
                      alt="4 stars"
                      className="w-[68px]"
                    />
                  </p>
                  <button className="underline text-[12px] lg:text-base text-[#ffffff] font-medium cursor-pointer">
                    View larger map
                  </button>

                  <div className=" absolute top-2 right-5">
                    <img
                      src="/Images/direction.png"
                      alt=""
                      className="w-[18px] lg:w-[24px] mx-auto"
                    />
                    <p className="text-center text-[12px] lg:text-base  text-[#ffffff]">
                      Directions
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBlue;
