const CHOICES = ['rock', 'paper', 'scissors']
const winners = []
let playerWins = 0;
let computerWins = 0;
let roundCount = 0;

function playGame() {
  while (playerWins < 3 && computerWins <3){
    playRound()
  }
  if (playerWins == 3) {
    console.log('GAME OVER! You win :)')
  }else if (computerWins == 3) {
    console.log('GAME OVER! You lose :(')
  }
}

function playRound() {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  declareWinner(playerChoice, computerChoice);
  const winner = winners[winners.length-1]
  logRound(playerChoice, computerChoice, winner)
}

function getPlayerChoice() {
  let input = prompt('Type Rock, paper or scissors');
  while (input === null){
    input = prompt('Type Rock, Paper or scissors')
  }
  input = input.toLowerCase();
  return input;
}

function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * 3)];
}

function declareWinner(choiceP, choiceC) {
  if (choiceC == choiceP) {
    winners.push('Tie');
    roundCount ++
  } else if (
      (choiceP == 'rock' && choiceC == 'scissors') ||
      (choiceP == 'paper' && choiceC == 'rock') ||
      (choiceP == 'scissors' && choiceC == 'paper')
  ) {
    winners.push('You')
    roundCount ++
    playerWins ++
  } else if (
      (choiceC == 'rock' && choiceP == 'scissors') ||
      (choiceC == 'paper' && choiceP == 'rock') ||
      (choiceC == 'scissors' && choiceP == 'paper')
  ) {
    winners.push('Computer')
    roundCount ++
    computerWins ++
  }
}

function logRound (playerChoice, computerChoice, winner) {
  const playerChoiceCaps = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
  const computerChoiceCaps = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
  console.log('Round:', roundCount);
  console.log('You chose:', playerChoiceCaps);
  console.log('Computer chose:', computerChoiceCaps);
  if (winner !== 'Tie'){
    console.log(winner, 'won that round')
  }else {
    console.log('That was a tie')
  }
  console.log('=================================')
}

playGame()