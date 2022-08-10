export default function boardComponent(theBoard, player) {
  return theBoard.fieldStatus.map((row, coordX) =>
      row.map((col, coordY) => {
          const status = theBoard.getFieldStatus(coordX, coordY);

          if (status === 1) {
            return `
              <div class="board-cell-${player}" data-coordx="${coordX}" data-coordy="${coordY}">
                <div class="hit-missed-player-1"></div>
              </div>
            `;
          }

          if (status === 2) {
            return `
              <div class="board-cell-${player}" data-coordx="${coordX}" data-coordy="${coordY}">
                <div class="ship-body">
                  <div class="occupied-not-hit"></div>
                </div>
              </div>
            `;
          }

          if (status === 3) {
            return `
              <div class="board-cell-${player}" data-coordx="${coordX}" data-coordy="${coordY}">
                <div class="ship-body">
                  <div class="hit"></div>
                </div>
              </div>
            `;
          }

          return `<div class="board-cell-${player}" data-coordx="${coordX}" data-coordy="${coordY}"></div>`;
        })
        .join("")
    )
    .join("");
}
