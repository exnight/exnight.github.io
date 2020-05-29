import React from 'react';

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

// const skillProficient = [];
// const skillFamiliar = [];

const SkillList: React.FC = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h6">s1</Typography>
        <LinearProgress variant="determinate" value={75} />
      </Grid>
      <Grid item>
        <Typography variant="h6">s2</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">s3</Typography>
      </Grid>
    </Grid>
  );
};

export default SkillList;
