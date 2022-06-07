const Contact = () => {
    const main = document.createElement('div');
    main.classList.add('main');
    main.classList.add('contact');

    const heading = document.createElement('h1');
    heading.textContent = 'Contact us';

    const para = document.createElement('p');
    para.textContent = '0999-509-4450 | hi.carlodacuyan@gmail.com';

    main.appendChild(heading);
    main.appendChild(para);

    return main;
};

export default Contact;