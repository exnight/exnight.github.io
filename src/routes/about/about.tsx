import React from 'react';

import Education from './education';
import Experience from './experience';

const About: React.FC = () => {
  return (
    <div className="flex-grow w-4/5 mx-auto divide-y">
      <div className="mt-8 alegreya-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        About Me
      </div>
      <div className="flex flex-col space-y-4 divide-y divide-green-500">
        <Experience />
        <Education />
      </div>
    </div>
  );
};

export default About;
