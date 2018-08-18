import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class CommentBox extends Component {
  state = { comment: "" };

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
  handleChage = e => {
    this.setState({ comment: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChage} value={this.state.comment} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  actions
)(CommentBox);
