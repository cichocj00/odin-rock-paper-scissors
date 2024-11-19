const buttons = document.querySelectorAll('.play-button');
const replayButton = document.querySelector('.replay-button');
const winnerContainer = document.querySelector('.winner-container');
const winner = document.querySelector('.winner');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(e.target.textContent.toLowerCase(), getComputerSelection());
    })
})

replayButton.addEventListener('click', () => {
    playerScore.textContent = "0";
    computerScore.textContent = "0";
    buttons.forEach((button) => button.disabled = false)
    winnerContainer.classList.add('hidden');
})

function getComputerSelection() {
    const randomInt = Math.floor(Math.random() * 3);
    let computerSelection = "";

    if (randomInt === 0) {
        computerSelection = 'rock';
    } else if (randomInt === 1) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissors'
    }

    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        addPoint(computerScore);
    }

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        addPoint(playerScore);
    }

    if (playerSelection === 'paper' && computerSelection === 'rock') {
        addPoint(playerScore);
    }

    if (playerSelection === 'paper' && computerSelection === 'scissors') {
        addPoint(computerScore);
    }

    if (playerSelection === 'scissors' && computerSelection === 'rock') {
        addPoint(computerScore);
    }

    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        addPoint(playerScore);
    }
}

function addPoint(side) {
    side.textContent = parseInt(side.textContent) + 1;
    checkWin(playerScore, computerScore);
}

function checkWin(playerScore, computerScore) {
    if (playerScore.textContent == 5) {
        winnerContainer.classList.remove('hidden');
        winner.textContent = "You win!";
        buttons.forEach((button) => button.disabled = true)
    }

    if (computerScore.textContent == 5) {
        winnerContainer.classList.remove('hidden');
        winner.textContent = "You loose!";
        buttons.forEach((button) => button.disabled = true)
    }
}
