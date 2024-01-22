// App.js
import "./App.css";
import React from "react";
import ContactI from "./components/ContactI";
import ContactL from "./components/ContactL";

const App = () => {
  return (
    <div>
      <h1 className="containerHeading">Contact Management App</h1>
      <ContactI />
      <ContactL />
    </div>
  );
};

export default App;
