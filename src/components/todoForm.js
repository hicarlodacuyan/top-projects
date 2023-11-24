import { handleFormSubmit } from "../lib/handleFormSubmit";

const todoForm = (() => {

    const init = () => {

        const container = document.createElement('section');
        container.classList.add('create-todo');

        const h3 = document.createElement('h3');
        h3.textContent = 'CREATE A TODO';

        const todoForm = document.createElement('form');
        todoForm.classList.add('new-todo-form');

        const h4 = document.createElement('h4');
        h4.textContent = `What's on your todo list?`;

        const inputText = document.createElement('input');
        inputText.type = 'text';
        inputText.name = 'content';
        inputText.id = 'content';
        inputText.placeholder = 'e.g. Buy groceries';

        const inputSubmit = document.createElement('input');
        inputSubmit.type = 'submit';
        inputSubmit.value = 'Add todo';
        inputSubmit.addEventListener('click', handleFormSubmit);

        todoForm.appendChild(h4);
        todoForm.appendChild(inputText);
        todoForm.appendChild(inputSubmit);

        container.appendChild(h3);
        container.appendChild(todoForm);

        return container;
    };

    return { init };

})();

export { todoForm };