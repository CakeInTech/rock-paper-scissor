const gameData = {
    choices: ["rock", "paper", "scissors"],
    roundsLeft: 5,
};

function computerPlay({ choices }) {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function playerSelection(gameData) {
    let playerSelection = prompt(
        `Enter your choice (rock, paper, scissors): ( You have ${gameData} rounds left).`
    );
    if (!playerSelection) {
        if (confirm("Oh no you haven't finished the game, do you want to leave?")) {
            return;
        }
    } else if (["rock", "paper", "scissors"].includes(playerSelection.toLowerCase().trim())) {
        return playerSelection.toLowerCase().trim();
    } else {
        alert("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
        return playerSelection();
    }
}

function game({ choices, roundsLeft }) {
    let playerScore = 0;
    let computerScore = 0;
    while (roundsLeft > 0) {
        let player = playerSelection(roundsLeft);
        if (!player) return;
        let computer = computerPlay({ choices });
        let result = playRound(player, computer);
        if (result.startsWith("You Win")) {
            playerScore++;
            alert(`Congrats! ${result}\n Click ok to go to the next round.`);
        } else if (result.startsWith("You Lose")) {
            computerScore++;
            alert(`Sorry! ${result}\n Click ok to go to the next round.`);
        } else {
            alert(`It's a ${result}\n Click ok to go to the next round.`);
        }
        roundsLeft--;
    }
    displayWinner(playerScore, computerScore);
}

function displayWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        alert(`CONGRATULATIONS! 🎉 YOU WON THE GAME.\nFinal Score: You ${playerScore} - Computer ${computerScore}\n You can refresh the page to play again.`);
    } else if (playerScore < computerScore) {
        alert(`SORRY! YOU LOST THE GAME.😁\nFinal Score: You ${playerScore} - Computer ${computerScore}\n You can refresh the page to play again`);
    } else {
        alert(`IT'S A TIE!😯\nFinal Score: You ${playerScore} - Computer ${computerScore}\n You can refresh the page to play again`);
    }
}

alert('Hello there, Welcome to the game!')
alert('You have 5 rounds to play against the computer so Goodluck!🤞 :")')
game(gameData)