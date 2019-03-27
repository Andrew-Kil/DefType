import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div>
                <h1>Welcome</h1>
                <br></br>
                <Link to='/gamer'>Start Game</Link>
            </div>
        )
    }
}

export default Home;
