import React, {Component} from "react";
import Loader from "../components/Loader/Loader";
import Games from "../pages/Games";
import Page404 from "../pages/Page404";
import { connect } from 'react-redux';
import {getMainData} from '../actions/main';
import {Route} from 'react-router-dom';

class GamesContainer extends Component {
    
  componentDidMount() {    
    this.props.getMainData();
  }
  
  render() {
    const {isFetching, data} = this.props;
    
    let content = null;

    if (data) {
      content = <Games/>      
    }
    
    else if (isFetching) {
      content = <Loader/>;
    }
    
    else {
      content = <Page404/>;
    }
    
    
    return (
      content
    )        
  }
}

const mapStateToProps = state => {
    return {
        data: state.games.data,
        isFetching: state.games.isFetching
    }
}

export default connect(mapStateToProps, {getMainData})(GamesContainer)