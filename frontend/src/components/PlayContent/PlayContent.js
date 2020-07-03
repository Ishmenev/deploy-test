import React, { Component } from 'react';
import Title from '../UI/Title/Title';
import Game from '../Game/Game';
import {Container, Row, Col} from 'reactstrap';
import styles from './PlayContent.module.scss';
import {connect} from "react-redux";


class PlayContent extends Component {
    constructor(props){
        super(props);
    }


    render() {

        return (
            <div className={styles.block}>
                <Container>
                   <Row>
                       <Col md={12}>
                           <Title>
                               <h2 className={styles.title}>{this.props.game.title}</h2>
                           </Title>
                       </Col>
                   </Row>
                    <Row>
                        <Col md={7}>
                            <p className={styles.description}>{this.props.game.description}
                            </p>
                        </Col>
                        <Col md={1}>
                        
                        </Col>
                        <Col md={4}>
                            <p className={styles.info}>Управление: <b>W, A, S, D</b>
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
        );
    }
}

const mapStateToProps = (store) => {
    return {
        game: store.game
    }
};



export default connect(mapStateToProps)(PlayContent)