import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toNumber, split } from 'lodash';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { addNewUser, handleAddUserWindow } from '../../state/users';
import { getFreeBooksLocations } from '../../state/books-locations';
import './styles.css';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      username: '',
      password: '',
      email: '',
      role: ''
    }
  }
  
  onAddUser = () => {
    const user = {
      name: this.state.name,
      surname: this.state.surname,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      role: this.state.role
    }
    
    this.props.addNewUser(user);
    this.props.handleAddUserWindow();

    this.setState({
      name: '',
      surname: '',
      username: '',
      password: '',
      email: '',
      role: ''
    })
  }

  onHandleName = (event) => {
    this.setState({ name: event.target.value });
  }

  onHandleSurname = (event) => {
    this.setState({ surname: event.target.value });
  }

  onHandleUsername = (event) => {
    this.setState({ username: event.target.value });
  }

  onHandlePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  onHandleEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  createUsersRolesList = () => {
    return ([
      { 
        key: 'ADMIN', 
        text: 'administrator'
      },
      { 
        key: 'WORKER',
        text: 'pracownik' 
      },
      { 
        key: 'READER', 
        text: 'czytelnik'
      }
    ])
  }

  handleAddUserWindow = () => {
    this.props.handleAddUserWindow();
  }

  onChangeRole = (event, item) => {
    console.log(event, item);
    this.setState({ role: item.key })
  }

  render() {
    const { showAddUserWindow } = this.props;
    return (
      <div className='add-book'>
        <div className='add-book-close'>
          <FontAwesomeIcon 
            className='close-icon' 
            icon={faTimes}
            onClick={this.handleAddUserWindow} />
        </div>
        <div className='add-book-values'>
          <TextField 
            label='Imię' 
            value={this.state.name}
            onChange={(event) => this.onHandleName(event)} />
          <TextField 
            label='Nazwisko'
            value={this.state.surname}
            onChange={(event) => this.onHandleSurname(event)} />
          <TextField 
            label='Nazwa użytkownika'
            value={this.state.username}
            onChange={(event) => this.onHandleUsername(event)} />
          <TextField 
            label='Hasło'
            value={this.state.password}
            onChange={(event) => this.onHandlePassword(event)} />
          <TextField 
            label='E-mail'
            value={this.state.email}
            onChange={(event) => this.onHandleEmail(event)} />
          <Dropdown
            placeholder='Wybierz rolę'
            label='Rola'
            options={this.createUsersRolesList()}
            onChange={(event, item) => this.onChangeRole(event, item)} />
          <DefaultButton text='Dodaj Użytkownika' onClick={() => this.onAddUser()} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  showAddUserWindow: state.users.showAddUserWindow
});

const mapDispatchToProps = {
  addNewUser,
  handleAddUserWindow
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);