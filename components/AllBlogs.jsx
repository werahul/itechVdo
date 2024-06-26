"use client";
import Link from "next/link";
import React, { useState } from "react";

const blogData = [
  {
    id: 1,
    imgSrc: "/Images/HBlog1.png",
    date: "May 18, 2024",
    title: "New-age Practices: Engineering Investment and Business Alignment",
    description:
      "How DevBoost helps clients move towards data-driven conversations.",
    tags: ["All Blogs", "Best Practices"],
    links: "/blogs/new-age-practices",
  },
  {
    id: 2,
    imgSrc: "/Images/HBlog2.png",
    date: "May 13, 2024",
    title: "Best Practices For Team Health Improvement",
    description:
      "How clients use DevBoost to analyze data points and drive key business outcomes.",
    tags: ["All Blogs", "Best Practices"],
    links: "#",
  },
  {
    id: 3,
    imgSrc: "/Images/HBlog3.png",
    date: "May 09, 2024",
    title: "Latest Techniques For Strategy & Planning",
    description: "Top 5 challenges that engineering managers are facing today.",
    tags: ["All Blogs", "Strategy"],
    links: "#",
  },
  {
    id: 4,
    imgSrc: "/Images/HBlog4.png",
    date: "April 30, 2024",
    title: "Tapping Into The Multi-Billion Dollar Software Industry",
    description:
      "How DevBoost can help you leverage the software engineering opportunity.",
    tags: ["All Blogs", "Operations"],
    links: "#",
  },
  {
    id: 5,
    imgSrc: "/Images/HBlog5.png",
    date: "April 21, 2024",
    title: "How To Communicate More Effectively With Your Engineering Peers",
    description: "Ways to make the most out of cross-functional team meetings.",
    tags: ["All Blogs", "Management"],
    links: "#",
  },
  {
    id: 6,
    imgSrc: "/Images/HBlog6.png",
    date: "April 10, 2024",
    title: "How Infeon Technology Increased Its Efficiency By A Whopping 90%",
    description:
      "Learn how a startup reduced the spillover rate from 90% to almost 0%.",
    tags: ["All Blogs", "Best Practices", "Operations"],
    links: "#",
  },
];

const AllBlogs = () => {
  const [activeTag, setActiveTag] = useState("All Blogs");

  const tags = [
    "All Blogs",
    "Best Practices",
    "Management",
    "Operations",
    "Strategy",
  ];

  const filteredBlogs = blogData.filter((blog) =>
    blog.tags.includes(activeTag)
  );

  return (
    <div className="pt-[118px] pb-[156px] px-20 max-container">
      <div className="tagsButtons h-[89px] rounded-lg border border-[#000049] p-3 flex items-center justify-between">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`h-[65px] w-auto px-7 rounded-lg font-inter text-[24px] ${
              activeTag === tag
                ? "bg-[#000049] text-white"
                : "bg-transparent text-[#000049]"
            }`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-x-5 gap-y-5 mt-[50px]">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="min-h-[580px] rounded-[8px] w-full bg-[#000049] relative"
          >
            <img src={blog.imgSrc} alt={`Blog${blog.id}`} className="w-full" />
            <div className="text-white p-7">
              <p className="font-inter text-[16px] font-normal flex items-center opacity-60">
                DevBoost
                <span className="mx-3">
                  <svg
                    width="5"
                    height="5"
                    viewBox="0 0 5 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                  </svg>
                </span>
                {blog.date}
              </p>
              <p className="font-inter text-[24px] font-semibold leading-[30px] mt-3">
                {blog.title}
              </p>
              <p className="font-inter text-[16px] font-normal leading-[24px] mt-3 opacity-90 pr-5">
                {blog.description}
              </p>
              {blog.links ? (
                <Link href={blog.links}>
                  <div className="font-inter font-semibold text-[16px] text-[#1FFFA3] mt-4 flex items-center cursor-pointer space-x-2 hover:space-x-3 transition-all duration-100 w-[140px] absolute bottom-7 left-7">
                    <p>Read More</p>
                    <img src="/Images/moreArr.png" alt="" />
                  </div>
                </Link>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-[56px]">
        <button className="mt-0 rounded-[8px] font-inter text-[20px] hover:bg-[#000049] hover:text-[#1FFFA3] text-[#000049] font-semibold w-[159px] h-[60px] border border-[#000049]">
          View All
        </button>
      </div>
    </div>
  );
};

export default AllBlogs;
