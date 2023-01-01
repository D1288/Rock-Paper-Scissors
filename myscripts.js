const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let compInput = choices[Math.floor(Math.random() * choices.length)];
    return compInput;
}

function getPlayerChoice() {
    let input = prompt("Choose rock, paper, or scissors");
    while (input === null) {
        input = prompt("Choose rock, paper, or scissors");
    }
    input = input.toLowerCase();
    return input;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return `You win! You chose ${playerSelection} and computer chose ${computerSelection}.`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return `You win! You chose ${playerSelection} and computer chose ${computerSelection}.`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return `You win! You chose ${playerSelection} and computer chose ${computerSelection}.`;
    } else if (playerSelection === computerSelection) {
        return `You Tie! You both chose ${playerSelection}.`;
    } else {
        computerScore++;
        return `You Lost! You chose ${playerSelection} and computer chose ${computerSelection}.`;
    }
}

function logRound(round) {
    console.log("Round: ", round);
}



function game() {

    for (i = 1; i < 6; i++) {
        let round = i;
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        logRound(round);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Player Score: ", playerScore);
        console.log("Computer Score: ", computerScore);
        console.log("<------------>");
    }
    if (playerScore > computerScore){
        console.log("You win the game!");
    } else if ( playerScore == computerScore){
        console.log("The game is a tie!");
    } else {
        console.log("You lost the game!");
    }
}