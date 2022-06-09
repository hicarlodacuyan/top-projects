import './main.scss';
import Project from './utils/Projects';

const project1 = new Project();
project1.add('Wake up!');
project1.add('Wash');
project1.add('Coffee');
project1.add('Sleep');
project1.changeStatus(1);
project1.changeStatus(2);
project1.clearCompleted();
console.log(project1);