import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposeComponent extends Component {
    componentDidMount() {
      return this.shouldNavigateAway();
    }

    componentDidUpdate() {
      return this.shouldNavigateAway();
    }
    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      auth: state.auth
    };
  }
  return connect(mapStateToProps)(ComposeComponent);
};
