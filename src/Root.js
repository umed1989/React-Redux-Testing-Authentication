import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import React from "react";
import reducers from "reducers";

export default ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware());
  return <Provider store={store}>{children}</Provider>;
};
