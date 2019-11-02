import React, { useState, useEffect } from 'react';
import './App.css';


export default function App() {

    const [joke, setJoke] = useState({value : "" });
    const [chuckSelector, setChuckSelector] = useState(false);
    const [dadJoke, setDadJoke] = useState({value: "" })
    const [dadSelector, setDadSelector] = useState(false);

useEffect(() => {
function fetchJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res=>res.json())
    .then(joke=> {setJoke(joke);})
    .catch(err => console.log(err))

}
fetchJoke();

},[chuckSelector]);

useEffect(() => {
    function fetchJoke2() { 
            fetch('https://icanhazdadjoke.com/', {
        headers: {
             Accept: 'application/json'
        } 
    }
   )
   .then(res=>res.json())
   .then(dadJoke=> {setDadJoke(dadJoke);})
   .catch(err => console.log(err))
    }
});



    return (

    <div>
<button onClick={() => setChuckSelector(!chuckSelector)}>Get Joke</button>


<p>{joke.value}</p>

<p>{dadJoke.joke}</p>
        
    </div>
    )
}