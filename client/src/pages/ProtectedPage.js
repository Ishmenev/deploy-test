import React from 'react';
import Intro from '../components/Intro/Intro';
import { Link } from 'react-router-dom';
import TechTemplate from '../components/TechTemplate/TechTemplate';

const ProtectedPage = () => {

  return (
    <React.Fragment>
      <Intro introType={'local'} label='Нет доступа'/>
      <TechTemplate>
        <p>Данная страница доступна только авторизованным пользователям.</p>
        <p>Пожалуйста, &nbsp;
          <Link 
            to='/account?login=true'>
            авторизуйтесь и зайдите в ваш кабинет.
          </Link>
        </p>
      </TechTemplate>
    </React.Fragment>
  )
}

export default ProtectedPage;