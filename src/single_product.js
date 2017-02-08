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
import Search from './search.js';
import Sidebar from './sidebar.js';
import ShopTitle from './shop-title.js';
import InfoProduct from './info_product.js';
export default class SingleProduct extends Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }
  render () {
    return (
      <div>
        <ShopTitle />
        <div className="single-product-area">
          <div className="zigzag-bottom" />
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <Search />
                <Sidebar />
                <InfoProduct />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
