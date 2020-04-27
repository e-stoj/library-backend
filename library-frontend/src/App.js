import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import MainPage from './pages/mainpage';
import Books from './pages/books';
import Users from './pages/users';
import Orders from './pages/orders';
import './App.css';

class App extends Component {
  render() {
    const { online } = this.props;
    return (
      <div className="App">
      {!online && (<Redirect to='/'/>)}
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/main' component={MainPage} />
          <Route path='/books' component={Books} />
          <Route path='/users' component={Users} />
          <Route path='/orders' component={Orders} />
      </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  online: state.sessionUser.online
});

export default withRouter(connect(mapStateToProps)(App));
