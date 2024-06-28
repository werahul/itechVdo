// utils/utils.js
export const formatNumber = (num) => {
  return num.toLocaleString('en-US', { maximumFractionDigits: 0 });
};