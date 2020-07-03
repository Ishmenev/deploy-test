import React, { Component } from 'react';
import { Link, NavLink, Redirect, Route} from 'react-router-dom';
import { 
  Navbar, 
  Container, 
  Collapse,
  Nav
} from 'reactstrap';
import {connect} from 'react-redux'
import {checkAuth} from '../../actions/user'
import Auth from '../Modals/Auth/Auth';
import Logout from '../Modals/Logout/Logout';
import styles from './Header.module.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  componentDidMount() {
    checkAuth()
  }

  renderContent() {
    const params = new URLSearchParams(this.props.location.search)

    switch(this.props.isAuth) {
      case null:
        return (
          <div>
            <Link 
            to={{pathname: this.props.location.pathname, search: '?login=true'}} 
            className={`${styles.navbar__private} ${styles.navbar__private_display}`}>
            Личный кабинет
            </Link>
            <div>
              {params.get('login') 
              && <Auth onClose={this.modalClose}/>}
            </div>
          </div>
        )
      case false:
        return (
          <div>
            <Link 
            to={{pathname: this.props.location.pathname, search: '?login=true'}} 
            className={`${styles.navbar__private} ${styles.navbar__private_display}`}>
            Личный кабинет
            </Link>
            <div>
              <Redirect to={'/error/'}/>
              {params.get('login') 
              && <Auth onClose={this.modalClose}/>}
            </div>
          </div>
        )
      default:
        return (
          <div>
            <Link to={{pathname: this.props.location.pathname, search: '?logout=true'}}
              className={`${styles.navbar__private} ${styles.navbar__private_display}`}>
              Выйти из кабинета
            </Link>
            <div>
              <Redirect to={{pathname: this.props.location.pathname}}/>
              {params.get('logout')
                && <Logout 
                onClose={this.modalClose}/>}
            </div>        
          </div>
        )
    }
  }  

  toggle = () => {
    this.setState((state) => {
      return {
        isOpen: !state.isOpen
      }
    })
  }

  modalClose = () => {
      this.props.history.push(this.props.location.pathname)
  } 

        
  render() {
    let toggleClass = `${styles.navbar_toggler}`;
    const { isOpen } = this.state;
    if (isOpen) {
      toggleClass += ` ${styles.active}`
    }

    return (
      <div>
        <Navbar className={styles.navbar} expand='lg' >
          <Container>
            <Link className={styles.navbar__brand} to='/'><span className={styles.navbar__logo}>labirinthia.ru</span></Link>
            <button type="button" className={toggleClass} aria-label="Toggle navigation" onClick={this.toggle}>
              <span className={styles.navbar_toggler_bar}></span>
            </button>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className={styles.navbar_nav} navbar>
                  <li>
                    <NavLink className={styles.navbar__option} 
                      activeClassName={styles.navbar__option_active} 
                      to='/games/all/'>
                        Все уровни
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={styles.navbar__option} 
                      activeClassName={styles.navbar__option_active} 
                      to='/creativity/'>
                        Создать уровень
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={styles.navbar__option} 
                      activeClassName={styles.navbar__option_active} 
                      to='/account/'>
                        Кабинет
                    </NavLink>
                  </li>
                </Nav>
                <div className={styles.navbar__login}>
                  {this.renderContent()}
                </div>
              </Collapse>
          </Container>
        </Navbar>
      </div>
    )  
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.user.isAuth
  }
}

export default connect(mapStateToProps, {checkAuth})(Header)

