import React from "react";
import { StatData } from "./StatData";
const Stats = () => {
  return (
    <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
      {StatData.map((stat, index) => (
        <div key={index}>
          <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#687483]">
            {stat.value}
          </h3>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500 font-bold">{stat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
