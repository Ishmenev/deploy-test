import React, {Component} from 'react';
import Slider from "react-slick";
import { Container } from 'reactstrap';
import styles from './News.module.scss';
import Title from '../UI/Title/Title';
import LoaderContainer from '../../containers/LoaderContainer';
import {connect} from 'react-redux';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

class News extends Component {


  render() {
    console.log(this.props.levels)

    const settings = {
      dots: true,
      infinite: false,
      speed: 0,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    };

    let content = null;

    if(this.props.news !== null) {
      content = this.props.news.map((item) => (
        <div key={item.id} className={styles.news__item}>
          <Title>
            <h3 className={styles.news__title}>{item.title}</h3>
          </Title>
          <p className={styles.news__text}>{item.text}</p>
          <span className={styles.news__date}>{item.date}</span>
        </div>
      ))
    }


    return(
      <LoaderContainer>
        <div className={styles.news}>
          <Title>
            <h2 className={styles.news__name}>Новости</h2>
          </Title>
          <Container>
            <Slider {...settings}>
              {content}
            </Slider>
          </Container>
        </div>
      </LoaderContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
      news: state.main.data.properties,
      levels: state.main.data.levels,
      isFetching: state.main.isFetching
  }
}

export default connect(mapStateToProps)(News)