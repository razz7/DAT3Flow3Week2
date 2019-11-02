import React, { useState, useEffect } from "react";
 import './App.css';
function NumberList(props) {
    const numbers = props.numbers;
    console.log("--NUMBERS -->",numbers)
  
  const listItems = numbers.map((n, index) => 
  
  <ListItem key={index} number={n}/>
  
  );
  return  (
      <ul>
    {listItems}
        </ul>
  )
}



function ListItem(props) {
return <li>{props.number}</li>;

}



function ListDemo(props) {

  console.log(props.numbers)
  return (
    <div>
      <h2>All numbers passed in via props</h2>
      <NumberList numbers={props.numbers} />
    </div>
  );
}
export default function App() {
    useEffect(() => {

        const timerID = setInterval(() => addNumber(), 5000);
        return function cleanup() {
            clearInterval(timerID);
        }

     });
     
    function addNumber() {
    setNumbers([...numbers, 10]);
         
         
     }
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);
  return <ListDemo numbers={numbers} />;
}
