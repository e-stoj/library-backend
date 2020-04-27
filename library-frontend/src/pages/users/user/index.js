import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

class User extends Component {

  userRole = (role) => {
    if(role === 'ADMIN') {
      return 'administrator'
    } else if ( role === 'WORKER') {
      return 'pracownik'
    } else {
      return 'czytelnik'
    }
  }

  render() {
    const { user, role, deleteUser } = this.props;
    return (
      <div className='users-table-row'>
        <div className='users-table-column'>{ user.name }</div>
        <div className='users-table-column'>{ user.surname }</div>
        <div className='users-table-column'>{ user.username }</div>
        <div className='users-table-column'>{ user.email }</div>
        <div className='users-table-column'>{ this.userRole(user.role) }</div>
        {role === 'ADMIN' && 
          <div className='users-table-column'>
            <FontAwesomeIcon 
              className='close-icon' 
              icon={faTrash}
              onClick={deleteUser} />
          </div>}
      </div>
    )
  }
}

export default User;