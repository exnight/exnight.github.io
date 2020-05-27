import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import AccessibleForwardRoundedIcon from '@material-ui/icons/AccessibleForwardRounded';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    homePage: {
      minHeight: '50vh',
    },
  })
);

const About: React.FC = () => {
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
        <Typography variant="h1">
          <AccessibleForwardRoundedIcon
            color="primary"
            style={{ fontSize: 72 }}
          />
          About
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
