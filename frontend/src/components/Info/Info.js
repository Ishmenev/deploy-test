import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../UI/Title/Title';
import Button from '../UI/Button/Button';
import styles from './Info.module.scss';

const Info = () => {

  return (
    <div className={styles.info}>
      <Container>
        <Row>
          <Col xs={{size: 12, order: 1}} sm={12} md={{size: 6, order: 1}} lg={6}>
            <Title subClass={styles.info__title}>
              <h3 className={styles.info__name}>Проходи сюжет</h3>
            </Title>
            <p className={styles.info__description}>Лабиринтия - интерактивная онлайн-игра с интересным сиюжетом и морем занимательных плюшщек! Проходи сюжет, открывай приключения и покоряй вершины альп! Новые уровни выпускаются только для вас!</p>
            <Button domType={'link'} href={'/games/all/'}>Начать!</Button>
          </Col>
          <Col xs={{size: 12, order: 2}} sm={{size: 12, order: 2}} md={{size: 6, order: 2}} lg={6}>
            <div className={`${styles.info__wrapper} ${styles.info__wrapper_narrative}`}>
              <span className={`${styles.info__image} ${styles.info__image_narrative}`}></span>
            </div>
          </Col>
          <Col xs={{size: 12, order: 4}} sm={{size: 12, order: 4}} md={{size: 6, order: 3}} lg={6}>
            <div className={`${styles.info__wrapper} ${styles.info__wrapper_levels}`}>
              <span className={`${styles.info__image} ${styles.info__image_levels}`}></span>
            </div>
          </Col>
          <Col xs={{size: 12, order: 3}} sm={{size: 12, order: 3}} md={{size: 6, order: 4}} lg={6}>
            <Title subClass={styles.info__title}>
              <h3 className={styles.info__name}>Создавай уровни</h3>
            </Title>
            <p className={styles.info__description}>В нашей игре каждый может создать свой собственный уровень! Нужно лишь зарегистрироваться и открыть редактор, потыкать несколько кнопок и разобраться в управлении. Уровень пройдет модерацию и появится в общем доступе!</p>
            <Button  domType={'link'} href={'/creativity/'}>Создать!</Button>
          </Col>
          <Col xs={{size: 12, order: 5}} sm={{size: 12, order: 5}} md={{size: 6, order: 5}} lg={6}>
            <Title subClass={styles.info__title}>
              <h3 className={styles.info__name}>Зарабатывай очки</h3>
            </Title>
            <p className={styles.info__description}>Лабиринтия - интерактивная онлайн-игра с интересным сиюжетом и морем занимательных плюшщек! Проходи сюжет, открывай приключения и покоряй вершины альп! Новые уровни выпускаются только для вас!</p>
            <Button domType={'link'} href={'/games/all/'}>Играть!</Button>
          </Col>
          <Col xs={{size: 12, order: 6}} sm={{size: 12, order: 6}} md={{size: 6, order: 6}} lg={6}>
          <div className={`${styles.info__wrapper} ${styles.info__wrapper_points}`}>
            <span className={`${styles.info__image} ${styles.info__image_points}`}></span>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Info;