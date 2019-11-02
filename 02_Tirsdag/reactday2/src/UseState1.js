import React, { useState, useEffect } from 'react';
import './App.css';

function Task(props) {
    const [count, setCount] = useState(props.initial);
    
    
    useEffect(() => {
        const store = window.localStorage.getItem("count");
        
        window.localStorage.setItem("count", count)
        
        
    
    
});
    
    
    return (
    <div>
              
              
    <p> You have clicked {count} times</p>
     <button onClick={() => setCount(count + props.counter)}>Click me</button> 
     <button onClick={() => setCount(count - props.counter)}>Click me</button> 
     

</div>

    )
};



export default function App() {

    
    return (
        <div className="App">
    <Task initial={10} counter={20}/>
    </div>
    )

    
    };


