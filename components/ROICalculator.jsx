import React, { useState, useEffect, useRef } from "react";
import { NumberFormatBase } from "react-number-format";

const ROICalculator = () => {
  const [numDevelopers, setNumDevelopers] = useState(30); // A
  const [devCostPerYear, setDevCostPerYear] = useState(100000); // B
  const [improvedPrioritizationGain, setPrioritizationGain] = useState(0.1); // C
  const [decresedMonthlyReporting, setDecresedMonthlyReporting] = useState(4); // D
  const [visiblePopup, setVisiblePopup] = useState(null);

  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  const updateBackground = (val, min, max, sliderRef) => {
    const percentage = ((val - min) / (max - min)) * 100;
    sliderRef.current.style.background = `linear-gradient(to right, #1FFFA3 0%, #1FFFA3 ${percentage}%, #1fffa24d ${percentage}%, #1fffa24d 100%)`;
  };

  useEffect(() => {
    if (slider1Ref.current) {
      updateBackground(decresedMonthlyReporting, 0, 20, slider1Ref);
    }
  }, [decresedMonthlyReporting]);

  useEffect(() => {
    if (slider2Ref.current) {
      updateBackground(improvedPrioritizationGain, 0.0, 1, slider2Ref);
    }
  }, [improvedPrioritizationGain]);

  const handleMouseEnter = (popupId) => {
    setVisiblePopup(popupId);
  };

  const handleMouseLeave = () => {
    setVisiblePopup(null);
  };

  const devBoostCostPerUserPerMonth = 20; //D
  const devBoostPerformanceGain = 0.1; // 10% C

  // Calculations
  const reportingOverheadSavingsHours =
    (decresedMonthlyReporting / 4 / numDevelopers) * devCostPerYear; // H

  const increasedEfficiency = devBoostPerformanceGain * numDevelopers; // L

  const totalDevBoostCostPerYear =
    numDevelopers * devBoostCostPerUserPerMonth * 12; // Q  7200

  const savingsFromInvestmentPrioritization =
    improvedPrioritizationGain * numDevelopers * devCostPerYear; // real G
  const reportingOverheadSavings =
    (reportingOverheadSavingsHours / 4 / numDevelopers) * devCostPerYear; // H

  const withoutHiringDeveloper = numDevelopers * devBoostPerformanceGain; // Revised calculation

  const increasedPerformanceSavings = withoutHiringDeveloper * devCostPerYear; // E  1200

  const totalSavings = increasedPerformanceSavings - totalDevBoostCostPerYear; // F

  const totalSavingsWithDevBoost =
    increasedPerformanceSavings - 20 * numDevelopers * 12;
  savingsFromInvestmentPrioritization + reportingOverheadSavings; //J

  const totalS =
    savingsFromInvestmentPrioritization +
    reportingOverheadSavings +
    totalSavings;

  const roi = ((totalS - numDevelopers * 20 * 12) / numDevelopers) * 20 * 12;

  const increasedPerformanceSavingsPerDay = increasedPerformanceSavings / 250; // M

  const paybackPeriod =
    totalDevBoostCostPerYear / increasedPerformanceSavingsPerDay; // real L8

  const totalDevCostPerDay = (numDevelopers * devCostPerYear) / 250; // 0
  // const paybackPeriodBasedOnOverallCost =
  // // numDevelopers *  / totalDevCostPerDay;

  const paybayP2 = (numDevelopers * 20 * 12) / totalDevCostPerDay;

  const handleChange = (event) => {
    const value = event.target.value;
    const percentage = value / 100;
    setPrioritizationGain(percentage); // Store the calculated percentage as decimal
  };

  const handleChangeDecreasedMonthlyReporting = (event) => {
    setDecresedMonthlyReporting(event.target.value);
  };

  const formatNumber = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleInputChange = (e, setState) => {
    const value = e.target.value.replace(/,/g, "");
    setState(value);
    e.target.value = formatNumber(value);
  };

  // const formatNumber = (value) => {
  //   return isNaN(value) ? 0 : value.toFixed(0);
  // };

  // const formatNumberWithCommas = (value) => {
  //   // Remove all non-numeric characters except for the decimal point
  //   const onlyNums = value.replace(/[^0-9]/g, "");
  //   return onlyNums.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // };

  // const handleNumDevelopersChange = (e) => {
  //   const formattedValue = formatNumberWithCommas(e.target.value);
  //   setNumDevelopers(formattedValue);
  // };

  // const handleDevCostPerYearChange = (e) => {
  //   const formattedValue = formatNumberWithCommas(e.target.value);
  //   setDevCostPerYear(formattedValue);
  // };

  return (
    <div className="bg-[#000049] lg:py-[124px] py-20 lg:px-20 px-5">
      <div className="max-container">
        <h2 className="font-inter lg:text-[48px] text-[28px] text-white font-semibold lg:text-center">
          ROI Calculator
        </h2>
        <div className="lg:flex justify-between lg:space-x-10">
          <div className="bg-white lg:w-[50%] rounded-[20px] min-h-[1100px] lg:py-[64px] py-10 lg:px-[44px] px-5 text-[#000049] mt-10">
            <p className="font-inter font-bold lg:text-[32px] text-[24px] leading-[31px]">
              Enter Your Company Details
            </p>

            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-10 lg:gap-y-0 gap-y-6 mt-5">
              <label className="font-inter font-medium lg:leading-[26px] lg:text-[20px] text-[16px] leading-[20px]">
                Number of developers in your organization:
                <input
                  type="tel"
                  value={formatNumber(numDevelopers)}
                  className="w-full border border-[#000049] h-[64px] rounded-lg px-5 mt-4"
                  onChange={(e) => handleInputChange(e, setNumDevelopers)}
                />
              </label>
              <label className="font-inter font-medium lg:leading-[26px] lg:text-[20px] text-[16px] leading-[20px]">
                Average developer cost per year:
                <input
                  type="tel"
                  value={formatNumber(devCostPerYear)}
                  className="w-full border border-[#000049] h-[64px] rounded-lg px-5 mt-4"
                  onChange={(e) => handleInputChange(e, setDevCostPerYear)}
                />
              </label>
            </div>

            <div className="mt-5">
              <div className="space-y-4">
                <div className="flex items-start space-x-2 relative">
                  <p className="font-medium font-inter lg:text-[20px] lg:leading-[26px] text-[16px] leading-[20px] w-[370px] whitespace-nowrap">
                    Improved prioritization of engineering <br /> investments
                  </p>
                  <img
                    src="/Images/IBtn.png"
                    alt="i-Button 1"
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={handleMouseLeave}
                    className="cursor-pointer mt-2"
                  />
                  {visiblePopup === 1 && (
                    <div
                      className="popup1 absolute w-[291px] top-6 -right-10 rounded-lg bg-[#D2FFED] p-3 text-[14px] leading-[21px] z-10"
                      onMouseEnter={() => handleMouseEnter(1)}
                      onMouseLeave={handleMouseLeave}
                    >
                      On average, customers see a 29% increase in teams&apos;
                      ability to focus on their most pressing work. To be
                      conservative, we&apos;re assuming you&apos;ll only see 10%
                      of this benefit, but you should expect to see more.
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:flex items-center lg:space-x-4 mt-8">
                <span className="w-[99px] h-[64px] lg:mb-0 mb-6 border border-[#455A64] rounded-lg text-[20px] flex items-center justify-center">
                  {(improvedPrioritizationGain * 100).toFixed(0)}%
                </span>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={improvedPrioritizationGain * 100}
                  onChange={handleChange}
                  step="1"
                  ref={slider2Ref}
                  className="customRangeDesign2 cupo"
                />
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-center space-x-2 relative">
                <div className="">
                  <p className="font-medium font-inter lg:text-[20px] lg:leading-[26px] text-[16px] leading-[20px]">
                    Decreased monthly reporting overhead
                  </p>
                </div>
                <img
                  src="/Images/IBtn.png"
                  alt="i-Button"
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave}
                  className="cursor-pointer"
                />
                {visiblePopup === 2 && (
                  <div
                    className="popup1 absolute w-[291px] top-6 -right-10 rounded-lg bg-[#D2FFED] p-3 text-[14px] leading-[21px] cursor-pointer z-10"
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={handleMouseLeave}
                  >
                    On average, customers see a 29% increase in teams&apos;
                    ability to focus on their most pressing work. To be
                    conservative, we&apos;re assuming you&apos;ll only see 10%
                    of this benefit, but you should expect to see more.
                  </div>
                )}
              </div>
              <p className="lg:text-[18px] text-[14px] lg:leading-[24px] leading-[18px] mt-2 font-inter">
                On average, 4 hours per engineering manager per month. In many
                organizations, an engineering operations manager may also
                dedicate a large portion of their time to this.
              </p>

              <div className="lg:flex items-center lg:space-x-4 mt-8">
                <span className="w-[99px] h-[64px] lg:mb-0 mb-6 border border-[#455A64] rounded-lg text-[20px] flex items-center justify-center">
                  {decresedMonthlyReporting} hrs
                </span>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={decresedMonthlyReporting}
                  onChange={handleChangeDecreasedMonthlyReporting}
                  step="1"
                  ref={slider1Ref}
                  className="customRangeDesign"
                />
              </div>
            </div>

            <hr className="my-10" />

            <div className="flex items-start space-x-2 relative">
              <p className="font-inter lg:text-[20px] text-[16px] lg:leading-[26px] leading-[20px] font-medium">
                DevBoost performance improvement gain = 10%
              </p>
              <img
                src="/Images/IBtn.png"
                alt="i-Button 1"
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
                className="cursor-pointer mt-1"
              />
              {visiblePopup === 3 && (
                <div
                  className="popup3 absolute w-[291px] top-6 -right-10 rounded-lg bg-[#D2FFED] p-3 text-[14px] leading-[21px] z-10"
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={handleMouseLeave}
                >
                  Increased output from each developer, decreasing your need to
                  hire additional headcount to achieve the same amount of work.
                  On average our customers have noted a 10% to 20% increase in
                  throughput per month.
                </div>
              )}
            </div>
            <div className="lg:mt-10 mt-[31px] ">
              <p className=" font-inter lg:text-[32px] text-[24px] lg:leading-[48px] leading-[31px] font-bold">
                DevBoost basic product cost = <br className="lg:block hidden" />
                20 USD/user/month
              </p>
            </div>
          </div>
          <div className="bg-white lg:w-[50%] rounded-[20px] max-h-[1100px] lg:py-[64px] py-10 lg:px-[44px] px-5 text-[#000049] mt-10">
            <p className="font-inter lg:text-[32px] text-[24px] font-bold">
              Total Savings:
            </p>
            <p className="font-inter lg:text-[56px] text-[36px] font-bold">
              ${" "}
              {typeof totalS === "number"
                ? Math.floor(totalS).toLocaleString() + ""
                : "0"}
            </p>
            <hr className="my-5" />

            {/*<p className="font-inter lg:text-[20px] text-[16px] lg:leading-[26px] leading-[20px]">
              Increased Performance Savings: <br />
            </p>
            <p className="font-inter lg:text-[32px] text-[24px] lg:leading-[32px] leading-[24px] font-bold mt-2">
              {typeof increasedPerformanceSavings === "number"
                ? formatNumber(increasedPerformanceSavings) + " USD"
                : "0 USD"}
            </p>*/}
            <p className="font-inter lg:text-[20px] text-[16px] lg:leading-[26px] leading-[20px] mt-5">
              Total savings with DevBoost because of increased efficiency <br />
            </p>
            <p className="font-inter lg:text-[32px] text-[24px] lg:leading-[32px] leading-[24px] font-bold mt-2">
              ${" "}
              {typeof totalSavings === "number"
                ? Math.floor(totalSavings).toLocaleString() + " "
                : "0"}
            </p>
            {/*<p className="font-inter lg:text-[20px] text-[16px] lg:leading-[26px] leading-[20px] mt-5">
              Increased efficiency without hiring additional developers <br />
            </p>
            <p className="font-inter lg:text-[32px] text-[24px] lg:leading-[32px] leading-[24px] font-bold mt-2">
              {typeof withoutHiringDeveloper === "number"
                ? formatNumber(withoutHiringDeveloper) + " "
                : "0 "}
            </p>*/}
            <p className="font-inter lg:text-[20px] text-[16px] lg:leading-[26px] leading-[20px] mt-5">
              Savings from investment prioritization
            </p>
            <p className="font-inter lg:text-[32px] text-[24px] lg:leading-[32px] leading-[24px] font-bold mt-2">
              ${" "}
              {typeof savingsFromInvestmentPrioritization === "number"
                ? Math.floor(
                    savingsFromInvestmentPrioritization
                  ).toLocaleString() + ""
                : "0"}
            </p>

            <p className="font-inter lg:text-[20px] text-[16px] lg:leading-[26px] leading-[20px] mt-5">
              Total DevBoost cost for developers/year
            </p>
            <p className="font-inter lg:text-[32px] text-[24px] lg:leading-[32px] leading-[24px] font-bold mt-2">
              ${" "}
              {typeof totalDevBoostCostPerYear === "number"
                ? Math.floor(totalDevBoostCostPerYear).toLocaleString() + " "
                : "0 "}
            </p>
            <p className="font-inter lg:text-[20px] text-[16px] lg:leading-[26px] leading-[20px] mt-5">
              Reporting overhead savings
            </p>
            <p className="font-inter lg:text-[32px] text-[24px] lg:leading-[32px] leading-[24px] font-bold mt-2">
              ${" "}
              {typeof reportingOverheadSavingsHours === "number"
                ? Math.floor(reportingOverheadSavingsHours).toLocaleString() +
                  ""
                : "0"}
            </p>
            <p className="font-inter lg:text-[20px] text-[16px] lg:leading-[26px] leading-[20px] mt-5">
              ROI on cost
            </p>
            <p className="font-inter lg:text-[32px] text-[24px] lg:leading-[32px]  font-bold mt-2">
              ${" "}
              {typeof roi === "number"
                ? Math.floor(roi).toLocaleString() + " "
                : "0 "}
            </p>

            <hr className="my-5" />

            <div className="">
              <p className="font-inter font-bold lg:text-[32px] text-[24px] lg:leading-[42px] leading-[31px]">
                Scenario analysis for investment breakeven period (When you will
                get your investment back)
              </p>

              <div className="grid grid-cols-2 gap-x-10 gap-y-8 mt-5">
                <div className="">
                  <p className="font-inter lg:text-[16px] text-[16px] lg:leading-[26px] leading-[20px] mt-5">
                    Payback Period on Perfomance Saving
                  </p>
                  <p className="font-inter lg:text-[32px] text-[24px] lg:leading-[32px] leading-[24px] font-bold mt-2">
                    {Math.floor(paybackPeriod)} Days
                  </p>
                </div>
                {/*<div className="">
                  <p className="font-inter lg:text-[20px] text-[16px] lg:leading-[26px] leading-[20px] mt-5">
                    Increased performance savings per day
                  </p>
                  <p className="font-inter lg:text-[32px] text-[24px] lg:leading-[32px] leading-[24px] font-bold mt-2">
                    {typeof increasedPerformanceSavingsPerDay === "number"
                      ? formatNumber(increasedPerformanceSavingsPerDay) + " USD"
                      : "0 USD"}
                  </p>
                </div>
                <div className="">
                  <p className="font-inter lg:text-[20px] text-[16px] lg:leading-[26px] leading-[20px] mt-5">
                    Payback period based on overall engineering cost
                  </p>
                 <p className="font-inter lg:text-[32px] text-[24px] lg:leading-[32px] leading-[24px] font-bold mt-2">
                    {typeof totalDevCostPerDay === "number"
                      ? formatNumber(totalDevCostPerDay) + " USD"
                      : "0 USD"}
                  </p>
                </div>
                <div className="">
                  <p className="font-inter lg:text-[20px] text-[16px] lg:leading-[26px] leading-[20px] mt-5">
                    Total developer spend per day
                  </p>
                  <p className="font-inter lg:text-[32px] text-[24px] lg:leading-[32px] leading-[24px] font-bold mt-2">
                    {typeof totalDevCostPerDay === "number"
                      ? formatNumber(totalDevCostPerDay) + " USD"
                      : "0 USD"}
                  </p>
                </div>*/}
                <div className="">
                  <p className="font-inter lg:text-[16px] text-[16px] lg:leading-[26px] leading-[20px] mt-5">
                    Payback Period on Overall Engineering Cost
                  </p>
                  <p className="font-inter lg:text-[32px] text-[24px] lg:leading-[32px] leading-[24px] font-bold mt-2">
                    {paybayP2} Days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
    </div>
  );
};

export default ROICalculator;
