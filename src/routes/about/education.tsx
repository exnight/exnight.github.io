import React from 'react';

const eduData = [
  {
    school: 'The Hong Kong University of Science and Technology',
    duration: '2016 - 2020',
    detail: 'BS in Quantitative Finance and Computer Science',
  },
  {
    school: 'Queen’s College, Hong Kong',
    duration: '2010 - 2016',
  },
];

const Education: React.FC = () => {
  return (
    <div>
      <div className="mt-4 lg:mt-8 text-blue-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        Education
      </div>
      {eduData.map((edu) => (
        <div className="my-4 md:my-6 lg:my-8">
          <div className="flex flex-col text-xs sm:text-sm md:text-md lg:text-lg">
            <div className="grid grid-cols-5">
              <strong className="col-span-4 text-sm sm:text-md md:text-xl lg:text-2xl">
                {edu.school}
              </strong>
              <p className="text-right">{edu.duration}</p>
            </div>
            <p className="text-blue-800">{edu.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
