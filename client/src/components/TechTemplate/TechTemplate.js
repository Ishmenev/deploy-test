import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../UI/Title/Title';
import styles from './TechTemplate.module.scss';

const TechTemplate = ({children}) => {

  return (
    <div className={styles.tech}>
      <Container>
        <Row>
          <Col lg={12}>
            <Title subClass={styles.tech__title}>
              {children}
            </Title>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TechTemplate;
