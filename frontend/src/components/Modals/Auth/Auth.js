import React, {Component} from 'react';
import styles from './Auth.module.scss';
import Title from '../../UI/Title/Title';
import {createPortal} from 'react-dom';
import { connect } from 'react-redux';
import {loginUser} from '../../../actions/user';

class Auth extends Component {
  componentDidMount() {
    const ID = '228152851196-g7nir1ev5lfqs59ed5c0haerb0mdnp30.apps.googleusercontent.com'
    const _onInit = auth2 => {
      console.log('init OK', auth2)
    }
    const _onError = err => {
      console.log('error', err)
    }
    window.gapi.load('auth2', function() {
      window.gapi.auth2
          .init({
            client_id:
            ID,
          })
          .then(_onInit, _onError)
    })
  }
  
  
  getDataFromVK = () => {
    const VK = window.VK;
    VK.Auth.login((res) => {

      if (res.status === 'conected') {
        const user = res.session.user;

        const data = {
          type: 'vk',
          user
        }

        this.props.loginUser(data);
        this.props.onRedirect();
        
      } else {
        this.props.onError()
        this.props.onClose();
      }
    })
  }
  
  getDataFromGoogle = () => {    
    
    const auth2 = window.gapi.auth2.getAuthInstance()
    auth2.signIn().then(googleUser => {
      
      // метод возвращает объект пользователя
      // где есть все необходимые нам поля
      const profile = googleUser.getBasicProfile()
      const data = {
        type: 'google',
        user: {
          userId: profile.getId(),
          firstName: profile.getGivenName(),
          secondName: profile.getFamilyName()
        }
      };
      
      this.props.loginUser(data);
      console.log('ID: ' + profile.getId()) // не посылайте подобную информацию напрямую, на ваш сервер!

    })
  };

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
              <a className={`${styles.auth__link} ${styles.auth__link_vc}`} id={'login'} onClick={this.getDataFromVK} href='#'>Вконтакте</a>
            </li>
            <li className={`${styles.auth__option} ${styles.auth__option_ok}`}>
              <a className={`${styles.auth__link} ${styles.auth__link_ok}`} onClick={this.getDataFromGoogle}>Google</a>
            </li>
            <li className={`${styles.auth__option} ${styles.auth__option_fb}`}>
              <a className={`${styles.auth__link} ${styles.auth__link_fb}`} href='#'>Facebook</a>
            </li>
          </ul>
        </div>        
      </div>,
      document.getElementById('modal')
    )  
  }
}

const mapStateToProps = state => {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps, {loginUser})(Auth)