const About = () => {
    const main = document.createElement('div');
    main.classList.add('main');
    main.classList.add('about');

    const heading = document.createElement('h1');
    heading.textContent = 'About us';

    const para = document.createElement('p');
    para.textContent = 'We are focused on providing the best possible experience for our customers. When we’re working on a piano new or used, we take great care to ensure that it will ultimately serve you, rather than our own internal goals or bottom line. Our business is about dedication, being easy to do business with and helping you, the customer, apply our knowledge to your shopping, we are passionate about wanting to provide you with the best products, the best possible service and best possible price, we work tirelessly to do so.';

    main.appendChild(heading);
    main.appendChild(para);

    return main;
};

export default About;