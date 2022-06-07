const About = () => {
    const main = document.createElement('div');
    main.classList.add('main');
    main.classList.add('about');

    const para = document.createElement('p');
    para.textContent = 'In the business since 1999.';

    main.appendChild(para);

    return main;
};

export default About;