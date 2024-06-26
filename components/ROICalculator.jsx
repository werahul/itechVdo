import React, { useState } from 'react';

const ROICalculator = () => {
  const [numDevelopers, setNumDevelopers] = useState(0); // A
  const [devCostPerYear, setDevCostPerYear] = useState(0); // B

  const devBoostCostPerUserPerMonth = 20; // USD //D
  const devBoostPerformanceGain = 0.10; // 10% C
  const reportingOverheadSavingsHours = 4; // hours per month H
  const improvedPrioritizationGain = 0.10; // 10% I

  // Calculations
  const increasedEfficiency = devBoostPerformanceGain * numDevelopers;  // L
  const increasedPerformanceSavings = (devCostPerYear * increasedEfficiency) - (devCostPerYear * numDevelopers); // E
  const totalDevBoostCostPerYear = numDevelopers * devBoostCostPerUserPerMonth * 12; //G
  const totalSavings = increasedPerformanceSavings - totalDevBoostCostPerYear; // F

  const savingsFromInvestmentPrioritization = improvedPrioritizationGain * numDevelopers * devCostPerYear; //G2
  const reportingOverheadSavings = (reportingOverheadSavingsHours / 4) / numDevelopers * devCostPerYear; // H
  const totalSavingsWithDevBoost = totalSavings + savingsFromInvestmentPrioritization + reportingOverheadSavings; //J
  const roi = (totalSavingsWithDevBoost - totalDevBoostCostPerYear) / totalDevBoostCostPerYear; //K

  const paybackPeriod = totalDevBoostCostPerYear / increasedPerformanceSavings; // L2
  const increasedPerformanceSavingsPerDay = totalSavings / 250; // M
  const totalDevCostPerDay = (numDevelopers * devCostPerYear) / 250; // 0
  const paybackPeriodBasedOnOverallCost = totalDevBoostCostPerYear / totalDevCostPerDay; //N

  return (
    <div>
      <h2>ROI Calculator</h2>
      <label>
        Number of developers in your organization:
        <input type="number" value={numDevelopers} onChange={(e) => setNumDevelopers(e.target.value)} />
      </label>
      <br />
      <label>
        Average developer cost per year:
        <input type="number" value={devCostPerYear} onChange={(e) => setDevCostPerYear(e.target.value)} />
      </label>
      <br />
      <h3>Results</h3>
      <p>Total DevBoost Cost Per Year: ${totalDevBoostCostPerYear.toFixed(2)}</p>
      <p>Increased Performance Savings: ${increasedPerformanceSavings.toFixed(2)}</p>
      <p>Total Savings with DevBoost: ${totalSavingsWithDevBoost.toFixed(2)}</p>
      <p>ROI: {roi.toFixed(2)}%</p>
      <p>Payback Period: {paybackPeriod.toFixed(2)} years</p>
      <p>Increased Performance Savings Per Day: ${increasedPerformanceSavingsPerDay.toFixed(2)}</p>
      <p>Total Developer Spend Per Day: ${totalDevCostPerDay.toFixed(2)}</p>
      <p>Payback Period Based on Overall Cost: {paybackPeriodBasedOnOverallCost.toFixed(2)} years</p>
    </div>
  );
};

export default ROICalculator;
