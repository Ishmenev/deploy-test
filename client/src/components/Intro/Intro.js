import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Title from '../UI/Title/Title';
import styles from './Intro.module.scss';
import { Link } from 'react-router-dom';

export default class Intro extends Component {


  render() {
    let content = null;
    const {introType, label} = this.props;

    if (introType === 'main') {
    content =       
      <div className={styles.intro}>
        <Title subClass={styles.intro__title}>
          <h1 className={`${styles.intro__name} ${styles.intro__name_main}`}>{label}</h1>
        </Title>
        <div className={styles.intro__options}>
          <div className={styles.intro__choice}>
            <p className={styles.intro__text}>Проходи уровни, развивай логику и получай призы</p>
            <div className={styles.intro__redirect}>
              <Link className={`${styles.intro__link} ${styles.intro__link_play}`} to='/play/1592234302912'>Играть</Link>
            </div>
          </div>
          <div className={styles.intro__choice}>
            <p className={styles.intro__text}>Почувствуй себя разработчиком игр. Создавай собственные уровни.</p>
            <div className={styles.intro__redirect}>
              <Link className={`${styles.intro__link} ${styles.intro__link_create}`} to='/creativity'>Создать</Link>
            </div>
          </div>
        </div>
        <div className={styles.intro__compass}></div>
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