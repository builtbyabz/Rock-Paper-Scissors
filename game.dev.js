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
var playerScore = document.querySelector(".player-score");
var computerScore = document.querySelector(".cpu-score");
/** Event listeners to each user selection.  **/

var selectChoice = document.querySelectorAll(".selection"); //console.log(selectChoice);

selectChoice.forEach(function (choice) {
  choice.addEventListener("click", function () {
    playerChoise = choice.innerText;
    getComputerChoice(); //displaySelection()
    //displayCpuSelection()

    setTimeout(displayCpuSelection, 1000);
    setTimeout(displaySelection, 1000); //console.log(playerChoise)
    //console.log(getComputerChoice())
    //incrementScore()

    setTimeout(incrementScore, 1000); //alert ("You chose " + playerChoise)
  });
}); // This function generates a random selection for the computer

var getComputerChoice = function getComputerChoice() {
  var randomNumber = Math.floor(Math.random() * selectChoice.length); //console.log(randomNumber)
  //console.log(selectChoice[randomNumber].innerText)

  computerChoise = selectChoice[randomNumber].innerText;
  return computerChoise;
}; //console.log(getComputerChoice())
//console.log(computerChoise)


var displaySelection = function displaySelection() {
  if (playerChoise === "Paper") {
    document.querySelector("#cpu--hand").src = "assets/images/paper.png";
  } else if (playerChoise === "Scissors") {
    document.querySelector("#cpu--hand").src = " assets/images/scissors.png";
  } else if (playerChoise === "Rock") {
    document.querySelector("#cpu--hand").src = "assets/images/rock.png";
  }
}; //The default fist will change depending on what the user selects


var displayCpuSelection = function displayCpuSelection() {
  if (computerChoise === "Paper") {
    document.querySelector("#player--hand").src = "assets/images/paper.png";
  } else if (computerChoise === "Scissors") {
    document.querySelector("#player--hand").src = " assets/images/scissors.png";
  } else if (computerChoise === "Rock") {
    document.querySelector("#player--hand").src = "assets/images/rock.png";
  }
};

var incrementScore = function incrementScore() {
  if (playerChoise === "Rock" && computerChoise === "Scissors") {
    playerScore.innerHTML++;
    playerScore.classList.add("green");
    computerScore.classList.remove("green");
  } else if (playerChoise === "Paper" && computerChoise === "Rock") {
    playerScore.innerHTML++;
    playerScore.classList.add("green");
    computerScore.classList.remove("green");
  } else if (playerChoise === "Scissors" && computerChoise === "Paper") {
    playerScore.innerHTML++;
    playerScore.classList.add("green");
    computerScore.classList.remove("green");
  } else if (computerChoise === "Rock" && playerChoise === "Scissors") {
    computerScore.innerHTML++;
    playerScore.classList.remove("green");
    computerScore.classList.add("green");
  } else if (computerChoise === "Paper" && playerChoise === "Rock") {
    computerScore.innerHTML++;
    playerScore.classList.remove("green");
    computerScore.classList.add("green");
  } else if (computerChoise === "Scissors" && playerChoise === "Paper") {
    computerScore.innerHTML++;
    playerScore.classList.remove("green");
    computerScore.classList.add("green");
  } else if (playerChoise === computerChoise) {
    computerScore.classList.remove("green");
    playerScore.classList.remove("green");
    console.log("draw");
  }

  displayWinner();
};

var displayWinner = function displayWinner() {
  if (computerScore === 3 && playerScore === !3) {
    console.log("Computer Wins");
  }
}; // const incrementScore = () => {
//     for (computerScore = 0; computerScore < 3; computerScore++) {
//         if (computerScore === 2) {
//             alert("Computer You win");
//         } else if (computerScore === 3 && playerScore !=3) {
//             alert("Computr You win")
//         }
//     }
// }