import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

class NewUserForm extends Component {
  state = {
    firstName: '',
    lastName: '',
  };

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    });
    //Reset state
    this.setState({
      firstName: '',
      lastName: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} style={{margin: '12px auto'}}>
        <FormGroup style={{margin: '12px auto'}}>
          <Label>First name</Label>
          <Input
            required
            placeholder='First name'
            onChange={this.handleFirstNameChange}
            value={this.state.firstName}
          ></Input>
        </FormGroup>
        <FormGroup style={{margin: '12px auto'}}>
          <Label>Last name</Label>
          <Input
            required
            placeholder='Last name'
            onChange={this.handleLastNameChange}
            value={this.state.lastName}
          ></Input>
        </FormGroup>
        <FormGroup style={{margin: '12px auto'}}>
          <Button block outline type='submit' color='primary'>
            {/* Block, que se ajusta al tamaño en donde está contenido */}
            Create
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default NewUserForm;
