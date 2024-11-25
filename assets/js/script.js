// event listeners
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');
    for (let b of buttons) {
        b.addEventListener('click', function() {
            if (this.getAttribute('data-type') === 'submit') {
                alert('you clicked submit');
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`You clicked: ${gameType}`);
            }
        })
    }
});


// functions
function runGame() {}
function checkAnswer() {}
function calculateCorrectAnswer() {}
function incrementWrongAnswer() {}
function displayAdditionQuestion() {}
function displaySubtractQuestion() {}
function displayMultiplyQuestion() {}
