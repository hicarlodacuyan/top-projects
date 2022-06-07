const Home = () => {
    const main = document.createElement('div');
    main.classList.add('main');

    const keys = document.createElement('img');
    keys.src = '../src/assets/images/keys.jpg';
    keys.alt = 'Fender Rhodes, Hohner Clavinet, and Wurlitzer EP200';

    const para = document.createElement('p');
    para.textContent = 'We specialize in the sale and repair of classic keyboards, in particular the Fender Rhodes, Wurlitzer EP200, and Hohner Clavinet.';

    main.appendChild(keys);
    main.appendChild(para);

    return main;
};

export default Home;