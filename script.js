function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  let choice = Math.floor(Math.random() * 3);
  return options[choice];
}
