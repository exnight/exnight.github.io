import React from 'react';

import { useLocation } from 'wouter';

const routes = ['About', 'Posts', 'Gallery'];

const Navigation: React.FC = () => {
  const [, setLocation] = useLocation();

  return (
    <div className="bg-white py-2">
      <div className="justify-items-center items-center mx-auto my-4 sm:w-4/5 grid grid-cols-5 md:grid-cols-12">
        <div>
          <button
            type="button"
            className="focus:outline-none focus:border-blue-300"
            onClick={() => setLocation('/')}
          >
            {/* change to a logo */}
            Home
          </button>
        </div>
        <div className="relative group col-start-5 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            className=""
          >
            <g fill="var(--color-default)">
              <path d="M8 14h7a1 1 0 000-2H8a1 1 0 000 2zM1 4h14a1 1 0 000-2H1a1 1 0 000 2zM1 9h14a1 1 0 000-2H1a1 1 0 000 2z" />
            </g>
          </svg>
          <ul className="absolute hidden group-hover:block bg-white rounded shadow-md space-y-1 p-2 -left-12 sm:-left-14 sm:text-lg">
            {routes.map((route) => {
              return (
                <li key={route} className="text-center">
                  <button
                    type="button"
                    onClick={() => setLocation(`/${route.toLowerCase()}`)}
                    className="focus:outline-none focus:border-blue-300"
                  >
                    {route}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="w-full justify-between hidden md:col-span-5 md:col-start-8 md:flex md:px-8 lg:px-12">
          {routes.map((route) => {
            return (
              <li key={route} className="text-center">
                <button
                  type="button"
                  onClick={() => setLocation(`/${route.toLowerCase()}`)}
                  className="focus:outline-none focus:border-blue-300"
                >
                  {route}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
