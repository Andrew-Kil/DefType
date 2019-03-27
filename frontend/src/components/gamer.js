import React, { Component } from "react";
import WordDisplay from "../WordDisplay";
import Countdown from "./countdown";

class Gamer extends Component {
  state = {
    word: "",
    type: "",
    example: "",
    definition: "",
    userInput: "",
    go: false,
    playerstate: 2,
    error: "go on..",
    points: 0
  };

  componentDidMount() {
    this.setState({
      //ace
      word: "ace",
      // word:res.data.results[0].lexicalEntries[0].text,

      //NOUN
      type: "noun",
      // type:res.data.results[0].lexicalEntries[0].lexicalCategory,

      example: "life had started dealing him aces again",
      // example:res.data.results[0].lexicalEntries[0].entries[0].senses[0].examples[0].text,

      definition:
        "a playing card with a single spot on it, ranked as the highest card in its suit in most card games example"
      // definition:res.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0],
    });
    // axios
    //   .get('https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com:443/api/v1/entries/en/ace',{ headers: {
    //     "Accept": "application/json",
    //     "app_id": "0296bd0a",
    //     "app_key": "5a0766a941eb5287bafeab007dc348c8"
    //   } })
    //     .then(res => {
    //
    //
    //       this.setState({
    //         //ace
    //         word:'ace',
    //         // word:res.data.results[0].lexicalEntries[0].text,
    //
    //         //NOUN
    //         type:'noun',
    //         // type:res.data.results[0].lexicalEntries[0].lexicalCategory,
    //
    //
    //         example: "life had started dealing him aces again",
    //         // example:res.data.results[0].lexicalEntries[0].entries[0].senses[0].examples[0].text,
    //
    //         definition:"a playing card with a single spot on it, ranked as the highest card in its suit in most card games example"
    //         // definition:res.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0],
    //       })
    //
    //     })
  }
  handleChange = e => {
    console.log(e);
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log("length", this.state.userInput.length);
    console.log(this.state.userInput);
    console.log(this.state.definition[this.state.userInput.length]);
  };

  startButton = e => {
    this.setState({
      go: true
    });
  };

  checkEqual = () => {
    if (this.state.userInput === this.state.definition) {
      this.setState({
        playerState: 1
      });
    } else if (this.state.userInput !== this.state.definition) {
      this.setState({
        playerState: 0
      });
    } else {
      this.setState({
        playerState: 2
      });
    }
  };

  handleKey = e => {
    console.log(e.key);

    if (e.key === "Backspace") {
      this.setState({ points: this.state.points - 2 });
    } else if (
      this.state.userInput[this.state.userInput.length - 1] ===
      this.state.definition[this.state.userInput.length - 1]
    ) {
      this.setState({
        error: "go on..",
        points: this.state.points + 2
      });
    } else {
      this.setState({
        error: "u typed something wrong",
        points: this.state.points - 1
      });
    }

    if (this.state.userInput.length === this.state.definition.length) {
      this.checkEqual();
    }
  };

  render() {
    return (
      <div className="App">
        <Countdown
          startbutton={this.startButton}
          handleChange={this.handleChange}
          textLength={this.state.definition.length}
        />
        <h3>{this.state.points} point(s)</h3>

        <button onClick={this.startButton} id="start-button">
          Start Typing
        </button>
        <br />
        <h1 id="word">{this.state.word}</h1>
        <p id="type">{this.state.type}</p>
        {this.state.go ? (
          <input
            id="userInput"
            autoComplete="off"
            onKeyDown={this.handleKey}
            onChange={this.handleChange}
            placeholder="Type the word definition here"
            value={this.state.userInput}
            type="text"
          />
        ) : (
          <h1>Press Start To begin</h1>
        )}

        <h3>{this.state.error}</h3>
        <WordDisplay
          go={this.state.go}
          word={this.state.word}
          userInput={this.state.userInput}
          type={this.state.type}
          definition={this.state.definition}
          example={this.state.example}
        />
        {this.state.playerState === 1 ? (
          <h1>You have won</h1>
        ) : this.state.playerState === 0 ? (
          <h1>You have lost</h1>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Gamer;
