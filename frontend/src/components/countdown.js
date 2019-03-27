import React, { Component } from "react";

export default class countdown extends Component {
  state = {
    time: 10
  };

  countdown = () => {
    this.setState({ time: this.state.time - 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.time}</p>
      </div>
    );
  }
}
