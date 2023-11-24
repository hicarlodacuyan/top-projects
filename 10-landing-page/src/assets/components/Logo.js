import Logo from '../images/logo.gif';

const LogoContainer = () => {
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo');

    const logoImg = document.createElement('img');
    logoImg.src = `${Logo}`;
    logoImg.alt = 'The Analog Specialists';

    logoContainer.appendChild(logoImg);

    return logoContainer;
};

export default LogoContainer;