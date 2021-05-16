import React from 'react';

import coverImage from '../../assets/sharp_island.png';
import iconImage from '../../assets/Fushimi_railway.jpg';

const Home: React.FC = () => {
  return (
    <div className="flex-grow">
      <div
        className="h-60 sm:h-96 md:h-coverMd lg:h-coverLg bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${coverImage})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="text-4xl sm:text-6xl md:text-8xl text-white anurati-font tracking-widest">
          EXPLORE
        </div>
      </div>
      <div className="w-4/5 mx-auto mt-8">
        <div className="flex flex-col items-center space-y-8 md:space-y-16 md:grid grid-cols-2 lg:w-5/6 mx-auto">
          <div className="space-y-2 md:space-y-6">
            <p className="text-4xl md:text-6xl">Hi, I'm Leo</p>
            <p className="text-sm md:text-lg ml-1">
              a Software Engineer, Basketball Enthusiast, CSGO Tactician
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-8">
            <img
              src={iconImage}
              alt=""
              className="h-60 rounded-full shadow-lg"
            />
            <div className="text-lg md:text-xl lg:text-2xl">
              Stepping out of comfort zone
            </div>
          </div>
        </div>

        <p className="mt-24">
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
