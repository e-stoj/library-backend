import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuAdmin from '../../containers/menu-admin';
import MenuReader from '../../containers/menu-reader';
import MainPageAdmin from '../../containers/mainpage-admin';
import MainPageReader from '../../containers/mainpage-reader';
import './styles.css';

class MainPage extends Component {

  render() {
    const {activeUser} = this.props;
    return (
      <div className='mainpage'> 
          {(activeUser.role==='ADMIN' || activeUser.role==='WORKER') && 
          <div className='mainpage'>
            <MenuAdmin />
            <MainPageAdmin /> 
          </div> 
            }
          {activeUser.role==='READER' && 
          <div className='mainpage'>
            <MenuReader />
            <MainPageReader /> 
          </div> }
        <div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  activeUser: state.sessionUser.activeUser
});

const mapDispatchToProps = (dispatch) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);