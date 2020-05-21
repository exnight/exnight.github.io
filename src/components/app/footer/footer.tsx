import React from 'react';

import { Typography } from '@material-ui/core';

import CopyrightIcon from '@material-ui/icons/Copyright';
import PersonIcon from '@material-ui/icons/Person';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const Footer: React.FC = () => {
  return (
    <footer>
      <Typography align="center">
        Copyright
        <CopyrightIcon fontSize="large" />
        Leo
        <em> exnight </em>
        Wong | <PersonIcon fontSize="large" />
        HKUST | <CalendarTodayIcon fontSize="large" />
        2016 - 2020 | <MenuBookIcon fontSize="large" />
        Not Powered By WordPressヽ(￣▽￣)ノ
      </Typography>
    </footer>
  );
};

export default Footer;
