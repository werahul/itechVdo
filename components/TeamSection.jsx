import React, { useRef, useEffect } from "react";

const TeamSection = () => {
  const scrollRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  useEffect(() => {
    const slider = scrollRef.current;

    const handleMouseDown = (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove("active");
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleTouchStart = (e) => {
      isDown = true;
      startX = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleTouchEnd = () => {
      isDown = false;
    };

    const handleTouchMove = (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchend", handleTouchEnd);
    slider.addEventListener("touchmove", handleTouchMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);

      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchend", handleTouchEnd);
      slider.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const teamMembers = [
    {
      name: "Shabbir Sithawalla",
      role: "Co-Founder & Board Member",
      image: "/Images/team1.png",
      linkedIn: "https://www.linkedin.com/in/shabbir-sithawalla-6188837/ ",
    },
    {
      name: "Arun Chinnachamy",
      role: "Tech Advisor",
      image: "/Images/team2.png",
      linkedIn: "https://www.linkedin.com/in/arun-chinnachamy/",
    },
    {
      name: "Amar Bedi",
      role: "Business Strategy Advisor",
      image: "/Images/team3.png",
      linkedIn: "https://www.linkedin.com/in/amarbedi/  ",
    },
    // { name: "Emily Clark", role: "CFO & Founder", image: "/Images/team4.png" },
    // { name: "Michael Brown", role: "CMO & Founder", image: "/Images/team5.png" },
    // { name: "Jessica White", role: "CIO & Founder", image: "/Images/team6.png" },
    // { name: "Chris Johnson", role: "CSO & Founder", image: "/Images/team7.png" },
  ];

  return (
    <div className="overflow-hidden relative flex items-center justify-center w-full pl-0 max-container">
      <div
        className="flex flexDiv space-x-4 overflow-x-scroll no-scrollbar mt-10"
        ref={scrollRef}
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative lg:min-w-[294px] min-w-[264px] lg:h-[352px] h-[316px] flex justify-center team-member"
          >
            <img src={member.image} alt={member.name} className="team-image lg:w-auto w-[264px] h-[316px] " />
            <div className="info-box">
              <div className="">
                <p className="font-inter font-semibold text-[#000049] text-[20px] whitespace-nowrap">
                  {member.name}
                </p>
                <p className="font-inter text-[#000049] text-[14px] whitespace-nowrap">
                  {member.role}
                </p>
              </div>
              <div className="">
                <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                  <img src="/Images/linkdinBlue.png" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
