import React, { Component } from "react";
import { Link } from "react-router-dom";

class EndGame extends Component {
  constructor() {
    super();
    this.state = {
      hi: 0
    };
  }

  render() {
    let score = this.props;
    return (
      <div className="App">
        <div id="congratulations">Congrats User!</div>
        <div>Your score is: {this.props.score}</div>
        <button onClick={this.props.handleNewGame}>
          <Link to="/gamer">Play again?</Link>
        </button>
        Or
        <button>
          <Link to="/">Quit</Link>
        </button>
      </div>
    );
  }
}

export default EndGame;
