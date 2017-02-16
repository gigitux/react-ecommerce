import React, { Component } from 'react';
import './App.css';
import '../templating/css/bootstrap.min.css';
import '../templating/css/font-awesome.min.css';
import '../templating/style.css';
import '../templating/css/responsive.css';
import '../templating/js/main.js';
import '../templating/js/jquery.sticky.js';
import '../templating/js/owl.carousel.min.js';
import '../templating/js/jquery.easing.1.3.min.js';
import { Modal, Button } from 'react-bootstrap';
import Login from './login.js';
import Registration from './registration.js';

import { connect } from 'react-redux';
import * as Actions from './actions/actions.js';

class Navbar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      showModal_registration: false,
      username: '',
      password: '',
      name: '',
      surname: '',
      email: ''
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.close_registration = this.close_registration.bind(this);
    this.open_registration = this.open_registration.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSurname = this.handleChangeSurname.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }
  componentWillMount () {
    if (sessionStorage.getItem('user') === null) {
      return null;
    } else {
      this.setState({user: JSON.parse(sessionStorage.getItem('user'))});
    }
  }

  close () {
    this.setState({ showModal: false });
  }
  open () {
    this.setState({ showModal: true });
  }
  handleChangeUsername (e) {
    this.setState({ username: e.target.value });
  }
  handleChangePassword (e) {
    this.setState({ password: e.target.value });
  }
  close_registration () {
    this.setState({ showModal_registration: false });
  }
  open_registration () {
    this.setState({ showModal_registration: true });
  }
  handleChangeName (e) {
    this.setState({ name: e.target.value });
  }
  handleChangeSurname (e) {
    this.setState({ surname: e.target.value });
  }
  handleChangeEmail (e) {
    this.setState({ email: e.target.value });
  }
  render () {
    if (this.state.user == null) {
      return (
        <div>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Login {...this.state} handleChangeUsername={this.handleChangeUsername} handleChangePassword={this.handleChangePassword} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Chiudi</Button>
              <Button bsStyle="primary" onClick={() => this.props.login(this.state.username, this.state.password)}>Invia</Button>
            </Modal.Footer>
          </Modal>
          <Modal show={this.state.showModal_registration} onHide={this.close_registration}>
            <Modal.Header closeButton>
              <Modal.Title>Registrati</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Registration {...this.state} handleChangeName={this.handleChangeName} handleChangeSurname={this.handleChangeSurname} handleChangeEmail={this.handleChangeEmail} handleChangePassword={this.handleChangePassword} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close_registration}>Chiudi</Button>
              <Button bsStyle="primary" onClick={() => this.props.registration(this.state.name, this.state.surname, this.state.email, this.state.password)}>Invia</Button>
            </Modal.Footer>
          </Modal>
          <div className="header-area">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="user-menu">
                    <ul>
                      <li onClick={() => this.open_registration()}><a href="#"><i className="fa fa-user"></i> Registrati</a></li>
                      <li onClick={() => this.open()}><a href="#"><i className="fa fa-user"></i> Login</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Login {...this.state} handleChangeUsername={this.handleChangeUsername} handleChangePassword={this.handleChangePassword} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close}>Chiudi</Button>
              <Button bsStyle="primary" onClick={() => this.props.login(this.state.username, this.state.password)}>Invia</Button>
            </Modal.Footer>
          </Modal>

          <div className="header-area">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="user-menu">
                    <ul>
                      <li><a href="/cart"><i className="fa fa-user"></i> My Cart</a></li>
                      <li><a href="/checkout"><i className="fa fa-user"></i> Checkout</a></li>
                      <li onClick={() => {sessionStorage.clear(); location.reload()}}><a href="#"><i className="fa fa-user"></i> Logout</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    login: (username, password) => {
      dispatch(Actions.login(username, password));
    },
    registration: (name, surname, email, password) => {
      dispatch(Actions.registration(name, surname, email, password));
    }
  };
}

export default connect(null, mapDispatchToProps)(Navbar);
