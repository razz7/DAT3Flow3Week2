import React, { useState, useEffect } from "react";
import CountryTable from "./CountryTable";
import "./App.css";

const App = ({ factory }) => {
  const [labels, setLabels] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    updateData();
    const fetchTimer = setInterval(() => {
      updateData();
    }, 20000);
  }, []);

  const updateData = () => {
    factory.getLabels().then(data => {
      setLabels(data);
    });

    factory.getCountries().then(data => {
      setCountries(data);
    });
  };

  return (
    <div>
      <div className="App-header">
        <h2>React Country</h2>
      </div>
      <div className="App-intro">
        <CountryTable labels={labels} countries={countries} />
      </div>
    </div>
  );
};

export default App;
