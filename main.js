const BUTTONS = document.querySelectorAll('h1')
const SCORE = document.querySelector('.score')
const ENDSCREEN = document.querySelector('.endscreen')

const CHOICES = ['rock', 'paper', 'scissors'];
let playerWins = 0;
let computerWins = 0;
let gameState = 'playing';

function restartGame () {
  playerWins = 0;
  computerWins = 0;
  ENDSCREEN.classList.remove('win')
  ENDSCREEN.classList.remove('loss')
  ENDSCREEN.textContent = ''
  SCORE.textContent = (`SCORE: ${playerWins} - ${computerWins}`)
  gameState = 'playing';
}

function showLossScreen() {
  const endScreenText = document.createElement('h1')
  endScreenText.textContent = 'YOU LOSE'
  ENDSCREEN.appendChild(endScreenText)
  ENDSCREEN.classList.add('loss')
  setTimeout(restartGame,1000)
}

function showWinScreen() {
  const endScreenText = document.createElement('h1')
  endScreenText.textContent = 'YOU WIN'
  ENDSCREEN.appendChild(endScreenText)
  ENDSCREEN.classList.add('win')
  setTimeout(restartGame,2000)
}

function getPlayerChoice(btn) {
  return (btn.textContent.toLowerCase());
}

function getComputerChoice() {
  return (CHOICES[Math.floor(Math.random() * 3)]);
}

function declareWinner(choiceP, choiceC) {
  if (choiceC === choiceP) {
    console.log('Tie')
  } else if (
      (choiceP === 'rock' && choiceC === 'scissors') ||
      (choiceP === 'paper' && choiceC === 'rock') ||
      (choiceP === 'scissors' && choiceC === 'paper')
  ) {
    console.log('You win')
    playerWins++
  } else if (
      (choiceC === 'rock' && choiceP === 'scissors') ||
      (choiceC === 'paper' && choiceP === 'rock') ||
      (choiceC === 'scissors' && choiceP === 'paper')
  ) {
    console.log('You lose')
    computerWins++
  }
}

for (let button of BUTTONS) {
  button.addEventListener('click', () => {
    if (gameState === 'playing') {
      playRound(button)
    }
  })
}

function playRound(BTN) {
  const playerChoice = getPlayerChoice(BTN);
  const computerChoice = getComputerChoice();
  console.log(`Player chose ${playerChoice}`)
  console.log(`Computer chose ${computerChoice}`)
  declareWinner(playerChoice, computerChoice)
  SCORE.textContent = (`SCORE: ${playerWins} - ${computerWins}`)
  if (playerWins >= 5) {
    gameState = 'over';
    showWinScreen()
  }else if (computerWins >= 5){
    gameState = 'over';
    showLossScreen()
  }
}
