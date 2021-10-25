// Para conectar el componente App con el store de Redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserRequest, createUserRequest, deleteUserRequest } from '../actions/users';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';

/* Cuando se renderiza App, se dispatch la acción getUsersRequest.
En la saga se está vigilando con el el takeEvery esa acción y se ejecuta
un worker cuando esa acción es dipatched */
class App extends Component {
  constructor(props) {
    super(props);
    this.props.getUserRequest();
  }

  handleSubmit = ({ firstName, lastName }) => {
    console.log(firstName, lastName);
    this.props.createUserRequest({
      firstName,
      lastName,
    });
  };

  handleDeleteUserClick = (userId) =>{
    this.props.deleteUserRequest(userId);
  }

  render() {
    const users = this.props.users; //Es todo el state de users
    return (
      <div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }}>
        <NewUserForm onSubmit={this.handleSubmit} />
        <UsersList onDeleteUser={this.handleDeleteUserClick} users={users.items} />
      </div>
    );
  }
}

// Se le pasa la acción getUserRequest al constructor
/* Se quiere hacer map state to props. Al conectar los users con connect
ya se puede acceder a los users del state así this.props.users*/
export default connect(({ users }) => ({ users }), {
  getUserRequest,
  createUserRequest,
  deleteUserRequest,
})(App);
