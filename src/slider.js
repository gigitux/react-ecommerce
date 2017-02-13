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
import {Carousel} from 'react-bootstrap';

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
      const devices_slider = this.props.devices.map((slider) =>
        <Carousel.Item><img style={{width: "20%", height:"10%"}} src={slider.images[0]} alt="Slide" />
          <Carousel.Caption>
            <h3><a href={'/shop/' + slider.model.split(' ').join('-')}> {slider.model} </a> </h3>
          </Carousel.Caption>
        </Carousel.Item>
    );
      return (
        <div className="slider-area">
          <div className="block-slider block-slider4">
            <ul className="" id="bxslider-home4">
              <Carousel>
                {devices_slider}
              </Carousel>

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
