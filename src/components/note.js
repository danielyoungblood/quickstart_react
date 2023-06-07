import React from "react";
import "../css/note.css";
import { Checkbox } from "@material-ui/core";

function Note() {
  return (
    <div className="note">
      <Checkbox />
      <h3>Hello!</h3>
    </div>
  );
}

export default Note;
