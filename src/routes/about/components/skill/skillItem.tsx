import React from 'react';
import { v4 as uuid } from 'uuid';

import {
  makeStyles,
  createStyles,
  withStyles,
  Theme,
} from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

interface SkillData {
  data: { skill: string; value: number }[];
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: '0.25rem 0',
  },
});

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[400],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  })
)(LinearProgress);

const SkillItem: React.FC<SkillData> = (props: SkillData) => {
  const { data } = props;

  const classes = useStyles();

  const allSkill = data.map((item) => {
    const { skill, value } = item;

    return (
      <Grid item key={uuid()} className={classes.root}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item md={6}>
            <Typography variant="body1">{skill}</Typography>
          </Grid>
          <Grid item md={6} sm={8} xs={8}>
            <BorderLinearProgress variant="determinate" value={value} />
          </Grid>
        </Grid>
      </Grid>
    );
  });
  return <>{allSkill}</>;
};

export default SkillItem;
