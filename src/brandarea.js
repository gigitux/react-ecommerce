import React, { Component } from 'react';

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
                <a href="cart.html">Cart - <span className="cart-amunt">$100</span> <i className="fa fa-shopping-cart"></i> <span className="product-count">5</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BrandArea;
