import React, { Component } from 'react';
import Title from '../UI/Title/Title';
import Game from '../Game/Game';
import {Container, Row, Col} from 'reactstrap';
import styles from './PlayContent.module.scss';
import {connect} from "react-redux";


class PlayContent extends Component {

  render() {

    return (
      <div>
        <Title>
          <h2 className={styles.content__display}>К сожалению, режим игры доступен только с компьютера</h2>
        </Title>
        <div className={styles.block}>
          <Container>
            <Row>
              <Col md={12}>
                <Title>
                  <h2 className={styles.title}>{this.props.title}</h2>
                </Title>
              </Col>
            </Row>
            <Row>
              <Col md={7}>
                <p className={styles.description}>
                  {this.props.description}
                </p>
              </Col>
              <Col md={1}>
              </Col>
              <Col md={4}>
                <p className={styles.info}>
                  Управление: <b>W, A, S, D</b>
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Game/>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({game: {description, title}}) => {
    return {description, title}
};



export default connect(mapStateToProps)(PlayContent)