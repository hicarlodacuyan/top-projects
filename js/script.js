/* 
Make a weapons variable to hold shield, sword, and wand
Choose randomly from the weapons variable
Return the randomly chosen weapon
*/
const computerWeapons = ['shield', 'sword', 'wand'];
const computerPlay = () => computerWeapons.at(Math.floor(Math.random() * computerWeapons.length));

/*
Make a function that accepts two arguments for player and computer selection
Compare the selection from all possible occurences
Return the outcome of the turn
*/
const playRound = (playerSelection, computerSelection) => {
    playerSelection.toLowerCase();
    computerSelection.toLowerCase();

    // I think this logic can be simplify
    if (playerSelection === 'wand' && computerSelection === 'wand') {
		return 'Tie!';
	} else if (playerSelection === 'sword' && computerSelection === 'wand') {
		return 'Lose';
	} else if (playerSelection === 'shield' && computerSelection === 'wand') {
		return 'Win';
	} else if (playerSelection === 'wand' && computerSelection === 'sword') {
		return 'Win';
	} else if (playerSelection === 'sword' && computerSelection === 'sword') {
		return 'Tie';
	} else if (playerSelection === 'shield' && computerSelection === 'sword') {
		return 'Lose';
	} else if (playerSelection === 'wand' && computerSelection === 'shield') {
		return 'Lose';
	} else if (playerSelection === 'sword' && computerSelection === 'shield') {
		return 'Win';
	} else if (playerSelection === 'shield' && computerSelection === 'shield') {
		return 'Tie';
	} else {
		return 'Invalid';
	}
}

const resetGame = () => {
	playerScore = 0;
	computerScore = 0;
	playerScoreCtr.textContent = `Player: ${playerScore}`;
	computerScoreCtr.textContent = `Computer: ${computerScore}`;
}

const weaponOfChoicePlayer = document.querySelector('.weaponOfChoicePlayer');
const weaponOfChoiceComputer = document.querySelector('.weaponOfChoiceComputer');

const updateTurn = (playerWeapon, computerWeapon) => {
	
}

const weapons = document.querySelectorAll('.weapons');
const playerScoreCtr = document.querySelector('.playerScore');
const computerScoreCtr = document.querySelector('.computerScore');
const result = document.querySelector('.result');
const resultInfo = document.querySelector('.resultInfo');
let playerScore = 0; 
let computerScore = 0;

weapons.forEach((option) => {
	option.addEventListener('click', (e) => {

		let computerTurn = computerPlay();

		if(playRound(e.target.id, computerTurn) === 'Win') {
			playerScore += 1;
			playerScoreCtr.textContent = `Player: ${playerScore}`;
			result.textContent = 'You Win!';
			resultInfo.textContent = `${e.target.id} beats ${computerTurn}!`
			updateTurn(e.target.id, computerTurn);
		} else if (playRound(e.target.id, computerTurn) === 'Lose') {
			computerScore += 1;
			computerScoreCtr.textContent = `Computer: ${computerScore}`;
			result.textContent = 'You Lose!';
			resultInfo.textContent = `${e.target.id} is weak againts ${computerTurn}!`
			updateTurn(e.target.id, computerTurn);
		} else {
			console.log('It\'s a tie!');
			result.textContent = 'It\'s a tie!';
			resultInfo.textContent = 'This match is getting intense!';
			updateTurn(e.target.id, computerTurn);
		}

		if (playerScore === 5) {
			alert('Player wins!');
			resetGame();
		}

		if (computerScore === 5) {
			alert('Computer wins!');
			resetGame();
		}
	});
});