import React from "react";
import "../css/app.css";
import Note from "./note";
import Input from "./input";
import { useState } from "react";

function App() {
  const [notes, changeNotes] = useState([]);
  return (
    <div className="app">
      <h1>My TO-DO List</h1>
      {notes.map((element) => (
        <Note msg={element} />
      ))}

      <Input notes={notes} changeNotes={changeNotes} />
    </div>
  );
}

export default App;
