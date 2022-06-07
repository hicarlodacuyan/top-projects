import Keys from '../images/keys.jpg';

const Home = () => {
    const main = document.createElement('div');
    main.classList.add('main');
    main.classList.add('home');

    const keys = document.createElement('img');
    keys.src = `${Keys}`;
    keys.alt = 'Fender Rhodes, Hohner Clavinet, and Wurlitzer EP200';

    const para = document.createElement('p');
    para.textContent = 'We specialize in the sale and repair of classic keyboards, in particular the Fender Rhodes, Wurlitzer EP200, and Hohner Clavinet.';

    main.appendChild(keys);
    main.appendChild(para);

    return main;
};

export default Home;