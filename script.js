let playerScore = 0;
let computerScore = 0;
let draws = 0;
let currentRound = 0;
let totalRounds = 5;

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
    if (currentRound < totalRounds) {
        if (playerWins) {
            playerScore ++;
        } else if (computerWins) {
            computerScore ++;
        } else {
            draws++;
        };
        currentRound++;
    } else {
        currentRound = 0; //don't ask why this is 1. It just works. I did not want it to ever display Round: 0 as that does not make sense
        playerScore = 0;
        computerScore = 0;
        draws = 0;
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



const displayRoundResults = function(result) {
    const resultContainer = document.getElementById('result-container');
    const resultToDisplay = document.createElement('p');
    resultContainer.textContent = '';
    // if (currentRound == 0) {
    //     resultContainer.textContent = '';
    //     resultToDisplay.textContent = 'Choose your weapon!';
    //     resultContainer.appendChild(resultToDisplay);
    // }
    resultToDisplay.textContent = result;
    resultContainer.appendChild(resultToDisplay);
};

const displayPlayerScore = function() {
    const playerScoreDiv = document.getElementById('player-score');
    const playerScoreToDisplay = `You: ${playerScore}`;
    playerScoreDiv.textContent = playerScoreToDisplay;
    console.log(playerScoreToDisplay);
    console.log(playerScore);
};

const displayComputerScore = function() {
    const computerScoreDiv = document.getElementById('computer-score');
    const computerScoreToDisplay = `Computer: ${computerScore}`;
    computerScoreDiv.textContent = computerScoreToDisplay;
};

const displayDraws = function() {
    const drawsDiv = document.getElementById('draws');
    const drawsToDiplay = `Draws: ${draws}`;
    drawsDiv.textContent = drawsToDiplay;
    console.log(drawsToDiplay);
    console.log(draws);
};

const displayRoundNumber = function() {
    const roundNumberDiv = document.getElementById('currentRound-display');
    const roundNumberToDisplay = `Round: ${currentRound}/${totalRounds}`;
    roundNumberDiv.textContent = roundNumberToDisplay;
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
    displayRoundResults(roundResult);
    displayPlayerScore();
    displayRoundNumber();
    displayComputerScore();
    displayDraws();
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


