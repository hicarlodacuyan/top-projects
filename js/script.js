/* 
Make a weapons variable to hold rock, paper, and scissors
Choose randomly from the weapons variable
Return the randomly chosen weapon
*/
const weapons = ['rock', 'paper', 'scissors'];
const computerPlay = () => weapons.at(Math.floor(Math.random() * weapons.length));

/*
Make a function that accepts two arguments for player and computer selection
Compare the selection from all possible occurences
Return the outcome of the turn
*/
const playRound = (playerSelection, computerSelection) => {
    playerSelection.toLowerCase();
    computerSelection.toLowerCase();

    // I think this logic can be simplify
    if (playerSelection === 'scissors' && computerSelection === 'scissors') {
		return 'Tie!';
	} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
		return 'Lose';
	} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
		return 'Win';
	} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
		return 'Win';
	} else if (playerSelection === 'paper' && computerSelection === 'paper') {
		return 'Tie';
	} else if (playerSelection === 'rock' && computerSelection === 'paper') {
		return 'Lose';
	} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
		return 'Lose';
	} else if (playerSelection === 'paper' && computerSelection === 'rock') {
		return 'Win';
	} else if (playerSelection === 'rock' && computerSelection === 'rock') {
		return 'Tie';
	} else {
		return 'Invalid';
	}
}

const options = document.querySelectorAll('.options');
const playerScoreCtr = document.querySelector('.playerScore');
const computerScoreCtr = document.querySelector('.computerScore');
let playerScore = 0; 
let computerScore = 0;

options.forEach((option) => {
	option.addEventListener('click', () => {
		if(playRound(rock.id, computerPlay()) === 'Win') {
			playerScore += 1;
			playerScoreCtr.textContent = `PLAYER: ${playerScore}`;
		} else if (playRound(rock.id, computerPlay()) === 'Lose') {
			computerScore += 1;
			computerScoreCtr.textContent = `COMPUTER: ${computerScore}`;
		} else {
			console.log('It\'s a tie!');
		}

		if (playerScore === 5) {
			alert('Player wins!');
			playerScore = 0;
			computerScore = 0;
			playerScoreCtr.textContent = `PLAYER: ${playerScore}`;
			computerScoreCtr.textContent = `COMPUTER: ${computerScore}`;
		}

		if (computerScore === 5) {
			alert('Computer wins!');
			playerScore = 0;
			computerScore = 0;
			playerScoreCtr.textContent = `PLAYER: ${playerScore}`;
			computerScoreCtr.textContent = `COMPUTER: ${computerScore}`;
		}
	});
});