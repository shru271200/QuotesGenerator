import React from "react";
import "../Quotes/Quotes.css";

function Quotesauthor({ author, color }) {
    return (
      <div className="quote-author" style={{ color: color }}>
        <span id="text">{author}</span>
      </div>
    );
  }
export default Quotesauthor