import React from 'react';

import Typed from 'react-typed';

const Home: React.FC = () => {
  const subtitleContent = [
    'Software Engineer',
    'Basketball Lover',
    'CSGO Tactician',
  ];
  const typingForwardSpeed = 40;
  const typingBackwardSpeed = 40;

  return (
    <div className="h-full w-4/5 flex flex-col space-y-16 container">
      <div className="grid grid-cols-2 pt-16 px-8">
        <div>
          <h1 className="text-4xl pb-8">Hi,</h1>
          <div className="grid grid-cols-4 gap-4 items-center pb-8">
            <div className="text-lg">I'm Leo, a</div>
            <div className="col-span-3">
              {/* use another font */}
              <Typed
                strings={subtitleContent}
                typeSpeed={typingForwardSpeed}
                backSpeed={typingBackwardSpeed}
                backDelay={3000}
                loop
                className="text-center text-4xl text-blue-600"
              />
            </div>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            delectus fugiat libero debitis aperiam unde ipsum non veniam culpa,
            eveniet, mollitia illum, cupiditate at ad magnam necessitatibus
            officiis magni fugit?
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-8">
          <img
            src="https://picsum.photos/200/200"
            alt=""
            className="h-48 rounded-full"
          />
          <div className="text-4xl anurati-font tracking-widest">EXPLORE</div>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsam a
        quaerat saepe voluptatum aut reprehenderit modi illum deleniti tenetur?
        Quas in perspiciatis quos deleniti quaerat id officiis. Explicabo,
        atque?
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsam a
        quaerat saepe voluptatum aut reprehenderit modi illum deleniti tenetur?
        Quas in perspiciatis quos deleniti quaerat id officiis. Explicabo,
        atque?
      </div>
    </div>
  );
};

export default Home;
