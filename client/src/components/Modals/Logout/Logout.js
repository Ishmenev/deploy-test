import React from 'react';
import styles from './Logout.module.scss';
import Title from '../../UI/Title/Title';
import {createPortal} from 'react-dom';

const Logout = (props) => {

  return createPortal(
    <div className={styles.logout}>
      <div className={styles.logout__wrapper}>
        <button onClick={props.onClose} className={styles.logout__close}></button>
        <Title>
          <h2 className={styles.logout__name}>Внимание!</h2>
          <p className={styles.logout__announce}>Вы уверены, что хотите выйти из своей учетной записи?</p>
        </Title>
        <div>
          {/* <Redirect from='/api/logout' to='/account'
          // {{pathname: this.props.location.pathname}}
          />  */}
          <a className={styles.logout__link} href='/api/logout'>Выйти</a>
        </div>
      </div>        
    </div>,
    document.getElementById('modal')
  )  
}

export default Logout;

