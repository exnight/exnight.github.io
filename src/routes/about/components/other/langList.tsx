import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconFilled: {
      color: theme.palette.primary.light,
    },
  })
);

const LangList: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography variant="h6">English (fluent)</Typography>
        <Rating
          value={4.5}
          readOnly
          size="large"
          precision={0.5}
          icon={<ThumbUpIcon />}
          className={classes.iconFilled}
        />
      </Grid>

      <Grid item>
        <Typography variant="h6">Catonese (native)</Typography>
        <Rating
          value={5}
          readOnly
          size="large"
          icon={<ThumbUpIcon />}
          className={classes.iconFilled}
        />
      </Grid>
      <Grid item>
        <Typography variant="h6">Mandarin (native)</Typography>
        <Rating
          value={5}
          readOnly
          size="large"
          icon={<ThumbUpIcon />}
          className={classes.iconFilled}
        />
      </Grid>

      <Grid item>
        <Typography variant="h6">Japanese (learning)</Typography>
        <Rating
          value={2.5}
          readOnly
          size="large"
          precision={0.5}
          icon={<ThumbUpIcon />}
          className={classes.iconFilled}
        />
      </Grid>
    </Grid>
  );
};

export default LangList;
