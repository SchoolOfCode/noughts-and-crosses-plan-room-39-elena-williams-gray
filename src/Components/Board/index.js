import React from "react";
import Square from "../Square/";
import "./Board.css";
function Board({ boardArray, makeAMove }) {
  return (
    <div className="box">
      <div className="parent">
        {boardArray.map((square, index) => (
          <Square key={index} value={square} onClick={() => makeAMove(index)} />
        ))}
      </div>
    </div>
  );
}

export default Board;
