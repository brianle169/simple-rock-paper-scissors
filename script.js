function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  let choice = Math.floor(Math.random() * 3);
  return options[choice];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection[0]
    .toUpperCase()
    .concat(playerSelection.slice(1).toLowerCase());

  //Lose case: Rock > Scissors > Paper
  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return false;
  } else if (playerSelection === computerSelection) {
    console.log("Draw!");
  } else {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    return true;
  }
}

function game() {
  let playerScore = 0,
    computerScore = 0;
  let i = 0;
  while (i < 5) {
    const playerSelection = prompt("What is your move?");
    const computerSelection = getComputerChoice();
    let playerWon = playRound(playerSelection, computerSelection);
    if (playerWon) {
      playerScore += 1;
    } else if (!playerWon) {
      computerScore += 1;
    } else {
      playerScore += 1;
      computerScore += 1;
    }
    i++;
  }
  let winner = playerScore > computerScore ? "Player Wins!" : "Computer Wins!";
  console.log(winner);
}
