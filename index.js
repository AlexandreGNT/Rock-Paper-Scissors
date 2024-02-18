function getComputerChoice(){
    let choicesArray = ['Rock','Paper','Scissors'];
    let randomIndex = Math.floor(Math.random() * choicesArray.length);
    let randomChoice = choicesArray[randomIndex];
    return randomChoice
}
function capitalize(str) {
    let words = str.split(" "); // Split the string into words by space
    for (let i = 0; i < words.length; i++) {
        // Capitalize the first letter of each word
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" "); // Join the words back together into a string
}
function playRound(playerSelection,computerSelection){
    computerSelection = getComputerChoice();
    playerSelection = prompt('Choose a Tool : Rock, Paper, Scissors ? ');
    playerSelection = capitalize(playerSelection)
    console.log("Computer Tool : "+computerSelection)
    console.log("Player Tool : "+capitalize(playerSelection))
    let Result;
    if(computerSelection === playerSelection){
        Result = computerSelection+' VS '+playerSelection+'! Round Tie';
    } else if(computerSelection === 'Rock'){
        if(playerSelection === 'Paper'){
            Result = computerSelection+' VS '+playerSelection+ '! Player Wins';
        }if(playerSelection === 'Scissors'){
            Result = computerSelection+' VS '+playerSelection+'! Computer Wins';
        }
    }else if(computerSelection === 'Paper'){
        if(playerSelection === 'Rock'){
            Result = computerSelection+' VS '+playerSelection+'! Computer Wins';
        }if(playerSelection === 'Scissors'){
            Result = computerSelection+' VS '+playerSelection+'! Player Wins';
        }
    }else if(computerSelection === 'Scissors'){
        if(playerSelection === 'Rock'){
            Result = computerSelection+' VS '+playerSelection+'! Player Wins';
        }if(playerSelection === 'Paper'){
            Result = computerSelection+' VS '+playerSelection+'! Computer Wins';
        }
    }
    return Result
}
let player,computer;
let result = playRound(player,computer)
console.log(result)
