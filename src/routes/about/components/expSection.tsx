import React, { useEffect, useState } from 'react';

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

interface EduItemMainContent {
  title: string;
  subtitle: string;
  duration: string;
  courses?: string[];
}
interface EduData {
  fetched: boolean;
  university: EduItemMainContent;
  highSchool: EduItemMainContent;
}

const initEduData = {
  fetched: false,
  university: { title: '', subtitle: '', duration: '' },
  highSchool: { title: '', subtitle: '', duration: '' },
};

const ResumeExpSection: React.FC = () => {
  const [eduData, setEduData] = useState<EduData>(initEduData);

  useEffect(() => {
    fetch('data/experience.json')
      .then((res) => res.json())
      .then((data) => {
        setEduData({ ...data, fetched: true });
      });
  }, []);

  const classes = useStyles();

  return (
    <Grid container spacing={4} direction="column">
      <Grid item>
        <Typography variant="h5">Education</Typography>
        <Divider className={classes.dividerStyle} />

        {eduData.fetched ? (
          <Grid container spacing={2} direction="column">
            <ExpItem mainContent={eduData.university}>
              <Typography variant="subtitle2">
                Relevant Courses:
                {eduData.university.courses?.map((item, idx) => (
                  <Chip
                    key={idx}
                    label={item}
                    size="small"
                    color="primary"
                    className={classes.chip}
                  />
                ))}
              </Typography>
            </ExpItem>
            <ExpItem mainContent={eduData.highSchool} />
          </Grid>
        ) : null}
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
