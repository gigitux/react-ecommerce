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

export default class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }
  render () {
    return (
      <div className="single-sidebar">
        <h2 className="sidebar-title">Cerca Prodotto</h2>
        <form action="" >
          <input type="text" placeholder="Search products..." />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
