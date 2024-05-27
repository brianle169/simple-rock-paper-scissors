const options = document.querySelectorAll(".options");
const replayButton = document.querySelector("#replay");
let playerSelection = "",
  computerSelection = "";
let playerScore = 0,
  computerScore = 0;
let roundCounter = 0;

const result = document.querySelector(".result");
const score = document.querySelector(".score");
score.textContent = `🧑🏻 ${playerScore} - ${computerScore} 🤖`;

//Options buttons event listener
options.forEach((option) => {
  option.addEventListener("click", gameStart);
});

function gameStart(e) {
  roundCounter++;
  getPlayerChoice(e);
  getComputerChoice();
  playRound(playerSelection, computerSelection);
  return;
}

//Replay button listener
replayButton.addEventListener("click", replay);

function replay() {
  options.forEach((option) => (option.disabled = false));
  playerSelection = "";
  computerSelection = "";
  computerScore = 0;
  playerScore = 0;
  roundCounter = 0;
  result.textContent = "First to 5 wins!";
  score.textContent = `🧑🏻 ${playerScore} - ${computerScore} 🤖`;
}

function getPlayerChoice(e) {
  playerSelection = e.target["textContent"];
  return playerSelection;
}

function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  let choice = Math.floor(Math.random() * 3);
  computerSelection = options[choice];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    result.textContent = `Round ${roundCounter}: You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore += 1;
    score.textContent = `🧑🏻 ${playerScore} - ${computerScore} 🤖`;
  } else if (playerSelection === computerSelection) {
    result.textContent = `Round ${roundCounter}: Draw!`;
  } else {
    result.textContent = `Round ${roundCounter}: You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore += 1;
    score.textContent = `🧑🏻 ${playerScore} - ${computerScore} 🤖`;
  }

  // Check winner
  if (playerScore === 5 || computerScore === 5) {
    announceWinner(playerScore, computerScore);
    options.forEach((option) => (option.disabled = true));
  }
}

function announceWinner(playerScore, computerScore) {
  let winner = "";
  winner =
    playerScore > computerScore
      ? "Player Wins! Congratulations"
      : playerScore === computerScore
      ? "Both Draw!"
      : "Computer Wins! Better luck next time";
  result.textContent = winner;
}
