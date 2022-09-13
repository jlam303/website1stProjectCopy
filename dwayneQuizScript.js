// locate
const quizSubmitButton = document.getElementById('quizSubmission');
const returnButton = document.getElementById('return');
const __output = document.getElementById('output');

// quiz/checks if press
quizSubmitButton.onclick = function() {quiz()};
function quiz() {
    let points = 0
    // if question is answer give points
    if (document.querySelector('input[name="q1"]:checked').value == 1) {points += 1}
    if (document.querySelector('input[name="q2"]:checked').value == 1) {points += 1}
    if (document.querySelector('input[name="q3"]:checked').value == 3) {points += 1}
    if (document.querySelector('input[name="q4"]:checked').value == 4) {points += 1}
    if (document.querySelector('input[name="q5"]:checked').value == 3) {points += 1}
    if (document.querySelector('input[name="q6"]:checked').value == 1) {points += 1}
    if (document.querySelector('input[name="q7"]:checked').value == 2) {points += 1}
    if (document.querySelector('input[name="q8"]:checked').value == 3) {points += 1}
    if (document.querySelector('input[name="q9"]:checked').value == 4) {points += 1}
    if (document.querySelector('input[name="q10"]:checked').value == 2) {points += 1}
    if (document.querySelector('input[name="q11"]:checked').value == 1) {points += 1}
    if (document.querySelector('input[name="q12"]:checked').value == 3) {points += 1}
    if (document.querySelector('input[name="q13"]:checked').value == 4) {points += 1}
    if (document.querySelector('input[name="q14"]:checked').value == 2) {points += 1}
    // averages points and changes text
    let percentage = Math.round((points / 14) * 100)
    __output.innerText = "You are " + percentage + "% Dwayne Johnson!"
};

// move back to main page
returnButton.onclick = function() {main()};
function main() {
    location.href = "http://127.0.0.1:5500/index.html"
};