const container = document.querySelector('#container')
const buttons = document.querySelectorAll('button')
function getComputerChoice(){
    let choicesArray = ['Rock','Paper','Scissors'];
    let randomIndex = Math.floor(Math.random() * choicesArray.length);
    let computerChoice = choicesArray[randomIndex];
    return computerChoice;
}
function getPlayerChoice(event){
    let playerChoice = event.target.innerText
    return playerChoice;
}
function getBothChoices(event){
    let playerSelection = getPlayerChoice(event);
    let computerSelection = getComputerChoice();
    return {
        playerChoice: playerSelection,
        computerChoice: computerSelection
    };
}
function showBothChoices(bothChoices){
    console.log("Player Choice: " + bothChoices.playerChoice);
    console.log("Computer Choice : " + bothChoices.computerChoice);
    
}

function playOneRound(event){
    let Choices = getBothChoices(event);
    let playerSelection = Choices.playerChoice
    let computerSelection  = Choices.computerChoice
    console.log("player Choice : "+playerSelection)
    console.log("computer Choice  : "+computerSelection)
    // Logic to determine the winner of one round
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
               (playerSelection === "paper" && computerSelection === "rock") ||
               (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log("You win!");
    } else {
        console.log("Computer wins!");
    }
}
buttons.forEach((button) => {
    button.addEventListener('click',playOneRound)    
});