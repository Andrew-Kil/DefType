import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div>
                <h1 id='home-title'>App Name</h1>
                <br></br>
                <button id='start-button'><Link to='/gamer'>Start Game</Link></button>
                <img alt='' href='https://media.giphy.com/media/cjgWfTWnBbElO/giphy.gif'/>
            </div>
        )
    }
}

export default Home;