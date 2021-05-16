import React from 'react';

const Footer: React.FC = () => {
  // TODO: use icons for media links
  return (
    <footer className="bg-gray-800 text-lg text-white mt-8 py-8 inline-block">
      <div className="w-4/5 mx-auto justify-between items-center flex flex-col space-y-4 sm:space-y-0 sm:flex-row">
        <p className="text-center">
          &copy; Leo
          <em> exnight </em>
          Wong | 2016 - 2021
        </p>
        <ul className="text-center flex space-x-8">
          <li>
            <a href="https://github.com/exnight">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jyleowong/">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
