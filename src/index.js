import './main.scss';
import Project from './utils/Projects';
import Input from './components/Input';

const component = () => {
    return Input();
};

document.getElementById('content').appendChild(component());