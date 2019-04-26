document.addEventListener("DOMContentLoaded", function() {

  //variables
  var userScore = 0;
  var computerScore = 0;
  var userScore_span = document.getElementById("user-score");
  var computerScore_span = document.getElementById("comp-score");
  var scoreTracker_div = document.querySelector(".score-board");
  var result_p = document.querySelector(".result p");
  var rock_div = document.getElementById("r");
  var scissors_div = document.getElementById("s");
  var paper_div = document.getElementById("p");

  $('#play').click(function() {
    $("#sound").get(0).play();
  })


  main();

  // functions

  // makes the computer choose randomly from the chocies
  function getComputerChoice() {
  var choices = ['r', 's', 'p'];
  var randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

  // edits the win/lose message
  function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
  return "Sponge"

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
    // rock beats f,s,sna,h,t,wol,spo
    case "rs":
    // scissors beats sna,h,t,wol,spo,p,a
    case "sp":
    // paper beats a,w,dra,dev,l,g,r
    case "pr":
      win(userChoice, computerChoice);
      break;
    // rock loses to paper
    case "rp":
    //scissors loses to rock
    case "sr":
    // paper loses to scissors
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "ss":
    case "pp":
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
