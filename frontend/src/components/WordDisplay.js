import React, { Component } from 'react'

export default class WordDisplay extends Component {
  state = {

  }
  render(){
    // console.log(this.props);
    // <h1>Word: </h1><p>{this.props.word}</p>
    return(
    <div>



      <h1 >{this.props.userInput}</h1>
      <h3>definition</h3><p>{this.props.definition}</p>
      <h3>example</h3><p>{this.props.example}</p>
      </div>
    )
  }
}
