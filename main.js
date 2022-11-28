//pick for computer
//let the player pick
//return the player choice
//determine the winner of a given round
//tell the player who won the given round
//keep score of round wins
//first to five wins
//button to reset game

const CHOICES = ['rock','paper','scissors'];


function getComputerChoice() {
    return CHOICES [Math.floor(Math.random() * CHOICES.length)]
}

console.log(getComputerChoice())