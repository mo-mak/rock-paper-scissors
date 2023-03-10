function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let computerChoice = '';
    
    if (randomNum == 1) {
        computerChoice = 'Rock';
    } else if (randomNum == 2) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
    
    return computerChoice;
}

function singleGame(playerSelection) {
    
    playerSelection = playerSelection.slice().toLowerCase(); //make string lower case
    let computerChoice = getComputerChoice() 
    computerChoice = computerChoice.slice().toLowerCase(); //make string lower case
    
    //rock vs paper
    if (playerSelection == 'rock' && computerChoice == 'paper') { 
        console.log('You lose! Computer selected paper. Paper beats Rock...');
    
    //rock vs scissors
    } else if (playerSelection == 'rock' && computerChoice == 'scissors') { 
        console.log('You win! Computer selected scissors. Rock beats Scissors!');
    
    //paper vs rock
    } else if (playerSelection == 'paper' && computerChoice == 'rock') {
        console.log('You win! Computer selected rock. Paper beats Rock!');
    
    //paper vs scissors
    } else if (playerSelection == 'paper' && computerChoice == 'scissors') {
        console.log('You lose! Computer selected scissors. Scissors beats Paper!');
    
    //scissors vs rock
    } else if (playerSelection == 'scissors' && computerChoice == 'rock') {
        console.log('You lose! Computer selected rock. Rock beats Scissors!');
    
    //scissors vs paper
    } else if (playerSelection == 'scissors' && computerChoice == 'paper') {
        console.log('You win! Computer selected paper. Scissors beats Paper!');
    
    //draw
    } else if (playerSelection == computerChoice) {
        console.log("'Oy! It's a draw!'");
    }
}

console.log(singleGame('paper'))

