import observable from "../lib/Observable";

const todoList = (() => {

    const render = () => {

        const container = document.createElement('section');
        container.classList.add('todo-list');

        const h3 = document.createElement('h3');
        h3.textContent = 'TODO LIST';

        const list = document.createElement('div');
        list.classList.add('list');
        list.id = 'todo-list';

        container.appendChild(h3);
        container.appendChild(list);

        return container;
    };

    return { render };
})();

export default todoList.render();