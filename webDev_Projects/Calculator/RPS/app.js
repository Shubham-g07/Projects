// variables for tracking score

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector(".msg");
const userRes = document.querySelector(".userRes");
const compRes = document.querySelector(".compRes");

// generating random choice of computer by function

const gameCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const compRandom = Math.floor(Math.random() * 3);
    let idx = options[compRandom];
    return idx;
};

//draw condition function

const draw = () => {
    console.log("play again");
    message.innerText = "Game Was Draw. Play again....";
    message.style.backgroundColor = "rgb(26, 7, 53)";
};

//result function

const result = (userChoice , compChoice) => {
    let userWon = true;
    if(userChoice === "rock" && compChoice === "scissors" || userChoice === "paper" && compChoice === "rock" || userChoice === "scissors" && compChoice === "paper"){
        console.log("User won");
        message.innerText = `User Won.....Your Choice ${userChoice} Beats ${compChoice}`;
        userScore++;
        userRes.innerText = userScore;
        message.style.backgroundColor = "green";
    }
    else{
        userWon = false;
        console.log("Comp won");
        message.innerText = `Computer Won.....Computer Choice ${compChoice} Beats ${userChoice}`;
        compScore++;
        compRes.innerText = compScore;
        message.style.backgroundColor = "red";
    }
};

//checking user choice

const playGame = (userChoice) => {
    console.log("user choice is",userChoice);
    const compChoice = gameCompChoice();
    console.log("comp choice",compChoice);

    if( userChoice === compChoice ){
        draw();
    }
    else{
        result(userChoice , compChoice);
    }

};

//getting user choice

choices.forEach( (choice) => {
    //adding event listners for click event by this we know that the one option is clicked
    choice.addEventListener( "click" , () => {
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
