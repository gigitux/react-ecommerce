import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar.js';
import BrandArea from './brandarea.js';
import Menu from './menu.js';
import Slider from './slider.js';
import PromoArea from './promoarea.js';
import MainContent from './maincontent.js';
import FooterTop from './footertop.js';

const App = () => (
  <div>
    <Navbar />,
    <BrandArea />,
    <Menu />,
    <Slider />,
    <PromoArea />,
    <MainContent />,
    <FooterTop />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
