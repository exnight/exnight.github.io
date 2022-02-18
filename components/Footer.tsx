import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 py-8 border-t">
      <div className="w-4/5 mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
        <p className="text-center">
          &copy; Leo
          <em> exnight </em>
          Wong | 2016 - 2022
        </p>

        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          Powered by{' '}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>

        <div className="grid grid-cols-2 space-x-4">
          <a
            href="https://github.com/exnight"
            aria-label="GitHub Profile"
            className="w-8 h-8"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/jyleowong/"
            aria-label="LinkedIn Profile"
            className="w-8 h-8"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
