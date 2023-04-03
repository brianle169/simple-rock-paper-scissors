const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
   button.addEventListener("click", respond);
});

function respond(e) {
   console.log(e.target);
   capture = true;
}

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
