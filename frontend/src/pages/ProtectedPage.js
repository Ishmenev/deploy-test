import React from 'react';
import Intro from '../components/Intro/Intro';
import TechTemplate from '../components/TechTemplate/TechTemplate';
import {Link} from 'react-router-dom';

const ProtectedPage = () => {

  return (
    <React.Fragment>
      <Intro introType={'local'} label='Нет доступа'/>
      <TechTemplate>
        <p>Данная страница доступна только авторизованным пользователям.</p>
        <p>Вы можете авторизоваться <Link to={'/?login=true'}>по ссылке</Link>.</p>
      </TechTemplate>
    </React.Fragment>
  )
}

export default ProtectedPage;