import React from 'react';

import { Link } from '@reach/router';

const Navigation: React.FC<{ location: string }> = (props) => {
  const { location } = props;
  let currentRoute = '';
  switch (location) {
    case '/':
      currentRoute = 'Home';
      break;

    default:
      break;
  }

  return (
    <>
      <Link to="/">{currentRoute}</Link>
    </>
  );
};

export default Navigation;
