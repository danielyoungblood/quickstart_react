import React from "react";
import "../css/note.css";
import { Checkbox } from "@material-ui/core";

function Note(props) {
  return (
    <div className="note">
      <Checkbox />
      <h3>{props.msg}</h3>
    </div>
  );
}

export default Note;
