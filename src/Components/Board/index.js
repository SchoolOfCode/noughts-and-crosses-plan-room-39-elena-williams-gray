import React from "react";
import Square from "../Square/";
function Board({ playerTurn, makeAMove, boardArray }) {
  //! PROPS FROM 'GAME'
  // board state
  // makeAMove function

  //? Render the Square component using the 'board' state array
  // each Square will have a unique index

  return (
    <div className="parent">
      {boardArray.map(function (square, index) {
        return <Square index={index} />;
      })}
    </div>
  );
}

export default Board;
