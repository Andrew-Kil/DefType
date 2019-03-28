import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div>
                <h1>Welcome</h1>
                <p>
                    To the typing game that races your fingers against the clock. You're going to have to be SUPER to get a high score.
                </p>
                <br></br>
                <div>
                    <img alt='' src='https://media.giphy.com/media/cjgWfTWnBbElO/giphy.gif'/>
                </div>
                <p>
                    Are you ready?
                </p>
                <Link to='/gamer'>Start Game</Link>
            </div>
        )
    }
}

export default Home;
