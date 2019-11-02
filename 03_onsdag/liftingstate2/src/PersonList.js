import React from "react";
import PropTypes from "prop-types";

const PersonList = ({ persons, deletePerson, editPerson }) => {
  return (
    <React.Fragment>
      <h2>All Persons</h2>
      <table>
        <tr>
          <th>id</th>
          <th>Name</th>
        </tr>
        {persons.map(person => (
          <tr key={person.id}>
            <td>{person.id} </td>
            <td>{person.personName}</td>
            <a
              href="#/"
              onClick={e => {
                e.preventDefault();
                deletePerson(person.id);
              }}
            >
              {" "}
              (delete{" "}
            </a>
            <a href="#/" onClick={() => editPerson(person)}>
              , edit){" "}
            </a>
          </tr>
        ))}
      </table>
    </React.Fragment>
  );
};
export default PersonList;

PersonList.propTypes = {
  todos: PropTypes.array
};
