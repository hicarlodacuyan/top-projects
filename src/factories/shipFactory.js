const shipFactory = (length) => {
  const state = new Array(length);

  const hit = (pos) => {
    if (state[pos] === 1) return;

    return (state[pos] = 1);
  };

  const isSunk = () => !state.includes(undefined);

  return { state, length, hit, isSunk };
};

export default shipFactory;
