import React, { Component } from 'react';

export default class Sidebar extends Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }
  render () {
    return (
      <div className="single-sidebar">
        <h2 className="sidebar-title">Products</h2>
        <div className="thubmnail-recent">
          <img src="img/product-thumb-1.jpg" className="recent-thumb" alt="" />
          <h2><a href="">Sony Smart TV - 2015</a></h2>
          <div className="product-sidebar-price">
            <ins>$700</ins> <del>$100</del>
          </div>
        </div>
        <div className="thubmnail-recent">
          <img src="img/product-thumb-1.jpg" className="recent-thumb" alt="" />
          <h2><a href="">Sony Smart TV - 2015</a></h2>
          <div className="product-sidebar-price">
            <ins>$700</ins> <del>$100</del>
          </div>
        </div>
        <div className="thubmnail-recent">
          <img src="img/product-thumb-1.jpg" className="recent-thumb" alt="" />
          <h2><a href="">Sony Smart TV - 2015</a></h2>
          <div className="product-sidebar-price">
            <ins>$700</ins> <del>$100</del>
          </div>
        </div>
        <div className="thubmnail-recent">
          <img src="img/product-thumb-1.jpg" className="recent-thumb" alt="" />
          <h2><a href="">Sony Smart TV - 2015</a></h2>
          <div className="product-sidebar-price">
            <ins>$700</ins> <del>$100</del>
          </div>
        </div>
      </div>
    );
  }
}
