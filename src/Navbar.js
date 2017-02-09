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

import { connect } from 'react-redux';
import * as Actions from './actions/actions.js';

class Navbar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false,
      username: '',
      password: ''
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
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
        <div className="header-area">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="user-menu">
                  <ul>
                    <li><a href="#"><i className="fa fa-user"></i> Registrati</a></li>
                    <li onClick={() => this.open()}><a href="#"><i className="fa fa-user"></i> Login</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4">
                <div className="header-right">
                  <ul className="list-unstyled list-inline">
                    <li className="dropdown dropdown-small">
                      <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" href="#"><span className="key">currency :</span><span className="value">USD </span><b className="caret"></b></a>
                      <ul className="dropdown-menu">
                        <li><a href="#">USD</a></li>
                        <li><a href="#">INR</a></li>
                        <li><a href="#">GBP</a></li>
                      </ul>
                    </li>

                    <li className="dropdown dropdown-small">
                      <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" href="#"><span className="key">language :</span><span className="value">English </span><b className="caret"></b></a>
                      <ul className="dropdown-menu">
                        <li><a href="#">English</a></li>
                        <li><a href="#">French</a></li>
                        <li><a href="#">German</a></li>
                      </ul>
                    </li>
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
                    <li><a href="#"><i className="fa fa-user"></i> My Account</a></li>
                    <li><a href="#"><i className="fa fa-heart"></i> Wishlist</a></li>
                    <li><a href="cart.html"><i className="fa fa-user"></i> My Cart</a></li>
                    <li><a href="checkout.html"><i className="fa fa-user"></i> Checkout</a></li>
                    <li onClick={() => this.open()}><a href="#"><i className="fa fa-user"></i> Login</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4">
                <div className="header-right">
                  <ul className="list-unstyled list-inline">
                    <li className="dropdown dropdown-small">
                      <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" href="#"><span className="key">currency :</span><span className="value">USD </span><b className="caret"></b></a>
                      <ul className="dropdown-menu">
                        <li><a href="#">USD</a></li>
                        <li><a href="#">INR</a></li>
                        <li><a href="#">GBP</a></li>
                      </ul>
                    </li>

                    <li className="dropdown dropdown-small">
                      <a data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" href="#"><span className="key">language :</span><span className="value">English </span><b className="caret"></b></a>
                      <ul className="dropdown-menu">
                        <li><a href="#">English</a></li>
                        <li><a href="#">French</a></li>
                        <li><a href="#">German</a></li>
                      </ul>
                    </li>
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
    }
  };
}

export default connect(null, mapDispatchToProps)(Navbar);
