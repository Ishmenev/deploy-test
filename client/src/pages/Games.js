import React from 'react';
import Intro from '../components/Intro/Intro';
import Filters from '../components/UI/Filters/Filters';
import { Container } from 'reactstrap';

const Games = () => {

  return (
    <React.Fragment>
      <Intro introType={'local'} label='Играть'/>
      <Container>
        <Filters/>
      </Container>
    </React.Fragment>
  )
}

export default Games;