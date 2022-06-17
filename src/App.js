import Header from "./assets/components/Header";
import Input from "./assets/components/Input";

function App() {
    return `
        <div class="app__container">
            ${Header()}
            ${Input()}
        </div>
    `;
}

export default App;