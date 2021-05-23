import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import HomeAuth from './home';

export default () => {

  return (
    <Provider store={store}>
      <HomeAuth />
    </Provider>
  );
};
