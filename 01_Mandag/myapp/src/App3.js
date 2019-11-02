import React from "react";
import PropTypes from "prop-types";
import { names } from "./file2";

function Welcome(props) {
  return <h1>hello, {props.name}</h1>;
}
Welcome.propTypes = {
  name: PropTypes.string.isRequired
};

function WelcomePerson(props) {
  return (
    <p>
      Hello, {props.person.firstName} or should i say mr.{props.person.lastName}
      . Your email is {props.person.email}
    </p>
  );
}

WelcomePerson.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <Welcome />
      <Welcome name={45} />
      <WelcomePerson person={names[0]} />
      <WelcomePerson person={names[1]} />
      <WelcomePerson person={names[2]} />
    </div>
  );
}

export default App;
