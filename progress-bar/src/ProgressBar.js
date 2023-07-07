import React from "react";

const ProgressBar = ({ filledPercentage, totalAmount, currency, color }) => {
  const percentage =
    typeof filledPercentage === "string"
      ? parseInt(filledPercentage)
      : filledPercentage;

  const availableAmount = Math.floor((totalAmount * percentage) / 100);
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(availableAmount);

  const progressBarStyles = {
    width: `${percentage}%`,
    backgroundColor: color,
  };

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div style={progressBarStyles} className="h-2.5 rounded-full"></div>
      <span className="text-3xl text-gray-600">
        <strong>{formattedAmount}</strong> available
      </span>
    </div>
  );
};

export default ProgressBar;
