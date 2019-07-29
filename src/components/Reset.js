import React, { Component } from "react";

class Reset extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-primary btn-sm">
          <i className="fa fa-undo" />
        </button>
      </div>
    );
  }
}

export default Reset;
