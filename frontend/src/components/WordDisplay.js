import React, { Component } from "react";

export default class WordDisplay extends Component {
  state = {};
  render() {
    // console.log(this.props);
    // <h1>Word: </h1><p>{this.props.word}</p>
    return (
      <div className="gamer-container">
        <h4 style={{ textDecoration: "underline" }}>Your Input:</h4>
        <h1 id="user-input">{this.props.userInput}</h1>
        <h3 id="definition">definition</h3>
        <h2>{this.props.definition}</h2>
        <h3 id="example">example</h3>
        <p>{this.props.example}</p>
      </div>
    );
  }
}
