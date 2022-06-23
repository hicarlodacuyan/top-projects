import observable from "../lib/Observable";

const todoList = (() => {
    let items = [];

    const init = () => {

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

    const updateList = () => {
        let container = document.getElementById('todo-list');
    
        while(container.firstChild) {
            container.removeChild(container.lastChild);
        }
    
        todoList.items.forEach(item => {
            let todoItem = document.createElement('div');
            todoItem.classList.add('todo-item');
    
            let label = document.createElement('label');
    
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
    
            let bubble = document.createElement('span');
            bubble.classList.add('bubble');
    
            let todoContent = document.createElement('div');
            todoContent.classList.add('todo-content');
    
            let inputText = document.createElement('input');
            inputText.type = 'text';
            inputText.value = `${item.item}`;
    
            let actions = document.createElement('div');
            actions.classList.add('actions');
    
            let editBtn = document.createElement('button');
            editBtn.classList.add('edit');
            editBtn.textContent = 'Edit';
    
            let deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete');
            deleteBtn.textContent = 'Delete';
    
            label.appendChild(checkbox);
            label.appendChild(bubble);
    
            todoContent.appendChild(inputText);
    
            actions.appendChild(editBtn);
            actions.appendChild(deleteBtn);
            
            todoItem.appendChild(label);
            todoItem.appendChild(todoContent);
            todoItem.appendChild(actions);
    
            container.appendChild(todoItem);
        });
    };

    return { init, updateList, items };
})();

const itemAdded = item => {
    todoList.items.push({
        item,
        status: false
    });

    todoList.updateList();
};

observable.subscribe('itemAdded', itemAdded);

export { todoList };