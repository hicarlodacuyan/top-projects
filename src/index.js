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

   container.appendChild(Home());
});

document.getElementById('about').addEventListener('click', () => {
    /* TODO: Check if About module is already loaded 
                If yes, simply return
            If no, render About module    
    */
    console.log('About');
});

document.getElementById('contact').addEventListener('click', () => {
    /* TODO: Check if Contact module is already loaded 
                If yes, simply return
            If no, render Contact module    
    */
    console.log('Contact');
});