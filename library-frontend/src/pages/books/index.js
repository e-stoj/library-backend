import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toNumber, split } from 'lodash';
import BooksAdmin from '../../containers/books-admin';
import BooksReader from '../../containers/books-reader';
import './styles.css';

class Books extends Component {

  render() {
  const { activeUser } = this.props;
  return (
    <div> 
      {(activeUser.role==='ADMIN' || activeUser.role==='WORKER') && 
        <BooksAdmin />}
      {activeUser.role==='READER' && <BooksReader />}
  </div>
  )
  }
}

const mapStateToProps = (state) => ({
  activeUser: state.sessionUser.activeUser,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Books);