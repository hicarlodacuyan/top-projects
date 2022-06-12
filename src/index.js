import './main.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Project from './utils/Projects';
import Input from './components/Input';

const component = () => {
    return Input();
};

document.getElementById('content').appendChild(component());