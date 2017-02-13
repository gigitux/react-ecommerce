import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar.js';
import BrandArea from './brandarea.js';
import Menu from './menu.js';
import HomePage from './homepage.js';
import FooterTop from './footertop.js';
import SingleProduct from './single_product.js';
import Cart from './cart.js';
import Checkout from './checkout.js';

// Redux stuff
import devices from './reducers/reducers';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { Router, Route, browserHistory } from 'react-router';

// Create store
const reducers = {
  devices: devices
};

const reducer = combineReducers(reducers);
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(apiMiddleware));

const App = (props) => (
  <div>
    <Navbar />
    <BrandArea />
    <Menu />
    <Router { ...props}>
      <Route path="/" component={HomePage} />
      <Route path="/shop/:name" component={SingleProduct} />
      <Route path="/cart" component={Cart} />
      <Route path="/checkout" component={Checkout} />
    </Router>
    <FooterTop />
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <App history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
