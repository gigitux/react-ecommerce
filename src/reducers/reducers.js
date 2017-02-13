import * as types from '../actions/actiontypes';

const initialState = {
  price: 0
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
    case types.ADDTOCART:
      if (sessionStorage.cart == null) {
      var cart_elements_stringy = JSON.stringify([action]);
      sessionStorage.setItem("cart", cart_elements_stringy)
      } else {
        var cart_elements_array = JSON.parse(sessionStorage.cart);
        cart_elements_array.push(action);
        cart_elements_stringy = JSON.stringify(cart_elements_array);
        sessionStorage.setItem("cart", cart_elements_stringy);
      }
      break;
    case types.ADDCOMMENT_SUCCESS:
    location.reload();
      break;
    case types.REGISTRATION_SUCCESS:
    location.reload();
      break;
    case types.CHECKOUT_SUCCESS:
    alert("Acquisto Effettuato");
    return {
      ...state
    };
      break;
    case "FAILURE":
    alert("Acquisto Fallito");
      break;
    case types.SIDEBAR_SUCCESS:
      return {
        ...state,
        sidebar: action.payload
      };
    default:
      return state;
  }
}
