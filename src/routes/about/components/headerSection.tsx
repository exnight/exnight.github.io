import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(() =>
  createStyles({
    resumeHeader: {
      minWidth: '100%',
      margin: '40px auto',
    },
  })
);

const ResumeHeaderSection: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid item className={classes.resumeHeader}>
      <Grid container justify="space-between">
        <Grid item md={6} sm={12}>
          <Typography variant="h3" color="primary">
            WONG Jia Yeung Leo
          </Typography>

          <Typography variant="subtitle1">
            Quantitative Finance and Computer Science
          </Typography>

          <Typography variant="subtitle2">HKUST 2020 June</Typography>
        </Grid>

        <Grid item md={6} sm={12}>
          <Typography variant="body1" align="right">
            <a href="mailto://leowongjiayeung@gmail.com">
              leowongjiayeung@gmail.com
            </a>{' '}
            <EmailIcon />
          </Typography>

          <Typography variant="body1" align="right">
            <a href="https://www.linkedin.com/in/jyleowong/">
              https://www.linkedin.com/in/jyleowong/
            </a>{' '}
            <LinkedInIcon />
          </Typography>

          <Typography variant="body1" align="right">
            <a href="https://github.com/exnight">https://github.com/exnight</a>{' '}
            <GitHubIcon />
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ResumeHeaderSection;
