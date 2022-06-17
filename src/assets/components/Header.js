import IconMoon from '../images/icon-moon.svg';

export default function Header() {
    return `
        <div class="app__heading">
            <h1 class="title">TODO</h1>
            <img class="icon_mode" src="${IconMoon}" />
        </div>
    `;
}