"use client";
import React, { useState } from "react";

const faqs = [
  {
    question:
      "I already get data from my Jira, Git, etc. Why would I need another thing to look at?",
    answer: [
      "Git tools are code-first and designed for developers and team leads. Project Management tools are plan-first and designed for PMs. DevBoost is for the engineering leader who must move beyond “In Progress” to understand how things translate into efficiency, cost, and business impact. Our founders, who were engineering leaders earlier, were frustrated they had nowhere to go every morning to see what was happening with their orgs. They also hated answering (really guessing at) the same questions over and over again:",
      "“When will this feature be ready?”",
      "“Can we speed this up and deliver this month instead of next?”",
      "“Can you take on this other ‘high priority’ project?”",
      "“What is this project going to cost and what will our ROI be?”",
      "The answers to these questions are hidden in unstructured data across silos that are meant for different roles. The only way to determine if your engineering practice is operating efficiently is correlating and pattern matching these two sources–which takes a lot of time and effort. Further complicating the matter is the fact that git, Jira, and other common tools don’t really do anything for driving business outcomes. Engineering leaders live between two worlds and have a dual mandate to blend operational excellence and business impact together–affecting their resourcing decisions, ability to hit deadlines, and whether they can deliver software that moves the needle.",
      "The problem with so many tools is:",
      "Lack of visibility - Most teams aren’t great at project hygiene which means the board is outdated and incomplete.",
      "Lack of detail - “In Progress” means 100 different things so you have to piece together the details from different people and tools.",
      "Lack of insight - Dev leaders can only solve problems if they know where to look. Without seeing the bottlenecks, you can’t fix them. Many of the tools available today only provide shallow visibility into operational metrics–starting and stopping with DORA or measuring lines of code.",
      "Lack of alignment - Translating engineering to executives is hard enough. Without concrete data about how, your team really spends their time or how they’re allocating their resources–and how those decisions impact the business–it’s impossible.",
      "Lack of workflow optimization - Other tools made specifically for devs are overly focused on helping them code better–which is only about 25% of their day. The non-coding work–meetings, status updates, planning sessions, housekeeping, code reviews, and meeting merge standards–is what needs to be streamlined to maximize productivity and keep devs coding (their happy place).",
    ],
  },
  {
    question:
      "I already have Software Delivery Management capabilities within my CI/CD toolchain. Isn’t this redundant?",
    answer: [
      "CI/CD tools can’t identify bottlenecks in the first 50% of your delivery pipeline. With DevBoost,you extend your team’s ability to program workflows back to each pull request to unlock efficiency for every contributor in your org. The biggest problem with CI/CD tooling–along with git, PM, andother SDLC tools–is their fragmented nature. They provide an incomplete, disjointed picture ofengineering health which negatively affects a leader’s ability to make correct decisions andeffectively plan their strategies. DevBoost correlates data from all these tools to provide holisticvisibility (as well as proactive improvement suggestions) across the entire SDLC.",
    ],
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: [
      "Our dev team has the exact same problem with our project management tool. As flexible as many project tools can be, they are not developer-first so they can force dev teams into a workflow that does not necessarily reflect how they really work. We solve this by learning how you work and adapting to your processes across team structure, policy, and release strategy. In other scenarios, like teams that develop mobile apps, the standard application of things like DORA metrics may not make the most sense. Rest assured that DevBoost adapts to you by offering: Flexibility in how to detect releases with a powerful API Automatic outlier filtering so data is always accurate Customized views of your metrics Automated pattern recognition and Visualization. This high degree of flexibility–for example structuring your projects across boards, custom tags, teams, and epics–stands in stark contrast to Jira’s rigid project reporting structure. DevBoost flexibility ensures leaders have visibility across their entire organization and that visibility actually reflects what’s really happening on their teams–simplifying their role and taking the sting out of engineering metrics and reporting.",
    ],
  },
  {
    question: "This looks like just another thing I would need to manage.",
    answer: [
      "Good news: There’s nothing here to manage. Once you connect your Git and project systems, DevBoost just runs with zero manual inputs. In minutes, you’ll be able to start building an engineering metrics program with DORA metrics, leading indicators, and benchmarks that tell you how you’re doing. But that’s only the visibility aspect of the platform. We then help your team align on improvement goals, set data-backed OKRs, and keep those initiatives front and centre. We alert you to important updates, risks, and blockers right in Slack or MS Teams. We also enable devs to review, approve, and merge code from Slack and Teams. And we’re always looking for ways to get closer to where developers do their work–namely the IDE–to help them ship higher quality code faster. It is definitely another thing to look at though. In fact, we think it’s the layer of context and streamlined operations between project and code that dev teams have been missing.",
    ],
  },
  {
    question:
      "My CEO doesn’t care about engineering metrics, how does this help me deliver more features?",
    answer: [
      "Feature delivery is shared language between engineering and the rest of the business. Now you don’t have to wait for quarterly retrospectives or QBRs to see and present this data. Engineering metrics–especially quality metrics (code churn, change failure rate, mean time to restore) and efficiency metrics (pull request size, cycle time, deployment frequency) translate to predictability (new features delivered, promises kept). And predictability translates to business outcomes (read: the things your CEO cares about): ROI, added revenue, better CSAT scores, and higher retention. DevBoost makes it possible for engineering leaders to become more predictable, accurately forecast delivery dates or delay risks, and showcase business impact metrics in real time. Now you’ll land the message that engineering health is business health and have the data to prove it. DevBoost helps teams find bottlenecks, set goals to improve, automate good habits, and become more stable and predictable.",
    ],
  },
  {
    question:
      "I can get all of this information from my project management tool.",
    answer: [
      "Unfortunately, out-of-the-box reporting from your project management tool is not great. It only accounts for the data within that tool, unlike DevBoost which correlates data points from across many tools in your stack. Without multiple data points, you won&apos;t have a holistic view of what is actually happening and why. Compare your current project board to the DevBoost dev board. Notice anything? Better yet, pull up your current board and see if you can answer the questions Below.",
      "Questions:",
      "Which devs are contributing to this feature?",
      "What branches and PRs are associated with this story?",
      "Have we actively worked on the branches and PRs for this story every day this week?",
      "How close are we to submitting this branch for peer review?",
      "Which PRs associated with this story have been merged and released?",
      "Which project issues are experiencing delays or have risks?",
      "Bonus question: How many clicks would it take in your current project management system to get answers to all of these questions?",
      "Beyond just the current status of your project, DevBoost also offers a unique look into your projects via Project Delivery Tracker (PDT). PDT shows you how much was planned/completed, what was added, what was worked on, and who was working on it, how well you’re aligning to business priorities, and if your teams are meeting their potential. This information helps you make better-informed strategic decisions (and have data to back up resourcing or trade-off conversations). Each one of these PDT views translates to a separate report in your project management tool/issue tracker that someone would need to generate–which is tedious and time consuming.",
      "DevBoost saves hours by automatically generating these insights as work gets done.",
    ],
  },
  {
    question:
      "Jira already automatically updates issues status based on Git branch status.",
    answer: [
      "That’s true. The problem is, project management statuses are shallow. “In progress” and “In review” don’t really tell you much. Most of the time new features are made up of multiple branches being worked on by multiple people. In order to know the real status of your feature, you need a lot of info What is the detailed status for every branch and PR? Is any of the work high-risk or blocked? What dependencies are likely to slow us down? What PRs have already been released? We automatically show you how all of that detail affects the thing you care about: when the new feature is going to be released.",
    ],
  },
  {
    question: "Our Git system already has analytics built-in.",
    answer: [
      "That’s true. The problem is, project management statuses are shallow. “In progress” and “In review” don’t really tell you much. Most of the time new features are made up of multiple branches being worked on by multiple people. In order to know the real status of your feature, you need a lot of info What is the detailed status for every branch and PR? Is any of the work high-risk or blocked? What dependencies are likely to slow us down? What PRs have already been released? We automatically show you how all of that detail affects the thing you care about: when the new feature is going to be released.",
    ],
  },
  {
    question:
      "I’ve used a free tool that told me I have a Cycle Time of 8 days, why do I need DevBoost?",
    answer: [
      "It’s great that you’ve gotten some visibility into your processes and now have a baseline of your team’s cycle time. Quick question: Is your 8-day Cycle Time good? What about the individual metrics that make up your Cycle Time (like pickup and/or review time)? Do you have visibility into those metrics? If you do, are your team’s metrics in-line with your peers in the industry? DevBoost not only provides metrics into all of these lagging and leading indicators of pipeline health (not to mention automated workflows to improve), it also provides your team with context and a baseline of what “good” looks like. Check out the Engineering Benchmarks, which are built right into DevBoost. These metrics benchmarks come from analysing thousands of dev teams and millions of branches. They provide teams with an understanding of the metrics that matter most and what success in each of these areas looks like.",
    ],
  },
  {
    question: "We already have alerts for pull requests.",
    answer: [
      "Totally. Other tools have some cool Slack alerts and Teams channels can now subscribe to GitHub activity. Those are great features and, when it comes to alerting you about PRs that are stuck and need attention, we have some overlapping features. But we go much deeper. When it comes to real-time alerts, do three things that are REALLY special: We analyse your code to find risks. For example, we know that a high number of code changes combined with a high rate of rework has a high correlation to bugs. So, we look for that dangerous combination and alert you when that “high-risk code” is present so you can assign additional reviewers. Our alerts correlate your code with your project stories. So, for example, we highlight when you have several blocked PRs and high-risk branches that are all related to a single feature. This helps you see the bigger picture risk to your deliverable that a single alert would not help you see. When an alert is fired by DevBoost, it provides lots of contexts about the PR–including who owns it, what’s in it, how long it will take to review it, and information about any improvement goals you and your team have set for yourself (like picking up PRs in a day or reviewing them in two days). And our PR-Policy-as-Code tool, gitStream can do even more–helping you build consistent and standardized merge policies for a smooth and scalable PR process.",
    ],
  },
  {
    question:
      "I’m afraid an inexperienced manager would use this to drive bad behaviour.",
    answer: [
      "In other words, this feels big-brotherly. We totally get it and DevBoost could not be further from that. We firmly believe that no-one wants to be tracked on an individual basis which can be used for culture-killing stack ranking. DevBoost is all about team improvement, so naturally we are strongly opposed to Git analytics tools that focus on individual performance metrics and stack ranking developers. We’re hyper-focused on using data to help dev teams to deliver more value as a team. And we have absolutely zero individual performance stack-ranking in the product. In fact, DevBoost has tons of features to help you deliver better that have nothing to do with performance metrics. Look closely and you’ll see we’ve built-in guardrails to ensure your devs feel comfortable with DevBoost and your managers are using their new power for good.",
    ],
  },
  {
    question: "I can write scripts and get all of this data myself.",
    answer: [
      "We believe you. It’s just really hard and time-consuming. Our founder had to allocate one day every week for one of his data engineers to pull data and organize it the way he needed. If you’re lucky enough to have a dedicated data engineer, compiling reports is probably not the best use of their time. Most teams don’t have that luxury. With DevBoost, building a comprehensive metrics dashboard with the information you want can be done in a few clicks.",
    ],
  },
  {
    question: "How does any of this translate to improvement?",
    answer: [
      "We have a rule at DevBoost: no shelfware. In that spirit, we want to make sure that anyone who buys–or tries– DevBoost moves beyond just visibility and metrics and actually does something with these metrics to drive meaningful improvement. Check out how you can use DevBoost to build your first metrics program and improve in one of these key areas:",
      "• DORA Metrics",
      "• Project Delivery",
      "• Resource Allocation and Business Alignment",
      "• Developer Experience and Programmable Workflows",
    ],
  },
  {
    question:
      "Things are working pretty well on my team and this just seems like a nice-to-have. We just don’t have the budget, time, or real need for another tool or process.",
    answer: [
      "Fair enough. It’s really great that things are going so well on your team. But here’s the thing, because DevBoost correlates data from several sources and automatically surfaces insight, it can shine a light on bottlenecks you didn’t even know you had. So, it can remove the “pretty” and replace it with “extremely.” As an engineering leader, you’ve got a tough job–which is really two jobs. You’ve got to drive operational excellence with a budget that is either flat or shrinking–so more headcount is probably out of the question. The only way to meet this mandate is to find inefficiency wherever it exists and improve your processes. You’ve also got to drive revenue by delivering on promises and aligning to the priorities of the business. You can only do this with data that cuts across engineering and the rest of the business. In down markets, tools that improve your existing processes and help teams scale efficiency aren’t nice to have. They are imperative.",
    ],
  },
];


const ProductFaq = () => {
 

  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleIconClick = (event, index) => {
    event.stopPropagation();
    toggleAccordion(index);
  };

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <div className="pb-[156px] px-20 max-container">
      <p className="text-center font-inter font-semibold text-[48px] text-[#000049]">
      FAQs
      </p>

      <div className="mt-10">
        {displayedFaqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              onClick={() => toggleAccordion(index)}
              className={`w-full h-auto py-10 px-8 border border-[#000049] rounded-lg flex justify-between mb-7 transition-opacity duration-300 cursor-pointer ${
                isOpen ? "opacity-100" : "opacity-70"
              }`}
            >
              <div className="w-[70%]">
                <p className="questions font-inter font-semibold text-[24px] text-[#000049]">
                  {faq.question}
                </p>
                {isOpen && (
                  <div className="answer font-inter text-[18px] leading-[27px] text-[#000049] opacity-90 mt-3">
                    {faq.answer.map((paragraph, i) => (
                      <p key={i} className="mt-3">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <div
                  onClick={(event) => handleIconClick(event, index)}
                  className={`w-[50px] h-[50px] rounded-full border border-[#000049] flex items-center justify-center cursor-pointer ${
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
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {!showAll && (
        <div className="flex items-center justify-center mt-[48px]">
          <button
            className="mt-0 rounded-[8px] font-inter text-[20px] hover:bg-[#000049] hover:text-[#1FFFA3] text-[#000049] font-semibold w-[159px] h-[60px] border border-[#000049]"
            onClick={() => setShowAll(true)}
          >
            View All
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductFaq;
