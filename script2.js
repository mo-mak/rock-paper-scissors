const playRound = function(textContent) {
    let computerChoice = getComputerChoice();
    let playerSelection = textContent;

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
};