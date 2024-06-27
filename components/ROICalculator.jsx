import React, { useState, useEffect, useRef } from "react";

const ROICalculator = () => {
  const [numDevelopers, setNumDevelopers] = useState(); // A
  const [devCostPerYear, setDevCostPerYear] = useState(); // B
  const [improvedPrioritizationGain, setPrioritizationGain] = useState(10); // initial value in percentage
  const [decresedMonthlyReporting, setDecresedMonthlyReporting] = useState(4); // initial value in hrs
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
      updateBackground(improvedPrioritizationGain, 0, 100, slider2Ref);
    }
  }, [improvedPrioritizationGain]);

  const handleMouseEnter = (popupId) => {
    setVisiblePopup(popupId);
  };

  const handleMouseLeave = () => {
    setVisiblePopup(null);
  };

  const devBoostCostPerUserPerMonth = 20; // USD //D
  const devBoostPerformanceGain = 0.1; // 10% C
  // const  = 0.1; // 10% I

  // Calculations
  const reportingOverheadSavingsHours =
    (decresedMonthlyReporting / 4 / numDevelopers) * devCostPerYear; // H

  const increasedEfficiency = devBoostPerformanceGain * numDevelopers; // L
  const increasedPerformanceSavings =
    devCostPerYear * increasedEfficiency - devCostPerYear * numDevelopers; // E
  const totalDevBoostCostPerYear =
    numDevelopers * devBoostCostPerUserPerMonth * 12; // Q
  const totalSavings = increasedPerformanceSavings - totalDevBoostCostPerYear; // F

  const savingsFromInvestmentPrioritization =
    improvedPrioritizationGain * numDevelopers * devCostPerYear; // real G
  const reportingOverheadSavings =
    (reportingOverheadSavingsHours / 4 / numDevelopers) * devCostPerYear; // H

  const totalSavingsWithDevBoost =
    totalSavings +
    savingsFromInvestmentPrioritization +
    reportingOverheadSavings; //J
  const roi =
    (totalSavingsWithDevBoost - savingsFromInvestmentPrioritization) /
    savingsFromInvestmentPrioritization; //K

  const withoutHiringDeveloper =
    numDevelopers * (numDevelopers + devBoostPerformanceGain); // Revised calculation

  const paybackPeriod = totalDevBoostCostPerYear / increasedPerformanceSavings; // real L
  const increasedPerformanceSavingsPerDay = increasedPerformanceSavings / 250; // M
  const totalDevCostPerDay = (numDevelopers * devCostPerYear) / 250; // 0
  const paybackPeriodBasedOnOverallCost =
    totalDevBoostCostPerYear / totalDevCostPerDay; //N

  const handleChange = (event) => {
    setPrioritizationGain(event.target.value);
  };
  const handleChangeDecreasedMonthlyReporting = (event) => {
    setDecresedMonthlyReporting(event.target.value);
  };

  const formatNumber = (value) => {
    return isNaN(value) ? 0 : value.toFixed(0);
  };
  return (
    <div className="bg-[#000049] py-[124px] px-20">
      <div className="max-container">
        <h2 className="font-inter text-[48px] text-white font-semibold text-center">
          ROI Calculator
        </h2>
        <div className="flex justify-between space-x-10">
          <div className="bg-white w-[50%] rounded-[20px] max-h-[1490px] py-[64px] px-[44px] text-[#000049] mt-10">
            <p className="font-inter font-bold text-[32px]">
              Enter Your Company Details
            </p>

            <div className=" grid grid-cols-2 gap-x-10 mt-5">
              <label className="font-inter font-medium leading-[26px] text-[20px]">
                Number of developers in your organization:
                <input
                  type="tel"
                  value={numDevelopers}
                  className="w-full border border-[#000049] h-[64px] rounded-lg px-5 mt-4"
                  onChange={(e) => setNumDevelopers(e.target.value)}
                />
              </label>
              <label className="font-inter font-medium leading-[26px] text-[20px]">
                Average developer cost per year:
                <input
                  type="tel"
                  value={devCostPerYear}
                  className="w-full border border-[#000049] h-[64px] rounded-lg px-5 mt-4"
                  onChange={(e) => setDevCostPerYear(e.target.value)}
                />
              </label>
            </div>

            <div className="mt-5">
              <div className="space-y-4">
                <div className="flex items-start space-x-2 relative">
                  <p className="font-medium font-inter text-[20px] leading-[26px] w-[370px] whitespace-nowrap">
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

              <div className=" flex items-center space-x-4 mt-8">
                <span className="w-[99px] h-[64px] border border-[#455A64] rounded-lg text-[20px] flex items-center justify-center">
                  {improvedPrioritizationGain}%
                </span>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={improvedPrioritizationGain}
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
                  <p className="font-medium font-inter text-[20px]">
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
              <p className="text-[18px] leading-[24px] mt-2 font-inter">
                On average, 4 hours per engineering manager per month. In many
                organizations, an engineering operations manager may also
                dedicate a large portion of their time to this.
              </p>

              <div className="flex items-center space-x-4 mt-8">
                <span className="w-[99px] h-[64px] border border-[#455A64] rounded-lg text-[20px] flex items-center justify-center">
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
              <p className="font-inter text-[20px] leading-[26px] font-medium">
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
            <div className="mt-10 ">
              <p className=" font-inter text-[32px] leading-[48px] font-bold">
                DevBoost basic product cost = <br />
                20 USD/user/month
              </p>
            </div>
          </div>
          <div className="bg-white w-[50%] rounded-[20px] max-h-[1490px] py-[64px] px-[44px] text-[#000049] mt-10">
            <p className="font-inter text-[32px] font-bold">Total Savings:</p>
            <p className="font-inter text-[56px] font-bold">
              {typeof totalSavingsWithDevBoost === "number"
                ? formatNumber(totalSavingsWithDevBoost) + " USD"
                : "0 USD"}
            </p>
            <hr className="my-5" />

            <p className="font-inter text-[20px] leading-[26px]">
              Increased Performance Savings: <br />
            </p>
            <p className="font-inter text-[32px] leading-[32px] font-bold mt-2">
              {typeof increasedPerformanceSavings === "number"
                ? formatNumber(increasedPerformanceSavings) + " USD"
                : "0 USD"}
            </p>
            <p className="font-inter text-[20px] leading-[26px] mt-5">
              Total savings with DevBoost because of increased efficiency <br />
            </p>
            <p className="font-inter text-[32px] leading-[32px] font-bold mt-2">
              {typeof totalSavings === "number"
                ? formatNumber(totalSavings) + " USD"
                : "0 USD"}
            </p>
            <p className="font-inter text-[20px] leading-[26px] mt-5">
              Increased efficiency without hiring additional developers <br />
            </p>
            <p className="font-inter text-[32px] leading-[32px] font-bold mt-2">
              {typeof withoutHiringDeveloper === "number"
                ? formatNumber(withoutHiringDeveloper) + " USD"
                : "0 USD"}
            </p>
            <p className="font-inter text-[20px] leading-[26px] mt-5">
              Savings from investment prioritization
            </p>
            <p className="font-inter text-[32px] leading-[32px] font-bold mt-2">
              {typeof savingsFromInvestmentPrioritization === "number"
                ? formatNumber(savingsFromInvestmentPrioritization) + " USD"
                : "0 USD"}
            </p>

            <p className="font-inter text-[20px] leading-[26px] mt-5">
              Total DevBoost cost for developers/year
            </p>
            <p className="font-inter text-[32px] leading-[32px] font-bold mt-2">
              {typeof totalDevBoostCostPerYear === "number"
                ? formatNumber(totalDevBoostCostPerYear) + " USD"
                : "0 USD"}
            </p>
            <p className="font-inter text-[20px] leading-[26px] mt-5">
              Reporting overhead savings
            </p>
            <p className="font-inter text-[32px] leading-[32px] font-bold mt-2">
              {typeof reportingOverheadSavingsHours === "number"
                ? formatNumber(reportingOverheadSavingsHours) + " USD"
                : "0 USD"}
            </p>
            <p className="font-inter text-[20px] leading-[26px] mt-5">
              ROI on cost
            </p>
            <p className="font-inter text-[32px] leading-[32px] font-bold mt-2">
              {typeof roi === "number" ? formatNumber(roi) + " USD" : "0 USD"}
            </p>

            <hr className="my-5" />

            <div className="">
              <p className="font-inter font-bold text-[32px] leading-[48px]">
                Scenario analysis for investment breakeven period (When you will
                get your investment back)
              </p>

              <div className="grid grid-cols-2 gap-x-10 gap-y-8 mt-5">
                <div className="">
                  <p className="font-inter text-[20px] leading-[26px] mt-5">
                    Payback Period
                  </p>
                  <p className="font-inter text-[32px] leading-[32px] font-bold mt-2">
                    {typeof paybackPeriod === "number"
                      ? formatNumber(paybackPeriod) + " Days"
                      : "0 Days"}
                  </p>
                </div>
                <div className="">
                  <p className="font-inter text-[20px] leading-[26px] mt-5">
                    Increased performance savings per day
                  </p>
                  <p className="font-inter text-[32px] leading-[32px] font-bold mt-2">
                    {typeof increasedPerformanceSavingsPerDay === "number"
                      ? formatNumber(increasedPerformanceSavingsPerDay) + " USD"
                      : "0 USD"}
                  </p>
                </div>
                <div className="">
                  <p className="font-inter text-[20px] leading-[26px] mt-5">
                    Payback period based on overall engineering cost
                  </p>
                  <p className="font-inter text-[32px] leading-[32px] font-bold mt-2">
                    {typeof paybackPeriodBasedOnOverallCost === "number"
                      ? formatNumber(paybackPeriodBasedOnOverallCost) + " Days"
                      : "0 Days"}
                  </p>
                </div>
                <div className="">
                  <p className="font-inter text-[20px] leading-[26px] mt-5">
                    Total developer spend per day
                  </p>
                  <p className="font-inter text-[32px] leading-[32px] font-bold mt-2">
                    {typeof totalDevCostPerDay === "number"
                      ? formatNumber(totalDevCostPerDay) + " USD"
                      : "0 USD"}
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
