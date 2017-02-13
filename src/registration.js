import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

export default class Registration extends Component {
  render () {
    return (
      <form>
        <FormGroup
         >
          <FormControl
            type="text"
            value={this.props.name}
            placeholder="Inserisci Nome"
            onChange={this.props.handleChangeName}
           />
          <br />
          <FormControl
            type="text"
            value={this.props.surname}
            placeholder="Inserisci Cognome"
            onChange={this.props.handleChangeSurname}
            />
          <br />
          <FormControl
            type="text"
            value={this.props.email}
            placeholder="Inserisci Username"
            onChange={this.props.handleChangeEmail}
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
