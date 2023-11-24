import './main.scss';
import App from './lib/App';
import { todoList } from './components/todoList';
import { countUpdateChangeStatus } from './components/todoList';

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.querySelector('body');
    rootElement.appendChild(App());
    todoList.saveAndRender();
    countUpdateChangeStatus();
});