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
function playGame(){
    let rounds = 1;
    buttons.forEach((button) => {
        button.addEventListener('click',function(event){
            if(rounds<6){
                console.log("Round "+rounds)
                let playerChoice =  getPlayerChoice(event);
                let computerChoice =  getComputerChoice(event);
                let result = playOneRound(playerChoice,computerChoice)
                console.log("Player : "+playerChoice)
                console.log("Computer : "+computerChoice)
                console.log("Result for " + playerChoice + " vs " + computerChoice + ": " + result);
                rounds++;
            }
            if(rounds===6){
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
