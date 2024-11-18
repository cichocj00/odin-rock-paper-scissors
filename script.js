const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(e.target.className, getComputerSelection());
    })
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
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log('Tie!')
    }

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You loose!. Paper beats rock!')
        computerScore += 1;
    }

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You win! Rock beats scissors!')
        humanScore += 1;
    }

    if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You win! Paper beats rock!')
        humanScore += 1;
    }

    if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log('Tie!')
    }

    if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You loose!. Scissors beats paper!')
        computerScore += 1;
    }

    if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You loose!. Rock beats scissors!')
        computerScore += 1;
    }

    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You win! Scissors beats paper!')
        humanScore += 1;
    }

    if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        console.log('Tie!')
    }
}

// function checkWin(playerScore, computerScore) {
//     if (playerScore === 5 || computerScore === 5) {
//         // wyświetlanie 'modala' z informacją kto wygał
//     }

// }
