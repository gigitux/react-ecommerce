import * as types from '../actions/actiontypes';

const initialState = {
};

export default function device (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_DEVICES_SUCCESS:
      return {
        devices: action.payload
      };
    default:
      return state;
  }
}
