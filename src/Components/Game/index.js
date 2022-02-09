import React from "react";
import Board from "../Board";

function Game() {
  //! create two bits of state to hold
  // the current player turn
  // the board (an array of arrays)

  //! Behaviour/Functions

  //? makeAMove function
  // if the square is not empty you can't pick it
  // if the square is empty, you can pick it
  // it puts the players symbol in that square
  // it changes the 'state' of board

  //? checkWinner function
  // check if the board state matched any of the 'win conditions'
  // if there is the game ends and the previous player wins
  return (
    <div>
      {
        // render the Board component
        // who's turn it is
        // Winner
      }
    </div>
  );
}
export default Game;
