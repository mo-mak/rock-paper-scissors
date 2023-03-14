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

function playRound(playerSelection, computerChoice) {
    
    playerSelection = playerSelection.slice().toLowerCase(); //make string lower case 
    computerChoice = computerChoice.slice().toLowerCase(); //make string lower case
    
    //rock vs paper
    if (playerSelection == 'rock' && computerChoice == 'paper') { 
        return ('You lose! Paper beats Rock...');
    
    //rock vs scissors
    } else if (playerSelection == 'rock' && computerChoice == 'scissors') { 
        return ('You win! Rock beats Scissors!');
    
    //paper vs rock
    } else if (playerSelection == 'paper' && computerChoice == 'rock') {
        return ('You win! Paper beats Rock!');
    
    //paper vs scissors
    } else if (playerSelection == 'paper' && computerChoice == 'scissors') {
        return ('You lose! Scissors beats Paper!');
    
    //scissors vs rock
    } else if (playerSelection == 'scissors' && computerChoice == 'rock') {
        return ('You lose! Rock beats Scissors!');
    
    //scissors vs paper
    } else if (playerSelection == 'scissors' && computerChoice == 'paper') {
        return ('You win! Scissors beats Paper!');
    
    //draw
    } else if (playerSelection == computerChoice) {
        return ("'Oy! It's a draw!'");
    } 
}

const rockBtn = document.getElementById('rock');
rockBtn.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    let playerSelection = rockBtn.textContent;

    playerSelection = playerSelection.slice().toLowerCase();
    playerSelection = playerSelection.replace(/\n/g,""); 
    playerSelection = playerSelection.trim();
    computerChoice = computerChoice.slice().toLowerCase();

    let roundResult = playRound(playerSelection, computerChoice);

    displayResults(roundResult);
});

const paperBtn = document.getElementById('paper');
paperBtn.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    let playerSelection = paperBtn.textContent;

    playerSelection = playerSelection.slice().toLowerCase();
    playerSelection = playerSelection.replace(/\n/g,""); 
    playerSelection = playerSelection.trim();
    computerChoice = computerChoice.slice().toLowerCase();

    let roundResult = playRound(playerSelection, computerChoice);

    displayResults(roundResult); 
});

const scissorsBtn = document.getElementById('scissors');
scissorsBtn.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    let playerSelection = scissorsBtn.textContent;

    playerSelection = playerSelection.slice().toLowerCase();
    playerSelection = playerSelection.replace(/\n/g,""); 
    playerSelection = playerSelection.trim();
    computerChoice = computerChoice.slice().toLowerCase();

    let roundResult = playRound(playerSelection, computerChoice);

    displayResults(roundResult);
});

const displayResults = function(result) {
    const resultContainer = document.getElementById('result-container');
    const resultToDisplay = document.createElement('p');
    
    if (resultContainer.hasChildNodes()){
        resultContainer.removeChild(resultContainer.firstChild);
    }
    
    resultToDisplay.textContent = result;
    resultContainer.appendChild(resultToDisplay);
};



// function game() {
//     for (let i = 0; i < 5; i++) {
//         const computerChoice = getComputerChoice();
//         const playerSelection = prompt("Choose your weapon: Rock, Paper, or Scissor");
//         const playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1,).toLowerCase();
        
//         console.log(`You chose: ${playerChoice}, Computer chose: ${computerChoice}`)
//         console.log(playRound(playerSelection, computerChoice));
//     }
// }

// game()




