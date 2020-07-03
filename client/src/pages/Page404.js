import React from 'react';
import Intro from '../components/Intro/Intro';
import TechTemplate from '../components/TechTemplate/TechTemplate';
import {Link} from 'react-router-dom';

const Page404 = () => {
  return (
    <React.Fragment>
      <Intro introType={'local'} label='404'/>
      <TechTemplate>
        <p>Похоже что такой страницы не существует :(</p>
        <p>Вы можете перейти на <Link to={'/'}>главную страницу</Link>.</p>
      </TechTemplate>
    </React.Fragment>
  )
}

export default Page404;