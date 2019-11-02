import React, { useState } from "react";
import "./App.css";
import PersonList from "./PersonList";
import uuid from "uuid/v1";
import NewPerson from "./NewPerson";

function App() {
  const initialData = [{ id: uuid(), personName: "Rasmus" }];
  const [persons, setPersons] = useState(initialData);
  const [newPerson, setNewPerson] = useState({ id: "", personName: "" });

  const addPerson = person => {
    if (person.id === "") {
      // id=-1 Indicates a new object
      person.id = uuid();
      persons.push(person);
    } else {
      //if id != "", it's an existing todo. Find it and add changes
      let personToEdit = persons.find(p => p.id === person.id);
      personToEdit.personName = person.personName;
    }
    setPersons([...persons]);
    setNewPerson({ id: "", todoText: "" });
  };

  const deletePerson = index => {
    const deleted = persons.filter(person => person.id !== index);
    setPersons([...deleted]);
    setNewPerson({ id: "", todoText: "" });
  };
  const editPerson = person => {
    addPerson(person);
    setNewPerson(person);
  };

  return (
    <div className="container outer">
      <h2>LiftingState2</h2>

      <div class="row">
        <div>
          <PersonList
            persons={persons}
            deletePerson={deletePerson}
            editPerson={editPerson}
          />
        </div>
        <div>
          <NewPerson addPerson={addPerson} nextPerson={newPerson} />
        </div>
      </div>
    </div>
  );
}
export default App;
