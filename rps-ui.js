let computerScore = 0;
let playerScore = 0;
let round = 1;
let playerSelection = '';
let computerSelection = '';
const roundDisplay = document.querySelector('#roundResult');
const playerScoreDisplay = document.querySelector('#playerScoreDisplay');
const computerScoreDisplay = document.querySelector('#computerScoreDisplay');
const endGameMessage = document.querySelector('#endGameMessage');



function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'ROCK'
      case 1:
        return 'PAPER'
      case 2:
        return 'SCISSORS'
    }
}


// Playing 1 round of game
function playRound(playerSelection, computerSelection) {
    
    
    if ((computerSelection === 'SCISSORS' && playerSelection === 'ROCK') ||
        (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'ROCK' && playerSelection === 'PAPER')) {
        return 'WIN';
        console.log(computerSelection);

    }

    else if (computerSelection === playerSelection) {
        return 'TIE';
        console.log(computerSelection);

    }
    else {
        console.log(computerSelection);
        return 'LOSS';
    }
}

//Play up to 5, 
/*function game() {

    for (var i = 0; i < 5; i++) {
        var computerSelectionEntry = computerplay();
        var playerSelectionEntry = playerplay();
        console.log(playRound(playerSelectionEntry, computerSelectionEntry));
    }

    if (playScore > compScore) {
        console.log("Player wins!");
    }
    else if (playScore === compScore) {
        console.log("It's a tie!");
    }
    else {
        console.log("Computer wins!");
    }
}

game();
*/

const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorButton = document.querySelector('#scissorButton');

rockButton.addEventListener('click', () => clickChoice('ROCK'));
paperButton.addEventListener('click', () => clickChoice('PAPER'));
scissorButton.addEventListener('click', () => clickChoice('SCISSORS'));


function clickChoice(playerSelect) {
    playerSelection = playerSelect;
    computerSelection = computerPlay();
    scoreUpdate(playRound(playerSelection, computerSelection));
}

function scoreUpdate(roundResult) {
    switch(roundResult) {
        case 'WIN':
            playerScore++;
            roundDisplay.textContent = ("YOUR " + roundResult + ": you chose " + playerSelection + " and the computer chose " + computerSelection);
            break;
        case 'LOSS':
            computerScore++;
            roundDisplay.textContent = ("YOUR " + roundResult + ": you chose " + playerSelection + " and the computer chose " + computerSelection);
            break;
        case 'TIE':
            roundDisplay.textContent = (roundResult + ": you chose " + playerSelection + " and the computer chose " + computerSelection);
            break;
    }

    updateScoreboard(roundResult);
    round++;

    if(playerScore == 5 || computerScore == 5) {
        endGame();
    }
}


function updateScoreboard(roundResult) {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function endGame() {
    if(playerScore > computerScore) {
        endGameMessage.textContent = "YOU WIN!";
    }
    else {
        endGameMessage.textContent = "YOU LOSE!"
    }
}
