import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
    constructor(){
        super()
        this.state ={
            gifs: ['https://media.giphy.com/media/cjgWfTWnBbElO/giphy.gif', 'https://media.giphy.com/media/11M1k4fIwVqPF6/giphy.gif',
                'https://i.gifer.com/4Vvh.gif', 'https://media.giphy.com/media/1337mjZhdNJWSY/giphy.gif',
                'https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif', 'https://orig00.deviantart.net/5f09/f/2016/248/7/7/_gif__furious_typing_gif_by_pitool-dagn7q3.gif',
                'https://media.giphy.com/media/pALw8LdftuqAw/giphy.gif', 'https://media3.giphy.com/media/gUnRTJ0zqHJRe/giphy.gif',
                'https://i.gifer.com/KY7h.gif', 'https://media.giphy.com/media/XIqCQx02E1U9W/giphy.gif']
        }
    }
    render(){
        let gifs = this.state.gifs;
        let a = Math.floor(Math.random() * 10);
        let b = Math.floor(Math.random() * 9);
        let c = Math.floor(Math.random() * 8);
        let first = gifs[a];
        

        gifs.splice(a, 1);
        let second = gifs[b];
        
        gifs.splice(b,1)
        let third = gifs[c];

        return(
            <div>
                <h1>Welcome to TypeMania</h1>
                <p>
                    To the typing game that races your fingers against the clock. You're going to have to be SUPER to get a high score.
                </p>
                <br></br>
                <div>
                    <img alt='' src={first}/>
                    <img alt='' src={second}/>
                    <img alt='' src={third}/>
                </div>
                <p>
                    Are you ready?
                </p>
                <Link to='/username'>Get Started</Link>
            </div>
        )
    }
}

export default Home;
