import './main.scss';
import App from './lib/App';
import { handleFormSubmit } from './lib/handleFormSubmit';

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('root');
    rootElement.appendChild(App());
});