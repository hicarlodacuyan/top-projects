import { header } from "../components/header";
import { todoForm } from "../components/todoForm";
import { todoList } from "../components/todoList";

const App = () => {
    const app = document.createElement('div');
    app.classList.add('app');

    app.appendChild(header.init());
    app.appendChild(todoForm.init());
    app.appendChild(todoList.init());

    return app;
};

export default App;