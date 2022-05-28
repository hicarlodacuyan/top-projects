const gameboard = (() => {
    let state = [null, null, null,
                 null, null, null,
                 null, null, null];
    let turn = 1;

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
    let playerMarker;
    const score = 0;
    const setPlayerMarker = (marker) => {
        marker == 'x' ? playerMarker = 'x' : playerMarker = 'o';
    };
    const getPlayerMarker = () => playerMarker;
    const setScore = () => score++;
    const getScore = () => score;

    return {getPlayerMarker, setPlayerMarker, getScore, setScore};
};

const xBtn = document.getElementById('btn_x');
const oBtn = document.getElementById('btn_o');
const resetBtn = document.getElementById('btn_reset');
const cells = document.querySelectorAll('.gameboard_cell');
const human = Player();
const cpu = Player();

const playRound = () => {
    if (gameboard.getTurn() >= 9) {
        // TODO: Display to the DOM, the game is tie
        // Show restart button
        console.log('Tie');
    }
    // Checks if current turn is odd
    if (gameboard.getTurn() % 2 == 1) {
        console.log(`I'm in Player 1`);
        cells.forEach((cell) => {
            cell.addEventListener('click', (e) => {
                appendTurn(e.target, human.getPlayerMarker());
            });
        });
    } else {
        console.log(`I'm in Player 2`);
        cells.forEach((cell) => {
            cell.addEventListener('click', (e) => {
                appendTurn(e.target, cpu.getPlayerMarker());
            });
        });
    }
};

const appendTurn = (target, marker) => {
    gameboard.setState(target.dataset.index, marker);
    gameboard.setTurn();
    console.log(gameboard.getState());
    console.log(`Turn: ${gameboard.getTurn()}`);
    playRound();
}

xBtn.addEventListener('click', (e) => {
    if (human.getPlayerMarker() === undefined && cpu.getPlayerMarker() === undefined) {
        human.setPlayerMarker('x');
        cpu.setPlayerMarker('o');
    }

    if (gameboard.getTurn() == 1) {
        playRound();
    }
});

oBtn.addEventListener('click', (e) => {
    if (human.getPlayerMarker() === undefined && cpu.getPlayerMarker() === undefined) {
        human.setPlayerMarker('o');
        cpu.setPlayerMarker('x');
    }

    if (gameboard.getTurn() == 1) {
        playRound();
    }
});

resetBtn.addEventListener('click', () => {
    console.log('Reset');
});