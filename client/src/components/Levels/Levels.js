import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from '../UI/Title/Title';
import Level from '../Level/Level';
import LoaderContainer from '../../containers/LoaderContainer';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import styles from './Levels.module.scss';

class Levels extends Component {

  filterLevels(arr) {
    return arr.type === 'narrative'
  }

  render() {
    let defaultLevels = null;
    let visibleLevels = null;
    let filtered = null;

    if(this.props.data.levels) {
      filtered = this.props.data.levels.filter(this.filterLevels)

      defaultLevels = filtered.map((item) => {
        return (
          <Col key={item.id} md={6} lg={4}>
            <div className={styles.levels__item}>
              <Level description={item.description} 
                title={item.title} 
                image={item.image}
                number={item.id}/>
            </div>
          </Col>
        )
      })
    }

    // if(this.props.data.levels !== null) {
    //   defaultLevels = this.props.data.levels.map((item) => {
    //     return (
    //       <Col key={item.id} md={6} lg={4}>
    //         <Level description={item.description} 
    //           title={item.title} 
    //           image={item.image}
    //           number={item.id}/>
    //       </Col>
    //     )
    //   })
    // }


    if(defaultLevels !== null) {
      visibleLevels = defaultLevels.slice(0, 3);
    }

    return (
      <LoaderContainer>
        <div className={styles.levels}>
          <Container>
            <Title subClass={styles.info__title}>
              <h2 className={styles.levels__name}>Поехали!</h2>
            </Title>
            <ul className={styles.levels__list}>
              <Row>
                {visibleLevels}
              </Row>
            </ul>
            <p className={styles.levels__options}>Самые популярные уровни, больше уровней вы можете найти, кликнув по кнопке ниже</p>
            <Link className={styles.levels__link} to='/games/all'>Все уровни</Link>
          </Container>
        </div>
      </LoaderContainer>
    )  
  }

}

const mapStateToProps = ({news: {data: {levels: type}}}) => {
  return {data: {levels: type}}
}

export default connect(mapStateToProps)(Levels);