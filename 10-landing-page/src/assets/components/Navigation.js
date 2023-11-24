const NavigationContainer = () => {
    const navigation = document.createElement('ul');
    navigation.classList.add('navigation');

    const navigationHome = document.createElement('li');
    navigationHome.setAttribute('id', 'home');
    const navigationAbout = document.createElement('li');
    navigationAbout.setAttribute('id', 'about');
    const navigationContact = document.createElement('li');
    navigationContact.setAttribute('id', 'contact');

    const navigationHomeLink = document.createElement('a');
    navigationHomeLink.href = '#';
    navigationHomeLink.textContent = 'Home';

    const navigationAboutLink = document.createElement('a');
    navigationAboutLink.href = '#';
    navigationAboutLink.textContent = 'About';

    const navigationContactLink = document.createElement('a');
    navigationContactLink.href = '#';
    navigationContactLink.textContent = 'Contact';

    navigationHome.appendChild(navigationHomeLink);
    navigationAbout.appendChild(navigationAboutLink);
    navigationContact.appendChild(navigationContactLink);

    navigation.appendChild(navigationHome);
    navigation.appendChild(navigationAbout);
    navigation.appendChild(navigationContact);

    return navigation;
};

export default NavigationContainer;