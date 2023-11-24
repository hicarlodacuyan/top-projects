function computerPlay(weapons) {
	return weapons.at(Math.floor(Math.random() * weapons.length));
}

function playRound(playerWeapon, computerWeapon) {
	switch(playerWeapon + computerWeapon) {
		case 'shieldshield':
		case 'swordsword':
		case 'wandwand':
			return 'Tie';
			break;
		case 'shieldwand':
		case 'wandsword':
		case 'swordshield':
			return 'Win';
			break;
		case 'swordwand':
		case 'shieldsword':
		case 'wandshield':
			return 'Lose';
			break;
		default:
			return 'Invalid';
			break;
	}
}

function updateTurn(playerWeapon, computerWeapon) {
	const weaponOfChoicePlayer = document.querySelector('.weaponOfChoicePlayer');
	const weaponOfChoiceComputer = document.querySelector('.weaponOfChoiceComputer');
	const weaponOfChoicePlayerImg = document.createElement('img');
	const weaponOfChoiceComputerImg = document.createElement('img');

	weaponOfChoicePlayerImg.setAttribute('src', `./images/${playerWeapon}.png`);
	weaponOfChoicePlayer.textContent = '';
	weaponOfChoicePlayer.appendChild(weaponOfChoicePlayerImg);

	weaponOfChoiceComputerImg.setAttribute('src', `./images/${computerWeapon}.png`);
	weaponOfChoiceComputer.textContent = '';
	weaponOfChoiceComputer.appendChild(weaponOfChoiceComputerImg);
}

function resetGame() {
	playerScore = 0;
	computerScore = 0;
	playerScoreCtr.textContent = `Player: ${playerScore}`;
	computerScoreCtr.textContent = `Computer: ${computerScore}`;
}


function gameWinner(playerScore, computerScore) {
	if (playerScore === 5) {
		alert('Player wins!');
		resetGame();
	} 
	
	if (computerScore === 5) {
		alert('Computer wins!');
		resetGame();
	}
}

const weapons = document.querySelectorAll('.weapons');
const playerScoreCtr = document.querySelector('.playerScore');
const computerScoreCtr = document.querySelector('.computerScore');
const result = document.querySelector('.result');
const resultInfo = document.querySelector('.resultInfo');
let playerScore = 0; 
let computerScore = 0;

weapons.forEach((option) => {
	option.addEventListener('click', function(e) {
		const computerTurn = computerPlay(['shield', 'sword', 'wand']);
		switch(playRound(e.target.id, computerTurn)) {
			case 'Win':
				playerScore += 1;
				playerScoreCtr.textContent = `Player: ${playerScore}`;
				result.textContent = 'You Win!';
				resultInfo.textContent = `${e.target.id} beats ${computerTurn}!`
				updateTurn(e.target.id, computerTurn);
				break;
			case 'Lose':
				computerScore += 1;
				computerScoreCtr.textContent = `Computer: ${computerScore}`;
				result.textContent = 'You Lose!';
				resultInfo.textContent = `${e.target.id} is weak againts ${computerTurn}!`
				updateTurn(e.target.id, computerTurn);
				break;
			default:
				result.textContent = 'It\'s a tie!';
				resultInfo.textContent = 'This match is getting intense!';
				updateTurn(e.target.id, computerTurn);
				break;
		}

		gameWinner(playerScore, computerScore);
	});
});