const CHOICES = ['rock', 'paper', 'scissors']
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

function playRound(playerChoice, computerChoice) {
  playerChoice = getPlayerChoice();
  computerChoice = getComputerChoice();
  declareWinner(playerChoice, computerChoice);
}

function getPlayerChoice() {
  let input = prompt('Type Rock, paper or scissors');
  input = input.toLowerCase();
  return input;
}

function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * 3)];
}

function declareWinner(choiceP, choiceC) {
  if (choiceC == choiceP) {
    console.log('Tie');
  } else if (
    (choiceP == 'rock' && choiceC == 'scissors') ||
    (choiceP == 'paper' && choiceC == 'rock') ||
    (choiceP == 'scissors' && choiceC == 'paper')
  ) {
    console.log ('playerWin')
    playerWins ++
  } else {
    console.log ('computerWin')
    computerWins ++
  }
}

playGame()