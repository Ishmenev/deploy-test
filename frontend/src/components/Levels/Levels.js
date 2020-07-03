import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../UI/Title/Title';
import Button from '../UI/Button/Button';
import Level from '../Level/Level';
import styles from './Levels.module.scss';

const Levels = () => {

  return (
    <div className={styles.levels}>
      <Container>
        <Title subClass={styles.info__title}>
          <h2 className={styles.levels__name}>Поехали!</h2>
        </Title>
        <ul className={styles.levels__list}>
          <Row>
            <Col md={6} lg={4}>
              <Level />
            </Col>
            <Col md={6} lg={4}>
              <Level />
            </Col>
            <Col md={6} lg={4} className={styles.levels__display}>
              <Level />
            </Col>
          </Row>
        </ul>
        <p className={styles.levels__options}>Самые популярные уровни, больше уровней вы можете найти, кликнув по кнопке ниже</p>
        <Button domType={'link'} href={'/games/all/'}>Все уровни</Button>
      </Container>
    </div>
  );
}

export default Levels;