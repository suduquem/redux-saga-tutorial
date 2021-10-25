// Para conectar el componente App con el store de Redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserRequest } from '../actions/users';

/* Cuando se renderiza App, se dispatch la acción getUsersRequest.
En la saga se está vigilando con el el takeEvery esa acción y se ejecuta
un worker cuando esa acción es dipatched */
class App extends Component {
  constructor(props) {
    super(props);
    this.props.getUserRequest();
  }

  render() {
    return <div> Test </div>;
  }
}

// Se pasa null porque no se requiere map dispatch to props
// Pero se le pasa la acción getUserRequest al constructor
export default connect(null, {
  getUserRequest
})(App);
