import React, { useEffect, useState } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import EduItem from './eduItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dividerStyle: {
      backgroundColor: theme.palette.secondary.main,
      height: '0.2rem',
      marginBottom: '1rem',
    },
  })
);

interface EduItemContent {
  title: string;
  subtitle: string;
  duration: string;
  courses?: string[];
}
interface EduData {
  fetched: boolean;
  university: EduItemContent;
  highSchool: EduItemContent;
}

const initEduData: EduData = {
  fetched: false,
  university: { title: '', subtitle: '', duration: '' },
  highSchool: { title: '', subtitle: '', duration: '' },
};

const ResumeExpSection: React.FC = () => {
  const [eduData, setEduData] = useState<EduData>(initEduData);
  const classes = useStyles();

  useEffect(() => {
    fetch('data/experience.json')
      .then((res) => res.json())
      .then((data) => {
        setEduData({
          university: data.university,
          highSchool: data.highSchool,
          fetched: true,
        });
      });
  }, []);

  return (
    <Grid container spacing={4} direction="column">
      <Grid item>
        <Typography variant="h5">Education</Typography>
        <Divider className={classes.dividerStyle} />

        {eduData.fetched ? (
          <Grid container spacing={2} direction="column">
            <EduItem
              title={eduData.university.title}
              subtitle={eduData.university.subtitle}
              duration={eduData.university.duration}
              courses={eduData.university.courses}
            />
            <EduItem
              title={eduData.highSchool.title}
              subtitle={eduData.highSchool.subtitle}
              duration={eduData.highSchool.duration}
            />
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
