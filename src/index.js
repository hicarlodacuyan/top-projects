import './main.scss';
import '@csstools/normalize.css';
import LogoContainer from './assets/components/Logo';
import NavigationContainer from './assets/components/Navigation';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Contact from './assets/pages/Contact';

const container = document.getElementById('content');

const init = () => {
    LogoContainer();
    NavigationContainer();

    return {LogoContainer, NavigationContainer};
};

container.appendChild(init().LogoContainer());
container.appendChild(init().NavigationContainer());
container.appendChild(Home());

document.getElementById('home').addEventListener('click', () => {
    if(document.querySelector('.home')) return;

    container.removeChild(container.lastChild);
    container.appendChild(Home());
});

document.getElementById('about').addEventListener('click', () => {
    if(document.querySelector('.about')) return;

    container.removeChild(container.lastChild);
    container.appendChild(About());
});

document.getElementById('contact').addEventListener('click', () => {
    if(document.querySelector('.contact')) return;
    
    container.removeChild(container.lastChild);
    container.appendChild(Contact());
});