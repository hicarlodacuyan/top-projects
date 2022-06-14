const appendTodo = (todos, list) => {
    todos.forEach((todo, index) => {
        let todoItemContainer = document.createElement('div');

        let todoItem = document.createElement('input');
        todoItem.type = 'checkbox';
        todoItem.id = `todo${index}`;
        todoItem.name = `${todo.item}`;

        let todoItemLabel = document.createElement('label');
        todoItemLabel.htmlFor = `todo${index}`;
        todoItemLabel.innerText = todo.item;

        todoItemContainer.appendChild(todoItem);
        todoItemContainer.appendChild(todoItemLabel);

        list.appendChild(todoItemContainer);
    });
};

export default appendTodo;