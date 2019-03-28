import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div>
                <div id='n'>
                    <Link to='/'>Home </Link>
                    <Link to='/gamer'> Game </Link>
                </div>
                <div>
                    Please enter your username:
                </div>
                <br></br>
                <br></br>
                <form id='user-form'>
                    <input id='user-input'type='text' placeholder='username'/>
                    <button id='user-input' type='submit'>Submit</button>
                </form>
                
                <Link to='/gamer'>Start Game</Link>
            </div>
        )
    }
}

export default Home;