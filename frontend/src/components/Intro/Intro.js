import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../UI/Title/Title';
import styles from './Intro.module.scss';
import { Link } from 'react-router-dom';

export default class Intro extends Component {
  constructor(props){
    super(props);
  }


  render() {
    let content = null;
    const {introType, label} = this.props;

    if (introType === 'main') {
    content =       
      <div className={styles.intro}>
        <Container>
          <Title subClass={styles.intro__title}>
            <h1 className={`${styles.intro__name} ${styles.intro__name_main}`}>{label}</h1>
          </Title>
          <div className={styles.intro__options}>
            <Row>
              <Col xs={6}>
                <div className={styles.intro__choice}>
                  <p className={styles.intro__text}>Проходи уровни, получай призы и прочий lorem</p>
                  <Link className={`${styles.intro__link} ${styles.intro__link_play}`} to='/play/1588885098666'>Играть</Link>
                </div>
              </Col>
              <Col xs={6}>
                <div className={styles.intro__choice}>
                  <p className={styles.intro__text}>Создай свой собственный уровень и нагни их всех!</p>
                  <Link className={`${styles.intro__link} ${styles.intro__link_create}`} to='/creativity/'>Создать</Link>
                </div>
              </Col>
            </Row>
          </div>
          <div className={styles.intro__compass}></div>
        </Container>
      </div>
    }

    else if (introType === 'local') {
      content = 
        <div className={styles.intro}>
          <Container>
            <Title subClass={styles.intro__title}>
              <h1 className={styles.intro__name}>{label}</h1>
            </Title>
          </Container>
        </div>
    }
    
    return (
      content
    );
  }
}