const guess = document.getElementById('userGuess');
const submitButton = document.getElementById('userSubmission');
const output = document.getElementById('output');
var randomNumber = Math.floor(Math.random() * 100) + 1;
var guessNum = 1;

// Some weird thing happened with the random number so I had to find a way to force it into the function.
submitButton.onclick = function() {guessNumberGame(randomNumber)};
function guessNumberGame(_randomNumber) {
    function _output(val) {
        guessNum += 1;
        output.innerText = "Output: " + val;
    }
    let userGuess = parseInt(guess.value)
    if (userGuess === _randomNumber) {
        _output(`You guessed the number, ${_randomNumber} With ${guessNum} guesses. Generating a new random number...`);
        randomNumber = Math.floor(Math.random() * 100);
    } else if (guessNum == 10) {
        _output("You reached the guess limit, generating a new number!");
        randomNumber = Math.floor(Math.random() * 100);
        guessNum = 1
    } else if (userGuess > _randomNumber) {
        _output("Your guess was too high!");
    } else if (userGuess < _randomNumber) {
        _output("Your guess was too low!");
    } else {
        _output("Use numbers only!")
    }
};