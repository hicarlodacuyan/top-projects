import './main.scss';
import App from './lib/App';
import { handleFormSubmit } from './components/todoList';

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    rootElement.appendChild(App());

    const form = document.querySelector('.new-todo-form');
    form.querySelector('input[type=submit]').addEventListener('click', handleFormSubmit);
});