function dragLeave(e) {
  e.target.style.border = "1px solid white";
}

function dragOver(e) {
  e.preventDefault();
  e.target.style.border = "1px solid red";
}

function dragEnter(e) {
  e.preventDefault();
}

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
} 

export { dragLeave, dragOver, dragEnter, dragStart };
