import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Logout from '../../containers/logout';
import './styles.css';

class MenuAdmin extends Component {

  goToAnotherPage = (path) => {
    this.props.onPush(path)
  }

  render() {
    return (
      <div className='mainpage-menu'>
        <div 
          className='mainpage-menu-element'
          onClick={() => this.goToAnotherPage('/main')}>
          Strona główna
        </div>
        <div 
          className='mainpage-menu-element'
          onClick={() => this.goToAnotherPage('/books')}>
          Zarządzanie książkami
        </div> 
        <div 
          className='mainpage-menu-element'
          onClick={() => this.goToAnotherPage('/users')}> 
          Zarządzanie użytkownikami
        </div>
        <div 
          className='mainpage-menu-element'
          onClick={() => this.goToAnotherPage('/orders')}>
          Zarządzanie wypożyczeniami 
        </div>
        <Logout />
      </div>  
    )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  onPush: (path) => dispatch(push(path))
});


export default connect(mapStateToProps, mapDispatchToProps)(MenuAdmin)