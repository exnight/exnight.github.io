import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import SkillList from './skill/skillList';

const useStyles = makeStyles(() =>
  createStyles({
    dividerStyle: {
      backgroundColor: lightBlue[200],
      height: '0.2rem',
    },
  })
);

const SideSection: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={4} direction="column">
      <Grid item>
        <Typography variant="h5">Skills</Typography>
        <Divider className={classes.dividerStyle} />

        <SkillList />
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

export default SideSection;
