import React from "react";
import "../Quotes/Quotes.css";
function Buttons(props) {
  return (
    <div className="buttons">
      <button
        id={props.id}
       
        onClick={props.handleClick}
        style={{ color: "white", backgroundColor: props.color }}
        className="button"
      >
        New
      </button>
    </div>
  );
}

export default Buttons;
