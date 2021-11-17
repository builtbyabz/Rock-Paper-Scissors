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
var computerChoise = "";
/** Event listeners to each user selection.  **/

var selectChoice = document.querySelectorAll(".selection"); //console.log(selectChoice);

selectChoice.forEach(function (choice) {
  choice.addEventListener("click", function () {
    playerChoise = choice.innerText;
    getComputerChoice();
    displaySelection(); //console.log(playerChoise)
    //console.log(computerChoise)
    //alert ("You chose " + playerChoise)
  });
}); // This function generates a randome selection for the computer

var getComputerChoice = function getComputerChoice() {
  var randomNumber = Math.floor(Math.random() * selectChoice.length); //console.log(randomNumber)
  //console.log(selectChoice[randomNumber].innerText)

  return computerChoise = selectChoice[randomNumber].innerText;
}; //console.log(getComputerChoice())
//console.log(computerChoise)


var displaySelection = function displaySelection() {
  if (playerChoise === "Paper") {
    document.querySelector("#player--hand").src = "assets/images/paper.png";
  } else if (playerChoise === "Scissors") {
    document.querySelector("#player--hand").src = " assets/images/scissors.png";
  } else if (playerChoise === "Rock") {
    document.querySelector("#player--hand").src = "assets/images/rock.png";
  }
};

displaySelection();