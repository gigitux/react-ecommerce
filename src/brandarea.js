import React, { Component } from 'react';
// Import Redux Stuff
import { connect } from 'react-redux';

// Theme dependencies
import './App.css';
import '../templating/css/bootstrap.min.css';
import '../templating/css/font-awesome.min.css';
import '../templating/style.css';
import '../templating/css/responsive.css';
import '../templating/js/main.js';
import '../templating/js/jquery.sticky.js';
import '../templating/js/owl.carousel.min.js';
import '../templating/js/jquery.easing.1.3.min.js';

// Page dependencies
import logo from './assets/img/logo.png';

class BrandArea extends Component {

  render () {
    if (sessionStorage.getItem('cart') !== null) {
      var array_cart = JSON.parse(sessionStorage.getItem('cart'));
      var sum = 0
      console.log(array_cart.length);
      array_cart.forEach(function (item, index) {
        sum += parseInt(item.price, 10);
      });
    }
    return (
      <div className="site-branding-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="logo">
                <h1><a href="./"><img src={logo} role="presentation" /></a></h1>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="shopping-item">
                <a href="cart.html">Cart - <span className="cart-amunt">{sum == null ? 0 : sum}$</span> <i className="fa fa-shopping-cart"></i> <span className="product-count">{array_cart == null ? 0 : array_cart.length }</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    specific_device: state.devices.specific_device,
    add_devices: state.devices.add_devices,
    cart: state.devices.price
  };
}

export default connect(mapStateToProps)(BrandArea);
