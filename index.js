let secretNumber = Math.trunc(Math.random() * 20 + 1)
let score = 20;

let highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
    let guessingNumber = Number(document.querySelector(".guess").value);
    if (!guessingNumber) {
        document.querySelector(".message").textContent = "Please insert the number!";

    } else if (guessingNumber > secretNumber) {
        document.querySelector(".message").textContent = "Too High!";
        score--;
        document.querySelector(".score-count").textContent = String(score);
    } else if (guessingNumber < secretNumber) {
        document.querySelector(".message").textContent = "Too Low!";
        score--;
        document.querySelector(".score-count").textContent = String(score);
    } else if (guessingNumber === secretNumber) {
        document.querySelector(".message").textContent = "Correct Number!"
        document.querySelector(".secret-number").textContent = String(secretNumber)
        document.querySelector("body").style.backgroundColor = "#60b347"
        if (highScore < score) {
            highScore = score;
            document.querySelector(".high-count").textContent = highScore
        }
    }
})
document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20);
    document.querySelector(".message").textContent = "Start Guessing...";
    document.querySelector(".secret-number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".score-count").textContent = String(score);
})