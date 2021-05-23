import { combineReducers } from 'redux'
import axios from "axios";
import dummyDataCart from "../../pages/dummyDataCart";

const initialState = {
  userinfo: null,
  homeLoadingState:true,
  shoppingCartData:[]
};


const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "USER_INFO":
      return { ...state, userinfo: action.payload };
    case "ADD_CART":
      return { ...state, shoppingCartData: action.payload };
    case "HOME_STATE":
      return { ...state, homeLoadingState: action.payload };
    default:
      return state;
  }
};
export default combineReducers({
  reducer
});
