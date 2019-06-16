let options = [
    "Rock",
    "Paper",
    "Scissors"
  ];

let chosen;

  string 
   
  function functionRock(){
    chosen = getRandom();
    if (chosen == "Scissors") document.getElementById("winOrLose").innerHTML = "Win!";
    else if (chosen == "Paper") document.getElementById("winOrLose").innerHTML = "Lose!";
    else if (chosen == "Rock")document.getElementById("winOrLose").innerHTML = "Tie!";
  }

  function functionPaper(){
    chosen = getRandom();
    if (chosen == "Rock") document.getElementById("winOrLose").innerHTML = "Win!";
    else if (chosen == "Scissors") document.getElementById("winOrLose").innerHTML = "Lose!";
    else if (chosen == "Paper")document.getElementById("winOrLose").innerHTML = "Tie!";
  }

  function functionScissors(){
    chosen = getRandom();
    if (chosen == "Paper") document.getElementById("winOrLose").innerHTML = "Win!";
    else if (chosen == "Rock") document.getElementById("winOrLose").innerHTML = "Lose!";
    else if (chosen == "Scissors")document.getElementById("winOrLose").innerHTML = "Tie!";
  }

  function getRandom(){
    var randomOption = options[Math.floor(Math.random()*options.length)];
    document.getElementById("answer").innerHTML = randomOption;
    return randomOption;
  }