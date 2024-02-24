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
buttons.forEach((button) => {
    button.addEventListener('click',function(event){
         // Call myFunction and pass the event object
    var Choices = getBothChoices(event);
    
    // Call handleValues and pass the returned values
    showBothChoices(Choices);
    })    
});