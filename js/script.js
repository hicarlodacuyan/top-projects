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

/*
Make a game function that accepts a parameter that tells it how many rounds the game must be played
Make a counter variable for playerScore and computerScore to keep track of scores
Repeat the round based on the rounds parameter using a loop
Every round's result will be stored to the result variable
Increment the playerScore or computerScore based on the result variable value
After n number of rounds, check if playerScore is greater than computerScore
If yes, the player won else it's the computer
*/

const game = (rounds) => {
	let playerScore = 0;
	let computerScore = 0;

	for (x = 1; x <= rounds; x++) {
        result = playRound(prompt('Choose your weapons: '), computerPlay());

		switch(result.toLowerCase()) {
			case 'win':
			 playerScore += 1;
			 break;
			 
			case 'lose':
			 computerScore += 1;
			 break;
			 
			default:
			 break;
		}
	}

	console.log(`Results: ${playerScore} - ${computerScore}`);

	if (playerScore > computerScore) {
		return 'Human: You cannot best a human!';
	} else if (playerScore < computerScore) {
		return 'Computer evolve into humanoid!';
	} else {
        return 'It is a tie';
    }
}
