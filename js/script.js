const btnRefresh = document.getElementById('btn_refresh');
const btnMarkers = document.querySelectorAll('.action__btn');
const btnCells = document.querySelectorAll('.gameboard__cell');
const labelCurrentTurn = document.getElementById('label_current_turn');
const labelHumanMarker = document.getElementById('label_human_marker');
const labelBotMarker = document.getElementById('label_bot_marker');
const labelHumanScore = document.getElementById('label_human_score');
const labelBotScore = document.getElementById('label_bot_score');
const labelTieScore = document.getElementById('label_tie_score');
const btnPlayersMode = document.getElementById('btn_players_mode');
const container = document.querySelector('.container');
const menu = document.querySelector('.menu');
const btnXMark = document.getElementById('btn_xmark');
const btnCircle = document.getElementById('btn_circle');

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
        labelHumanMarker.textContent = `${human.getMarker()} (PLAYER 1)`;
        labelBotMarker.textContent = `${cpu.getMarker()} (PLAYER 2)`;
        labelTieScore.textContent = `${gameboard.getTie()}`;
        labelCurrentTurn.innerHTML = `${human.getMarker()} TURN`;
    };

    const boardOutcome = (result) => {
        if (result === true && gameboard.gameOver() === true) {
            human.setScore();
            labelHumanScore.textContent = `${human.getScore()}`;
            labelCurrentTurn.innerHTML = `${human.getMarker()} WON!`;
            gameboard.reset();
            displayController.updateBoard();
        }

        if (result === false && gameboard.gameOver() === true) {
            cpu.setScore();
            labelCurrentTurn.innerHTML = `${cpu.getMarker()} WON!`;
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
    let marker = '';

    const getScore = () => score;
    const setScore = () => { score++; }

    const getMarker = () => marker;
    const setMarker = (selection) => {
        marker = selection;
    };

    const reset = () => {
        score = 0;
        marker = '';
    };

    return {getScore, setScore, getMarker, setMarker, reset};
};

const human = Player();
const cpu = Player();

btnMarkers.forEach(marker => {
    marker.addEventListener('click', (e) => {
        
        if (e.target.id === 'btn_xmark') {
            btnXMark.style.background = "var(--accent-color)";
            btnCircle.style.background = "none";
        }

        if (e.target.id === 'btn_circle') {
            btnXMark.style.background = "none";
            btnCircle.style.background = "var(--accent-color)"
        }

        if (human.getMarker() === '' && e.target.id === 'btn_xmark') {
            human.setMarker('X');
            cpu.setMarker('O');
            displayController.updateLabels();
            return;
        }

        if (human.getMarker() === '' && e.target.id === 'btn_circle') {
            human.setMarker('O');
            cpu.setMarker('X');
            displayController.updateLabels();
            return;
        }
    });
});

btnCells.forEach(cell => {
    cell.addEventListener('click', (e) => {
        if (human.getMarker() === '' && cpu.getMarker() === '') return alert(`You need to choose your marker first!`);
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
    menu.style.display = "flex";
    container.style.display = "none";
    btnXMark.style.background = "none";
    btnCircle.style.background = "none"
});

btnPlayersMode.addEventListener('click', () => {
    if (human.getMarker() === '' && cpu.getMarker() === '') return alert(`You need to choose your marker first!`);
    menu.style.display = "none";
    container.style.display = "grid";
});