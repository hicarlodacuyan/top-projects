const btnRefresh = document.getElementById('btn_refresh');
const btnMarkers = document.querySelectorAll('.actions__markers');
const btnCells = document.querySelectorAll('.gameboard__cell');
const labelCurrentTurn = document.getElementById('label_current_turn');
const labelHumanMarker = document.getElementById('label_human_marker');
const labelBotMarker = document.getElementById('label_bot_marker');
const labelHumanScore = document.getElementById('label_human_score');
const labelBotScore = document.getElementById('label_bot_score');
const labelTieScore = document.getElementById('label_tie_score');

const gameboard = (() => {
    
    let state = [null, null, null,
                 null, null, null,
                 null, null, null];
    let turn = 1;
    let tie = 0;

    const getState = () => state;
    const setState = (index, marker) => {
        state.splice(index, 1, marker);
    };

    const getTurn = () => turn;
    const setTurn = (reset) => {
        reset === true ? turn = 0 : turn++;
    };

    const getTie = () => tie;
    const setTie = () => {
        tie++;
    };
    const resetTie = () => {
        tie = 0;
    };

    const reset = () => {
        state = [null, null, null,
                 null, null, null,
                 null, null, null];
        turn = 1;
    };

    const gameOver = () => {
        return isWinner(0, 1, 2) 
        ||  isWinner(3, 4, 5) 
        ||  isWinner(6, 7, 8) 
        ||  isWinner(0, 3, 6) 
        ||  isWinner(1, 4, 7) 
        ||  isWinner(2, 5, 8) 
        ||  isWinner(0, 4, 8) 
        ||  isWinner(6, 4, 2)
        ||  isTie();   
    };

    const isWinner = (p1, p2, p3) => {
        const c1 = state[p1];
        if (c1 === null) return false;

        const c2 = state[p2];
        if (c1 !== c2) return false;

        const c3 = state[p3];
        if (c1 != c3) return false;
        
        return true;
    };

    const isTie = () => {
        for (let i = 0; i < state.length; i++) {
            if (state[i] === null) return false;
        }
        return 'Tie';
    };

    return {getState, setState, getTurn, setTurn, reset, gameOver, getTie, setTie, resetTie};
})();

const displayController = (() => {

    const updateBoard = () => {
        btnCells.forEach(element => {
            switch(gameboard.getState()[element.dataset.index]) {
                case 'X':
                    element.innerHTML = `<i class="fa-solid fa-xmark fa-xl"></i>`;
                    break;
                case 'O':
                    element.innerHTML = `<i class="fa-regular fa-circle"></i>`;
                    break;
                default:
                    element.innerHTML = ``;
            }
        });
    };

    const updateLabels = () => {
        labelHumanScore.textContent = `${human.getScore()}`;
        labelBotScore.textContent = `${cpu.getScore()}`;
        labelTieScore.textContent = `${gameboard.getTie()}`;
        labelCurrentTurn.innerHTML = `${human.getMarker()} TURN`;
    };

    const boardOutcome = (result) => {
        if (result === true && gameboard.gameOver() === true) {
            human.setScore();
            labelHumanScore.textContent = `${human.getScore()}`;
            labelCurrentTurn.innerHTML = `You won!`;
            gameboard.reset();
            displayController.updateBoard();
        }

        if (result === false && gameboard.gameOver() === true) {
            cpu.setScore();
            labelCurrentTurn.innerHTML = `You lose!`;
            labelBotScore.textContent = `${cpu.getScore()}`;
            gameboard.reset();
            displayController.updateBoard();
        }

        if (gameboard.gameOver() === 'Tie') {
            gameboard.setTie();
            labelCurrentTurn.innerHTML = `Tie!`;
            labelTieScore.textContent = `${gameboard.getTie()}`;
            labelCurrentTurn.innerHTML = `${human.getMarker()} TURN`;
            gameboard.reset();
            displayController.updateBoard();
        }
    };

    const boardLogic = (e) => {
        switch(gameboard.getTurn() % 2 === 1) {
            case true:
                gameboard.setState(e.target.dataset.index, human.getMarker());
                gameboard.setTurn();
                displayController.updateBoard();
                labelCurrentTurn.innerHTML = `${cpu.getMarker()} TURN`;
                boardOutcome(true);
                break;

            case false:
                gameboard.setState(e.target.dataset.index, cpu.getMarker());
                gameboard.setTurn();
                displayController.updateBoard();
                labelCurrentTurn.innerHTML = `${human.getMarker()} TURN`;
                boardOutcome(false);
                break;
        }
    };

    return {updateBoard, updateLabels, boardLogic};
})();

const Player = () => {
    let score = 0;
    let marker;

    const getScore = () => score;
    const setScore = () => { score++; }

    const getMarker = () => marker;
    const setMarker = (selection) => {
        marker = selection;
    };

    const reset = () => {
        score = 0;
    };

    return {getScore, setScore, getMarker, setMarker, reset};
};

const human = Player();
const cpu = Player();

human.setMarker('X');
cpu.setMarker('O');

btnCells.forEach(cell => {
    cell.addEventListener('click', (e) => {
        if (e.target.childNodes.length !== 0) return;
        displayController.boardLogic(e);
    });
});

btnRefresh.addEventListener('click', () => {
    gameboard.reset();
    gameboard.resetTie();
    human.reset();
    cpu.reset();
    displayController.updateLabels();
    displayController.updateBoard();
});