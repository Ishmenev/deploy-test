import React, {Component} from 'react';
import styles from './Auth.module.scss';
import Title from '../../UI/Title/Title';
import {createPortal} from 'react-dom';

class Auth extends Component {  

  render() {

    return createPortal(
      <div className={styles.auth}>
        <div className={styles.auth__wrapper}>
          <button onClick={this.props.onClose} className={styles.auth__close}></button>
          <Title>
            <h2 className={styles.auth__name}>Авторизоваться</h2>
          </Title>
          <p className={styles.auth__announce}>Вы можете авторизоваться через одну из социальных сетей</p>
          <ul className={styles.auth__socials}>
            <li className={`${styles.auth__option} ${styles.auth__option_vc}`}>
              <a className={`${styles.auth__link} ${styles.auth__link_vc}`} href='/auth/vkontakte'>Вконтакте</a>
            </li>
            <li className={`${styles.auth__option} ${styles.auth__option_fb}`}>
              <a className={`${styles.auth__link} ${styles.auth__link_fb}`} href='/auth/facebook'>Facebook</a>
            </li>
            <li className={`${styles.auth__option} ${styles.auth__option_google}`}>
              <a className={`${styles.auth__link} ${styles.auth__link_google}`} href='/auth/google'>Google</a>
            </li>
          </ul>
        </div>        
      </div>,
      document.getElementById('modal')
    )  
  }
}

export default Auth