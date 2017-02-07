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

class MainContent extends Component {
  render () {
    return (
      <div className="maincontent-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="latest-product">
                <h2 className="section-title">Latest Products</h2>
                <div className="product-carousel">
                  <div className="single-product">
                    <div className="product-f-image">
                      <img src="img/product-1.jpg" alt="" />
                      <div className="product-hover">
                        <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                        <a href="single-product.html" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                      </div>
                    </div>
                    <h2><a href="single-product.html">Samsung Galaxy s5- 2015</a></h2>
                    <div className="product-carousel-price">
                      <ins>$700</ins> <del>$100</del>
                    </div>
                  </div>
                  <div className="single-product">
                    <div className="product-f-image">
                      <img src="img/product-2.jpg" alt="" />
                      <div className="product-hover">
                        <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                        <a href="single-product.html" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;
