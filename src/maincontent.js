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
// Import Redux Stuff
import { connect } from 'react-redux';
import * as Actions from './actions/actions.js';
import Loading from 'react-loading';

// Page dependencies

class MainContent extends Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }
  render () {
    if (this.props.devices == null) {
      return (
        <Loading type='balls' color='#e3e3e3'/>
      );
    } else {
      const devices_recent = this.props.devices.map((recent) =>
        <div className="single-product">
          <div className="product-f-image">
            <img src={recent.images[0]} alt="" height="212" width="264" />
            <div className="product-hover">
              <a href="" onClick={() => this.props.addtocart(recent.model, recent.price)} className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Aggiungi al carrello </a>
              <a href={'/shop/' + recent.model.split(' ').join('-')} className="view-details-link"><i className="fa fa-link"></i> Maggiori Dettagli</a>
            </div>
          </div>
          <h2><a href={'/shop/' + recent.model.split(' ').join('-')}>{recent.model}</a></h2>
          <div className="product-carousel-price">
            <ins>{recent.price}</ins>
          </div>
        </div>
    );
      return (
        <div className="maincontent-area">
          <div className="zigzag-bottom"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="latest-product">
                  <h2 className="section-title">Ultimi Prodotti</h2>
                  <div className="product-carousel owl-carousel owl-theme owl-responsive-1000 owl-loaded">
                    {devices_recent}
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

function mapStateToProps (state) {
  return {
    devices: state.devices.devices
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetch_devices: () => {
      dispatch(Actions.fetch_devices());
    },
    addtocart: (model, price) => {
      dispatch(Actions.addtocart(model, price));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
