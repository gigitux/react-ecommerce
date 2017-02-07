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

class FooterTop extends Component {
  render () {
    return (
      <div className="footer-top-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="footer-about-us">
                <h2>u<span>Stora</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sunt id doloribus vero quam laborum quas alias dolores blanditiis iusto consequatur, modi aliquid eveniet eligendi iure eaque ipsam iste, pariatur omnis sint! Suscipit, debitis, quisquam. Laborum commodi veritatis magni at?</p>
                <div className="footer-social">
                  <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                  <a href="#" target="_blank"><i className="fa fa-twitter"></i></a>
                  <a href="#" target="_blank"><i className="fa fa-youtube"></i></a>
                  <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-menu">
                <h2 className="footer-wid-title">User Navigation </h2>
                <ul>
                  <li><a href="#">My account</a></li>
                  <li><a href="#">Order history</a></li>
                  <li><a href="#">Wishlist</a></li>
                  <li><a href="#">Vendor contact</a></li>
                  <li><a href="#">Front page</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-menu">
                <h2 className="footer-wid-title">Categories</h2>
                <ul>
                  <li><a href="#">Mobile Phone</a></li>
                  <li><a href="#">Home accesseries</a></li>
                  <li><a href="#">LED TV</a></li>
                  <li><a href="#">Computer</a></li>
                  <li><a href="#">Gadets</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="footer-newsletter">
                <h2 className="footer-wid-title">Newsletter</h2>
                <p>Sign up to our newsletter and get exclusive deals you wont find anywhere else straight to your inbox!</p>
                <div className="newsletter-form">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterTop;
