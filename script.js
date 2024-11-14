let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3);
    let computerChoice = "";

    if (randomInt === 0) {
        computerChoice = 'rock';
    } else if (randomInt === 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors'
    }

    return computerChoice;
}

function getHumanChoice() {
   return prompt("Choose: rock, paper or scissors").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'rock') {
        console.log('Tie!')
    }

    if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('You loose!. Paper beats rock!')
        computerScore += 1;
    }

    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You win! Rock beats scissors!')
        humanScore += 1;
    }

    if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You win! Paper beats rock!')
        humanScore += 1;
    }

    if (humanChoice === 'paper' && computerChoice === 'paper') {
        console.log('Tie!')
    }

    if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You loose!. Scissors beats paper!')
        computerScore += 1;
    }

    if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You loose!. Rock beats scissors!')
        computerScore += 1;
    }

    if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You win! Scissors beats paper!')
        humanScore += 1;
    }

    if (humanChoice === 'scissors' && computerChoice === 'scissors') {
        console.log('Tie!')
    }
}

function playGame() {
    for (let i = 0; i < 5; ++i) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log('YOU WIN!!!');
    } else if (humanScore < computerScore) {
        console.log("YOU LOSE!!!")
    } else {
        console.log('TIE!')
    }
}

playGame();

