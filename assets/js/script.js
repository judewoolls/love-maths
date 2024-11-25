// event listeners
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');
    for (let b of buttons) {
        b.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {
                checkAnswer();
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

/**
 * checks the answer against the first element in the returned array
 * from calculateCorrectAnswer();
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    if (isCorrect) {
        alert('Correct!')
    } else {
        alert(`Incorrect! The answer is: ${calculatedAnswer[0]}`);
    }

    runGame(calculatedAnswer[1]);
}
/**
 * Gets the operands from and the operator from the dom and 
 * returns the correct answer
 */
function calculateCorrectAnswer() {
    // get elements from the dom and parse them to a integer
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`unimplemented operator ${operator}`);
        throw(`unimplemented operator ${operator}. Aborting!`);
    }
}
function incrementWrongAnswer() {}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}
function displaySubtractQuestion() {}
function displayMultiplyQuestion() {}
