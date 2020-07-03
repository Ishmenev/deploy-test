import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../UI/Title/Title';
import styles from './User.module.scss';
import Button from '../UI/Button/Button';
import { connect } from 'react-redux';

class User extends Component {

  render() {
    const {user} = this.props;
    const data = user.data.userData;
    console.log(user)

    return(
      <div className={styles.user}>
        <Container>
          <Title subclass={styles.user__title}>
            <h2 className={styles.user__name}>Данные пользователя</h2>
          </Title>
          <Row>
            <Col sm={12} md={3}>
              <span className={styles.user__photo}></span>
            </Col>
            <Col sm={12} md={7}>
              <ul className={styles.user__info}>
                <li className={styles.user__firstname}>Имя: <span className={styles.user__text}>{data.firstName}</span></li>
                <li className={styles.user__social}>Социальная сеть: <span className={`${styles.user__logo} ${styles[data.social]}`}></span></li>
              </ul>
              
            </Col>
            <Col sm={12} md={2}>
              <Button domType={'button'} onClick={() => {
                window.localStorage.removeItem('token')
                window.location = window.location.origin
              }}>Выйти</Button>
            </Col>
          </Row>
        </Container>
      </div>
    )  
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(User)
