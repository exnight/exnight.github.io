import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const StyledRating = withStyles(({ palette }) => ({
  iconFilled: {
    color: palette.primary.light,
  },
}))(Rating);

const LangList: React.FC = () => {
  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography variant="h6">English (fluent)</Typography>
        <StyledRating
          value={4.5}
          readOnly
          size="large"
          precision={0.5}
          icon={<ThumbUpIcon />}
        />
      </Grid>

      <Grid item>
        <Typography variant="h6">Catonese (native)</Typography>
        <StyledRating value={5} readOnly size="large" icon={<ThumbUpIcon />} />
      </Grid>
      <Grid item>
        <Typography variant="h6">Mandarin (native)</Typography>
        <StyledRating value={5} readOnly size="large" icon={<ThumbUpIcon />} />
      </Grid>

      <Grid item>
        <Typography variant="h6">Japanese (learning)</Typography>
        <StyledRating
          value={2.5}
          readOnly
          size="large"
          precision={0.5}
          icon={<ThumbUpIcon />}
        />
      </Grid>
    </Grid>
  );
};

export default LangList;
