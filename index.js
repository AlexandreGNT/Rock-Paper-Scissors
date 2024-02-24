const container = document.querySelector('#container')
const buttons = document.querySelectorAll('button')

function playerSelection(event) {
    let playerChoice = event.target.innerText
    console.log("Player selected: " + playerChoice)
}
buttons.forEach((button) => {
    button.addEventListener('click',playerSelection)    
});