const BUTTONS = document.querySelectorAll('button')

const CHOICES = ['rock', 'paper', 'scissors'];

function getPlayerChoice (btn) {
  return(btn.textContent);
}

for (let button of BUTTONS) {
  button.addEventListener('click', () => {
    const playerChoice = getPlayerChoice(button);
    const computerChoice = getComputerChoice();
    console.log(`Player chose ${playerChoice}`)
    console.log(`Computer chose ${computerChoice}`)
    declareWinner(playerChoice,computerChoice)

  })
}

function getComputerChoice() {
  return(CHOICES[Math.floor(Math.random() * 3)]);
}

function declareWinner(choiceP, choiceC) {
  if (choiceC === choiceP) {
    // winners.push('Tie');
    // roundCount ++
    console.log('Tie')
  } else if (
      (choiceP === 'rock' && choiceC === 'scissors') ||
      (choiceP === 'paper' && choiceC === 'rock') ||
      (choiceP === 'scissors' && choiceC === 'paper')
  ) {
    console.log('You win')
    // winners.push('You')
    // roundCount ++
    // playerWins ++
  } else if (
      (choiceC === 'rock' && choiceP === 'scissors') ||
      (choiceC === 'paper' && choiceP === 'rock') ||
      (choiceC === 'scissors' && choiceP === 'paper')
  ) {
    console.log('You lose')
    // winners.push('Computer')
    // roundCount ++
    // computerWins ++
  }
}


//add function to get computer choice
//add function to compare computer choice with player choice and determine a winner of a given round
//add function to display stats of a given round (player selection, computer selection, winner)


