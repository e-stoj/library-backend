import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';
import { logIn } from '../../state/session-user';
import './styles.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  shouldComponentUpdate(nextProp) {
    return nextProp.invalidLogin !== this.props.invalidLogin;
  }

  onHandleUserName = (event) => {
    this.setState({ username: event.target.value });
  }

  onHandlePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  onLogin = () => {
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.logIn(user);
    this.setState({ 
      username: '',
      password: ''
    })
  } 

  setErrorMessage = () => {
    if(this.props.invalidLogin) {
      return 'Nieprawidłowy login lub hasło';
    } 
    return '';
  } 

  render() {
    const { activeUser, online, invalidLogin } = this.props;
    console.log(activeUser, online, invalidLogin);
    return (
      <div className='home-page'>
        <div className='home-page-icon'>
          <FontAwesomeIcon className='icon' icon={faBookReader} size='7x'/>
        </div>
        <TextField 
          className='home-page-element' 
          placeholder='Login'
          value={this.state.username}
          onChange={(event) => this.onHandleUserName(event)}
          onGetErrorMessage={this.setErrorMessage} />
        <TextField 
          className='home-page-element' 
          placeholder='Password'
          value={this.state.password}
          onChange={(event) => this.onHandlePassword(event)}
          type='password'
          onGetErrorMessage={this.setErrorMessage} />
        <DefaultButton
          className='home-page-element'
          primary={true}
          allowDisabledFocus={true}
          text='Login'
          onClick={this.onLogin} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  online: state.sessionUser.online,
  activeUser: state.sessionUser.activeUser,
  invalidLogin: state.sessionUser.invalidLogin
});

const mapDispatchToProps = (dispatch) => ({
  logIn: (user) => dispatch(logIn(user)),
  onPush: (path) => dispatch(push(path))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);