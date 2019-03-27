import React, { Component } from "react";

export default class Countdown extends Component {
  state = {
    count: 3,
    message: "",
    textLength: this.props.textLength
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ count: this.state.count - 1 });
    if (this.state.count === 0) {
      this.setState({ message: "You lose" });
      clearInterval(this.timer);
    }
  }

  startTimer() {
    clearInterval(this.timer);
    this.timer = setInterval(this.tick.bind(this), 1000);

    this.props.startbutton();
  }

  render() {
    console.log(this.state);
    console.log(this.props.textLength);
    return (
      <div>
        <div className="timer">
          <h1>{this.state.count}</h1>
          <div>
            <button onClick={this.startTimer.bind(this)}>Countdown</button>
            <p>{this.state.message}</p>
          </div>
        </div>
      </div>
    );
  }
}
