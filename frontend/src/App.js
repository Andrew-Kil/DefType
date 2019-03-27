import React, { Component } from 'react';
import './App.css';
// import axios from 'axios'
import WordDisplay from './WordDisplay'

// let headers = {
//   "Accept": "application/json",
//   "app_id": "0296bd0a",
//   "app_key": "5a0766a941eb5287bafeab007dc348c8"
// }

// type word then when space is pushed is added to array
// then arrayInput is compared with definitionArray
class App extends Component {
  state = {
    word:'',
    type:'',
    example:'',
    definition:'',
    userInput:'',
    go:false,
    playerstate:2,
    error:'go on..'

  }
  componentDidMount(){
    this.setState({
      //ace
      word:'ace',
      // word:res.data.results[0].lexicalEntries[0].text,

      //NOUN
      type:'noun',
      // type:res.data.results[0].lexicalEntries[0].lexicalCategory,


      example: "life had started dealing him aces again",
      // example:res.data.results[0].lexicalEntries[0].entries[0].senses[0].examples[0].text,

      definition:"a playing card with a single spot on it, ranked as the highest card in its suit in most card games example"
      // definition:res.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0],
    })
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
    console.log("THIS IS DEF",this.state.definition)
  }
  handleChange = e => {
    this.setState({
      [e.target.id]:e.target.value
    })
    if((this.state.userInput[this.state.userInput.length-1])===(this.state.definition[this.state.userInput.length-1])){
      console.log("wooaahh");
      this.setState({
        error:'go on..'
      })

    }else{
      console.log('try again', this.state.definition.length);
      this.setState({
        error:"u typed something wrong"
      })
    }
    if(this.state.userInput.length-1===this.state.definition.length-1){
      this.checkEqual()
    }

    // (this.state.definition[this.state.userInput.length-1])
  }
  startButton = e => {
    this.setState({
      go:true
    })

  }
  checkEqual = () => {

    if(this.state.userInput===this.state.definition){
      this.setState({
        playerState:1,

      })
    }else if(this.state.userInput!==this.state.definition){
      this.setState({
        playerState:0,

      })
    }else{
      this.setState({
        playerState:2,

      })
    }
  }
  arrayify = (def) => {

      let out =def.split(' ')
      console.log(out);
  }
  check = e => {


      // if(e.keyCode === 32){
      //     console.log("space has been clicked");
      // }
  }

  render() {
    // console.log("this is userIn",this.state.userInput);
    // console.log('this is userin length',this.state.userInput.length);
    // console.log('this is userIn length at 1',this.state.userInput[1]);

    return (
      <div className="App">
        <h1>{this.state.word}</h1>
        <p>{this.state.type}</p>
        <button onClick={this.startButton}>Start</button><br/>
        {this.state.go?<input  id='userInput'  onKeyDown={this.spaceCheck} onChange={this.handleChange} placeholder='Type the word definition here' value={this.state.userInput} type='text'/>:<h1>Press Start To begin</h1>}
        <h3>{this.state.error}</h3>
        <WordDisplay go={this.state.go} word={this.state.word} userInput={this.state.userInput} type={this.state.type} definition={this.state.definition} example={this.state.example}/>
        {this.state.playerState===1?<h1>You have won</h1>:this.state.playerState===0?<h1>You have lost</h1>:""}
      </div>
    );
  }
}

export default App;
