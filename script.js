function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function getHumanChoice(){
    let choices = prompt("Enter your choice (rock, paper, or scissors)").toLowerCase();
    return choices;
}
let humanScore = 0;
let computerScore = 0;
function playGame(){
        
        for (let i = 0; i < 5; i++){
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        }
        (humanScore > computerScore) ? console.log(`You win the game! Final score: ${humanScore} to ${computerScore}.`) :
        (humanScore < computerScore) ? console.log(`You lose the game! Final score: ${humanScore} to ${computerScore}.`) :
        console.log(`The game is a tie! Final score: ${humanScore} to ${computerScore}.`);
}
function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        console.log('Its a Tie!');
    }
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    }
    else{
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
}
playGame();