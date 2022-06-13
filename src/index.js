import './main.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Project from './utils/Projects';
import Render from './utils/render';


const logicFlow = () => {
    const container = document.getElementById('content');
    container.appendChild(Render().Input());

    const addTodoBtn = document.querySelector('.bi-plus-circle');
    const formInput = document.querySelector('.form-control');
    const myPersonalTasks = new Project();

    addTodoBtn.addEventListener('click', () => {
        myPersonalTasks.add(formInput.value);
        console.log(myPersonalTasks.get());
    });
};


logicFlow();