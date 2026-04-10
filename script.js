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
  // =============================================================================================================
  // =============================> CHANGE GAMEBOARD
  const changeGameboard = (newChoise, marker) => {
    if (gameboard[newChoise] !== "X" && gameboard[newChoise] !== "O") {
      if (marker === "X") {
        gameboard[newChoise] = "X";
      } else if (marker === "O") {
        gameboard[newChoise] = "O";
      }
    }
  };
  // =============================================================================================================

  const getGameboard = () => gameboard;
  // =============================================================================================================
  // =============================> CHECK GAME
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
        return firstPlayer.winner;
      } else if (playerMarker === "O") {
        secondPlayer.winner = true;
      }
    } else {
      console.log("Draw!");
    }
  };
  // =============================================================================================================

  // =============================================================================================================
  // =============================> START RENDER
  const startRender = () => {
    const startScreen = document.getElementById("gameboard");
    const divInput = document.createElement("div");
    const player1 = document.createElement("input");
    const player2 = document.createElement("input");
    player1.placeholder = "Player 1";
    player2.placeholder = "Player 2";
    divInput.className = "input__container";
    player1.className = "player__input";
    player2.className = "player__input";
    player1.id = "idPlayer1";
    player2.id = "idPlayer2";

    startScreen.style.cssText =
      "display: flex ; flex-direction: column; padding: 40px;   border-radius: 20px;   background-color: #3b3b3b;";
    const playButton = document.createElement("button");
    playButton.className = "play__button";
    playButton.textContent = "PLAY";
    playButton.addEventListener("click", () => {
      let namePlayer1 = document.getElementById("idPlayer1").value;
      let namePlayer2 = document.getElementById("idPlayer2").value;
      console.log(namePlayer1);
      console.log(namePlayer2);
      startScreen.style.cssText = "display: grid";
      if (namePlayer1 === "") {
        namePlayer1 = "Player 1";
      }
      if (namePlayer2 === "") {
        namePlayer2 = "Player 2";
      }
      firstPlayer = Player(namePlayer1, "X");
      secondPlayer = Player(namePlayer2, "O");
      renderGameboard();
      startScreen.removeChild(divInput);
      divInput.removeChild(player1);
      divInput.removeChild(player2);
      startScreen.removeChild(playButton);
    });
    startScreen.appendChild(divInput);
    divInput.appendChild(player1);
    divInput.appendChild(player2);
    startScreen.appendChild(playButton);
  };
  // =============================================================================================================

  // =============================================================================================================
  // =============================> GAMEBOARD RENDER
  const renderGameboard = () => {
    for (let index = 0; index < 9; index++) {
      const gameboardRender = document.getElementById("gameboard");
      const whoWins = document.getElementById("who-wins");
      const squareRender = document.createElement("button");
      const game__screen = document.getElementById("game__screen");
      squareRender.className = "square";
      squareRender.addEventListener("click", () => {
        if (
          checkEmpty[index] === undefined &&
          firstPlayer.winner !== true &&
          secondPlayer.winner !== true
        ) {
          checkEmpty[index] = index;
          if (gameTurn < 9) {
            if (gameTurn % 2 === 0) {
              changeGameboard(firstPlayer.newChoise(index), firstPlayer.marker);
              checkGame(firstPlayer.marker);
              console.log(gameboard);
              whoWins.textContent = `${firstPlayer.name}'s turn`;
              if (firstPlayer.winner) {
                whoWins.textContent = `${firstPlayer.name} wins!`;
                const restartButton = document.createElement("button");
                restartButton.className = "restart__button";
                restartButton.textContent = "Restart";
                game__screen.appendChild(restartButton);
              }
              squareRender.textContent = `${firstPlayer.marker}`;
            } else {
              changeGameboard(
                secondPlayer.newChoise(index),
                secondPlayer.marker,
              );
              checkGame(secondPlayer.marker);
              console.log(gameboard);
              whoWins.textContent = `${secondPlayer.name}'s turn`;
              if (secondPlayer.winner) {
                whoWins.textContent = `${secondPlayer.name} wins!`;
                const restartButton = document.createElement("button");
                restartButton.className = "restart__button";
                restartButton.textContent = "Restart";
                game__screen.appendChild(restartButton);
              }
              squareRender.textContent = `${secondPlayer.marker}`;
            }
            gameTurn++;
          }
        }
      });
      // =============================================================================================================
      // =============================> RESTART RENDER
      const restartRender = () => {};
      // =============================================================================================================
      gameboardRender.appendChild(squareRender);
    }
  };
  // =============================================================================================================

  return {
    getGameboard,
    changeGameboard,
    checkGame,
    startRender,
    renderGameboard,
  };
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
let firstPlayer = Player("Player 1", "X");
let secondPlayer = Player("Player 2", "O");
const gameboard = Gameboard();

gameboard.startRender();
