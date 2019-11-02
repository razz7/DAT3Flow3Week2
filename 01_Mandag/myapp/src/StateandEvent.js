import React, { useState, useEffect } from "react";
import clock from "./clock";

function Task(props) {
  const [count, setCount] = useState(props.initial);
  useEffect(() => window.localStorage.setItem("count", count), [count]);
  return (
    <div>
      <button onClick={() => setCount(count + props.counter)}>
        Tryk her for at add.
      </button>
      <p>du klikkede {count}</p>
      <button onClick={() => setCount(count - props.counter)}>
        vil du trække fra?
      </button>
    </div>
  );
}

export default function state() {
  return (
    <div className="state">
      <p>Det nice</p>
      <Task counter={1} initial={4} />
      <clock />
    </div>
  );
}
