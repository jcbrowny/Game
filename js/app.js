document.addEventListener("DOMContentLoaded", function() {
//variables
var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("comp-score");
var scoreTracker_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");

main();
// functions

// makes the computer choose randomly from the chocies
function getComputerChoice() {
  var choices = ['r', 'p', 's'];
  var randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// edits the win/lose message
function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

// prints the win text if you win
function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  var smallUserWord = "user".fontsize(3).sub();
  var smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)}(user) beats ${convertToWord(computerChoice)}(comp). You win!`;
}

// prints the lose message
function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  var smallUserWord = "user".fontsize(3);
  var smallCompWord = "comp".fontsize(3);
  result_p.innerHTML = `${convertToWord(userChoice)}(user) loses to ${convertToWord(computerChoice)}(comp). You lose....`;
}

// prints the draw message
function draw(userChoice, computerChoice) {
  var smallUserWord = "user".fontsize(3);
  var smallCompWord = "comp".fontsize(3);
  result_p.innerHTML = `${convertToWord(userChoice)}(user)  ${convertToWord(computerChoice)}(comp) Draw`;
}

// makes the core of the game, the switch determites the win/lose/draw
function game(userChoice) {
  var computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}
// listens for when the imgs are clicked
function main() {
  rock_div.addEventListener('click', function () {
    game("r");
  })
  paper_div.addEventListener('click', function () {
    game("p");
  })
  scissors_div.addEventListener('click', function () {
    game("s");
  })
}

})
