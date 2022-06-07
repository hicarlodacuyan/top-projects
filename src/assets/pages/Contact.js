const Contact = () => {
    const main = document.createElement('div');
    main.classList.add('main');
    main.classList.add('contact');

    const para = document.createElement('p');
    para.textContent = '0999-509-4450';

    main.appendChild(para);

    return main;
};

export default Contact;