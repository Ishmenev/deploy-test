import React from 'react';
import styles from './Filters.module.scss';
import Title from '../Title/Title';
import {NavLink, Redirect, Switch} from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Options from '../../Options/Options';
import store from '../../../store';

const Filters = () => {

  return (
      <div className={styles.filters}>
        <Title>
          <h2 className={styles.filters__name}>Выбирай любой!</h2>
          <h2 className={styles.filters__display}>К сожалению, этот раздел доступен только с компьютера</h2>
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
              Сюжетные</NavLink>
            <Redirect to='/games/all/'></Redirect>
          </div>
          <Switch>
              {console.dir(store.getState())}
            <Route path='/games/:filter?' children={({match}) => {
              return <Options levels={store.getState().games.data.levels} filter={match.params}/>
            }}/>
          </Switch>
        </Router>
      </div>
  )
}

export default Filters;