const BUTTONS = document.querySelectorAll('button')

const CHOICES = ['rock', 'paper', 'scissors'];

function getPlayerChoice () {
  for (let button of BUTTONS) {
    button.addEventListener('click', (e) => {
      const playerPick = button.textContent
      console.log(playerPick)
    })
  }
};

getPlayerChoice()


