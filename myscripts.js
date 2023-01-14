const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let compInput = choices[Math.floor(Math.random() * choices.length)];
    return compInput;
}

// function validateInput(choice){
//     return choices.includes(choice);
// }


// function getPlayerChoice() {
//     let input = prompt("Choose rock, paper, or scissors");
//     while (input === null) {
//         input = prompt("Choose rock, paper, or scissors");
//     }
//     input = input.toLowerCase();
//     let check = validateInput(input);
//     while (check === false){
//         input = prompt("Choose rock, paper, or scissors. Spelling must be accurate.");
//         while (input === null) {
//             input = prompt("Choose rock, paper, or scissors");
//         }
//         input = input.toLowerCase();
//         check = validateInput(input);
//     }
//     return input;
//}

const para = document.querySelector('p.output');

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        para.textContent = `You win the round! You chose ${playerSelection} and computer chose ${computerSelection}.`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        para.textContent = `You win the round! You chose ${playerSelection} and computer chose ${computerSelection}.`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        para.textContent = `You win! You chose ${playerSelection} and computer chose ${computerSelection}.`;
    } else if (playerSelection === computerSelection) {
        para.textContent = `You Tied the round! You both chose ${playerSelection}.`;
    } else {
        computerScore++;
        para.textContent = `You Lost the round! You chose ${playerSelection} and computer chose ${computerSelection}.`;
    }
}

// function logRound(round) {
//     console.log("Round: ", round);
// }


const buttons = document.querySelectorAll('button');
const playerScoreDisplay = document.querySelector(".displayPlayerScore");
const computerScoreDisplay = document.querySelector(".displayComputerScore");
const winnerDisplay = document.querySelector("p.winnerdisplay");







buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            let playerSelection = e.target.textContent;
            let computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
            playerScoreDisplay.textContent = playerScore;
            computerScoreDisplay.textContent = computerScore;
            if (playerScore === 5){
                winnerDisplay.textContent = "You won the Game";
             } else if (computerScore === 5){
                winnerDisplay.textContent = "You Lost! The computer won the game"
             }
        });
    });








// function game() {

//     // for (i = 1; i < 6; i++) {
//     //     let round = i;
//     //     const playerSelection = getPlayerChoice();
//     //     const computerSelection = getComputerChoice();
//     //     logRound(round);
//     //     console.log(playRound(playerSelection, computerSelection));
//     //     console.log("Player Score: ", playerScore);
//     //     console.log("Computer Score: ", computerScore);
//     //     console.log("<------------>");
//     //}
//     //const computerSelection = getComputerChoice();
//     //const playerSelection = getPlayerChoice();
//     //playRound(playerSelection, computerSelection);


//     if (playerScore > computerScore) {
//         para.textContent = "You won the Game!"
//     } else if (playerScore == computerScore) {
//         para.textContent = "You tied!"
//     } else {
//         para.textContent = "You lost the Game!"
//     }
// }

