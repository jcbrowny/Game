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
  var snake_div = document.getElementById("sna");
  var human_div = document.getElementById("h");
  var tree_div = document.getElementById("t");
  var wolf_div = document.getElementById("wol");
  var sponge_div = document.getElementById("spo");
  var paper_div = document.getElementById("p");
  var air_div = document.getElementById("a");
  var water_div = document.getElementById("w");
  var dragon_div = document.getElementById("dra");
  var devil_div = document.getElementById("dev");
  var lightning_div = document.getElementById("l");
  var gun_div = document.getElementById("g");

  $('#play').click(function() {
    $("#sound").get(0).play();
  })


  main();

  // functions

  // makes the computer choose randomly from the chocies
  function getComputerChoice() {
  var choices = ['r', 'f', 's','sna', 'h', 't', 'wol', 'spo', 'p', 'a', 'w', 'dra', 'dev', 'l', 'g'];
  var randomNumber = Math.floor(Math.random() * 15);
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
  if (letter === "sna") return "Snake";
  if (letter === "h") return "Human";
  if (letter === "t") return "Tree";
  if (letter === "w") return "Wolf";
  if (letter === "dra") return "Dragon";
  if (letter === "dev") return "Devil";
  if (letter === "l") return "Lighting";
  if (letter === "g") return "Gun";
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
    case "rf":
    case "rs":
    case "rsna":
    case "rh":
    case "rt":
    case "rwol":
    case "rspo":
    // fire beats s,sna,h,t,wol,spo,p
    case "fs":
    case "fsna":
    case "sh":
    case "st":
    case "swol":
    case "sspo":
    case "sp":
    // scissors beats sna,h,t,wol,spo,p,a
    case "ssna":
    case "sh":
    case "st":
    case "swol":
    case "sspo":
    case "sp":
    case "sa":
    // snake beats h,t,wol,spo,p,a,w
    case "sh":
    case "st":
    case "swol":
    case "sspo":
    case "sp":
    case "sa":
    case "sw":
    // human beats t,wol,spo,p,a,w,dra
    case "ht":
    case "hwol":
    case "hspo":
    case "hp":
    case "ha":
    case "hw":
    case "hdra":
    // tree beats wol,spo,p,a,w,dra,dev
    case "twol":
    case "tspo":
    case "tp":
    case "ta":
    case "tw":
    case "tdra":
    case "tdev":
    // wolf beats spo,p,a,w,dra,dev,l
    case "tspo":
    case "tp":
    case "ta":
    case "tw":
    case "tdra":
    case "tdev":
    case "tl":
    // sponge beats p,a,w,dra,dev,l,g
    case "spop":
    case "spoa":
    case "spow":
    case "spodra":
    case "spodev":
    case "spol":
    case "spog":
    // paper beats a,w,dra,dev,l,g,r
    case "pa":
    case "pw":
    case "pdra":
    case "pdev":
    case "pl":
    case "pg":
    case "pr":
    // air beats w,dra,dev,l,g,r,f
    case "aw":
    case "adra":
    case "adev":
    case "al":
    case "ag":
    case "ar":
    case "af":
    // water beats dra,dev,l,g,r,f,s
    case "wdra":
    case "wdev":
    case "wl":
    case "wg":
    case "wr":
    case "wf":
    case "ws":
    // dragon beats dev,l,g,r,f,s,sna
    case "dradev":
    case "dral":
    case "drag":
    case "drar":
    case "draf":
    case "dras":
    case "drasna":
    // devil beats l,g,r,f,s,sna,h
    case "devl":
    case "devg":
    case "devr":
    case "devf":
    case "devs":
    case "devsna":
    case "devh":
    // lighting beats g,r,f,s,sna,h,t
    case "lg":
    case "lr":
    case "lf":
    case "ls":
    case "lsna":
    case "lh":
    case "lt":
    // gun beats r,f,s,sna,h,t,wol
    case "gr":
    case "gf":
    case "gs":
    case "gsna":
    case "gh":
    case "gt":
    case "gwol":
      win(userChoice, computerChoice);
      break;
    // rock loses to g,l,dev,dra,w,a,p
    case "rg":
    case "rl":
    case "rdev":
    case "rdra":
    case "rw":
    case "ra":
    case "rp":
    // fire loses to r,g,l,dev,dra,w,a
    case "fr":
    case "fg":
    case "fl":
    case "fdev":
    case "fdra":
    case "fw":
    case "fa":
    //scissors loses to f,r,l,dev,dra,w,a
    case "sf":
    case "sr":
    case "sl":
    case "sdev":
    case "sdra":
    case "sw":
    case "sa":
    // snake loses to s,f,r,l,dev,dra,w
    case "snas":
    case "snaf":
    case "snar":
    case "snal":
    case "snadev":
    case "snadra":
    case "snaw":
    // human loses to sna,s,f,r,l,dev,dra
    case "hsna":
    case "hs":
    case "hf":
    case "hr":
    case "hl":
    case "hdev":
    case "hdra":
    // tree loses to h,sna,s,f,r,l,dev
    case "th":
    case "tsna":
    case "ts":
    case "tf":
    case "tr":
    case "tl":
    case "tdev":
    // wolf loses to t,h,sna,s,f,r,l
    case "wolt":
    case "wolh":
    case "wolsna":
    case "wols":
    case "wols":
    case "wolf":
    case "woll":
    // sponge loses to wol,t,h,sna,s,f,r
    case "spowol":
    case "spot":
    case "spoh":
    case "sposna":
    case "spos":
    case "spof":
    case "spor":
    // paper loses to spo,wol,t,h,sna,s,f
    case "pspo":
    case "pwol":
    case "pt":
    case "ph":
    case "psna":
    case "ps":
    case "pf":
    // air loses to p,spo,wol,t,h,sna,s
    case "ap":
    case "aspo":
    case "awol":
    case "at":
    case "ah":
    case "asna":
    case "as":
    // water loses a,p,spo,wol,t,h,sna
    case "wa":
    case "wp":
    case "wspo":
    case "wwol":
    case "wt":
    case "wh":
    case "wsna":
    // dragon loses to  w,a,p,spo,wol,t,h
    case "draw":
    case "draa":
    case "drap":
    case "draspo":
    case "drawol":
    case "drat":
    case "drah":
    // devil loses to dra,w,a,p,spo,wol,t
    case "devdra":
    case "devw":
    case "deva":
    case "devp":
    case "devspo":
    case "devwol":
    case "devt":
    // lighting loses to dev,dra,w,a,p,spo,wol
    case "ldev":
    case "ldra":
    case "lw":
    case "la":
    case "lp":
    case "lspo":
    case "lwol":
    // gun loses to l,dev,dra,w,a,p,spo
    case "gl":
    case "gdev":
    case "gdra":
    case "gw":
    case "ga":
    case "gp":
    case "gspo":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "ff":
    case "ss":
    case "snasna":
    case "hh":
    case "tt":
    case "wolwol":
    case "spospo":
    case "pp":
    case "aa":
    case "ww":
    case "dradra":
    case "devdev":
    case "ll":
    case "gg":
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
    snake_div.addEventListener('click', function () {
      game("sna");
    })
    human_div.addEventListener('click', function () {
      game("h");
    })
    tree_div.addEventListener('click', function () {
      game("t");
    })
    wolf_div.addEventListener('click', function () {
      game("wol");
    })
    dragon_div.addEventListener('click', function () {
      game("dra");
    })
    devil_div.addEventListener('click', function () {
      game("dev");
    })
    lightning_div.addEventListener('click', function () {
      game("l");
    })
    gun_div.addEventListener('click', function () {
      game("gun");
    })
  }

})
