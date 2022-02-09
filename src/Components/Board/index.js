import React from "react";
import Square from "../Square/";
function Board() {
  //! PROPS FROM 'GAME'
  // board state
  // makeAMove function

  //? Render the Square component using the board state array

  return (
    <div className="parent">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
}

export default Board;
