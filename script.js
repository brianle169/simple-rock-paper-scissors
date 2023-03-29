function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  let choice = Math.floor(Math.random() * 3);
  return options[choice];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection[0]
    .toUpperCase()
    .concat(playerSelection.slice(1).toLowerCase());

  let result;
  //Lose case: Rock > Scissors > Paper
  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rocks")
  ) {
    result = `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === computerSelection) {
    result = "Draw!";
  } else {
    result = `You Win! ${playerSelection} beats ${computerSelection}`;
  }
  return result;
}
