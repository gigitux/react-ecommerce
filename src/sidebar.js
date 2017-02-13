import React, { Component } from 'react';
import Loading from 'react-loading';

export default class Sidebar extends Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }
  render () {
    console.log(this.props.sidebar)
    if (this.props.sidebar == null) {
      return (
        <Loading type='balls' color='#e3e3e3'/>
        );
    } else {
      const sidebar_list = this.props.sidebar.map((list) =>
        <div className="thubmnail-recent">
          <img src={list.images[0]} className="recent-thumb" alt="" />
          <h2><a href={list.model.split(' ').join('-')}>{list.model}</a></h2>
          <div className="product-sidebar-price">
            <ins>{list.price}</ins>
          </div>
        </div>
      );
      return (
        <div className="single-sidebar">
          <h2 className="sidebar-title">Prodotti</h2>
          {sidebar_list}
        </div>
      );
    }
  }
}
