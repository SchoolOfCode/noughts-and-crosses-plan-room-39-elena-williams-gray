import React, { useState } from "react";
import Board from "../Board";
import { calculateWinner } from "../../cal";

function Game() {
  const [boardArray, setBoardArray] = useState(Array(9).fill(null));
  const [playerTurn, setplayerTurn] = useState(false);

  const winner = calculateWinner(boardArray);
  const currentPlayer = playerTurn ? "X" : "O";

  function makeAMove(index) {
    if (winner || boardArray[index]) {
      return;
    }
    setBoardArray([
      ...boardArray.slice(0, index),
      currentPlayer,
      ...boardArray.slice(index + 1),
    ]);

    setplayerTurn(!playerTurn);
  }

  return (
    <div>
      <h1>Welcome GRRRRRR the game!</h1>
      <Board boardArray={boardArray} makeAMove={makeAMove} />
    </div>
  );
}
export default Game;
/* <h1>Player Turn:{playerTurn ? "X" : "O"}</h1>
      <h2>Winner is {playerTurn ? "X" : "O"}</h2> */
