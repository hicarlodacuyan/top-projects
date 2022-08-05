import Observable from "../lib/Observable";

export default function boardComponent(theBoard) {
  return theBoard.fieldStatus
    .map((row, coordX) =>
      row.map((col, coordY) => `<div class="board-cell"></div>`).join("")
    )
    .join("");
}

Observable.subscribe("boardUpdated", boardComponent);
