import * as types from '../actions/actiontypes';
import { CALL_API } from 'redux-api-middleware';

export function fetch_devices () {
  console.log("blabla")
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
