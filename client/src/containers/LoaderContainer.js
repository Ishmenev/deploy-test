import React, {Component} from 'react';
import Loader from '../components/Loader/Loader';
import ErrorIndicator from '../components/ErrorIndicator/ErrorIndicator';
import {connect} from 'react-redux';
import {getMainData} from '../actions/main'


class LoaderContainer extends Component {
  // componentDidMount() {
  //   this.props.getMainData()
  // }

  render() {

    const {isFetching, errorStatus, data, children} = this.props;

    if(isFetching === true && errorStatus === null) {
      return <Loader/>
    } else if (isFetching === false && data.properties === null) {
      return <ErrorIndicator/>
    } else if (isFetching === false && errorStatus === true) {
      return <ErrorIndicator/>
    }

    return (
      children
    )
  }
}

const mapStateToProps = ({news: {isFetching, data, errorStatus}}) => {
  return {isFetching, data, errorStatus}
}


export default connect(mapStateToProps, {getMainData})(LoaderContainer)