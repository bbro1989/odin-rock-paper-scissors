let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const resultDiv = document.getElementById('result');
    const scoreDiv = document.getElementById('score');

    let resultMessage = '';

    if (humanChoice === computerChoice) {
        resultMessage = `It's a tie! You both chose ${humanChoice}.`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        resultMessage = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if (humanChoice === "reset" ){
        humanScore = 0;
        computerScore = 0;
        resultMessage = 'Lets restart';
        enableButtons();
    }else {
        computerScore++;
        resultMessage = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    resultDiv.textContent = resultMessage;
    scoreDiv.textContent = `Score — You: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        const finalMessage = humanScore === 5 ? "You won the game!" : "Computer won the game!";
        resultDiv.textContent += ` ${finalMessage}`;
        disableButtons();
    }
    
}

function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}
function enableButtons() {
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
}

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
document.getElementById('reset').addEventListener('click', () => playRound('reset'));
