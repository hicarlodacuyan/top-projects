const btnXMark = document.getElementById('btn_xmark');
const btnCircle = document.getElementById('btn_circle');
const btnRefresh = document.getElementById('btn_refresh');
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

    const getState = () => state;
    const setState = (index, marker) => {
        state.splice(index, 1, marker);
    };

    const getTurn = () => turn;
    const setTurn = () => {
        turn++;
    };

    const update = () => {
        btnCells.forEach(element => {
            switch(state[element.dataset.index]) {
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

    const reset = () => {
        state = [null, null, null,
                 null, null, null,
                 null, null, null];
    }

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
    }

    const isWinner = (p1, p2, p3) => {
        const c1 = state[p1];
        if (c1 === null) return false;

        const c2 = state[p2];
        if (c1 !== c2) return false;

        const c3 = state[p3];
        if (c1 != c3) return false;
        
        return true;
    }

    const isTie = () => {
        for (let i = 0; i < state.length; i++) {
            if (state[i] === null) return false;
        }
        return 'Tie';
    }

    return {getState, setState, getTurn, setTurn, update, reset, gameOver};
})();

const isThereWinner = (pos) => {
    switch (gameboard.gameOver()) {
        case true:
            alert(`There's a winner!`);
            break;
        case false:
            if (gameboard.getState()[pos] !== null) return;
            gameboard.getTurn() % 2 === 1 ? gameboard.setState(pos, 'X') : gameboard.setState(pos, 'O');
            gameboard.setTurn();
            gameboard.update();
            break;
        default:
            alert(`It's a tie!`);
            break;
    }
};

btnCells.forEach(element => {
    element.addEventListener('click', (e) => {
        let pos = e.target.dataset.index;
        if (e.target.childNodes.length !== 0) return;
        isThereWinner(pos);
        console.log(gameboard.getState());
    });
});

btnRefresh.addEventListener('click', () => {
    gameboard.reset();
    gameboard.update();
});