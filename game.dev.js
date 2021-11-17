"use strict";

//1. Think about what you are trying to achieve - RPS
//2. Think about what the game has to do 
//         - select R, P or S
//         - CPU generate dandom R P or S as soon as user chooses
//        - display score on the game
//        - determine who wins by using condiational statements for R P S
//         - store the scores and calculate who wins
// do one thing at a time and test each stage
//
var playerChoise = "";
var computerChoise = ""; //Event listeners to each selection

var selectChoice = document.querySelectorAll(".selection");
console.log(selectChoice);
selectChoice.forEach(function (choice) {
  choice.addEventListener("click", function () {
    playerChoise = choice.innerText;
    console.log(playerChoise);
    alert("You chose " + playerChoise);
  });
});