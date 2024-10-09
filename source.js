let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    let randM = choice[Math.floor(Math.random() * choice.length)];
    return randM;
    }; 

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "Paper") {
        computerScore++;
        return "You lose! Paper beats Rock";
    }
    else if (humanChoice == "paper" && computerChoice == "Rock") {
        humanScore++;
        return "You win! Paper beats Rock";
    }
    else if (humanChoice == "rock" && computerChoice == "Scissors") {
        humanScore++
        return "You win! Rock beats Scissors";
    }
    else if (humanChoice == "scissors" && computerChoice == "Rock") {
        computerScore++
        return "You lose! Rock beats Scissors";
    }
    else if (humanChoice == "paper" && computerChoice == "Scissors") {
        computerScore++
        return "You lose! Scissors beats Paper";
    }
    else if (humanChoice == "scissors" && computerChoice == "Paper") {
        humanScore++;
        return "You win! Scissors beats Paper";
    }
    else if (humanChoice == computerChoice) {
        return "Draw";
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
    let humanChoice = prompt("Enter Rock, Paper or Scissors");
    let computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
    }
}

function totalScore() {
    if (computerScore > humanScore) {
        return 'You lost!';
    }
    else {
        return 'You won!';
    }
}

playGame();
console.log(totalScore());

