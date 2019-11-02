import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UseState from './UseState1'
import SeeTime from './SeeTime'
import Fetch from './Fetch'
import ListDemo from './ListDemoApp'
import ListDemo2 from './ListDemoApp2'

let app = <ListDemo2/>

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
         <a href="/"  className="x" id="usestate">count</a> &nbsp;
         <a href="/"  className="x" id="seetime">seetime</a> &nbsp;
         <a href="/"  className="x" id="fetch">fetch</a> &nbsp;
         <a href="/"  className="x" id="listdemo">Listdemo</a> &nbsp;
         <a href="/"  className="x" id="listdemo2">Listdemo2</a> &nbsp;
         {/* Add as many as you have exercises, but remember className="x" */}
         {app}
        </div>
    )
}

function handleSelect(event) {
    event.preventDefault();
    if(event.target.className!=="x"){
      return
    }  
    const id = event.target.id;
    switch (id) {
        case "usestate": app = <UseState />; break;
        case "seetime": app = <SeeTime />; break;
        case "fetch": app = <Fetch />; break;
        case "listdemo": app = <ListDemo />; break;
        case "listdemo2": app = <ListDemo2 />; break;
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));