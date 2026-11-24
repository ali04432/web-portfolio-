import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <span
          key={technology.name}
          className='rounded-full border border-[#915EFF]/40 bg-tertiary px-5 py-3 text-[15px] font-medium text-white'
        >
          {technology.name}
        </span>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
