import { stackData } from "../data";

const TechStackSlider = () => {

    return (
      <div className="relative w-full overflow-hidden box-content px-6 -mx-6 sm:px-20 sm:-mx-20 lg:px-40 lg:max-w-5xl lg:mx-auto">
        <div className="animate-infinite-slider flex gap-14 mt-6">
            {stackData.map((skill,index) => (
                <li key={index}
                    className="slide flex flex-col gap-2 items-center text-ccGray hover:text-white">
                    <skill.icon className="text-7xl"/>
                    <p className="text-sm font-medium">{skill.name}</p>
                </li>
            ))}
            {stackData.map((skill,index) => (
                <li key={index}
                    className="slide flex flex-col gap-2 items-center text-ccGray hover:text-white">
                    <skill.icon className="text-7xl"/>
                    <p className="text-sm font-medium">{skill.name}</p>
                </li>
            ))}
        </div>
      </div>
    );
  };

export default TechStackSlider;