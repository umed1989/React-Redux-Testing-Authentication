import { Provider } from "react-redux";
import { createStore } from "redux";
import React from "react";
import reducers from "reducers";

export default props => {
  return (
    <Provider store={createStore(reducers, {})}>{props.children}</Provider>
  );
};
