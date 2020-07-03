import React from 'react';
import Intro from '../components/Intro/Intro';
import PlayContent from '../components/PlayContent/PlayContent';

const Play = () => {

  return (
    <React.Fragment>
      <Intro introType={'local'} label='Игра началась!'/>
      <PlayContent/>
    </React.Fragment>
  )
};

export default Play;