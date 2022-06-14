const appendTodo = (todos, list) => {
    todos.forEach(todo => {
        let li = document.createElement('li');
        li.innerText = todo.item;

        list.appendChild(li);
    });
};

export default appendTodo;