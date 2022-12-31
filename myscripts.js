const choices = ["rock", "paper", "scissors"];
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();


function getComputerChoice() {
    let compInput = choices[Math.floor(Math.random() * choices.length)];
    return compInput;
}

function getPlayerChoice() {
    let input = prompt("Choose rock, paper, or scissors");
    while (input === null){
        input = prompt("Choose rock, paper, or scissors");
    }
    input = input.toLowerCase();
    return input;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log(`You win! You chose ${playerSelection} and computer chose ${computerSelection}.`);
    } else if(playerSelection === "scissors" && computerSelection === "paper"){
        console.log(`You win! You chose ${playerSelection} and computer chose ${computerSelection}.`);
    } else if(playerSelection === "paper" && computerSelection === "rock"){
        console.log(`You win! You chose ${playerSelection} and computer chose ${computerSelection}.`)
    } else if (playerSelection === computerSelection){
        console.log(`You Tie! You both chose ${playerSelection}.`);
    } else{
        console.log(`You Lost! You chose ${playerSelection} and computer chose ${computerSelection}.`);
    }

}

console.log(playRound(playerSelection, computerSelection));
