const gameData = {
    choices: ['rock', 'paper', 'scissors'],
    roundsLeft: 5,
};


function computerPlay({ choices }) {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "Tie!"
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function game({ choices, roundsLeft }) {
    let playerScore = 0;
    let computerScore = 0;
    while (roundsLeft > 0) {
        let playerSelection = prompt("Enter your choice (rock, paper, scissors): ");
        if (!["rock", "paper", "scissors"].includes(playerSelection.toLowerCase())) {
            alert("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.")
            continue;
        }
        let computerSelection = computerPlay({ choices })
        let result = playRound(playerSelection, computerSelection);
        if (result.startsWith("You Win")) {
            playerScore++;
            alert(`Congrats! ${result} you have ${roundsLeft} rounds left.`);
        } else if (result.startsWith("You Lose")) {
            computerScore++;
            alert(`Sorry! ${result} you have ${roundsLeft} rounds left.`);
        } else {
            alert(`It's a ${result} you have ${roundsLeft} rounds left.`);
        }
        roundsLeft--;
    }
    if (playerScore > computerScore) {
        alert("Congratulations! You won the game.\nFinal Score: You " + playerScore + " - Computer " + computerScore);
    } else if (playerScore < computerScore) {
        alert("Sorry! You lost the game.\nFinal Score: You " + playerScore + " - Computer " + computerScore);
    } else {
        alert("It's a tie!\nFinal Score: You " + playerScore + " - Computer " + computerScore);
    }
}

