import { useLanguage } from "../context/LanguageContext";

const LearnMore = ({ bg = "bg-[#002b3d]" }) => {
  const { t } = useLanguage();
  return (
    <div>
      <button
        className={`${bg} text-white py-3 px-8 rounded-2xl cursor-pointer`}
      >
        {t("common.learnMore")}
      </button>
    </div>
  );
};

export default LearnMore;
