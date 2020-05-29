import React from 'react';
import { v4 as uuid } from 'uuid';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chip: {
      margin: theme.spacing(0.5),
    },
  })
);

interface EduItem {
  title: string;
  subtitle: string;
  duration: string;
  courses?: string[];
}

const EduItem: React.FC<EduItem> = (props: EduItem) => {
  const { title, subtitle, duration, courses } = props;
  const classes = useStyles();

  return (
    <Grid item>
      <Grid container justify="space-between">
        <Grid item sm={10} xs={8}>
          <Typography variant="h6">{title}</Typography>
          {subtitle !== '' ? (
            <Typography variant="subtitle1">{subtitle}</Typography>
          ) : null}

          {courses ? (
            <Typography variant="subtitle2">
              Relevant Courses:
              {courses.map((item) => (
                <Chip
                  key={uuid()}
                  label={item}
                  size="small"
                  color="primary"
                  className={classes.chip}
                />
              ))}
            </Typography>
          ) : null}
        </Grid>

        <Grid item>
          <Typography variant="body1">{duration}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EduItem;
