import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {

    const [date, setDate] = useState(new Date());


    useEffect(() => {
        var timerID = setInterval( () => tick(), 1000 );
       
        return function cleanup() {
            clearInterval(timerID);
          };
       });
       
         function tick() {
          setDate(new Date());
         }
       
         return (
            <div>
              <h2>It is {date.toLocaleTimeString()}.</h2>
            </div>
          );
      }