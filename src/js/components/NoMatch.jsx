import React from 'react';
import { Button, Grid, Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import pageNotFound from '../../img/page_not_found.png';

const NoMatch = () => (
  <Grid container relaxed textAlign="center" columns="equal">
    <Grid.Row>
      <Image src={pageNotFound} size="medium" />
    </Grid.Row>
    <Grid.Row>
      <Header as="h1"><em>Page Not Found</em></Header>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={4}>
        <Button as={Link} to="/" positive basic fluid>Back</Button><br />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Header as="h3">Enjoy other content!</Header>
    </Grid.Row>
  </Grid>
);

export default NoMatch;
