import React from 'react';

import Typed from 'react-typed';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    homePage: {
      minHeight: '50vh',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light'
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  })
);

const Home: React.FC = () => {
  const classes = useStyles();
  const subtitleContent = [
    'Quantitative Finance',
    'Computer Science',
    'Quant Developer',
  ];
  const typingForwardSpeed = 40;
  const typingBackwardSpeed = 40;

  return (
    <Grid
      container
      spacing={4}
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.homePage}
    >
      <Grid item>
        <Typography variant="h3" style={{ color: '#2196F3' }}>
          <Typed
            strings={[`Leo WONG`, `<em>exnight</em>`]}
            typeSpeed={typingForwardSpeed}
            backSpeed={typingBackwardSpeed}
            backDelay={4000}
            loop
          />
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h4">
          <Typed
            strings={subtitleContent}
            typeSpeed={typingForwardSpeed}
            backSpeed={typingBackwardSpeed}
            backDelay={2000}
            loop
          />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
