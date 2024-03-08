document.addEventListener("DOMContentLoaded", function() {
    let score = parseInt(localStorage.getItem("score"));
    if (isNaN(score)) {
        score = 0; // Initialize score to 0 if it's not set or not a valid number
    }
    document.getElementById("score-board").textContent = score;
});
