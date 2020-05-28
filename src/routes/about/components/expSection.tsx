import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ExpItem from './expItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dividerStyle: {
      backgroundColor: theme.palette.secondary.main,
      height: '0.2rem',
      marginBottom: '1rem',
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  })
);

const ResumeExpSection: React.FC = () => {
  const classes = useStyles();

  const courses = (
    <Typography variant="subtitle2">
      Relevant Courses:{' '}
      <Chip
        label="Big Data Mining"
        size="small"
        color="primary"
        className={classes.chip}
      />
      <Chip
        label="Deep Learning"
        size="small"
        color="primary"
        className={classes.chip}
      />
      <Chip
        label="Derivative Securities"
        size="small"
        color="primary"
        className={classes.chip}
      />
      <Chip
        label="Cloud Computing"
        size="small"
        color="primary"
        className={classes.chip}
      />
    </Typography>
  );

  const content1 = {
    title: 'The Hong Kong University of Science and Technology',
    subtitle:
      'Bachelor of Science in Quantitative Finance and Computer Science',
    duration: '2016 - 2020',
  };

  const content2 = {
    title: "Queen's College, Hong Kong",
    subtitle: '',
    duration: '2010 - 2016',
  };

  return (
    <Grid container spacing={4} direction="column">
      <Grid item>
        <Typography variant="h5">Education</Typography>
        <Divider className={classes.dividerStyle} />

        <Grid container spacing={2} direction="column">
          <ExpItem mainContent={content1}>{courses}</ExpItem>
          <ExpItem mainContent={content2} />
        </Grid>
      </Grid>

      <Grid item>
        <Typography variant="h5">Work Experience</Typography>
        <Divider className={classes.dividerStyle} />
      </Grid>

      <Grid item>
        <Typography variant="h5">Leadership Experience</Typography>
        <Divider className={classes.dividerStyle} />
      </Grid>
    </Grid>
  );
};

export default ResumeExpSection;
