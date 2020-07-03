import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../UI/Title/Title';
import { Link } from 'react-router-dom';
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
            <p className={styles.info__description}>Лабиринтия - интерактивная онлайн-игра с интересным сюжетом и морем логических задач. Новые уровни выпускаются постоянно разработчиками сайта и самими пользователями.</p>
            <Link className={styles.info__link} to='/games/narrative/'>Выбрать</Link>
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
            <p className={styles.info__description}>В нашей игре каждый может создать собственный уровень! Нужно лишь зарегистрироваться и открыть редактор. После сохранения уровень пройдет модерацию и появится в общем доступе. Будьте уверены, проектирование новых уровней - занятие не менее интересное, чем их прохождение.</p>
            <Link className={styles.info__link} to='/creativity/'>Выбрать</Link>
          </Col>
          <Col xs={{size: 12, order: 5}} sm={{size: 12, order: 5}} md={{size: 6, order: 5}} lg={6}>
            <Title subClass={styles.info__title}>
              <h3 className={styles.info__name}>Зарабатывай очки</h3>
            </Title>
            <p className={styles.info__description}>Сразу после регистрации Вам будет доступна таблица личных достижений и созданных уровней. Мы ведем статистику самых популярных уровней. Информация о наиболее посещаемых и популярных из них отражена в таблице достижений.</p>
            <Link className={styles.info__link} to='/account/'>Выбрать</Link>
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