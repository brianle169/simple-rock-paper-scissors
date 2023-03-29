function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  let choice = Math.floor(Math.random() * 3);
  return options[choice];
}

function playRound(playerSelection) {
  playerSelection = playerSelection[0]
    .toUpperCase()
    .concat(playerSelection.slice(1).toLowerCase());
  return playerSelection;
}
