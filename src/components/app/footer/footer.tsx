import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import CopyrightIcon from '@material-ui/icons/Copyright';
import PersonIcon from '@material-ui/icons/Person';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      padding: '2rem',
      position: 'relative',
      textAlign: 'center',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
  })
);

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Typography>
        Copyright
        <CopyrightIcon />
        Leo
        <em> exnight </em>
        Wong | <PersonIcon />
        HKUST | <CalendarTodayIcon />
        2016 - 2020 | <MenuBookIcon />
        Not Powered By WordPressヽ(￣▽￣)ノ
      </Typography>
    </Box>
  );
};

export default Footer;
