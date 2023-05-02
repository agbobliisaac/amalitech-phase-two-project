


const scoreLabel = document.querySelector('.value');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let rock = document.getElementById('rock');
const gameOptions = document.querySelector('.game-options');
const resultContainer = document.querySelector('.result-container');
const resetBtn = document.querySelector('.play-again');
const userImg = document.getElementById('user');
const compImg = document.getElementById('machine');
const buttons = document.querySelectorAll('.button');
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const resultBox = document.querySelector('.result-title');
const hideComputerChoice = document.querySelector('.invisible');
let gameResult = document.getElementById('status');
let userChoice, computerChoice;
let winner;
const pointMap = new Map();
pointMap.set('paper', 0);
pointMap.set('scissors', 1);
pointMap.set('rock', 2);

if (localStorage.getItem("score") === null) {
    localStorage.setItem("score", "0");
  }
let score = Number(localStorage.getItem("score"));  

function init() {
    const choices = ['paper', 'scissors', 'rock'];
    let userChoice, computerChoice;

    buttons.forEach((curr) => {
        curr.addEventListener('click', () => {
            userChoice = curr.id;
            computerChoice = choices.filter(choice => choice !== userChoice)[computerGen()];

            console.log(userChoice);
            console.log(computerChoice);
            console.log(choices);

            checkWinner();
            result(userChoice, computerChoice);
        });
    });
}


//choice generator for computer
function computerGen() {
    return Math.floor((Math.random()) * 2);
}

//Update Score
function updateScore(value) {
    score += value;
    scoreLabel.innerHTML = score;
    localStorage.setItem("score", `${score}`);
}
//function to check who is the winner
function checkWinner() {
    let scoreUpdate;

    if ((userChoice === 'paper' && computerChoice === 'rock') || (pointMap.get(userChoice) > pointMap.get(computerChoice))) {
        gameResult.innerText = "you win";
        winner = userChoice;
        scoreUpdate = 1;
    } else {
        gameResult.innerText = "you lose";
        winner = computerChoice;
        scoreUpdate = 0;
    }

    setTimeout(() => {
        updateScore(scoreUpdate);
    }, 3450);

    console.log(score);
}

//Display result
function result(userChoice, computerChoice) {
    gameOptions.classList.add('active');
    resultContainer.classList.add('active');
    player.classList.add(userChoice);
    computer.classList.add(computerChoice);

    userImg.src = `images/icon-${userChoice}.svg`;
    compImg.src = `images/icon-${computerChoice}.svg`;

    setTimeout(() => {
        load();
        showComputerChoice();
    }, 3500);
}
function load() {
    resultContainer.classList.add('load');
    resultBox.classList.add('active');
    if (winner == userChoice) {
        player.classList.add('effect-left');
    } else {
        computer.classList.add('effect-right')
    }
}

function showComputerChoice() {
    hideComputerChoice.classList.add('active');
}

function reset() {
    gameOptions.classList.remove('active');
    resultContainer.classList.remove('active');
    player.classList.remove(userChoice);
    computer.classList.remove(computerChoice);
    player.classList.remove('effect-left');
    computer.classList.remove('effect-right');
    resultContainer.classList.remove('load');
    resultBox.classList.remove('active');
    hideComputerChoice.classList.remove('active');

}

//setting play again init();
resetBtn.addEventListener('click', reset);


init();



//display rules box
document.querySelector('.rules').addEventListener('click', () => {
    document.querySelector('.rules-overlay').classList.add('active')
})
//remove rules box
document.querySelector('.cross-btn').addEventListener('click', () => {
    document.querySelector('.rules-overlay').classList.remove('active')
})