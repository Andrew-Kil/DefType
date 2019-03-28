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
      <div>
        <div id="congratulations">Congrats User!</div>
        <div>Your score is:</div>
        <div id="score">Put variable here</div>
        <button>
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
