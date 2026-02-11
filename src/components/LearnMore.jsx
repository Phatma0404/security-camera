const LearnMore = ({ bg = "bg-[#002b3d]" }) => {
  return (
    <div>
      <button
        className={`${bg} text-white py-3 px-8 rounded-2xl cursor-pointer`}
      >
        Learn More
      </button>
    </div>
  );
};

export default LearnMore;
