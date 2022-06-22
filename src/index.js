import './main.scss';
import App from './lib/App';

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    rootElement.appendChild(App().header);
    rootElement.appendChild(App().todoForm);
    rootElement.appendChild(App().todoList);
});