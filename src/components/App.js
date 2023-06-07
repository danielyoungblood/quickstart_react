import React from "react";
import "../css/app.css";
import Note from "./note";
import Input from "./input";

function App() {
  return (
    <div className="app">
      <Note />
      <Input/>
    </div>
  );
}

export default App;
