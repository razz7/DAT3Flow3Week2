import React, { useState } from "react";

const NameForm = () => {
  const initialState = { name: "" };
  const [person, setPerson] = useState(initialState);

  function handleChange(event) {
    const target = event.target;
    const id = target.id;
    const value = target.value;
    setPerson({ ...person, [id]: value });
  }
  function handleSubmit(event) {
    alert("hej " + person.name);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            id="name"
            type="text"
            value={person.name}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {person.name}
    </div>
  );
};

export default function FormDemo() {
  return (
    <div style={{ marginTop: 25 }}>
      <NameForm />
    </div>
  );
}
