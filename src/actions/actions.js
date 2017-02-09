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
  console.log(model, email, review)
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
