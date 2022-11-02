const randomNum1 = Math.floor(Math.random() * 6 + 1);
const randomNum2 = Math.floor(Math.random() * 6 + 1);

let dice1 = document.querySelector('.img1');
let dice2 = document.querySelector('.img2');

function randomDice() {
    dice1.setAttribute('src', `images/dice${randomNum1}.png`);
    dice2.setAttribute('src', `images/dice${randomNum2}.png`);
}

function defineTheWinner() {
    if (randomNum1 > randomNum2) {
        document.querySelector('h1').innerHTML = 'Player 1 Wins!';
    }
    else if (randomNum1 < randomNum2) {
        document.querySelector('h1').innerHTML = 'Player 2 Wins!';
    } else {
        document.querySelector('h1').innerHTML = 'Draw!';
    }
}

randomDice();
defineTheWinner();