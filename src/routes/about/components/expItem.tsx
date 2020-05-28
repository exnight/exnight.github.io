import React from 'react';
import { v4 as uuid } from 'uuid';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

interface ExpItem {
  position: string;
  workplace: string;
  duration: string;
  actions: string[];
}

interface ExpData {
  data: ExpItem[];
}

const ResumeExpItem: React.FC<ExpData> = (props: ExpData) => {
  const { data } = props;

  const expList = data.map((exp) => {
    const { position, workplace, duration, actions } = exp;
    return (
      <Grid item key={uuid()}>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="h6">
              <em>{position}</em> {workplace}
            </Typography>
            {actions.map((item) => (
              <Typography variant="body2" key={uuid()}>
                <ArrowForwardIosRoundedIcon fontSize="small" /> {item}
              </Typography>
            ))}
          </Grid>

          <Grid item>
            <Typography variant="body1">{duration}</Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  });
  return <>{expList}</>;
};

export default ResumeExpItem;
