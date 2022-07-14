let compScore = 0;
let playScore = 0;


function computerplay() {
    var computerplay = ['rock', 'paper', 'scissors'];
    com2 = computerplay[Math.floor(Math.random() * computerplay.length)];
    return (com2);
}

function playerplay() {
    const question = prompt("Rock, Paper, Scissors?", "").toLowerCase();
    return (question);
}

// Playing 1 round of game
function playRound(playerSelection, computerSelection) {

    var compWin = ('Computer Wins: ')
    var playwin = ('Player Wins: ')
    var tie = ('Tie: ')

    // Gives Player's winning conditions and possible outcomes
    if ((computerSelection === 'scissors' && playerSelection === 'rock') ||
        (computerSelection === 'paper' && playerSelection === 'scissors') ||
        (computerSelection === 'rock' && playerSelection === 'paper')) {
        ++playScore;
        return (playwin + playerSelection + " beats " + computerSelection);
    }

    else if (computerSelection === playerSelection) {

        return (tie + playerSelection + " ties with " + computerSelection);
    }

    else if ((playerSelection !== 'rock') && (playerSelection !== 'paper') &&(playerSelection !== 'scissors')) {
        return ("Try Again: computer chose " + computerSelection + " and you chose " + playerSelection);
    }

    else {
        ++compScore;
        return (compWin + computerSelection + " beats " + playerSelection);

    }
}

//Play up to 5, 
function game() {

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