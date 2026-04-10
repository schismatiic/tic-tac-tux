function Player1(name, marker) {
  let score = 0;
  const marker = "X";
  const getScore = () => score;
  const getMarker = () => marker;
  const increaseScore = () => {
    score++;
  };
  return { name, getMarker, getScore, increaseScore };
}
function Player2(name, marker) {
  let score = 0;
  const marker = "O";
  const getScore = () => score;
  const getMarker = () => marker;
  const increaseScore = () => {
    score++;
  };
  return { name, getMarker, getScore, increaseScore };
}
function Gameboard(gameboard, player) {
  const gameboard = [];
  const checkHorizonal = () => {};
  return { gameboard };
}
