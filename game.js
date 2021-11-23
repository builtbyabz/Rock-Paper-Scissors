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

//const e = document.createElement('h3');
const draw = document.querySelector(".draw");
const selectChoice = document.querySelectorAll(".selection");
const red = document.createElement("div")



//var janken = new Audio('assets/sounds/Platformer2.mp3');
//janken.play();


const displayWinner = () => {
    if (computerScore.innerHTML === "3" || computerScore === "3" && playerScore === "0") {
        computerWins.classList.add("computerWins")
        red.innerHTML = "COMPUTER WINS 😈"
        red.classList.add("cpuWins")
        body.appendChild(red);
        //computerScore.innerHTML = "0";
        console.log("Computer Wins")
        let youLoose = new Audio('assets/sounds/mixkit-retro-arcade-lose-2027.wav');
        youLoose.play();
        restart()

    } else if (playerScore.innerHTML === "3" || playerScore === "3"  && computerScore === "0") {
        computerWins.classList.add("computerWins")   
        red.innerHTML = "YOU WIN! 🥳"
        red.classList.add("cpuWins")
        body.appendChild(red);
        youLoose = new Audio('assets/sounds/mixkit-video-game-win-2016.wav');
        youLoose.play();
        restart()
    }
    
}

const restart = () => {
    const restart = document.createElement("h2");
    restart.innerHTML = "Play Again!"
    restart.classList.add("playAgain")
    body.appendChild(restart);

    restart.addEventListener("click", () => {
        playerChoise = "Rock"
        computerChoise.innerText = "";
        playerScore.innerHTML = "0";
        computerScore.innerHTML = "0";
        computerWins.classList.remove("computerWins");
        restart.remove();
        red.remove();
        draw.innerHTML = "";
        computerScore.classList.remove("green");
        playerScore.classList.remove("green");
        document.querySelector("#player--hand").src = "assets/images/rock.png"
        document.querySelector("#cpu--hand").src = "assets/images/rock.png"

    })

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


const incrementScore = () => {

    if (playerChoise === "Rock" && computerChoise === "Scissors") {
        playerScore.innerHTML++; playerScore.classList.add("green");
        computerScore.classList.remove("green");
        draw.innerHTML = "Rock beats Scissors. You win! 😎"
    }
    else if (playerChoise === "Paper" && computerChoise === "Rock") {
        playerScore.innerHTML++; playerScore.classList.add("green");
        computerScore.classList.remove("green");
        draw.innerHTML = "Paper beats Rock. You win! 😎";
    }
    else if (playerChoise === "Scissors" && computerChoise === "Paper") {
        playerScore.innerHTML++; playerScore.classList.add("green");
        computerScore.classList.remove("green");
        draw.innerHTML = "Scissors beats Paper. You win! 😎";
    }
    else if (computerChoise === "Rock" && playerChoise === "Scissors") {
        computerScore.innerHTML++; playerScore.classList.remove("green");
        computerScore.classList.add("green");
        draw.innerHTML = "Rock beats Scissors. You loose 😞";
    }
    else if (computerChoise === "Paper" && playerChoise === "Rock") {
        computerScore.innerHTML++; playerScore.classList.remove("green");
        computerScore.classList.add("green");
        draw.innerHTML = "Paper beats Rock. You loose 😞";

    } else if (computerChoise === "Scissors" && playerChoise === "Paper") {
        computerScore.innerHTML++; playerScore.classList.remove("green");
        computerScore.classList.add("green");
        draw.innerHTML = "Scissors beats Paper. You loose 😞";
    } else if (playerChoise === computerChoise) {
        //const e = document.createElement('h3');

        draw.innerHTML = `You both chose ${computerChoise}!`;
        //e.classList.add("draw")
        //computerWins.appendChild(e);

        computerScore.classList.remove("green");
        playerScore.classList.remove("green");
        //console.log("draw") 
    }
    displayWinner()
   

}
/** Event listeners to each user selection.  **/
selectChoice.forEach(choice => {
    choice.addEventListener("click", () => {

        const audio = new Audio('assets/sounds/mixkit-arcade-game-jump-coin-216 (1).wav');
        audio.play();
        playerChoise = choice.innerText;
        getComputerChoice()
        //displaySelection()
        //displayCpuSelection()
        setTimeout(displayCpuSelection, 1500)

        setTimeout(displaySelection, 1000);
        //console.log(playerChoise)
        //console.log(getComputerChoice())
        //incrementScore()


        setTimeout(incrementScore, 1500)
        displayWinner()

       
    })

});









