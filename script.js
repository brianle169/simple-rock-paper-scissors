const buttons = document.querySelectorAll("button");
let playerSelection = "",
   computerSelection = "";
const result = document.querySelector(".result");

buttons.forEach((button) => {
   button.addEventListener("click", (e) => {
      getPlayerChoice(e);
      getComputerChoice();
      playRound(playerSelection, computerSelection);
   });
});

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
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
      return "Computer";
   } else if (playerSelection === computerSelection) {
      console.log("Draw!");
      return "Draw";
   } else {
      console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
      return "Player";
   }
}

function announceWinner(playerScore, computerScore) {
   let winner = "";
   winner =
      playerScore > computerScore
         ? "Player Wins!"
         : playerScore === computerScore
         ? "Both Draw!"
         : "Computer Wins!";
   console.log(winner);
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
