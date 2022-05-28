const gameboard = (() => {
    let state = [, , ,
                 , , ,
                 , , ];
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