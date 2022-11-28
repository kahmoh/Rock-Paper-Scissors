//pick for computer
//let the player pick
//return the player choice
//function to get player and computer choice at once
//determine the winner of a given round
//tell the player who won the given round
//keep score of round wins
//first to five wins
//button to reset game


const CHOICES = ['rock','paper','scissors'];
let winner

function getPlayerChoice(){
    let input = prompt('Type Rock, paper or scissors')
    input = input.toLowerCase()
}

function getComputerChoice() {
    return CHOICES [Math.floor(Math.random() * 3 )]
}


