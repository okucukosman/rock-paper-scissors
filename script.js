// Rock Paper & Scissors Game
// The Odin Project

// Array of possible Moves
const moves = ["Rock", "Paper", "Scissors"];


// Game Related Variables
let playerMove;     
let computerMove;   
let roundResult = "";  
let computerScore = 0;
let playerScore = 0;
///////////////////////////////////////////////////////////////


// Getting Computers Choice
// Function that returns 'Rock', 'Paper' or 'Scissors' randomly.
function getComputerChoice(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}
///////////////////////////////////////////////////////////////


// Function that plays a single round of the game.
// It takes two parameters, playerSelection and computerSelection.
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    console.log("Draw!");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    roundResult = "You Win!";
    playerScore++;
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    roundResult = "You Lose!";
    computerScore++;
  } else {
    roundResult = 'Acceptable moves are; "Rock, Paper, Scissors"';
  }
}
////////////////////////////////////////////////////////////////////



// Function that plays 5 rounds
// Keep record of score
// Report winner or loser at the end
// Display result of each round at the console
// Use prompt() to get input.

function game() {
  for (let i = 0; i < 5; i++) {
    let playerMove = prompt("Your Move: ").toLowerCase();
    computerMove = getComputerChoice(moves)
    playRound(playerMove, computerMove);
    console.log("Player: " + playerMove);
  console.log("Computer: " + computerMove);
    console.log(roundResult);
    console.log(computerScore)
    console.log(playerScore)
    isWinner()
  }
}



// Implement

function isWinner(computerScore, playerScore) {
  if (computerScore === 5) {
    return console.log('Computer wins!')
  } else if (playerScore === 5) {
    return console.log('Player wins!')
  } 
}

game()