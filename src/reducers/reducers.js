import * as types from '../actions/actiontypes';

const initialState = {
};

export default function device (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_DEVICES_SUCCESS:
      return {
        devices: action.payload
      };
    case types.FETCH_SPECIFIC_DEVICE_SUCCESS:
      return {
        ...state,
        specific_device: action.payload
      };
    case types.LOGIN_SUCCESS:
      sessionStorage.setItem('user', JSON.stringify(action.payload));
      location.reload();
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
