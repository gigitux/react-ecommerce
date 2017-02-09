import React, { Component } from 'react';
// Theme dependencies
import './App.css';
import '../templating/css/bootstrap.min.css';
import '../templating/css/font-awesome.min.css';
import '../templating/style.css';
import '../templating/css/responsive.css';
import '../templating/css/owl.carousel.css';
import '../templating/js/main.js';
import '../templating/js/jquery.sticky.js';
import '../templating/js/owl.carousel.min.js';
import '../templating/js/script.slider.js';
import '../templating/js/jquery.easing.1.3.min.js';
import '../templating/js/bxslider.min.js';
// Import Redux Stuff
import { connect } from 'react-redux';
import * as Actions from './actions/actions.js';
import Loading from 'react-loading';

class Slider extends Component {
  constructor (props) {
    super(props);
    this.state = {
      comment: null
    };
  }
  componentWillMount () {
    this.props.fetch_devices();
  }
  render () {
    if (this.props.devices == null) {
      return (
        <Loading type='balls' color='#e3e3e3'/>
      );
    } else {
      console.log(this.props.devices)
      const devices_slider = this.props.devices.map((slider) =>
        <div key={slider.id}>
          <li>
            <img src={slider.image} alt="Slide" />
            <div className="caption-group">
              <h2 className="caption title">
                {slider.model}
              </h2>
              <a className="caption button-radius" href="#"><span className="icon"></span>Acquista adesso</a>
            </div>
          </li>
        </div>
    );
      return (
        <div className="slider-area">
          <div className="block-slider block-slider4">
            <ul className="" id="bxslider-home4">
            {devices_slider}
            </ul>
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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
