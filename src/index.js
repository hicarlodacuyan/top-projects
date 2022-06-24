import './main.scss';
import App from './lib/App';
import { todoList } from './components/todoList';

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    rootElement.appendChild(App());
    todoList.saveAndRender();
});