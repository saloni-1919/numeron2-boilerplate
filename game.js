// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
const num1 = Math.floor(Math.random() * 101);
const num2 = Math.floor(Math.random() * 101);
// Iteration 3: Creating variables required to make the game functional
let operator;
let result;

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
const number3Element = document.getElementById("number3");
// Iteration 5: Creating a randomise function to make the game functional
function randomize() {
    // Generate random numbers for num1 and num2
    const num1 = Math.floor(Math.random() * 101);
    const num2 = Math.floor(Math.random() * 101);
    
    // Randomly choose an operator
    const operators = ['+', '-', '*', '/', '%'];
    operator = operators[Math.floor(Math.random() * operators.length)];
    
    // Compute the result based on the operator
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
    }

    // Display the numbers and operator
    document.getElementById("number1").textContent = num1;
    document.getElementById("number2").textContent = num2;
    document.getElementById("number3").textContent = result;
}
// Iteration 6: Making the Operators (button) functional
// Iteration 6: Making the Operators (button) functional
document.getElementById("plus").addEventListener("click", function() {
    if (operator === '+') {
        // Correct guess
        let score = parseInt(localStorage.getItem("score"));
        if (isNaN(score)) {
            score = 0; // Initialize score to 0 if it's not set or not a valid number
        }
        score++; // Increment score
        localStorage.setItem("score", score); // Update localStorage
        // Continue the game
        randomize();
        // Reset timer
        startTimer();
    } else {
        // Wrong guess
        // Redirect to game over page
        window.location.href = "gameover.html";
    }
});

document.getElementById("minus").addEventListener("click", function() {
    if (operator === '-') {
        // Correct guess
        let score = parseInt(localStorage.getItem("score"));
        if (isNaN(score)) {
            score = 0; // Initialize score to 0 if it's not set or not a valid number
        }
        score++; // Increment score
        localStorage.setItem("score", score); // Update localStorage
        // Continue the game
        randomize();
        // Reset timer
        startTimer();
    } else {
        // Wrong guess
        // Redirect to game over page
        window.location.href = "gameover.html";
    }
});

document.getElementById("mul").addEventListener("click", function() {
    if (operator === '*') {
        // Correct guess
        let score = parseInt(localStorage.getItem("score"));
        if (isNaN(score)) {
            score = 0; // Initialize score to 0 if it's not set or not a valid number
        }
        score++; // Increment score
        localStorage.setItem("score", score); // Update localStorage
        // Continue the game
        randomize();
        // Reset timer
        startTimer();
    } else {
        // Wrong guess
        // Redirect to game over page
        window.location.href = "gameover.html";
    }
});

document.getElementById("divide").addEventListener("click", function() {
    if (operator === '/') {
        // Correct guess
        let score = parseInt(localStorage.getItem("score"));
        if (isNaN(score)) {
            score = 0; // Initialize score to 0 if it's not set or not a valid number
        }
        score++; // Increment score
        localStorage.setItem("score", score); // Update localStorage
        // Continue the game
        randomize();
        // Reset timer
        startTimer();
    } else {
        // Wrong guess
        // Redirect to game over page
        window.location.href = "gameover.html";
    }
});

document.getElementById("modulus").addEventListener("click", function() {
    if (operator === '%') {
        // Correct guess
        let score = parseInt(localStorage.getItem("score"));
        if (isNaN(score)) {
            score = 0; // Initialize score to 0 if it's not set or not a valid number
        }
        score++; // Increment score
        localStorage.setItem("score", score); // Update localStorage
        // Continue the game
        randomize();
        // Reset timer
        startTimer();
    } else {
        // Wrong guess
        // Redirect to game over page
        window.location.href = "gameover.html";
    }
});

// Iteration 7: Making Timer functional
let timerValue = 20; // Initial timer value in seconds
let timerInterval; // Variable to store the interval

// Function to start the timer
function startTimer() {
    timerValue = 20; // Reset timer value
    clearInterval(timerInterval); // Clear any existing interval
    timerInterval = setInterval(function() {
        timerValue--;
        document.getElementById("timer").textContent = timerValue;

        if (timerValue === 0) {
            clearInterval(timerInterval);
            // Game over logic here
            console.log("Game over!");
            // Redirect to game over page
            window.location.href = "gameover.html";
        }
    }, 1000); // Update timer every second
}

randomize();
startTimer();