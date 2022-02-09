import React from "react";
import Square from "../Square/";
function Board() {
  //! PROPS FROM 'GAME'
  // board state
  // makeAMove function

  //? Render the Square component using the 'board' state array
  // each Square will have a unique index

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
