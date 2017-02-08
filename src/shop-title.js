import React, { Component } from 'react';

export default class ShopTitle extends Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }
  render () {
    return (
      <div className="product-big-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-bit-title text-center">
                <h2>Acquista</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
