import React, {Component} from 'react';
import styles from './Filters.module.scss';
import Title from '../Title/Title';
import {NavLink, Redirect, Switch} from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Options from '../../Options/Options';

export default class Filters extends Component {


  render() {

    return (
      <div className={styles.filters}>
        <Title>
          <h2 className={styles.filters__name}>Уровни</h2>
          <h2 className={styles.filters__display}>К сожалению, режим игры доступен только с компьютера</h2>
        </Title>
        <Router>
          <div className={styles.filters__wrapper}>
            <NavLink
              to='/games/all/'
              className={styles.filters__link}
              activeClassName={styles.filters__link_active}
              >
              Все</NavLink>
            <NavLink
              to='/games/creative/'
              className={styles.filters__link}
              activeClassName={styles.filters__link_active}
              >
              Пользовательские</NavLink>
            <NavLink
              to='/games/narrative/'
              className={styles.filters__link}
              activeClassName={styles.filters__link_active}
              >
              Тематические
              </NavLink>
            <Redirect to='/games/all/'></Redirect>    
          </div>
          <Switch>
            <Route path='/games/:filter?' children={({match}) => {
              return <Options filter={match.params}/>
            }}/>
          </Switch>
        </Router>
      </div>
    )

  }

}