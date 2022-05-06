function createCanvas(size) {
    const canvas = document.createElement('div');
    const container = document.querySelector('.container');

    canvas.setAttribute('class', 'canvas');
    container.appendChild(canvas);

    for (i = 1; i <= size; i++) {
        const cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        document.querySelector('.canvas').appendChild(cell);
    }

    console.log(document.querySelector('.canvas'));
}

createCanvas(260);