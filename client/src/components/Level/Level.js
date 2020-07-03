import React from 'react';
import styles from './Level.module.scss';
import Button from '../UI/Button/Button';

const Level = ({number, image, title, description}) => {

  return (
    <li className={styles.item}>
      <div className={styles.item__image}>
        <img src={image} className={styles.image} alt='pic.Level'></img>
      </div>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{title}</h3>
        {/*<span className={styles.number}>Уровень: {number}</span>*/}
        <p className={styles.description}>{description}</p>
        <Button domType={'a'} href={'/play/' + number}>Начать</Button>
      </div>
    </li>
  )

}

export default Level;
