import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import HeaderSection from './components/headerSection';
import SideSection from './components/sideSection';
import ExpSection from './components/expSection';

const useStyles = makeStyles(() =>
  createStyles({
    resumePage: {
      minHeight: '50vh',
      paddingBottom: '4rem',
      backgroundColor: blueGrey[50],
    },
  })
);

const Resume: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.resumePage}>
      <Container>
        <Grid container spacing={0} direction="column" alignItems="center">
          <HeaderSection />

          <Divider style={{ marginBottom: '2rem' }} />

          <Grid container spacing={8}>
            <Grid item md={3} sm={12}>
              <SideSection />
            </Grid>

            <Grid item md={9} sm={12}>
              <ExpSection />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Resume;
