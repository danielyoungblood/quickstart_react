import React from "react";
import "../css/input.css";

function Input(props) {
  function handleSubmission(e) {
    console.log("handleSubmission entered");
    console.log("props.notes: " + props.notes);
    try {
      if (props.note === "") {
        props.changeNote("");
      } else {
        props.changeNotes([...props.notes, props.note]);
        props.changeNote("");
      }
    } catch (error) {
      console.log("error occurred: " + error);
    }
    e.preventDefault();
  }

  function handleChange(e) {
    var value = e.target.value;
    props.changeNote(value);
  }

  return (
    <div className="input">
      <form action="/" onSubmit={handleSubmission}>
        <input
          autoComplete="off"
          onChange={handleChange}
          id="note"
          placeholder="What's on your mind?"
          value={props.note}
        />
        <input type="submit" id="submit" />
      </form>
    </div>
  );
}

export default Input;
