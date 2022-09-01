// locate
const guess = document.getElementById('userGuess');
const submitButton = document.getElementById('userSubmission');
const donationButton = document.getElementById('userDonation');
const quizButton = document.getElementById('quizButton');
const output = document.getElementById('_output');
var randomNumber = Math.floor(Math.random() * 100) + 1;
var guessNum = 1;

// check click/randomNumber game
submitButton.onclick = function() {guessNumberGame(randomNumber)};
function guessNumberGame(_randomNumber) {
    // output
    function _output(val) {
        guessNum += 1;
        output.innerText = "Output: " + val;
    }
    // Checks user guess
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

// Donation link
donationButton.onclick = function() {donate()};
function donate() {
    location.href = "https://shorturl.at/aMOPY";
};

// Quiz
quizButton.onclick = function() {quiz()};
function quiz() {
    location.href = "http://127.0.0.1:5500/dwayneQuiz.html";
};


