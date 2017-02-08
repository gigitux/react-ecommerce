import React, { Component } from 'react';
import Slider from './slider.js';
import PromoArea from './promoarea.js';
import MainContent from './maincontent.js';

export default class Homepage extends Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }
  render () {
    return (
      <div>
        <Slider />,
        <PromoArea />,
        <MainContent />,
      </div>
    );
  }
}
