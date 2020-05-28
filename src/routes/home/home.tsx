import React from 'react';

import Typed from 'react-typed';

import { createStyles, makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import macbook from '../../assets/images/macbook-dark.jpg';

const useStyles = makeStyles(() =>
  createStyles({
    homePage: {
      minHeight: '90vh',
      backgroundImage: `url(${macbook})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  })
);

const Home: React.FC = () => {
  const classes = useStyles();
  const subtitleContent = [
    'Quantitative Finance',
    'Computer Science',
    'Quant Developer',
  ];
  const typingForwardSpeed = 40;
  const typingBackwardSpeed = 40;

  return (
    <Box className={classes.homePage}>
      <Container>
        <Grid
          container
          spacing={10}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '95vh' }}
        >
          <Grid item>
            <Typography variant="h3" style={{ color: '#fff' }}>
              <Typed
                strings={[`Leo WONG`, `<em>exnight</em>`]}
                typeSpeed={typingForwardSpeed}
                backSpeed={typingBackwardSpeed}
                backDelay={4000}
                loop
              />
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4" style={{ color: '#fff' }}>
              <Typed
                strings={subtitleContent}
                typeSpeed={typingForwardSpeed}
                backSpeed={typingBackwardSpeed}
                backDelay={2000}
                loop
              />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
