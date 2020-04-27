import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import User from './user';
import MenuAdmin from '../../containers/menu-admin';
import AddUser from '../../containers/add-user';
import { addNewUser, getAllUsers, handleAddUserWindow, deleteUser } from '../../state/users';
import './styles.css';

class Users extends Component {

  componentDidMount() {
    this.props.getAllUsers();
  }

  onAddUser = () => {
    this.props.handleAddUserWindow()
  }

  onDeleteUser = (userId) => {
    this.props.deleteUser(userId);
  }

  render() {
    const { usersList, showAddUserWindow, activeUser } = this.props;
    console.log(usersList);
    return (
      <div className='users-page'>
        <MenuAdmin />
        <div className='users'>
          <div className='users-list'>
            <div className='users-table-header'>
              <div className='users-table-column'>Imię</div>
              <div className='users-table-column'>Nazwisko</div>
              <div className='users-table-column'>Nazwa użytkownika</div>
              <div className='users-table-column'>E-mail</div>
              <div className='users-table-column'>Rola</div>
              {activeUser.role === 'ADMIN' && <div className='users-table-column'></div>}
            </div>
            {usersList.map(user => <User user={user} role={activeUser.role} deleteUser={() => this.onDeleteUser(user.id)} />)}
          </div>
          <div className='add-user'>
            <DefaultButton
              text='Dodaj użytkownika'
              onClick={this.onAddUser} />
            {showAddUserWindow && <AddUser />}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  usersList: state.users.users,
  showAddUserWindow: state.users.showAddUserWindow,
  activeUser: state.sessionUser.activeUser
});

const mapDispatchToProps = {
  addNewUser,
  getAllUsers,
  handleAddUserWindow,
  deleteUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);