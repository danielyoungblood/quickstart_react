import React from "react";
import "../css/app.css";
import Note from "./note";
import Input from "./input";
import { useState } from "react";

function App() {
  const [notes, changeNotes] = useState([]);
  const [note, changeNote] = useState("");

  function handleRemoval(id) {
    changeNotes(notes.filter((_, i) => i !== id));
  }
  return (
    <div className="app">
      <h1>My TO-DO List</h1>
      {notes.map((element, index) => (
        <Note msg={element} id={index} remove={handleRemoval} />
      ))}

      <Input
        notes={notes}
        changeNotes={changeNotes}
        note={note}
        changeNote={changeNote}
      />
    </div>
  );
}

export default App;
