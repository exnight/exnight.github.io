import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

interface ExpItemProps {
  mainContent: {
    title: string;
    subtitle: string;
    duration: string;
  };
  children?: React.ReactElement;
}

const ResumeExpItem: React.FC<ExpItemProps> = (props) => {
  const { mainContent, children } = props;
  const { title, subtitle, duration } = mainContent;

  return (
    <Grid item>
      <Grid container justify="space-between">
        <Grid item>
          <Typography variant="h6">{title}</Typography>
          {subtitle !== '' ? (
            <Typography variant="subtitle1">{subtitle}</Typography>
          ) : null}

          {children}
        </Grid>

        <Grid item>
          <Typography variant="h6">{duration}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ResumeExpItem;
