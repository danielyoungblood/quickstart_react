import React from "react";
import "../css/input.css";

function Input() {
  return (
    <div className="input">
      <form action="/">
        <input
          autocomplete="off"
          id="note"
          placeholder="What's on your mind?"
        />
        <input type="submit" id="submit" />
      </form>
    </div>
  );
}

export default Input;
