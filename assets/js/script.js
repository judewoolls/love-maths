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

    document.getElementById('answer-box').addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })

    runGame('addition')
});


/**
 * the main game loop called when the script is first loaded 
 * and after users answer is processed
 */
function runGame(gameType) {

    document.getElementById('answer-box').value = '';
    document.getElementById('answer-box').focus();

    // creates random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);

    } else if (gameType === 'subtract') {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "division") {
        displayDivisionQuestion((num1 * num2),num2); // num1 * num2 is to ensure that its a clean division and is larger than operand2
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
        alert('Correct!');
        incrementScore();
    } else {
        alert(`Incorrect! The answer is: ${calculatedAnswer[0]}`);
        incrementWrongAnswer();
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
    } else if (operator === 'x') {
        return [operand1 * operand2, "multiply"];
    } else if (operator === '-') {
        return [operand1 - operand2, "subtract"];
    } else if (operator === '/') {
        return [operand1 / operand2, "division"]
    } else {
        alert(`unimplemented operator ${operator}`);
        throw(`unimplemented operator ${operator}. Aborting!`);
    }
}

/**
 * gets the current score from the dom and adds 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;

}
 
/**
 * gets the tally of incorrect answers from the dom
 * and increments by 1
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '-';
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';
}

function displayDivisionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '/';
}