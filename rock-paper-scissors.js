/*function getComputerChoice() {

    let areOfChoices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    console.log(areOfChoices[randomNum]);
}
//the code above needs to be called which is why nothing is happening


getComputerChoice() //this will randomly rock paper or scissors and have it show one of those randomly in the console. 

*/

//the code above answers the first part of the question on ODIN Project


/*


function getComputerChoice() {

    let areOfChoices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    const compChoice = areOfChoices[randomNum]
    return compChoice
}



//step 1 is done above 

// step 2 below 

function playRound (playerSelection , computerSelection) {
    
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return ' you tied! You both picked rock '
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return ' you tied! You both picked scissors '
    }else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return ' you tied! You both picked paper '
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lost rock crushes paper bozo! '
    }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You won scissors tears paper apart! '
    }else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lost paper covers rock! '
    }else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You won rock crushes scissors! '
    }else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You won paper covers rock HAHAHAHAH! '
    }else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lost scissor cuts paper in....HALF! '
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/

// step 3 below 

//answer below



let playerScore = 0 
let compScore = 0

function getComputerChoice() {

    let areOfChoices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    const compChoice = areOfChoices[randomNum]
    return compChoice
}

function playRound (playerSelection , computerSelection) {
   
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return ' you tied! You both picked rock '
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return ' you tied! You both picked scissors '
    }else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return ' you tied! You both picked paper '
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
      //  return 'You lost rock crushes paper bozo! '
    }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        //return 'You won scissors tears paper apart! '
        playerScore++
    }else if (playerSelection === 'rock' && computerSelection === 'paper') {
       // return 'You lost paper covers rock! '
        compScore++
    }else if (playerSelection === 'rock' && computerSelection === 'scissors') {
       // return 'You won rock crushes scissors! '
        playerScore++

    }else if (playerSelection === 'paper' && computerSelection === 'rock') {
       // return 'You won paper covers rock HAHAHAHAH! '
        compScore++
    }else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        //return 'You lost scissor cuts paper in....HALF! '
        playerScore++
    }
}




function game(){

    for ( let i =0; i < 5; i++) {
const  playerSelection = prompt('Choose what to throw', 'throw').toLowerCase()
      
    const computerSelection = getComputerChoice(); //this is for the loop so its constantly being looped back and show the choices randomly
    playRound(playerSelection, computerSelection);
    
    } 
 if(playerScore > compScore ) {
    return ' you won you beat the computer'
 } else if (playerScore < compScore){
    return ' you lost to the computer skynet has won! '
 } else { 
    return ' You tied with the computer'
 }

}
console.log(game())
