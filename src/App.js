import Header from "./assets/components/Header";
import Input from "./assets/components/Input";
import List from "./assets/components/List";

function App() {
    return `
        <div class="app__container">
            ${Header()}
            ${Input()}
            ${List()}
        </div>
    `;
}

export default App;