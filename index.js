// DEFINE FOR THE JS
const container = document.querySelector('#container')
container.classList.add('container')
const buttons = document.querySelectorAll('button')
// DEFINE AND CREATE THE STRUCTURE
// CREATE THE BUTTON CONTAINER
const button_container = document.createElement('div')
button_container.classList.add('btn-container')
// DEFINE EACH BUTTONS INDIVIDUALLY AND APPEND TO BUTTON_CONTAINER
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
button_container.appendChild(rock)
button_container.appendChild(paper)
button_container.appendChild(scissors)
// APPEND BUTTON_CONTAINER TO CONTAINER
container.appendChild(button_container)
// DEFINE  THE SCORE AND APPEND IT TO CONTAINER 
const score = document.createElement('div')
score.classList.add('score')
score.innerText = "Let's Play ! Pick a Tool :"
container.insertBefore(score,button_container)

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
function playGame(){
    let rounds = 1;
    let playerScore = 0;
    let computerScore = 0;
    buttons.forEach((button) => {
        button.addEventListener('click',function(event){
            if(rounds<=6){
                let playerChoice =  getPlayerChoice(event);
                let computerChoice =  getComputerChoice(event);
                let result = playOneRound(playerChoice,computerChoice)
                
                if(result === 'Player Wins !' ){
                    playerScore++;
                } else if (result === 'Computer Wins !'){
                    computerScore++;
                } else{
                    // nothing happens
                }
                score.innerHTML = "Round "+rounds+"<br> "+"Player : "+playerChoice+"<br>Computer : "+computerChoice+
                                  "<br>Score : "+playerScore+" - "+computerScore;
                rounds++;
            }
            if(rounds===7){
                score.setAttribute('style','text-align:center;')
                if(playerScore>computerScore){
                    score.innerHTML = "Soory <br>Game Over ! <br>5 Rounds played ! <br>"+"<br>Score : "+playerScore+" - "+computerScore+
                                "<br>"+"Player Wins !"
                } else if(playerScore<computerScore){
                    score.innerHTML = "5 Rounds played ! <br>"+"<br>Score : "+playerScore+" - "+computerScore+
                                "<br>"+"Computer Wins !"
                } else {
                    score.innerHTML = "5 Rounds played ! <br>"+"<br>Score : "+playerScore+" - "+computerScore+
                                "<br>"+"Tie Game !"
                }
                buttons.forEach(button => {
                    button.removeEventListener('click', this);
                });
                console.log("Game over. 5 rounds played.");
            }
        })    
    });
}
function playOneRound(playerSelection, computerSelection){
    // Logic to determine the winner of one round
    if(computerSelection === playerSelection){
        return 'Round Tie ! ';
    } else if(computerSelection === 'Rock'){
        if(playerSelection === 'Paper'){
            return 'Player Wins !';
        }if(playerSelection === 'Scissors'){
            return 'Computer Wins !';
        }
    }else if(computerSelection === 'Paper'){
        if(playerSelection === 'Rock'){
            return 'Computer Wins !';
        }if(playerSelection === 'Scissors'){
            return 'Player Wins !';
        }
    }else if(computerSelection === 'Scissors'){
        if(playerSelection === 'Rock'){
            return 'Player Wins !';
        }if(playerSelection === 'Paper'){
            return 'Computer Wins !';
        }
    }
}
playGame();

