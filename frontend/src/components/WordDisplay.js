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
      <h3 id="definition">definition</h3><p>{this.props.definition}</p>
      <h3 id="example">example</h3><p>{this.props.example}</p>
      </div>
    )
  }
}
