"use client";

const Switch = ({activeOption, setActiveOption}) => {

  const handleOptionChange = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="flex justify-center items-center mx-auto">
      <button
        className={`rounded-lg rounded-r-none py-2 w-36 sm:w-40 ${
          activeOption === 'animation'
            ? 'bg-black text-white'
            : 'text-black hover:bg-black hover:text-white'
        }`}
        onClick={() => handleOptionChange('animation')}
      >
        Animation
      </button>
      <button
        className={`rounded-lg rounded-l-none py-2 w-36 sm:w-40 ${
          activeOption === 'motion'
            ? 'bg-black text-white'
            : 'text-black hover:bg-black hover:text-white'
        }`}
        onClick={() => handleOptionChange('motion')}
      >
        Motion Graphics
      </button>
    </div>
  );
};

export default Switch;