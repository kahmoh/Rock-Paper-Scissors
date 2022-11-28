//pick for computer
//let the player pick
//return the player choice
//function to get player and computer choice at once---
//determine the winner of a given round
//tell the player who won the given round
//keep score of round wins
//first to five wins
//button to reset game


const CHOICES = ['rock','paper','scissors'];

function playGame (){
    playRound()
}

function playRound (playerChoice, computerChoice) {
    playerChoice = getPlayerChoice()
    computerChoice = getComputerChoice()
    console.log(`You picked ${playerChoice}`)
    console.log(`Yoda picked ${computerChoice}`)
    declareWinner(playerChoice,computerChoice)
}

function getPlayerChoice() {
    let input = prompt('Type Rock, paper or scissors')
    input = input.toLowerCase()
    return input
}

function getComputerChoice() {
    return CHOICES [Math.floor(Math.random() * 3 )]
}

function declareWinner (choiceP, choiceC) {
    if (choiceC == choiceP){
        console.log('Tie')
    }else if (choiceP == 'rock' && choiceC == 'scissors' || choiceP == 'paper' && choiceC == 'rock' || choiceP == 'scissors' && choiceC == 'paper'){
        console.log('You win')
    }else {
        console.log('You lose')
    }
}

playGame()

