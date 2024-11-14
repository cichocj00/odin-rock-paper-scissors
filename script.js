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
   return cprompt("Choose: rock, paper or scissors").toLowerCase();
}