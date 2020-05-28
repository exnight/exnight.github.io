import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import HeaderSection from './components/headerSection';
import SkillSection from './components/skillSection';
import ExpSection from './components/expSection';

const useStyles = makeStyles(() =>
  createStyles({
    resumePage: {
      minHeight: '50vh',
    },
  })
);

const Resume: React.FC = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        className={classes.resumePage}
      >
        <HeaderSection />

        <Divider style={{ marginBottom: '2rem' }} />

        <Grid container spacing={8}>
          <Grid item md={3}>
            <SkillSection />
          </Grid>
          <Grid item md={9}>
            <ExpSection />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Resume;
