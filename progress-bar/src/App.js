import React from "react";
import ProgressBar from "./ProgressBar";

function App() {
  return (
    <div className="text-3xl p-4 " style={{ width: "600px" }}>
      <h1 className="text-gray-400">Credit Line</h1>
      <ProgressBar
        filledPercentage={50}
        totalAmount={600000}
        currency={"AED"}
        color={"#71BC78"}
      />
    </div>
  );
}

export default App;
