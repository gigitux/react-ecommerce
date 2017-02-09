import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

export default class Login extends Component {
  render () {
    return (
      <form>
        <FormGroup
         >
          <FormControl
            type="text"
            value={this.props.username}
            placeholder="Inserisci Username"
            onChange={this.props.handleChangeUsername}
           />
          <br />
          <FormControl
            type="password"
            value={this.props.password}
            placeholder="Inserisci Password"
            onChange={this.props.handleChangePassword}
          />
        </FormGroup>
      </form>
     );
  }
}
