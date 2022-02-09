import React from "react";
import "./Square.css";

function Square({ value, onClick }) {
  const style = value ? `squares ${value}` : "squares";

  return (
    <div>
      <button className={style} onClick={onClick}>
        {value}
      </button>
    </div>
  );
}

export default Square;
