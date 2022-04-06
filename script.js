'use strict';

// document.querySelector('.check').addEventListener('click', function () {
//     console.log(document.querySelector('.guess').value);
// });

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);


let score = Number(document.querySelector('.score').textContent);
// console.log(`Score is ${score}`);

let highScore = document.querySelector('.highscore').textContent;

//If the Check! button is pressed
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);


    console.log(guess, typeof guess);
    //If there is no guess
    if (!guess) document.querySelector('.message').textContent = 'No number entered';

    //If the guess is correct
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct number';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        console.log(`current score is ${score} and high score is ${highScore}`);
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        console.log(`After applying current score is ${score} and high score is ${highScore}`);

    }

    else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = (guess > secretNumber) ? 'Too high' : 'Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
    //Commented the below code as it is refactored by using a ternary operator
    //If the guess is high
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too high';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }

    // }
    // //If the guess is low
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too Low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = 'You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }

    // }

});
//If the Again! button is pressed
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc((Math.random() * 20)) + 1;
    console.log(secretNumber);
    document.querySelector('.number').textContent = '?';
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

;