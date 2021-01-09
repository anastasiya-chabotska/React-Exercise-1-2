import "./App.css";
import HelloWorld from "./HelloWorld";
import React from "react";
import ContactCard from "./ContactCard";
import "./index.css";
import IncrementDecrement from "./IncrementDecrement";

// var divStyle = {
//   color: "red",
// };

function App() {
  return (
    <div className="App">
      <div className="container">
        <ContactCard
          name="Anastasiya Chabotska"
          workPhone="91750039319"
          email="anastasiyachabotska@gmail.com"
        />

        <ContactCard
          name="Anastasiya Chabotska"
          workPhone="91750039319"
          email="anastasiyachabotska@gmail.com"
        />

        <ContactCard
          name="Anastasiya Chabotska"
          email="anastasiyachabotska@gmail.com"
        />
      </div>
      <IncrementDecrement number={12} />
    </div>
  );
}

export default App;
