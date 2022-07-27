const gameboardFactory = () => {
  const board = [...Array(10)].map((x, j) =>
    Array(10)
      .fill(null)
      .map((y, i) => `${String.fromCharCode(65 + i)}${10 - j}`)
  );

  const placeShip = (x, y, ship) => {
    board[x].splice(y, ship.state.length, ...ship.state);

    return board;
  };

  const receiveAttack = (x, y) => {
    board[x][y] = 1;

    return board[x][y];
  };

  return { board, placeShip, receiveAttack };
};

export default gameboardFactory;
