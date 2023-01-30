const gameData = {
    choices: ['rock', 'paper', 'scissors'],
    roundsLeft: 5,
};


function computerPlay({ choices }) {
    return choices[Math.floor(Math.random() * choices.length)];
}