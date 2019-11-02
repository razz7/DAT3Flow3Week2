let URL = "http://localhost:3456/api";

//The two methods below, are the utility-methods introduced here (use them if you like):
//https://docs.google.com/document/d/1hF9P65v_AJKCjol_gFkm3oZ1eVTuOKc15V6pcb3iFa8/edit?usp=sharing

function makeOptions(method, body) {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json"
    }
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function apiFacade() {
  //OBSERVE This returns a promise, NOT the actual data, you must handle asynchronicity by the client
  function getPersons() {
    return fetch(URL).then(handleHttpErrors);
  }

  function addEditPerson(person) {
    //Complete me. A smart version will handle both Add and Edit, but focus on Add (POST) only first
    console.log("In APIFACADE");
    const options = makeOptions("POST", person);
    fetch(URL, options)
      .then(handleHttpErrors)
      .then(data => console.log(data))
      .catch(err => {
        if (err.status) {
          err.fullError.then(e => console.log(e.detail));
        }
      });
  }

  function deletePerson(id) {
    //Complete me
  }

  return {
    getPersons,
    addEditPerson,
    deletePerson
  };
}

export const returnValue = apiFacade();
export default returnValue;
