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

function gameLogic(playerSelection, computerChoice) {
    
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

const scoreCounter = function() {

};

const rockBtn = document.getElementById('rock');
rockBtn.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    let playerSelection = rockBtn.textContent;

    // this section may look strange. There are 2 things happening here:
    // 1. both selections are being converted to lowercase for game logic purposes
    // 2. the playerSelection variable which is derived from the textContent of the 
    //    rockBtn at first will look like this: "\n      rock\n       ". Therefore 
    //    it is very important to first remove the \n and then trim the spaces of the
    //    variable in order to get "rock" 
    playerSelection = playerSelection.slice().toLowerCase();
    playerSelection = playerSelection.replace(/\n/g,""); 
    playerSelection = playerSelection.trim();
    computerChoice = computerChoice.slice().toLowerCase();

    let roundResult = gameLogic(playerSelection, computerChoice);

    displayResults(roundResult);
});

const paperBtn = document.getElementById('paper');
paperBtn.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    let playerSelection = paperBtn.textContent;

    //See comment about this section in rockBtn
    playerSelection = playerSelection.slice().toLowerCase();
    playerSelection = playerSelection.replace(/\n/g,""); 
    playerSelection = playerSelection.trim();
    computerChoice = computerChoice.slice().toLowerCase();

    let roundResult = gameLogic(playerSelection, computerChoice);

    displayResults(roundResult); 
});

const scissorsBtn = document.getElementById('scissors');
scissorsBtn.addEventListener("click", function() {
    let computerChoice = getComputerChoice();
    let playerSelection = scissorsBtn.textContent;

    //See comment about this section in rockBtn
    playerSelection = playerSelection.slice().toLowerCase();
    playerSelection = playerSelection.replace(/\n/g,""); 
    playerSelection = playerSelection.trim();
    computerChoice = computerChoice.slice().toLowerCase();

    let roundResult = gameLogic(playerSelection, computerChoice);

    displayResults(roundResult);
});

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



// function game() {
//     for (let i = 0; i < 5; i++) {
//         const computerChoice = getComputerChoice();
//         const playerSelection = prompt("Choose your weapon: Rock, Paper, or Scissor");
//         const playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1,).toLowerCase();
        
//         console.log(`You chose: ${playerChoice}, Computer chose: ${computerChoice}`)
//         console.log(gameLogic(playerSelection, computerChoice));
//     }
// }

// game()




