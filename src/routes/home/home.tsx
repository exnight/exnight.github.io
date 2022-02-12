import React from 'react';

import iconImageSmall from '../../assets/img/Fushimi_railway-240.jpg';
import iconImageMedium from '../../assets/img/Fushimi_railway-480.jpg';
import iconImageLarge from '../../assets/img/Fushimi_railway-720.jpg';

const Home: React.FC = () => {
  return (
    <div className="flex-grow">
      {/* <div className="h-60 sm:h-96 md:h-coverMd lg:h-coverLg bg-center bg-cover flex justify-center items-center bg-home-cover-360 md:bg-home-cover-720 xl:bg-home-cover-1080">
        <div className="text-4xl sm:text-6xl md:text-8xl text-white anurati-font tracking-widest">
          EXPLORE
        </div>
      </div> */}
      <div className="w-4/5 lg:w-5/6 mx-auto mt-8">
        <div className="flex flex-col items-center space-y-8 md:space-y-16 md:grid grid-cols-2 lg:w-5/6 mx-auto">
          <div className="space-y-2 md:space-y-6">
            <p className="text-6xl lg:text-7xl xl:text-8xl alegreya-font">
              Hi, I'm Leo
            </p>
            <p className="text-sm md:text-lg ml-1">
              a Software Engineer, Basketball Enthusiast, CSGO Tactician
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-8">
            <img
              src={iconImageLarge}
              srcSet={`${iconImageSmall} 240w, ${iconImageMedium} 480w`}
              alt=""
              width="240"
              height="240"
              className="rounded-full shadow-lg"
            />
            <div className="text-lg md:text-xl lg:text-2xl">
              <em>Stepping out of comfort zone</em>
            </div>
          </div>
        </div>

        <p className="mt-24 text-justify lg:text-lg">
          You are now browsing the 2.0-alpha version, content will be added very
          soon. Feel free to provide feedback by creating new{' '}
          <a href="https://github.com/exnight/exnight.github.io/issues">
            <u>issues</u>
          </a>{' '}
          on the GitHub repository.
        </p>
      </div>
    </div>
  );
};

export default Home;
