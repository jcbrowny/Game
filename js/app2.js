document.addEventListener("DOMContentLoaded", function() {

  //variables
  var userScore = 0;
  var computerScore = 0;
  var userScore_span = document.getElementById("user-score");
  var computerScore_span = document.getElementById("comp-score");
  var scoreTracker_div = document.querySelector(".score-board");
  var result_p = document.querySelector(".result p");
  var rock_div = document.getElementById("r");
  var fire_div = document.getElementById("f");
  var scissors_div = document.getElementById("s");
  var sponge_div = document.getElementById("spo");
  var paper_div = document.getElementById("p");
  var air_div = document.getElementById("a");
  var water_div = document.getElementById("w");

  $('#play').click(function() {
    $("#sound").get(0).play();
  })


  main();

  // functions

  // makes the computer choose randomly from the chocies
  function getComputerChoice() {
  var choices = ['r', 'f', 's', 'spo', 'p', 'a', 'w'];
  var randomNumber = Math.floor(Math.random() * 7);
  return choices[randomNumber];
}

  // edits the win/lose message
  function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
  if (letter === "f") return "Fire";
  if (letter === "w") return "Water";
  if (letter === "a") return "Air";
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
    // rock beats f,s,spo
    case "rf":
    case "rs":
    case "rspo":
    // fire beats s,spo,p
    case "fs":
    case "fspo":
    case "sp":
    // scissors beats spo,p,a
    case "sspo":
    case "sp":
    case "sa":
    // sponge beats p,a,w
    case "spop":
    case "spoa":
    case "spow":
    // paper beats a,w,r
    case "pa":
    case "pw":
    case "pr":
    // air beats w,r,f
    case "aw":
    case "ar":
    case "af":
    // water beats r,f,s
    case "wr":
    case "wf":
    case "ws":
      win(userChoice, computerChoice);
      break;
    // rock loses to w,a,p
    case "rw":
    case "ra":
    case "rp":
    // fire loses to r,w,a
    case "fr":
    case "fw":
    case "fa":
    //scissors loses to f,r,w
    case "sf":
    case "sr":
    case "sw":
    // sponge loses to s,f,r
    case "spos":
    case "spof":
    case "spor":
    // paper loses to spo,s,f
    case "pspo":
    case "ps":
    case "pf":
    // air loses to p,spo,s
    case "ap":
    case "aspo":
    case "as":
    // water loses a,p,spo
    case "wa":
    case "wp":
    case "wspo":
      lose(userChoice, computerChoice);
      break;
    case "pp":
    case "rr":
    case "ss":
    case "ff":
    case "ww":
    case "aa":
    case "spospo":
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
    fire_div.addEventListener('click', function () {
      game("f");
    })
    water_div.addEventListener('click', function () {
      game("w");
    })
    air_div.addEventListener('click', function () {
      game("a");
    })
    sponge_div.addEventListener('click', function () {
      game("spo");
    })
  }

})
