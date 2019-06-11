let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

function resultText(){
    result_div.classList.add("resultWords");
    setTimeout(function(){result_div.classList.remove("resultWords")}, 1200);
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    document.getElementById("user-label").classList.add("winner"); /*change to animation */
    result_div.style.color = "white";
    result_div.innerHTML = `${user} beats ${computer}, you WIN!`;
    setTimeout(function(){ document.getElementById("user-label").classList.remove("winner")}, 1100);
    resultText();
};

function lose(user, computer){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    document.getElementById("computer-label").classList.add("winner");
    result_div.style.color = "white";
    result_div.innerHTML = `${computer} beats ${user}, you LOSE!`;
    setTimeout(function(){ document.getElementById("computer-label").classList.remove("winner")}, 1100);
    resultText();
};

function draw(user, computer){
    result_div.style.color = "white";
    result_div.innerHTML = "It's a DRAW";
    resultText();
    //document.getElementsByClassName("badge").classList.add("winner");
    //setTimeout(function(){ document.querySelectorAll("badge").classList.remove("winner")}, 1200);
};

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice, computerChoice);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(userChoice, computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(userChoice, computerChoice);
            break;

    }
};

function main(){
    rock_div.addEventListener("click", function(){
        game("Rock");    
    });

    paper_div.addEventListener("click", function(){
        game("Paper");
    });

    scissors_div.addEventListener("click", function(){
        game("Scissors");
    });
};

main();