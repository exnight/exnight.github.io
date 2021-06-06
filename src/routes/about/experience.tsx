import React from 'react';

const expData = [
  {
    title: 'Quantitative Software Engineer',
    organisation: 'Prive Technologies (HK)',
    duration: 'Aug 2020 - Present',
    detail: [
      'Develop and maintain quantitative products, e.g. portfolio optimization engine, financial instrument pricer',
      'Implement and maintain RESTful APIs of dockerized Spring Boot microservices in Java',
      'Improve test coverage (70+% line coverage with 90%+ logic coverage for new code)',
      'Perform peer code review within the Quant team',
      "Enhance the team's development workflow to be more documentation-heavy",
    ],
  },
  {
    title: 'Quantitative Researcher',
    organisation: 'Hanrong Investment (SZ)',
    duration: 'Jun 2019 - Aug 2019',
    detail: [
      'Prototyped a machine learning-based intra-day alpha model using intra-day price-volume data',
      'Performed technical analysis on commodity futures of the mainland China market',
      'Automated market data collection processes in Python, reduced 3 man-hours of work per day',
    ],
  },
  {
    title: 'Business Analyst',
    organisation: 'Prive Technologies (HK)',
    duration: 'Dec 2017 - Apr 2018',
    detail: [
      'Coordinated and allocated work for all interns',
      'Automated operation processes in Python and JavaScript, reduced 200 man-hours of manual work',
      'Performed fund classification and clustering with machine learning methods',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <div>
      <div className="mt-4 lg:mt-8 text-blue-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        Experience
      </div>
      {expData.map((exp) => (
        <div className="my-4 md:my-6 lg:my-8">
          <div className="flex flex-col">
            <p className="text-sm sm:text-md md:text-xl lg:text-2xl">
              <strong>{exp.title}</strong>
            </p>
            <div className="grid grid-cols-2 text-blue-800 text-xs sm:text-sm md:text-md lg:text-lg">
              <p>{exp.organisation}</p>
              <p className="text-right">{exp.duration}</p>
            </div>
          </div>
          <ul>
            {exp.detail.map((ele) => (
              <li className="mx-4 my-2 text-xs sm:text-sm md:text-md lg:text-lg">
                <strong>-</strong> {ele}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
