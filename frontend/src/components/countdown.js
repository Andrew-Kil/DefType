import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Countdown extends Component {
  state = {
    count: 32,
    message: "",
    // textLength: this.props.textLength,
    start: false
    // playerState: this.props.playerState
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ count: this.state.count - 1 });
    if (this.state.count === 0) {
      this.setState({ message: "Time's Up" });
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
        <div
          className={
            this.state.count >= 30
              ? "timer1"
              : this.state.count >= 20
              ? "timer2"
              : this.state.count >= 10
              ? "timer3"
              : "timer4"
          }
        >
          <h1>
            {this.state.start ? (
              <span>
                Time Left:
                <br />
                {this.state.count}
              </span>
            ) : (
              "Press start"
            )}
          </h1>
          <div>
            {this.props.go ? null : (
              <button onClick={this.startTimer.bind(this)} id="start-button">
                Start
              </button>
            )}
            <p>{this.state.message}</p>
          </div>
        </div>
      </div>
    );
  }
}
