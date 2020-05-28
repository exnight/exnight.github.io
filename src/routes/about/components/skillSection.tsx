import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dividerStyle: {
      backgroundColor: theme.palette.secondary.main,
      height: '0.2rem',
    },
  })
);

const ResumeSkills: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={4} direction="column">
      <Grid item>
        <Typography variant="h5">Skills</Typography>
        <Divider className={classes.dividerStyle} />
      </Grid>
      <Grid item>
        <Typography variant="h5">Languages</Typography>
        <Divider className={classes.dividerStyle} />
      </Grid>
      <Grid item>
        <Typography variant="h5">Sports</Typography>
        <Divider className={classes.dividerStyle} />
      </Grid>
    </Grid>
  );
};

export default ResumeSkills;
