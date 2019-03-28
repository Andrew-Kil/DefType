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
        <h1 id="your-score">Your score is:</h1>
        <h3 id="your-score-number">{this.props.score}</h3>
        <br />
        <br />
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
