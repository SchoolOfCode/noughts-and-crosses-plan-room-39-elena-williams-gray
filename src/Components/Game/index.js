import React, { useState } from "react";
import Board from "../Board";

function Game() {
  const [playerTurn, setplayerTurn] = useState(true);
  const [boardArray, setBoardArray] = useState([1,2,3,4,5,6,7,8,9]);
  //! create two bits of state to hold
  // the current player turn
  // the board (an array of arrays)

  //! Behaviour/Functions
  function makeAMove() {
    console.log(`make a move function`);
    //? makeAMove function
    // if the square is not empty you can't pick it
    // if the square is empty, you can pick it
    // it puts the players symbol in that square
    // it changes the 'state' of board

    setplayerTurn(!false)
  }

  function checkWinner() {
    console.log(`check the winner`);
    //? checkWinner function
    // check if the board state matched any of the 'win conditions'
    // if there is the game ends and the previous player wins
  }

  return (
    <div>
      <Board boardArray={boardArray} playerTurn={playerTurn} makeAMove={makeAMove} />

      {
        //! pass PROPS of 'board' array and makeAMove function
        // render the Board component
        // who's turn it is
        // Winner
      }
      <h1>Player Turn:{playerTurn ? "X" : "0"}</h1>
      <h2>Winner is?</h2>
    </div>
  );
}
export default Game;
