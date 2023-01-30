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
        let playerSelection = prompt(`Enter your choice (rock, paper, scissors): ( You have ${roundsLeft} rounds left).`);
        if (["rock", "paper", "scissors"].includes(playerSelection.toLowerCase())) {
            let computerSelection = computerPlay({ choices })
            let result = playRound(playerSelection, computerSelection);
            if (result.startsWith("You Win")) {
                playerScore++;
                alert(`Congrats! ${result}.`);
            } else if (result.startsWith("You Lose")) {
                computerScore++;
                alert(`Sorry! ${result}.`);
            } else {
                alert(`It's a ${result}.`);
            }
            roundsLeft--;
        } else {
            alert("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.")
        }
    }
    if (playerScore > computerScore) {
        alert(`Congratulations! You won the game.\nFinal Score: You ${playerScore} - Computer ${computerScore} score \n You can refresh the page to play again.`);
    } else if (playerScore < computerScore) {
        alert(`Sorry! You lost the game.\nFinal Score: You ${playerScore} - Computer ${computerScore} \n You can refresh the page to play again`);
    } else {
        alert(`It's a tie!\nFinal Score: You ${playerScore} - Computer ${computerScore} \n You can refresh the page to play again`);
    }
}

alert('Hello there, Welcome to the game!')
alert('You have 5 rounds to play against the computer so Goodluck!🤞 :")')
game(gameData)