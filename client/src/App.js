import React, {Component} from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GamesContainer from './containers/GamesContainer';
import AccountContainer from './containers/AccountContainer';
import ProtectedPage from './pages/ProtectedPage';
import Page404 from './pages/Page404';
import LoginError from './pages/LoginError';
import CreateLevel from './containers/CreateContainer';
import MainContainer from './containers/MainContainer';
import PlayContainer from './containers/PlayContainer';
import { connect } from 'react-redux';
import {getMainData} from './actions/main';
import './bootstrap.min.css';
import './style.css';

const PrivateRoute = ({component: Component, data, path}) => {
  const {auth} = data;

  // switch(auth) {
  //   case null: 
  //     return (
  //       <ProtectedPage/>
  //     )
  //   case false:
  //     return (
  //       <LoginError/>
  //     )
  //   default: 
  //     return (
  //       <Route path={path} component={Component}/>
  //     )
  // }
  
  return <Route path={path}
    render={props => {
      return auth ? <Component {...props}/> : <ProtectedPage/>
    }
  }/>
}



class App extends Component {
  componentDidMount() {
    this.props.getMainData()
  }
  
  render() {

    return (
      <div className='wrapper'>
        <div className='sections'>
          <Router>
            <Route path='/' component={Header}/>
              <Switch>
                <Route exact path='/' component={MainContainer}/>
                <Route exact path='/games/:type' component={GamesContainer} />
                <PrivateRoute 
                  exact path='/account/'
                  data={this.props}
                  component={AccountContainer} />
                <PrivateRoute 
                  exact path='/creativity/'
                  data={this.props}
                  component={CreateLevel} />
                <Route exact path='/play/:level' component={PlayContainer}/>
                <Route path='/error/' component={LoginError}/>
                <Route component={Page404}/>
              </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    );      
  }
}

const mapStateToProps = ({auth}) => {
  return {auth}
}

export default connect(mapStateToProps, {getMainData})(App)











