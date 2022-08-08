export default function boardComponent(theBoard, player) {
  return theBoard.fieldStatus
    .map((row, coordX) =>
      row
        .map((col, coordY) => {
          if (theBoard.getFieldStatus(coordX, coordY) === 1) {
            return `
              <div class="board-cell-${player}">
                <div class="hit-missed-player-1"></div>
              </div>
            `;
          }

          if (theBoard.getFieldStatus(coordX, coordY) === 2) {
            return `
              <div class="board-cell-${player}">
                <div class="ship-body">
                  <div class="occupied-not-hit"></div>
                </div>
              </div>
            `;
          }

          if (theBoard.getFieldStatus(coordX, coordY) === 3) {
            return `
              <div class="board-cell-${player}">
                <div class="ship-body">
                  <div class="hit"></div>
                </div>
              </div>
            `;
          }

          return `<div class="board-cell-${player}"></div>`;
        })
        .join("")
    )
    .join("");
}
