import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { logout } from '../../state/session-user';
import './styles.css';

class Logout extends Component {
  
  onLogout = () => {
    this.props.logout();
    this.props.onPush('/');
  }

  render() {
    return (
      <div className='logout'>
        <DefaultButton
          className='logout-button'
          primary={true}
          allowDisabledFocus={true}
          text='Logout'
          onClick={this.onLogout} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  onPush: (path) => dispatch(push(path))
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);