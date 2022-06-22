const header = (() => {

    const init = () => {

        const container = document.createElement('section');
        container.classList.add('greeting');

        const h2 = document.createElement('h2');
        h2.classList.add('title');
        h2.textContent = 'HABIT - A simple todo app';

        container.appendChild(h2);

        return container;
    };

    return { init };
})();

export { header }