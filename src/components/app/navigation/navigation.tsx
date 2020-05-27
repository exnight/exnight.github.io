import React from 'react';

import { Link } from '@reach/router';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Navigation: React.FC<{ location: string }> = (props) => {
  const classes = useStyles();

  const { location } = props;
  let currentRoute = '';
  switch (location) {
    case '/':
      currentRoute = 'Home';
      break;

    case '/about':
      currentRoute = 'Resume';
      break;

    default:
      break;
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/">
              <MenuIcon />
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {currentRoute}
          </Typography>

          <Link to="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="about">
            <Button color="inherit">About</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
