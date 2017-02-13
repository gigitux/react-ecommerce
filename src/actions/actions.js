import * as types from '../actions/actiontypes';
import { CALL_API } from 'redux-api-middleware';

export function fetch_devices () {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:9000/api/devices',
      method: 'POST',
      types: [
        types.FETCH_DEVICES_REQUEST,
        {
          type: types.FETCH_DEVICES_SUCCESS,
          payload: (action, state, res) => {
            return res.json();
          }
        },
        'FAILURE'
      ]
    }
  };
}

export function fetch_specific_device (model) {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:9000/api/shop/' + model,
      method: 'GET',
      types: [
        types.FETCH_SPECIFIC_DEVICE_REQUEST,
        {
          type: types.FETCH_SPECIFIC_DEVICE_SUCCESS,
          payload: (action, state, res) => {
            return res.json();
          }
        },
        'FAILURE'
      ]
    }
  };
}

export function login (username, password) {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:9000/api/login/',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: username,
        password: password
      }),
      types: [
        types.LOGIN_REQUEST,
        {
          type: types.LOGIN_SUCCESS,
          payload: (action, state, res) => {
            return res.json();
          }
        },
        'FAILURE'
      ]
    }
  };
}

export function addcomment (model, email, review) {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:9000/api/addcomment',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        model: model,
        email: email,
        review: review
      }),
      types: [
        types.ADDCOMMENT_REQUEST,
        {
          type: types.ADDCOMMENT_SUCCESS,
          payload: (action, state, res) => {
            return res.json();
          }
        },
        'FAILURE'
      ]
    }
  };
}

export function addtocart (model, price) {
  return {
    type: types.ADDTOCART,
    model,
    price
  };
}

export function registration (name, surname, email, password) {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:9000/api/registration/',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: name,
        surname: surname,
        email: email,
        password: password
      }),
      types: [
        types.REGISTRATION_REQUEST,
        {
          type: types.REGISTRATION_SUCCESS,
          payload: (action, state, res) => {
            return res.json();
          }
        },
        'FAILURE'
      ]
    }
  };
}

export function checkout (device) {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:9000/api/checkout',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        device: device
      }),
      types: [
        types.CHECKOUT_REQUEST,
        {
          type: types.CHECKOUT_SUCCESS,
          payload: (action, state, res) => {
            return res.json();
          }
        },
        'FAILURE'
      ]
    }
  };
}
export function find_element_sidebar () {
  return {
    [CALL_API]: {
      endpoint: 'http://localhost:9000/api/sidebar',
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      types: [
        types.SIDEBAR_REQUEST,
        {
          type: types.SIDEBAR_SUCCESS,
          payload: (action, state, res) => {
            return res.json();
          }
        },
        'FAILURE'
      ]
    }
  };
}
