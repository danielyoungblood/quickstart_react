import React from "react";
import "../css/note.css";
import { Checkbox } from "@material-ui/core";

function Note(props) {
  function removeNote() {
    props.remove(props.id);
  }
  return (
    <div className="note">
      <Checkbox checked={false} onClick={removeNote} />
      <h3>{props.msg}</h3>
    </div>
  );
}

export default Note;
