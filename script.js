let playerScore = 0;
let computerScore = 0;
let rounds = 0;

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

function scoreCounter(playerWins, computerWins) {
    if (rounds < 5) {
        if (playerWins) {
            playerScore ++;
        } else if (computerWins) {
            computerScore ++;
        };
        rounds++;
    } else {
        rounds = 0;
    };
};

function gameLogic(playerSelection, computerChoice) {
    
    playerSelection = playerSelection.slice().toLowerCase(); //make string lower case 
    computerChoice = computerChoice.slice().toLowerCase(); //make string lower case
    
    //rock vs paper
    if (playerSelection == 'rock' && computerChoice == 'paper') { 
        scoreCounter(false, true);
        return ('You lose! Paper beats Rock...');
    
    //rock vs scissors
    } else if (playerSelection == 'rock' && computerChoice == 'scissors') { 
        scoreCounter(true, false);
        return ('You win! Rock beats Scissors!');
    
    //paper vs rock
    } else if (playerSelection == 'paper' && computerChoice == 'rock') {
        scoreCounter(true, false);
        return ('You win! Paper beats Rock!');
    
    //paper vs scissors
    } else if (playerSelection == 'paper' && computerChoice == 'scissors') {
        scoreCounter(false, true);
        return ('You lose! Scissors beats Paper!');
    
    //scissors vs rock
    } else if (playerSelection == 'scissors' && computerChoice == 'rock') {
        scoreCounter(false, true);
        return ('You lose! Rock beats Scissors!');
    
    //scissors vs paper
    } else if (playerSelection == 'scissors' && computerChoice == 'paper') {
        scoreCounter(true, false);
        return ('You win! Scissors beats Paper!');
    
    //draw
    } else if (playerSelection == computerChoice) {
        scoreCounter(false, false);
        return ("'Oy! It's a draw!'");
    } 
}



const displayResults = function(result) {
    const resultContainer = document.getElementById('result-container');
    const resultToDisplay = document.createElement('p');
    
    // This part will ensure that childNodes are not piled onto resultContainer 
    // one after another. everytime this function is called (which is anytime one 
    // of the buttons is pressed), the resultContainer will be cleared of the last
    // win draw or lose message that it was displaying here from the last round.
    if (resultContainer.hasChildNodes()){
        resultContainer.removeChild(resultContainer.firstChild);
    }
    
    resultToDisplay.textContent = result;
    resultContainer.appendChild(resultToDisplay);
};

const displayPlayerScore = function() {
    const playerScore = document.getElementById('player-score');
    const playerScoreToDisplay = playerScore.textContent;
    console.log(playerScoreToDisplay);
};

const playRound = function(textContent) {
    let computerChoice = getComputerChoice();
    let playerSelection = textContent;
    
    //parses the playerSelection from "\n    rock\n    " to "rock" 
    playerSelection = playerSelection.slice().toLowerCase();
    playerSelection = playerSelection.replace(/\n/g,""); 
    playerSelection = playerSelection.trim();
    computerChoice = computerChoice.slice().toLowerCase();
    
    let roundResult = gameLogic(playerSelection, computerChoice);
    displayResults(roundResult);
};

const rockBtn = document.getElementById('rock');
rockBtn.addEventListener("click", function() {
    playRound(rockBtn.textContent);
});

const paperBtn = document.getElementById('paper');
paperBtn.addEventListener("click", function() {
    playRound(paperBtn.textContent); 
});

const scissorsBtn = document.getElementById('scissors');
scissorsBtn.addEventListener("click", function() {
    playRound(scissorsBtn.textContent);
});


