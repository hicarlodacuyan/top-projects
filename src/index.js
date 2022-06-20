import './main.scss';
import Component from './lib/component';

// Default ToDo Project when App is first loaded
const app = new Component({
    selector: '#root',
    data: {
        heading: 'My Todos',
        todos: [
            {item: 'Wake up!', status: false},
            {item: 'Coffee', status: false},
            {item: 'Code', status: false},
            {item: 'Sleep', status: false},
        ]
    },
    template: props => {
        return `
            <div>
                <h1>${props.heading}</h1>
                <ul>
                    ${props.todos.map((todo, index) => {
                        return `
                            <li>
                                <input class="checkbox" type="checkbox" id="${index}" />
                                ${todo.item}
                                <button class="delete_item" aria-label="Delete this item">×</button>
                            </li>`;
                    }).join('')}
                </ul>
            </div>
        `;
    },
    event: function() {
        document.querySelectorAll('.delete_item').forEach((item, index) => {
            item.addEventListener('click', () => {
                this.data.todos.length === 1 ? this.data.todos.pop() : this.data.todos.splice(index, 1);
                this.render();
            });
        });

        document.querySelectorAll('.checkbox').forEach(item => {
            item.addEventListener('change', (e) => {
                let currItemStatus = this.data.todos[parseInt(e.target.id)].status;
                currItemStatus === false ? 
                    this.data.todos[parseInt(e.target.id)].status = true : 
                    this.data.todos[parseInt(e.target.id)].status = false;
                    
                console.log(`Index:${e.target.id} Status:${currItemStatus}`);
            });
        });
    }
});

app.render();

document.getElementById('submit_btn').addEventListener('click', () => {
    app.data.todos.push({
        item: `${document.getElementById('todo_input').value}`,
        status: false
    });
    app.render();
});