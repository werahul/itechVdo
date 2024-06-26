"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const solutionsRef = useRef(null);
  const companyRef = useRef(null);
  const graImage = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const [showCaseStudyDropdown, setShowCaseStudyDropdown] = useState(false);
  const [showDevBoostDropdown, setShowDevBoostDropdown] = useState(false);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null);
  const [activeMenuItem, setActiveMenuItem] = useState(pathname);
  const [isGrad, setIsGrad] = useState("left-14");
  const [isActive, setIsActive] = useState(false);

  // const handleMenuItemClick = (menuItem) => {
  //   router.push(`/${menuItem}`);
  // };

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownClick = (setDropdownState, currentDropdownState) => {
    setShowCaseStudyDropdown(false);
    setShowDevBoostDropdown(false);
    setDropdownState(!currentDropdownState);
  };

  const handleNestedDropdownClick = (
    setNestedDropdownState,
    currentNestedDropdownState,
    otherNestedDropdownState,
    setParentDropdownState
  ) => {
    setParentDropdownState(true); // Ensure the parent dropdown is open
    setNestedDropdownState(!currentNestedDropdownState);
    if (!currentNestedDropdownState) {
      // Close the other nested dropdown if it's open
      otherNestedDropdownState(false);
    }
  };
  const handleMouseEnter = (setShowDropdown) => {
    clearTimeout(dropdownTimeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = (setShowDropdown) => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 500);
    setOpenNestedDropdown(null); // Close nested dropdowns on mouse leave
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 13000);
    };

    const handleClickOutside = (event) => {
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(event.target)
      ) {
        setShowSolutionsDropdown(false);
      }
      if (companyRef.current && !companyRef.current.contains(event.target)) {
        setShowCompanyDropdown(false);
      }
    };

    // window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    setActiveMenuItem(pathname);
  }, [pathname]);

  return (
    <div className="lg:block hidden">
      <div
        className={`w-full flex justify-center z-50  ${
          isScrolled ? "" : "absolute top-10"
        }`}
      >
        <nav
          className={`mx-auto max-w-[1200px] z-50 p-4 flex items-center lg:h-[140px] rounded-[20px] ${
            isScrolled
              ? "lg:h-[96px] bg-[#19196F] w-[900px] space-x-10"
              : "lg:h-[140px]  w-full space-x-16  border-[#1FFFA3]"
          } transition-all duration-300`}
        >
          {!isScrolled && (
            <div className="text-[#00ffba] text-2xl font-bold relative">
              <Link href="/">
                <img src="/Images/devBoostLogo.png" alt="Logo" />
              </Link>

              {activeMenuItem === "/" && (
                <div className="absolute top-[100px] -left-[80px]">
                  <img
                    src=""
                    alt=""
                    className=""
                  />
                </div>
              )}
            </div>
          )}
          <div className="block lg:hidden" onClick={toggleMenu}>
            <div
              className={`w-6 h-0.5 bg-[#00ffba] mb-1 transition-transform ${
                isOpen ? "transform rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-[#00ffba] mb-1 transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-[#00ffba] transition-transform ${
                isOpen ? "transform -rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </div>
          <ul
            className={`lg:flex lg:items-center lg:space-x-6 ${
              isOpen ? "block" : "hidden"
            } lg:block bg-[#0e0131] lg:bg-transparent`}
          >
            {isScrolled && (
              <Link href="/">
                {" "}
                <p
                  className={` hover:text-[#00ffba] font-inter ${
                    activeMenuItem === "/" ? "text-[#00ffba]" : "text-white"
                  }`}
                >
                  Home
                </p>
              </Link>
            )}

            <div className="relative">
              <Link href="/product">
                <p
                  className={` hover:text-[#00ffba] ${
                    activeMenuItem === "/product"
                      ? "text-[#00ffba]"
                      : "text-white"
                  }`}
                >
                  Product
                </p>
              </Link>
              {activeMenuItem === "/product" && (
                <div className="absolute top-[71px] -right-[200px]">
                  <img
                    src=""
                    alt=""
                    className=""
                  />
                </div>
              )}
            </div>

            <div className="relative">
              <li
                className="relative text-white hover:text-[#00ffba] p-4 lg:p-0 text-center flex items-center space-x-2 group cursor-pointer"
                onMouseEnter={() => handleMouseEnter(setShowSolutionsDropdown)}
                onMouseLeave={() => handleMouseLeave(setShowSolutionsDropdown)}
              >
                <p
                  className={`hover:text-[#00ffba] ${
                    showSolutionsDropdown ||
                    activeMenuItem === "/case-study-one" ||
                    activeMenuItem === "/engineering-lead" ||
                    activeMenuItem === "/project-manager" ||
                    activeMenuItem === "/team-leader"
                      ? "text-[#00ffba]"
                      : "text-white"
                  }`}
                >
                  Solutions
                </p>
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:fill-[#00ffba] svg-path"
                >
                  <path
                    className="svg-path"
                    d="M5.43912 6.04625C5.44537 6.03875 5.44788 6.02875 5.45412 6.02125L9.81787 1.2C10.0616 0.92875 10.0616 0.48875 9.81787 0.2175C9.81538 0.215 9.81288 0.21375 9.81038 0.2125C9.75614 0.146819 9.68822 0.0937731 9.61136 0.0570691C9.5345 0.020365 9.45055 0.000888367 9.36538 0H0.636625C0.54989 0.00140152 0.464521 0.0218309 0.386548 0.0598454C0.308575 0.09786 0.2399 0.152532 0.185375 0.22L0.182875 0.2175C0.0649129 0.353982 0 0.528354 0 0.70875C0 0.889145 0.0649129 1.06352 0.182875 1.2L4.55663 6.04625C4.61107 6.11008 4.67872 6.16133 4.7549 6.19648C4.83108 6.23162 4.91398 6.24982 4.99788 6.24982C5.08177 6.24982 5.16467 6.23162 5.24085 6.19648C5.31703 6.16133 5.38468 6.11008 5.43912 6.04625Z"
                    style={{
                      fill:
                        showSolutionsDropdown ||
                        activeMenuItem === "/case-study-one" ||
                        activeMenuItem === "/engineering-lead" ||
                        activeMenuItem === "/project-manager" ||
                        activeMenuItem === "/team-leader"
                          ? "#00ffba"
                          : "white",
                    }}
                  />
                </svg>
                {showSolutionsDropdown && (
                  <div
                    className={`absolute ${
                      isScrolled
                        ? "bottom-[60px] bg-[#19196F] bg-opacity-100 rounded-tl-md"
                        : "top-[15px]  bg-opacity-10 rounded-bl-md"
                    } -left-[10px] h-[100px] mt-2 w-48 text-white  px-0 py-2`}
                  >
                    <div
                      onClick={() =>
                        handleNestedDropdownClick(
                          setShowCaseStudyDropdown,
                          showCaseStudyDropdown,
                          setShowDevBoostDropdown,
                          setShowSolutionsDropdown
                        )
                      }
                    >
                      <li className="py-2 text-left flex items-center space-x-2 group2 cursor-pointer">
                        <p
                          className={`hover:text-[#00ffba] ${
                            showCaseStudyDropdown ? "text-[#00ffba]" : ""
                          }`}
                        >
                          Case Study
                        </p>
                        <svg
                          width="10"
                          height="7"
                          viewBox="0 0 10 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`group-hover:fill-[#00ffba] ${
                            showCaseStudyDropdown ? "fill-[#00ffba]" : ""
                          }`}
                        >
                          <path
                            className="svg-path2"
                            d="M5.43912 6.04625C5.44537 6.03875 5.44788 6.02875 5.45412 6.02125L9.81787 1.2C10.0616 0.92875 10.0616 0.48875 9.81787 0.2175C9.81538 0.215 9.81288 0.21375 9.81038 0.2125C9.75614 0.146819 9.68822 0.0937731 9.61136 0.0570691C9.5345 0.020365 9.45055 0.000888367 9.36538 0H0.636625C0.54989 0.00140152 0.464521 0.0218309 0.386548 0.0598454C0.308575 0.09786 0.2399 0.152532 0.185375 0.22L0.182875 0.2175C0.0649129 0.353982 0 0.528354 0 0.70875C0 0.889145 0.0649129 1.06352 0.182875 1.2L4.55663 6.04625C4.61107 6.11008 4.67872 6.16133 4.7549 6.19648C4.83108 6.23162 4.91398 6.24982 4.99788 6.24982C5.08177 6.24982 5.16467 6.23162 5.24085 6.19648C5.31703 6.16133 5.38468 6.11008 5.43912 6.04625Z"
                            fill="white"
                          />
                        </svg>
                      </li>
                    </div>
                    {showCaseStudyDropdown && (
                      <div
                        className={`absolute ${
                          isScrolled
                            ? "bottom-[0px] bg-[#19196F] bg-opacity-100 rounded-tr-md"
                            : "top-0  bg-opacity-10 rounded-br-md"
                        } left-[100px] mt-0 w-48 h-[150px] text-white px-5 py-2`}
                      >
                        <Link href="/case-study-one">
                          <li className="py-2 text-left hover:text-[#00ffba]">
                            Case Study 1
                          </li>
                        </Link>
                        <Link href="#">
                          <li className="py-2 text-left hover:text-[#00ffba]">
                            Case Study 2
                          </li>
                        </Link>
                        <Link href="#">
                          <li className="py-2 text-left hover:text-[#00ffba]">
                            Case Study 3
                          </li>
                        </Link>
                      </div>
                    )}
                    <div
                      onClick={() =>
                        handleNestedDropdownClick(
                          setShowDevBoostDropdown,
                          showDevBoostDropdown,
                          setShowCaseStudyDropdown,
                          setShowSolutionsDropdown
                        )
                      }
                    >
                      <li className="py-2 text-left flex items-center space-x-2 group cursor-pointer">
                        <p
                          className={`hover:text-[#00ffba] ${
                            showDevBoostDropdown ? "text-[#00ffba]" : ""
                          }`}
                        >
                          Use Case
                        </p>
                        <svg
                          width="10"
                          height="7"
                          viewBox="0 0 10 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`group-hover:fill-[#00ffba] ${
                            showDevBoostDropdown ? "fill-[#00ffba]" : ""
                          }`}
                        >
                          <path
                            className="svg-path2"
                            d="M5.43912 6.04625C5.44537 6.03875 5.44788 6.02875 5.45412 6.02125L9.81787 1.2C10.0616 0.92875 10.0616 0.48875 9.81787 0.2175C9.81538 0.215 9.81288 0.21375 9.81038 0.2125C9.75614 0.146819 9.68822 0.0937731 9.61136 0.0570691C9.5345 0.020365 9.45055 0.000888367 9.36538 0H0.636625C0.54989 0.00140152 0.464521 0.0218309 0.386548 0.0598454C0.308575 0.09786 0.2399 0.152532 0.185375 0.22L0.182875 0.2175C0.0649129 0.353982 0 0.528354 0 0.70875C0 0.889145 0.0649129 1.06352 0.182875 1.2L4.55663 6.04625C4.61107 6.11008 4.67872 6.16133 4.7549 6.19648C4.83108 6.23162 4.91398 6.24982 4.99788 6.24982C5.08177 6.24982 5.16467 6.23162 5.24085 6.19648C5.31703 6.16133 5.38468 6.11008 5.43912 6.04625Z"
                            fill="white"
                          />
                        </svg>
                      </li>
                    </div>
                    {showDevBoostDropdown && (
                      <div
                        className={`absolute ${
                          isScrolled
                            ? "bottom-[0px] bg-[#19196F] bg-opacity-100 rounded-t-md"
                            : "-top-[8px]  bg-opacity-10 rounded-br-md"
                        } left-[100px] h-[150px] mt-2 w-[230px] text-white px-5 py-2`}
                      >
                        <Link href="/engineering-lead">
                          <li className="py-2 text-left hover:text-[#00ffba]">
                            For Engineering Lead
                          </li>
                        </Link>
                        <Link href="/project-manager">
                          <li className="py-2 text-left hover:text-[#00ffba]">
                            For Project Manager
                          </li>
                        </Link>
                        <Link href="/team-leader">
                          <li className="py-2 text-left hover:text-[#00ffba]">
                            For Team Leader
                          </li>
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </li>
              {(activeMenuItem === "/case-study-one" ||
                activeMenuItem === "/engineering-lead" ||
                activeMenuItem === "/project-manager" ||
                activeMenuItem === "/team-leader") && (
                <div className="absolute top-[71px] -right-[190px]">
                  <img
                    src=""
                    alt=""
                    className=""
                  />
                </div>
              )}
            </div>

            <div className="relative">
              <li className="text-white hover:text-[#00ffba] p-4 lg:p-0 text-center">
                <Link href="/pricing">
                  <p
                    className={` hover:text-[#00ffba] ${
                      activeMenuItem === "/pricing"
                        ? "text-[#00ffba]"
                        : "text-white"
                    }`}
                  >
                    Pricing
                  </p>
                </Link>
              </li>
              {activeMenuItem === "/pricing" && (
                <div className="absolute top-[71px] -right-[210px]">
                  <img
                    src=""
                    alt=""
                    className=""
                  />
                </div>
              )}
            </div>

            <div className="relative">
              <li
                ref={companyRef}
                className="relative text-white hover:text-[#00ffba] p-4 lg:p-0 text-center flex items-center space-x-2 group"
                onMouseEnter={() => handleMouseEnter(setShowCompanyDropdown)}
                onMouseLeave={() => handleMouseLeave(setShowCompanyDropdown)}
              >
                <p
                  className={`hover:text-[#00ffba] ${
                    activeMenuItem === "/about" ||
                    activeMenuItem === "/contact" ||
                    showCompanyDropdown
                      ? "text-[#00ffba]"
                      : "text-white"
                  }`}
                >
                  Company
                </p>
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:fill-[#00ffba] svg-path"
                >
                  <path
                    className="svg-path"
                    d="M5.43912 6.04625C5.44537 6.03875 5.44788 6.02875 5.45412 6.02125L9.81787 1.2C10.0616 0.92875 10.0616 0.48875 9.81787 0.2175C9.81538 0.215 9.81288 0.21375 9.81038 0.2125C9.75614 0.146819 9.68822 0.0937731 9.61136 0.0570691C9.5345 0.020365 9.45055 0.000888367 9.36538 0H0.636625C0.54989 0.00140152 0.464521 0.0218309 0.386548 0.0598454C0.308575 0.09786 0.2399 0.152532 0.185375 0.22L0.182875 0.2175C0.0649129 0.353982 0 0.528354 0 0.70875C0 0.889145 0.0649129 1.06352 0.182875 1.2L4.55663 6.04625C4.61107 6.11008 4.67872 6.16133 4.7549 6.19648C4.83108 6.23162 4.91398 6.24982 4.99788 6.24982C5.08177 6.24982 5.16467 6.23162 5.24085 6.19648C5.31703 6.16133 5.38468 6.11008 5.43912 6.04625Z"
                    style={{
                      fill:
                        activeMenuItem === "/about" ||
                        activeMenuItem === "/contact" ||
                        showCompanyDropdown
                          ? "#00ffba"
                          : "white",
                    }}
                  />
                </svg>
                {showCompanyDropdown && (
                  <div
                    className={`absolute ${
                      isScrolled
                        ? "bottom-[60px] bg-[#19196F] bg-opacity-100 rounded-t-md"
                        : "top-[25px]  bg-opacity-10 rounded-md"
                    }  -left-[5px] mt-2 w-48   text-white   px-0`}
                    onMouseEnter={() =>
                      handleMouseEnter(setShowCompanyDropdown)
                    }
                    onMouseLeave={() =>
                      handleMouseLeave(setShowCompanyDropdown)
                    }
                  >
                    <Link href="/about">
                      <div className="px-0 py-2 text-white hover:text-[#00ffba] text-left">
                        About Us
                      </div>
                    </Link>
                    <Link href="/contact">
                      <div className="px-0 py-2 text-white hover:text-[#00ffba] text-left">
                        Contact Us
                      </div>
                    </Link>
                  </div>
                )}
              </li>
              {(activeMenuItem === "/about" ||
                activeMenuItem === "/contact") && (
                <div className="absolute top-[71px] -right-[200px]">
                  <img
                    src=""
                    alt=""
                    className=""
                  />
                </div>
              )}
            </div>

            <div className="relative">
              <li className="text-white hover:text-[#00ffba] p-4 lg:p-0 text-center">
                <Link href="/blogs">
                  <p
                    className={`hover:text-[#00ffba] ${
                      activeMenuItem === "/blogs" ||
                      activeMenuItem === "/blogs/new-age-practices"
                        ? "text-[#00ffba]"
                        : "text-white"
                    }`}
                  >
                    Blogs
                  </p>
                </Link>
              </li>
              {(activeMenuItem === "/blogs" ||
                activeMenuItem === "/blogs/new-age-practices") && (
                <div className="absolute top-[71px] -right-[220px]">
                  <img
                    src=""
                    alt=""
                    className=""
                  />
                </div>
              )}
            </div>
          </ul>
          <div>
            <Link href="/contact">
              <p className="border border-[#00ffba] rounded-[8px] w-[243px] h-[60px] flex items-center justify-center text-[#00ffba] transition-colors hover:bg-[#00ffba] hover:text-[#0e0131] font-bold font-inter boxShadowButton glowEffect">
                Request A Demo
              </p>
            </Link>
          </div>
        </nav>
      </div>

      {/*<div ref={graImage}>
        <img
          src=""
          alt=""
          className={`absolute top-[170px]  ${
            isScrolled ? "hidden" : "block"
          } ${pathname === "/product" ? "left-[17rem]" : isGrad} ${
            isActive ? "active-move" : ""
          }`}
          onClick={toggleActiveClass} // Example of how to trigger the class toggle
        />
      </div>*/}
    </div>
  );
};

export default Navbar;
