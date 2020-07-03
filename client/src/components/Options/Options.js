import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import styles from './Options.module.scss';
import Level from '../Level/Level';
import Button from '../UI/Button/Button';
import { connect } from 'react-redux';
import {getMainData} from '../../actions/main';


class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initStatus: false
    }
  }

  componentDidMount() {
    this.props.getMainData()
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
    const levels = this.props.data.levels;
    const {filter} = this.props.filter;


    let visibleLevels = this.updateFilter(levels, filter);
  
    const selectedLevels = visibleLevels.map((item) => {
      return (
        <Col key={item.id} md={6} lg={5} xl={4}>
          <div className={styles.options__item}>
            <Level description={item.description} 
              title={item.title} 
              image={item.image}
              number={item.id} />
          </div>
        </Col>
      )
    })

    const shownLevels = selectedLevels.slice(0, 3);
    const hiddenLevels = selectedLevels.slice(3)
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

const mapStateToProps = ({news: {isFetching, data: {levels}}}) => {
  return {data: {levels}, isFetching}
}

// const mapStateToProps = state => {
//   return {
//     data: state.games.data.levels
//   }
// }

export default connect(mapStateToProps, {getMainData})(Options);
