//1. Think about what you are trying to achieve - RPS
//2. Think about what the game has to do 
//         - select R, P or S
//         - CPU generate dandom R P or S as soon as user chooses
//        - display score on the game
//        - determine who wins by using condiational statements for R P S
//         - store the scores and calculate who wins

// do one thing at a time and test each stage
//
let playerChoise = "";
let computerChoise = "";
let playerScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".cpu-score");

let body = document.querySelector("body");

let computerWins = document.querySelector(".grid-container");



/** Event listeners to each user selection.  **/
const selectChoice = document.querySelectorAll(".selection")
//console.log(selectChoice);


const displayWinner = () => {
    if (computerScore.innerHTML === "3")  {
        //computerWins.classList.add("computerWins")
        //computerScore.innerHTML = "0";
    
        console.log("Computer Wins")

    }

}




// This function generates a random selection for the computer
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * selectChoice.length)
    //console.log(randomNumber)
    //console.log(selectChoice[randomNumber].innerText)
    computerChoise = selectChoice[randomNumber].innerText;
    return computerChoise;
}

//console.log(getComputerChoice())
//console.log(computerChoise)

const displaySelection = () => {
    if (playerChoise === "Paper") {
        document.querySelector("#cpu--hand").src = "assets/images/paper.png"
    } else if (playerChoise === "Scissors") {
        document.querySelector("#cpu--hand").src = " assets/images/scissors.png"
    } else if (playerChoise === "Rock") {
        document.querySelector("#cpu--hand").src = "assets/images/rock.png"
    }
}

//The default fist will change depending on what the user selects
const displayCpuSelection = () => {
    if (computerChoise === "Paper") {
        document.querySelector("#player--hand").src = "assets/images/paper.png"
    } else if (computerChoise === "Scissors") {
        document.querySelector("#player--hand").src = " assets/images/scissors.png"
    } else if (computerChoise === "Rock") {
        document.querySelector("#player--hand").src = "assets/images/rock.png"
    }
}

const e = document.createElement('h3');
const draw = document.querySelector(".draw");

const incrementScore = () => {
   
    
console.log(e)
    if (playerChoise === "Rock" && computerChoise === "Scissors") {
        playerScore.innerHTML++; playerScore.classList.add("green");
        computerScore.classList.remove("green");
       draw.innerHTML ="";
    } 
    else if (playerChoise === "Paper" && computerChoise === "Rock") {
        playerScore.innerHTML++; playerScore.classList.add("green");
        computerScore.classList.remove("green");
        draw.innerHTML ="";
    } 
    else if (playerChoise === "Scissors" && computerChoise === "Paper") {
        playerScore.innerHTML++; playerScore.classList.add("green"); 
        computerScore.classList.remove("green");
        draw.innerHTML ="";
    }
    else if (computerChoise === "Rock" && playerChoise === "Scissors") {
        computerScore.innerHTML++; playerScore.classList.remove("green");
        computerScore.classList.add("green");
        draw.innerHTML ="";
    }
    else if (computerChoise === "Paper" && playerChoise === "Rock") {
        computerScore.innerHTML++; playerScore.classList.remove("green");
        computerScore.classList.add("green");
        draw.innerHTML ="";

    } else if (computerChoise === "Scissors" && playerChoise === "Paper") {
        computerScore.innerHTML++; playerScore.classList.remove("green");
        computerScore.classList.add("green");
        draw.innerHTML ="";
    } else if (playerChoise === computerChoise) {
        const e = document.createElement('h3');

        draw.innerHTML = 'DRAW';
        //e.classList.add("draw")
        //computerWins.appendChild(e);
      
        computerScore.classList.remove("green");
        playerScore.classList.remove("green");
        //console.log("draw") 
    }
    displayWinner()
   
}

selectChoice.forEach(choice => {
    choice.addEventListener("click", () => {
        playerChoise = choice.innerText;
        getComputerChoice()
        //displaySelection()
        //displayCpuSelection()
        setTimeout(displayCpuSelection, 1000)

        setTimeout(displaySelection, 1000);
        //console.log(playerChoise)
        //console.log(getComputerChoice())
        //incrementScore()


        setTimeout(incrementScore, 1000)
        displayWinner()
       
        //alert ("You chose " + playerChoise)
    })

});





// const incrementScore = () => {

   

//     for (computerScore = 0; computerScore < 3; computerScore++) {
//         if (computerScore === 2) {
//             alert("Computer You win");
//         } else if (computerScore === 3 && playerScore !=3) {
//             alert("Computr You win")
//         }
//     }
    

// }









