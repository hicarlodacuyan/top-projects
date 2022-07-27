const shipFactory = (length) => {
  const state = Array(length).fill(0);

  const hit = (pos) => {
    if (state[pos] === 1) return;

    return (state[pos] = 1);
  };

  const isSunk = () => !state.includes(0);

  return { state, length, hit, isSunk };
};

export default shipFactory;
