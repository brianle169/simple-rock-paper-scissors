const buttons = document.querySelectorAll(".options");
const replayButton = document.querySelector("#replay");
let playerSelection = "",
   computerSelection = "";
let playerScore = 0,
   computerScore = 0;
let gameCounter = 0;
const result = document.querySelector(".result");

buttons.forEach((button) => {
   button.addEventListener("click", (e) => {
      if (gameCounter < 5) {
         gameCounter++;
         getPlayerChoice(e);
         getComputerChoice();
         playRound(playerSelection, computerSelection);
      } else {
         announceWinner(playerScore, computerScore);
         return;
      }
   });
});

replayButton.addEventListener("click", replay);

function replay() {
   playerSelection = "";
   computerSelection = "";
   computerScore = 0;
   playerScore = 0;
   gameCounter = 0;
   result.textContent = "-------------------------";
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
      result.textContent = `Round ${gameCounter}: You Lose! ${computerSelection} beats ${playerSelection}`;
      computerScore += 1;
   } else if (playerSelection === computerSelection) {
      result.textContent = `Round ${gameCounter}: Draw!`;
   } else {
      result.textContent = `Round ${gameCounter}: You Win! ${playerSelection} beats ${computerSelection}`;
      playerScore += 1;
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

function game() {
   let playerScore = 0,
      computerScore = 0,
      i = 0;
   while (i < 5) {
      const playerSelection = prompt("What is your move?");
      const computerSelection = getComputerChoice();
      let result = playRound(playerSelection, computerSelection);
      if (result === "Player") {
         playerScore += 1;
      } else if (result === "Computer") {
         computerScore += 1;
      }
      i++;
   }
   announceWinner(playerScore, computerScore);
}
