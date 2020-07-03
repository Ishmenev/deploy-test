import React from 'react';
import { Container } from 'reactstrap';
import Title from '../UI/Title/Title';
import styles from './Characters.module.scss';

const Characters = () => {

  return (
    <div className={styles.characters}>
      <Container>
        <Title>
          <h2 className={styles.characters__name}>Персонаж</h2>
        </Title>
        <p className={styles.characters__description}>Вы можете сменить внешний вид вашего персонажа. Сделайте его красивым!</p>
        <ul className={styles.characters__list}>
          <li className={styles.characters__option}>
            <a href='/' className={styles.characters__link}> </a>
          </li>
          <li className={styles.characters__option}>
            <a href='/' className={styles.characters__link}> </a>
          </li>
          <li className={styles.characters__option}>
            <a href='/' className={styles.characters__link}> </a>
          </li>
          <li className={styles.characters__option}>
            <a href='/' className={styles.characters__link}> </a>
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default Characters;
