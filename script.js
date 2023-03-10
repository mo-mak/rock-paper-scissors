function getComputerChoise() {
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

