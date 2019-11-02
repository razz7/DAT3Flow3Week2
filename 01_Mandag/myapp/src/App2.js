import React from "react";
import person, { males, females } from "./file2";

const newPerson = {
  firstname: person.firstName,
  email: person.email
};

const personV2 = {
  firstname: person.firstName,
  email: person.email,
  gender: person.gender,
  lastname: person.lastName,
  phone: 123456,
  friends: [...males, ...females]
};

function App2() {
  return (
    <div className="App">
      <p>{newPerson.firstname}</p>
      <p>{newPerson.email}</p>
    </div>
  );
}

console.log(...males, ...females);
//One way
console.log(...males, ...females, +"tina");
//other way
const arr2 = [...males, ...females].concat("Tina");
console.log(arr2);

console.log(personV2);
export default App2;
