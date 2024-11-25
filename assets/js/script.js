// event listeners
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');
    for (let b of buttons) {
        b.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {
                alert('you clicked submit');
            } else {
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        })
    }

    runGame('addition')
});


/**
 * the main game loop called when the script is first loaded 
 * and after users answer is processed
 */
function runGame(gameType) {

    // creates random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert('Unknown Game Type');
        throw `Unknown game type: ${gameType}. Aborting`;
    }
}

function checkAnswer() {}
function calculateCorrectAnswer() {}
function incrementWrongAnswer() {}
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}
function displaySubtractQuestion() {}
function displayMultiplyQuestion() {}
