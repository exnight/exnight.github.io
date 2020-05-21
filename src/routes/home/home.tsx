import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    homePage: {
      minHeight: '50vh',
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

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.homePage}
    >
      <Grid item>
        <Typography variant="h1" style={{ color: '#2196F3' }}>
          Home
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
