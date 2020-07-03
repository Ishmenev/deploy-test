import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Title from '../UI/Title/Title';
import styles from './ErrorIndicator.module.scss';

const ErrorIndicator = () => {

  return(
    <div className={styles.indicator}>
      <Container>
        <Row>
          <Col lg={12}>
            <Title subClass={styles.indicator__title}>
              <h3 className={styles.indicator__name}>Ooops... There is something wrong. Please, update this page...</h3>
            </Title>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ErrorIndicator