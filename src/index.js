import './main.scss';
import Project from './utils/Projects';
import Render from './utils/render';
import appendTodo from './components/appendTodo';


const init = () => {
    const container = document.getElementById('content');
    const toDoList = document.createElement('ul');
    container.appendChild(Render().Input());
    container.appendChild(toDoList);

    const addTodoBtn = document.querySelector('.bi-plus-circle');
    const formInput = document.querySelector('.form-control');
    const myPersonalTasks = new Project();

    addTodoBtn.addEventListener('click', () => {
        toDoList.innerHTML = '';
        myPersonalTasks.add(formInput.value);
        appendTodo(myPersonalTasks.get(), toDoList);
    });
};


init();