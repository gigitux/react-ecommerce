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
// Import Redux Stuff
import { connect } from 'react-redux';
import * as Actions from './actions/actions.js';
import Loading from 'react-loading';

export class SingleProduct extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentWillMount () {
    this.props.fetch_specific_device(this.props.routeParams.name);
    if (sessionStorage.getItem('user') === null) {
      return null
    } else {
      this.setState({user: JSON.parse(sessionStorage.getItem('user'))});
    }
  }
  render () {
    if (this.props.specific_device == null) {
      return (
        <Loading type='balls' color='#e3e3e3'/>
        );
    } else {
      return (
        <div>
          <ShopTitle title="Acquista" />
          <div className="single-product-area">
            <div className="zigzag-bottom" />
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <Search />
                  <Sidebar />
                </div>
                {this.state.user === null ?
                <InfoProduct {...this.props.specific_device[0]} addcomment={this.props.addcomment} addtocart={this.props.addtocart}  />
                : <InfoProduct {...this.props.specific_device[0]} addcomment={this.props.addcomment} email={this.state.user.email} addtocart={this.props.addtocart} />}
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
    specific_device: state.devices.specific_device
  };
}

function mapDispatchToProps (dispatch) {
  return {
    fetch_specific_device: (model) => {
      dispatch(Actions.fetch_specific_device(model));
    },
    addcomment: (model, user, review) => {
      dispatch(Actions.addcomment(model, user, review));
    },
    addtocart: (model, price) => {
      dispatch(Actions.addtocart(model, price));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
