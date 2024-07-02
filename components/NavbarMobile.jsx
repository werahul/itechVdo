import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NavbarMobile = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropOption, setShowDropOption] = useState(true);
  const [showCompanyOption, setShowCompanyOption] = useState(false);
  const [showDevBoostOption, setShowDevBoostOption] = useState(false);
  const [showCaseOption, setShowCaseOption] = useState(true);
  const [openDropdown, setOpenDropdown] = useState("caseStudy");
  const pathname = usePathname();
  const [activeMenuItem, setActiveMenuItem] = useState(pathname);
  const [solutiosOptions, setSolutionsOptions] = useState(true);
  const [companyOptions, setCompanyOptions] = useState(false);

  const toggleDropdown2 = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const toggleSoulationOptions = () => {
    setSolutionsOptions(!solutiosOptions);
  };
  const toggleCompanyOptions = () => {
    setCompanyOptions(!companyOptions);
  };

  return (
    <nav className="bg-[#000049] text-white px-4 py-8 lg:hidden">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <img
              src="/Images/logoMobile.png"
              alt="DevBoostLogo"
              className="w-[220px]"
            />
          </Link>

          <img
            src={showDropdown ? "/Images/closeNav.png" : "/Images/humIcon.png"}
            alt="icon"
            className="w-[30px]"
            onClick={toggleDropdown}
          />
        </div>

        <div className={`${showDropdown ? "block" : "hidden"}`}>
          <ul className="md:flex md:space-x-8 mt-16">
            <li>
              <Link href="/">
                <p
                  className={`text-[18px] ${
                    activeMenuItem === "/"
                      ? "text-[#00ffba] font-semibold"
                      : "text-white font-normal"
                  } font-inter border-b border-[#777777] pb-2`}
                >
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link href="/product">
                <p
                  className={`text-[18px] ${
                    activeMenuItem === "/product"
                      ? "text-[#00ffba] font-semibold"
                      : "text-white font-normal"
                  } font-inter border-b border-[#777777] pb-2 mt-[28px]`}
                >
                  Product
                </p>
              </Link>
            </li>
            <div className="relative">
              <div className="flex items-center justify-between mt-[28px] border-b border-[#777777] pb-2 w-full" onClick={toggleSoulationOptions}>
                <button
                  className={`text-[18px] ${
                    [
                      "/case-study-one",
                      "/engineering-lead",
                      "/project-manager",
                      "/team-leader",
                    ].includes(activeMenuItem)
                      ? "text-[#00ffba] font-semibold"
                      : "text-white font-normal"
                  } text-left font-inter`}
                >
                  Solutions
                </button>
                <img src={` ${solutiosOptions ? "/Images/greenDrop.svg" : "/Images/whiteDrop.svg"}`} alt="" />
              </div>
              {solutiosOptions ? (
                <div className="">
                  <div className="">
                    <li
                      className="ml-16 w-[83%] mt-5 flex items-center space-x-4 border-b boder-[#777777] pb-2 "
                      onClick={() => toggleDropdown2("caseStudy")}
                    >
                      <p
                        className={`text-[18px]  ${
                          activeMenuItem === "/case-study-one"
                            ? "text-[#00ffba] font-semibold"
                            : "text-white font-normal"
                        } font-inter font-semibold `}
                      >
                        Case Study
                      </p>

                      <img src={` ${openDropdown === "caseStudy" ? "/Images/greenDrop.svg" : "/Images/whiteDrop.svg"}`} alt="" />
                    </li>
                  </div>
                  {openDropdown === "caseStudy" && (
                    <ul className="text-white py-2 pl-16 mt-0">
                      <li className="mt-2">
                        <Link href="/case-study-one">
                          <p className="font-inter text-[16px]">Case Study 1</p>
                        </Link>
                      </li>
                      {/*<li className="mt-1">
                        <Link href="">
                          <p className="font-inter text-[16px]">Case Study 2</p>
                        </Link>
                      </li>
                      <li className="mt-1">
                        <Link href="">
                          <p className="font-inter text-[16px]">Case Study 3</p>
                        </Link>
                      </li>
                      <li className="mt-1">
                        <Link href="">
                          <p className="font-inter text-[16px]">Case Study 4</p>
                        </Link>
                      </li>*/}
                    </ul>
                  )}
                  <div
                    className="ml-16 w-[83%] flex items-center space-x-3 mt-[28px] border-b border-[#777777] pb-2"
                    onClick={() => toggleDropdown2("devBoost")}
                  >
                    <button
                      className={`text-[18px] ${
                        [
                          "/engineering-lead",
                          "/project-manager",
                          "/team-leader",
                        ].includes(activeMenuItem)
                          ? "text-[#00ffba] font-semibold"
                          : "text-white font-normal"
                      } text-left font-inter`}
                    >
                      DevBoost Is For
                    </button>
                    <img src={` ${openDropdown === "devBoost" ? "/Images/greenDrop.svg" : "/Images/whiteDrop.svg"}`}/>
                  </div>

                  {openDropdown === "devBoost" && (
                    <ul className="text-white py-2 pl-16 mt-0">
                      <li className="mt-2">
                        <Link href="/engineering-lead">
                          <p className="font-inter text-[16px]">
                            Engineering Lead
                          </p>
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link href="/project-manager">
                          <p className="font-inter text-[16px]">
                            Project Manager
                          </p>
                        </Link>
                      </li>
                      <li className="mt-2">
                        <Link href="/team-leader">
                          <p className="font-inter text-[16px]">Team Leader</p>
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
            <li>
              <Link href="/pricing">
                <p
                  className={`text-[18px] ${
                    activeMenuItem === "/pricing"
                      ? "text-[#00ffba] font-semibold"
                      : "text-white font-normal"
                  } font-inter border-b border-[#777777] pb-2 mt-[28px]`}
                >
                  Pricing
                </p>
              </Link>
            </li>
            <div className="relative">
              <div
                className="flex justify-between items-center border-b border-[#777777] pb-2 mt-[28px] w-full"
                onClick={toggleCompanyOptions}
              >
                <button
                  className={`text-[18px] ${
                    ["/about", "/contact"].includes(activeMenuItem)
                      ? "text-[#00ffba] font-semibold"
                      : "text-white font-normal"
                  } font-inter`}
                >
                  Company
                </button>

                <img src={` ${companyOptions ? "/Images/greenDrop.svg" : "/Images/whiteDrop.svg"}`} alt="" />
              </div>

              {companyOptions && (
                <ul className="text-white rounded-md py-2 pl-16 mt-2">
                  <li>
                    <Link href="about">
                      <p
                        className={`text-[16px] ${
                          activeMenuItem === "/about"
                            ? "text-[#00ffba] font-semibold"
                            : "text-white font-normal"
                        } font-inter border-b border-[#777777] pb-2 mt-[10px]`}
                      >
                        About Us
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="contact">
                      <p
                        className={`text-[16px] ${
                          activeMenuItem === "/contact"
                            ? "text-[#00ffba] font-semibold"
                            : "text-white font-normal"
                        } font-inter border-b border-[#777777] pb-2 mt-[16px]`}
                      >
                        Contact Us
                      </p>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <li>
              <Link href="/blogs">
                <p
                  className={`text-[18px] ${
                    ["/blogs", "/blogs/new-age-practices"].includes(
                      activeMenuItem
                    )
                      ? "text-[#00ffba] font-semibold"
                      : "text-white font-normal"
                  } font-inter border-b border-[#777777] pb-2 mt-[28px]`}
                >
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
