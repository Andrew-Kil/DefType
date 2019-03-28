import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    name: "",
    message: "Welcome, ",
    submitted: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.setState({
    //   name: e.target.value,
    //   submitted: true,
    //   message: this.state.message + this.state.name
    // });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div id="n">
          <Link to="/">Home </Link>
          <Link to="/gamer"> Game </Link>
        </div>
        <div>Please enter your username:</div>
        <br />
        <br />
        <form id="user-form">
          <input
            id="user-input"
            type="text"
            placeholder="username"
            name="name"
            onChange={this.handleChange}
          />
          <button id="user-input" type="submit" onSubmit={this.handleSubmit}>
            Submit
          </button>
        </form>

        <p>{this.state.submitted ? this.state.message : null}</p>

        <Link to="/gamer">Start Game</Link>
      </div>
    );
  }
}

export default Home;
