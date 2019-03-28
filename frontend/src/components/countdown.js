import React, { Component } from "react";

export default class Countdown extends Component {
  state = {
    count: 60,
    message: "",
    textLength: this.props.textLength,
    start: false
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
    this.setState({
      start: true
    });
  }

  render() {
    console.log(this.state);
    console.log(this.props.textLength);
    return (
      <div>
        <div className="timer">
          <h1>{this.state.start ? this.state.count : "Press start"}</h1>
          <div>
            <button onClick={this.startTimer.bind(this)}>Start</button>
            <p>{this.state.message}</p>
          </div>
        </div>
      </div>
    );
  }
}
