import { useState } from "react";
import Link from "next/link";

const NavbarMobile = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropOption, setShowDropOption] = useState(true);
  const [showCompanyOption, setShowCompanyOption] = useState(false);
  const [showDevBoostOption, setShowDevBoostOption] = useState(false);
  const [showCaseOption, setShowCaseOption] = useState(true);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="bg-[#000049] text-white px-4 py-7 lg:hidden">
      <div className="container mx-auto  ">
        <div className="flex justify-between items-center">
          <Link href="/">
            <img
              src="/Images/logoMobile.png"
              alt="DevBoostLogo"
              className="w-[220px]"
            />
          </Link>

          <img
            src="/images/humIcon.png"
            alt="icon"
            className="w-[45px]"
            onClick={toggleDropdown}
          />
        </div>

        <div className={` ${showDropdown ? "block" : "hidden"}`}>
          <ul className="md:flex md:space-x-8 mt-20">
            <li>
              <Link href="/">
                <p className="text-[18px] font-inter border-b boder-[#777777] pb-2">
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link href="/product">
                <p className="text-[18px] font-inter border-b boder-[#777777] pb-2 mt-[28px]">
                  Product
                </p>
              </Link>
            </li>
            <li className="relative">
              <div
                className="flex items-center justify-between mt-[28px] border-b boder-[#777777] pb-2  w-full"
                onClick={() => {
                  setShowDropOption(true);
                }}
              >
                <button className="text-[18px] text-left font-inter ">
                  Solutions
                </button>

                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.48454 9.43159C8.49429 9.4199 8.49819 9.4043 8.50794 9.3926L15.315 1.87189C15.6952 1.44876 15.6952 0.762405 15.315 0.33928C15.3111 0.33538 15.3072 0.333431 15.3033 0.331481C15.2187 0.229025 15.1127 0.146277 14.9928 0.0890225C14.8729 0.0317675 14.742 0.00138577 14.6091 0H0.993077C0.857779 0.00218624 0.72461 0.0340542 0.60298 0.0933534C0.481349 0.152653 0.374223 0.237937 0.289168 0.34318L0.285269 0.33928C0.101258 0.552179 0 0.824184 0 1.10558C0 1.38699 0.101258 1.65899 0.285269 1.87189L7.10792 9.43159C7.19285 9.53116 7.29838 9.61111 7.41721 9.66593C7.53605 9.72076 7.66536 9.74915 7.79623 9.74915C7.9271 9.74915 8.05641 9.72076 8.17524 9.66593C8.29407 9.61111 8.3996 9.53116 8.48454 9.43159Z"
                    fill="#1FFFA3"
                  />
                </svg>
              </div>

              <ul
                className={` text-white  py-2 pl-16 mt-2 ${
                  showDropOption ? "block" : "hidden"
                }`}
              >
                <li className="flex items-center space-x-4 border-b boder-[#777777] pb-2">
                  <Link href="/solutions/case-study">
                    <p className="text-[18px] font-inter font-semibold ">
                      Case Study
                    </p>
                  </Link>

                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.48454 9.55708C8.49429 9.54538 8.49819 9.52979 8.50794 9.51809L15.315 1.99738C15.6952 1.57425 15.6952 0.887893 15.315 0.464768C15.3111 0.460868 15.3072 0.458919 15.3033 0.456969C15.2187 0.354513 15.1127 0.271766 14.9928 0.214511C14.8729 0.157256 14.742 0.126874 14.6091 0.125488H0.993077C0.857779 0.127675 0.72461 0.159542 0.60298 0.218842C0.481349 0.278141 0.374223 0.363425 0.289168 0.468668L0.285269 0.464768C0.101258 0.677668 0 0.949673 0 1.23107C0 1.51247 0.101258 1.78448 0.285269 1.99738L7.10792 9.55708C7.19285 9.65665 7.29838 9.7366 7.41721 9.79142C7.53605 9.84624 7.66536 9.87464 7.79623 9.87464C7.9271 9.87464 8.05641 9.84624 8.17524 9.79142C8.29407 9.7366 8.3996 9.65665 8.48454 9.55708Z"
                      fill="white"
                    />
                  </svg>
                </li>
                {showCaseOption ? (
                  <>
                    <li className="mt-2">
                      <Link href="/solutions/case-study/1">
                        <p className="font-inter text-[16px]">Case Study 1</p>
                      </Link>
                    </li>
                    <li className="mt-1">
                      <Link href="/solutions/case-study/2">
                        <p className="font-inter text-[16px]">Case Study 2</p>
                      </Link>
                    </li>
                    <li className="mt-1">
                      <Link href="/solutions/case-study/3">
                        <p className="font-inter text-[16px]">Case Study 3</p>
                      </Link>
                    </li>
                    <li className="mt-1">
                      <Link href="/solutions/case-study/4">
                        <p className="font-inter text-[16px]">Case Study 4</p>
                      </Link>
                    </li>
                  </>
                ) : (
                  ""
                )}

                <li className="mt-5 flex items-center space-x-4 border-b boder-[#777777] pb-2">
                  <Link href="/solutions/case-study">
                    <p className="text-[18px] font-inter font-semibold">
                      DevBoost Is For
                    </p>
                  </Link>

                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.48454 9.55708C8.49429 9.54538 8.49819 9.52979 8.50794 9.51809L15.315 1.99738C15.6952 1.57425 15.6952 0.887893 15.315 0.464768C15.3111 0.460868 15.3072 0.458919 15.3033 0.456969C15.2187 0.354513 15.1127 0.271766 14.9928 0.214511C14.8729 0.157256 14.742 0.126874 14.6091 0.125488H0.993077C0.857779 0.127675 0.72461 0.159542 0.60298 0.218842C0.481349 0.278141 0.374223 0.363425 0.289168 0.468668L0.285269 0.464768C0.101258 0.677668 0 0.949673 0 1.23107C0 1.51247 0.101258 1.78448 0.285269 1.99738L7.10792 9.55708C7.19285 9.65665 7.29838 9.7366 7.41721 9.79142C7.53605 9.84624 7.66536 9.87464 7.79623 9.87464C7.9271 9.87464 8.05641 9.84624 8.17524 9.79142C8.29407 9.7366 8.3996 9.65665 8.48454 9.55708Z"
                      fill="white"
                    />
                  </svg>
                </li>

                {showDevBoostOption ? (
                  <>
                    <li className="mt-2">
                      <Link href="/solutions/case-study/1">
                        <p className="font-inter text-[16px]">one</p>
                      </Link>
                    </li>
                    <li className="mt-1">
                      <Link href="/solutions/case-study/2">
                        <p className="font-inter text-[16px]">two</p>
                      </Link>
                    </li>
                  </>
                ) : (
                  ""
                )}
              </ul>
            </li>
            <li>
              <Link href="/pricing">
                <p className="text-[18px] font-inter border-b boder-[#777777] pb-2 mt-[28px]">
                  Pricing
                </p>
              </Link>
            </li>
            <li
              className="flex justify-between items-center relative border-b boder-[#777777] pb-2 mt-[28px] w-full "
              onClick={() => {
                setShowCompanyOption((prevState) => !prevState);
              }}
            >
              <button className="text-[18px] font-inter ">Company</button>

              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.48454 9.43159C8.49429 9.4199 8.49819 9.4043 8.50794 9.3926L15.315 1.87189C15.6952 1.44876 15.6952 0.762405 15.315 0.33928C15.3111 0.33538 15.3072 0.333431 15.3033 0.331481C15.2187 0.229025 15.1127 0.146277 14.9928 0.0890225C14.8729 0.0317675 14.742 0.00138577 14.6091 0H0.993077C0.857779 0.00218624 0.72461 0.0340542 0.60298 0.0933534C0.481349 0.152653 0.374223 0.237937 0.289168 0.34318L0.285269 0.33928C0.101258 0.552179 0 0.824184 0 1.10558C0 1.38699 0.101258 1.65899 0.285269 1.87189L7.10792 9.43159C7.19285 9.53116 7.29838 9.61111 7.41721 9.66593C7.53605 9.72076 7.66536 9.74915 7.79623 9.74915C7.9271 9.74915 8.05641 9.72076 8.17524 9.66593C8.29407 9.61111 8.3996 9.53116 8.48454 9.43159Z"
                  fill="#1FFFA3"
                />
              </svg>
            </li>
            <ul
              className={`  text-white rounded-md  py-2 pl-16 mt-2 ${
                showCompanyOption ? "block" : "hidden"
              }`}
            >
              <li>
                <Link href="/company/about-us">
                  <p className="text-[16px] font-inter border-b boder-[#777777] pb-2 mt-[10px]">
                    About Us
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/company/contact-us">
                  <p className="text-[16px] font-inter border-b boder-[#777777] pb-2 mt-[16px]">
                    Contact Us
                  </p>
                </Link>
              </li>
            </ul>
            <li>
              <Link href="/blogs">
                <p className="text-[18px] font-inter border-b boder-[#777777] pb-2 mt-[28px]">
                  Blogs
                </p>
              </Link>
            </li>
            <div className="mt-10">
              <Link href="/contact">
                <p className="border border-[#00ffba] text-[20px] rounded-[8px] w-full h-[60px] flex items-center justify-center text-[#00ffba] transition-colors hover:bg-[#00ffba] hover:text-[#0e0131] font-bold font-inter boxShadowButton glowEffect">
                  Request A Demo
                </p>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobile;
