import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const Stats = () => {
  const { t } = useLanguage();
  const stats = [
    { value: "11", title: t("stats.experience") },
    { value: "25", title: t("stats.product") },
    { value: "100+", title: t("stats.projectDone") },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
      {stats.map((stat, index) => (
        <div key={index}>
          <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-[#687483] dark:text-[#a0aec0]">
            {stat.value}
          </h3>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-bold">{stat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
