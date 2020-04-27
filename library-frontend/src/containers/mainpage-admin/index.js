import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Label } from 'office-ui-fabric-react/lib/Label';

class MainPageAdmin extends Component {

  render() {
    const { activeUser } = this.props;
    return (
      <div className='mainpage-admin'>
        <h2>Witaj na stronie {activeUser.role === 'ADMIN' ? 'administratora' : 'pracownika'}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  activeUser: state.sessionUser.activeUser
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageAdmin);