function Player(name, marker) {
  let score = 0;
  let winner = false;
  let playerChoise;
  const newChoise = (choise) => {
    playerChoise = choise;
    return playerChoise;
  };
  const getScore = () => score;
  const increaseScore = () => {
    score++;
  };
  return { name, marker, newChoise, getScore, increaseScore, winner };
}
function Gameboard() {
  const gameboard = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  let gameTurn = 0;
  let checkEmpty = [];
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
      if (playerMarker === "X") {
        firstPlayer.winner = true;
      } else if (playerMarker === "O") {
        secondPlayer.winner = true;
      }
    } else {
      console.log("Draw!");
    }
  };
  const renderGameboard = () => {
    for (let index = 0; index < 9; index++) {
      const gameboardRender = document.getElementById("gameboard");
      const whoWins = document.getElementById("who-wins");
      const squareRender = document.createElement("button");

      squareRender.className = "square";
      squareRender.addEventListener("click", () => {
        if (
          checkEmpty[index] === undefined &&
          firstPlayer.winner !== true &&
          secondPlayer.winner !== true
        ) {
          checkEmpty[index] = index;
          console.log(`Index: ${index}`);
          console.log(`Checkempty index: ${checkEmpty[index]}`);
          console.log(checkEmpty);
          if (gameTurn < 9) {
            if (gameTurn % 2 === 0) {
              changeGameboard(firstPlayer.newChoise(index), firstPlayer.marker);
              checkGame(firstPlayer.marker);
              console.log(gameboard);
              if (firstPlayer.winner) {
                whoWins.textContent = "X wins!";
              }
              squareRender.textContent = `${firstPlayer.marker}`;
            } else {
              changeGameboard(
                secondPlayer.newChoise(index),
                secondPlayer.marker,
              );
              checkGame(secondPlayer.marker);
              console.log(gameboard);
              if (secondPlayer.winner) {
                whoWins.textContent = "O wins!";
              }
              squareRender.textContent = `${secondPlayer.marker}`;
            }
            gameTurn++;
          }
        }
      });
      gameboardRender.appendChild(squareRender);
    }
  };
  return { getGameboard, changeGameboard, checkGame, renderGameboard };
}
// =============================================================================================================
// =============================> TUX LOGO
const tux__container = document.getElementById("tux__container");
let tuxToggle = true;
for (let i = 0; i < 3; i++) {
  const tuxedo = document.createElement("img");
  tuxedo.src = "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png";
  tuxedo.style.width = "40px";
  tuxedo.className = "tux";
  if (i === 1) {
    tuxedo.style.width = "50px";
  }
  tuxedo.addEventListener("click", () => {
    console.log(tuxToggle);
    if (tuxToggle === true) {
      tuxedo.src = "https://media.tenor.com/S61VCO73mOAAAAAj/linux-tux.gif";
      tuxToggle = false;
    } else {
      tuxedo.src =
        "https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png";
      tuxToggle = true;
    }
  });
  tux__container.appendChild(tuxedo);
}
// =============================================================================================================
const firstPlayer = Player("Schism", "X");
const secondPlayer = Player("Moth", "O");

const gameboard = Gameboard();
// console.log(firstPlayer.getMarker());
gameboard.renderGameboard();
