import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import styles from './Options.module.scss';
import Level from '../Level/Level';
import Button from '../UI/Button/Button';
import store from '../../store';
import axios from "axios";
import {connect} from 'react-redux';

export default class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initStatus: false    }
  }

  btnClicked = () => {
    this.setState((state) => {
      return {
        initStatus: !state.initStatus
      }
    })
  }

  updateFilter(arr, params) {
    if (arr) {
      return arr.filter((item) => {
        if (params === 'all') {
          return item;
        }
        return item.type === params;
      })
    }
    
    else {
      return  []
    }
  }

  render() {

    let initStatus = this.state.initStatus;
    const levels = this.props.levels;
    const {filter} = this.props.filter;


    let visibleLevels = this.updateFilter(levels, filter);
  
    const selectedLevels = visibleLevels.map((item) => {
      return (
        <Col key={item.id} md={6} lg={5} xl={4}>
          <div className={styles.options__item}>
            <Level description={item.description} title={item.title} image={item.image}
              number={item.id} />
          </div>
        </Col>
      )
    })

    const shownLevels = selectedLevels.slice(0, 6);
    const hiddenLevels = selectedLevels.slice(6)
    let addLevels = null;

    if (initStatus) {
      addLevels = hiddenLevels;
    } else {
      addLevels = null
    };
    

    return (
      <div className={styles.options}>
        <div className={styles.options__list}>
          <Row>
            {shownLevels}
            {addLevels}
          </Row>
        </div>
        <div onClick={this.btnClicked} className={styles.options__button}>
          <Button domType={'button'}>Еще уровни</Button>
        </div>        
      </div>
    ) 
  }
}
