import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../UI/Title/Title';
import styles from './ErrorInfo.module.scss';

const ErrorInfo = () => {

  return (
    <div className={styles.error}>
      <Container>
        <Row>
          <Col lg={12}>
            <Title subClass={styles.error__title}>
              <h3 className={styles.error__name}>Попробуйте ввести данные снова или выбрать другую социальную сеть... Мы в вас верим!</h3>
            </Title>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ErrorInfo;
