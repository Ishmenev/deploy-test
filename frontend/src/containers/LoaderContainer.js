import React, {Component} from 'react'
import Loader from '../components/Loader/Loader'
import ErrorIndicator from '../components/ErrorIndicator/ErrorIndicator'
import {connect} from 'react-redux'
import {getMainData} from '../actions/main'


class LoaderContainer extends Component {

  componentDidMount() {
    this.props.getMainData()
  }

  render() {

    const {isFetching, errorStatus, news, children} = this.props;

    if(isFetching === true && errorStatus === null) {
      return <Loader/>
    } else if (isFetching === false && news === null) {
      return <ErrorIndicator/>
    } else if (isFetching === false && errorStatus === true) {
      return <ErrorIndicator/>
    }

    return (
      children
    )
  }
}

const mapStateToProps = state => {
  return {
    news: state.main.data.properties,
    isFetching: state.main.isFetching,
    errorStatus: state.main.errorStatus
  }
}

export default connect(mapStateToProps, {getMainData})(LoaderContainer)