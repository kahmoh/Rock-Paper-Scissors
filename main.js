const CHOICES = ['rock', 'paper', 'scissors']
const winners = []
let playerWins = 0;
let computerWins = 0;

function playGame() {
  while (playerWins < 3 && computerWins <3){
    playRound()
  }
  if (playerWins == 3) {
    console.log('game over you win')
  }else if (computerWins == 3) {
    console.log('game over you lose')
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
  } else if (
      (choiceP == 'rock' && choiceC == 'scissors') ||
      (choiceP == 'paper' && choiceC == 'rock') ||
      (choiceP == 'scissors' && choiceC == 'paper')
  ) {
    winners.push('You')
    playerWins ++
  } else if ((choiceC == 'rock' && choiceP == 'scissors') ||
      (choiceC == 'paper' && choiceP == 'rock') ||
      (choiceC == 'scissors' && choiceP == 'paper')){
    winners.push('Computer')
    computerWins ++
  }
}

function logRound (playerChoice, computerChoice, winner) {
  console.log('You chose:', playerChoice);
  console.log('Computer chose:', computerChoice)
  if (winner !== 'Tie'){
    console.log(winner, 'won that round')
  }else {
    console.log('That was a tie')
  }
}

playGame()