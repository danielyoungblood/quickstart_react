import React from "react";
import "../css/input.css";

function Input(props) {
  function handleSubmission(e) {
    e.preventDefault();
    props.changeNotes([...props.notes, "hi!"]);
    console.log("I'm in here!");
    console.log(props.notes);
  }

  function handleChange() {}

  return (
    <div className="input">
      <form action="/" onSubmit={handleSubmission}>
        <input
          autocomplete="off"
          onChange={handleChange}
          id="note"
          placeholder="What's on your mind?"
        />
        <input type="submit" id="submit" />
      </form>
    </div>
  );
}

export default Input;
