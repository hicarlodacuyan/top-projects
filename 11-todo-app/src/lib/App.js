import { header } from "../components/header";
import { todoForm } from "../components/todoForm";
import { todoList } from "../components/todoList";

const App = () => {
    const app = document.createElement('div');
    app.classList.add('app');

    const hero = document.createElement('div');
    hero.classList.add('hero');

    hero.appendChild(header.init());
    hero.appendChild(todoForm.init());

    app.appendChild(hero);
    app.appendChild(todoList.init());

    return app;
};

export default App;