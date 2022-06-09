import './main.scss';
import Project from './utils/Projects';

const project1 = new Project();
project1.add('Wake up!');
project1.add('Wash');
project1.changeStatus(1);
console.log(project1);