import React, { Component } from "react";

export default class Countdown extends Component {
  state = {
    count: 100
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    this.setState({ count: this.state.count - 1 });
  }
  startTimer() {
    clearInterval(this.timer);
    this.timer = setInterval(this.tick.bind(this), 1000);
    this.props.startButton();
  }
  stopTimer() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <div className="timer">
          <h1>{this.state.count}</h1>
          <div>
            <button onClick={this.startTimer.bind(this)}>Start</button>
            <button onClick={this.stopTimer.bind(this)}>Stop</button>
          </div>
        </div>
      </div>
    );
  }
}
