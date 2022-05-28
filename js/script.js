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

const Player = (marker) => {
    const playerMarker = marker;
    const score = 0;
    const getPlayerMarker = () => playerMarker;
    const setScore = () => score++;
    const getScore = () => score;

    return {getPlayerMarker, getScore, setScore};
};