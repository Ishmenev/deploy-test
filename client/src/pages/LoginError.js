import React from 'react';
import Intro from '../components/Intro/Intro';
import ErrorInfo from '../components/ErrorInfo/ErrorInfo';
import { Container } from 'reactstrap';

const LoginError = () => {

  return (
    <React.Fragment>
      <Intro introType={'local'} label='Ошибка при регистрации'/>
      <Container>
        <ErrorInfo/>
      </Container>
    </React.Fragment>
  )
}

export default LoginError;