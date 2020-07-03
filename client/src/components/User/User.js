import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../UI/Title/Title';
import {connect} from 'react-redux'
import styles from './User.module.scss';

class User extends Component {

  render() {

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
                <li className={styles.user__firstname}>Имя: <span className={styles.user__text}>{this.props.socialName}</span></li>
                <li className={styles.user__social}>Социальная сеть: <span className={`${styles.user__logo}  ${styles[this.props.social]}`}></span></li>
                <li className={styles.user__creative}>Уровней создано: <span className={`${styles.user__text}`}>{this.props.createdLevels}</span></li>
              </ul>
              
            </Col>
            <Col sm={12} md={2}>
              <a className={styles.user__logout} href='/api/logout'>Выйти</a>
            </Col>
          </Row>
        </Container>
      </div>
    )  
  }
}

function mapStateToProps({auth: {createdLevels, social, socialName}}) {
  return {createdLevels, social, socialName}
}

export default connect(mapStateToProps)(User)
