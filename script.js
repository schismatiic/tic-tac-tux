function Player(name, marker) {
  let score = 0;
  let playerChoise;
  const newChoise = (choise) => {
    playerChoise = choise;
    return playerChoise;
  };
  const getScore = () => score;
  const increaseScore = () => {
    score++;
  };
  return { name, marker, newChoise, getScore, increaseScore };
}
function Gameboard() {
  const gameboard = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  const changeGameboard = (newChoise, marker) => {
    if (gameboard[newChoise] !== "X" && gameboard[newChoise] !== "O") {
      if (marker === "X") {
        gameboard[newChoise] = "X";
      } else if (marker === "O") {
        gameboard[newChoise] = "O";
      }
    }
  };
  const getGameboard = () => gameboard;
  const checkGame = (playerMarker) => {
    if (
      (gameboard[0] === "X" && gameboard[4] === "X" && gameboard[8] === "X") ||
      (gameboard[2] === "X" && gameboard[4] === "X" && gameboard[6] === "X") ||
      (gameboard[0] === "X" && gameboard[1] === "X" && gameboard[2] === "X") ||
      (gameboard[3] === "X" && gameboard[4] === "X" && gameboard[5] === "X") ||
      (gameboard[6] === "X" && gameboard[7] === "X" && gameboard[8] === "X") ||
      (gameboard[0] === "X" && gameboard[3] === "X" && gameboard[6] === "X") ||
      (gameboard[1] === "X" && gameboard[4] === "X" && gameboard[7] === "X") ||
      (gameboard[2] === "X" && gameboard[5] === "X" && gameboard[8] === "X") ||
      (gameboard[0] === "O" && gameboard[4] === "O" && gameboard[8] === "O") ||
      (gameboard[2] === "O" && gameboard[4] === "O" && gameboard[6] === "O") ||
      (gameboard[0] === "O" && gameboard[1] === "O" && gameboard[2] === "O") ||
      (gameboard[3] === "O" && gameboard[4] === "O" && gameboard[5] === "O") ||
      (gameboard[6] === "O" && gameboard[7] === "O" && gameboard[8] === "O") ||
      (gameboard[0] === "O" && gameboard[3] === "O" && gameboard[6] === "O") ||
      (gameboard[1] === "O" && gameboard[4] === "O" && gameboard[7] === "O") ||
      (gameboard[2] === "O" && gameboard[5] === "O" && gameboard[8] === "O")
    ) {
      console.log(`${playerMarker} Wins!`);
    } else {
      console.log("Draw!");
    }
  };

  return { getGameboard, changeGameboard, checkGame };
}
const firstPlayer = Player("Schism", "X");
const secondPlayer = Player("Moth", "O");

const gameboard = Gameboard();
gameboard.changeGameboard(secondPlayer.newChoise(0), secondPlayer.marker);
gameboard.changeGameboard(firstPlayer.newChoise(1), firstPlayer.marker);
gameboard.changeGameboard(firstPlayer.newChoise(2), firstPlayer.marker);
gameboard.changeGameboard(secondPlayer.newChoise(4), secondPlayer.marker);
gameboard.changeGameboard(secondPlayer.newChoise(8), secondPlayer.marker);
// console.log(firstPlayer.getMarker());
console.log(gameboard.getGameboard());
gameboard.checkGame(secondPlayer.marker);
