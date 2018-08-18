import React, { Component } from "react";

export default ChildComponent => {
  class ComposeComponent extends Component {
    render() {
      return <ChildComponent />;
    }
  }
  return ComposeComponent;
};
