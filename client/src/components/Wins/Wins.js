import React from 'react';
import { Container} from 'reactstrap';
import Title from '../UI/Title/Title';
import styles from './Wins.module.scss';

const Wins = () => {

  return (
    <div className={styles.wins}>
      <Container>
        <Title>
          <h2 className={styles.wins__name}>Cкоро здесь появятся ваши достижения!</h2>
        </Title>
        {/*<p className={styles.wins__description}>Кликните по замочку чтобы узнать как открыть новые достижения!</p>*/}
        {/*<ul className={styles.wins__list}>*/}
        {/*  <li className={styles.wins__option}>*/}
        {/*    <a href='/' className={styles.wins__link}> </a>*/}
        {/*  </li>*/}
        {/*  <li className={styles.wins__option}>*/}
        {/*    <a href='/' className={styles.wins__link}> </a>*/}
        {/*  </li>*/}
        {/*  <li className={styles.wins__option}>*/}
        {/*    <a href='/' className={styles.wins__link}> </a>*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </Container>
    </div>
  )
}

export default Wins;
