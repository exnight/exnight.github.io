import React from 'react';

import Typed from 'react-typed';

const Home: React.FC = () => {
  const subtitleContent = [
    'Quantitative Finance',
    'Computer Science',
    'Quant Developer',
  ];
  const typingForwardSpeed = 40;
  const typingBackwardSpeed = 40;

  return (
    <>
      <Typed
        strings={[`Leo WONG`, `<em>exnight</em>`]}
        typeSpeed={typingForwardSpeed}
        backSpeed={typingBackwardSpeed}
        backDelay={4000}
        loop
      />
      <Typed
        strings={subtitleContent}
        typeSpeed={typingForwardSpeed}
        backSpeed={typingBackwardSpeed}
        backDelay={2000}
        loop
      />
    </>
  );
};

export default Home;
