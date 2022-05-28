const xBtn = document.getElementById('btn_x');
const oBtn = document.getElementById('btn_o');
const resetBtn = document.getElementById('btn_reset');

const gameboard = (() => {
    let state = [null, null, null,
                 null, null, null,
                 null, null, null];
    let turn = 0;

    const getState = () => state;
    const getTurn = () => turn;

    const setState = (index, turn) => {
        state[index] = turn;
    };

    const setTurn = () => {
        turn = turn + 1;
    };

    return {getState, getTurn, setState, setTurn};
})();

const Player = () => {
    let playerMarker = '';
    const score = 0;
    const setPlayerMarker = (marker) => {
        marker == 'x' ? playerMarker = 'x' : playerMarker = 'o';
    };
    const getPlayerMarker = () => playerMarker;
    const setScore = () => score++;
    const getScore = () => score;

    return {getPlayerMarker, setPlayerMarker, getScore, setScore};
};

const human = Player();
const cpu = Player();

const playRound = () => {
    gameboard.setTurn();
    
    if (gameboard.getTurn() >= 9) {
        // TODO: Display to the DOM, the game is tie
        // Show restart button
        console.log('Tie');
    }
    // Checks if current turn is odd
    if (gameboard.getTurn() % 2 == 1) {
        console.log('Player 1 turn');
    } else {
        console.log('Player 2 turn');
    }

    console.log(`Turn: ${gameboard.getTurn()}, Human: ${human.getPlayerMarker()}, CPU: ${cpu.getPlayerMarker()}`);
};

xBtn.addEventListener('click', (e) => {
    if (human.getPlayerMarker() === '' && cpu.getPlayerMarker() === '') {
        human.setPlayerMarker('x');
        cpu.setPlayerMarker('o')
    }

    if (gameboard.getTurn() == 0) {
        playRound();
    }
});

oBtn.addEventListener('click', (e) => {
    if (human.getPlayerMarker() === '' && cpu.getPlayerMarker() === '') {
        human.setPlayerMarker('o');
        cpu.setPlayerMarker('x')
    }

    if (gameboard.getTurn() == 0) {
        playRound();
    }
});

resetBtn.addEventListener('click', () => {
    console.log('Reset');
});