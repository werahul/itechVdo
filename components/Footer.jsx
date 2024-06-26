import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#000049] text-white pt-8 lg:pb-8 pb-8  font-inter">
      <div className="">
        <div className="flex lg:flex-row flex-col justify-between lg:px-20 px-5 max-container">
          <div className="lg:w-[40%] mb-6 md:mb-0">
            <img
              src="/Images/devBoostLogo.png"
              alt=""
              className="lg:w-[290px] w-[220px] -ml-5"
            />
            <p className="lg:text-[24px] text-[20px] font-semibold">Social Media</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" aria-label="Facebook">
                <img
                  src="/Images/fbIcon.png"
                  alt="Facebook"
                  className="lg:w-[30px] lg:h-[30px] w-[24px] h-[24px]"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  src="/Images/instaIcon.png"
                  alt="Instagram"
                  className="lg:w-[30px] lg:h-[30px] w-[24px] h-[24px]"
                />
              </a>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col lg:space-x-24 whitespace-nowrap">
            <div className="flex flex-row justify-between lg:space-x-24 space-x-10 lg:mt-0 mt-[30px]">
              <div className="w-full mb-6 md:mb-0">
                <h3 className="lg:text-[24px] text-[20px] font-semibold mb-4">Quick Links</h3>
                <ul className="lg:text-[18px] text-[16px] opacity-90">
                  <li className="mb-2 hover:text-[#1FFFA3]">
                    <Link href="/product">Product</Link>
                  </li>
                  <li className="mb-2 hover:text-[#1FFFA3]">
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li className="mb-2 hover:text-[#1FFFA3]">
                    <Link href="/blogs">Blog</Link>
                  </li>
                </ul>
              </div>
              <div className="w-full mb-6 md:mb-0">
                <h3 className="lg:text-[24px] text-[20px] font-semibold mb-4">Company</h3>
                <ul className="lg:text-[18px] text-[16px] opacity-90">
                  <li className="mb-2 hover:text-[#1FFFA3]">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="mb-2 hover:text-[#1FFFA3]">
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-row justify-between lg:space-x-24 space-x-10 lg:mt-0 mt-[20px]">
              <div className="w-full mb-6 md:mb-0">
                <h3 className="lg:text-[24px] text-[20px] font-semibold mb-4">
                  Solutions For
                </h3>
                <ul className="lg:text-[18px] text-[16px] opacity-90">
                  <li className="mb-2 hover:text-[#1FFFA3]">
                    <Link href="/engineering-lead">Engineering Lead</Link>
                  </li>
                  <li className="mb-2 hover:text-[#1FFFA3]">
                    <Link href="/project-manager">Project Manager</Link>
                  </li>
                  <li className="mb-2 hover:text-[#1FFFA3]">
                    <Link href="/team-leader">Team Leader</Link>
                  </li>
                </ul>
              </div>
              <div className="w-full mb-6 md:mb-0">
                <h3 className="lg:text-[24px] text-[20px] font-semibold mb-4">Case Studies</h3>
                <ul className="lg:text-[18px] text-[16px] opacity-90">
                  <li className="mb-2 hover:text-[#1FFFA3]">
                    <Link href="case-study-one">Case Study 1</Link>
                  </li>
                  <li className="mb-2 hover:text-[#1FFFA3]">
                    <Link href="#">Case Study 2</Link>
                  </li>
                  <li className="mb-2 hover:text-[#1FFFA3]">
                    <Link href="#">Case Study 3</Link>
                  </li>
                  <li className="mb-2 hover:text-[#1FFFA3]">
                    <Link href="#">Case Study 4</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white mt-8">
          <div className="max-container mt-0 pt-4 lg:flex justify-between lg:px-20 px-5 font-inter font-medium text-[16px]">
            <p>&copy; Copyright {currentYear} DEVBOOST. All rights reserved.</p>
            <div className="flex lg:justify-center space-x-4 lg:mt-2 mt-5">
              <Link
                href="/privacy-policy"
                className="cursor-pointer hover:text-[#1FFFA3]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="cursor-pointer hover:text-[#1FFFA3]"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
