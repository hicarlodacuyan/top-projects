export default class Project {
    constructor() {
        this.todos = [];
    }

    get() {
        return this.todos;
    }

    add(item) {
        if (this.todoExists(this.todos, item) === true) return; 

        this.todos.push({
            item,
            currStatus: 'active' 
        });
    }

    delete(item) {
        this.todos.splice(item, 1);
    }

    clearCompleted() {
        this.todos = this.todos.filter(item => item.currStatus !== 'completed');
    }

    changeStatus(item) {
        this.todos[item].currStatus === 'active' ? this.todos[item].currStatus = 'completed' : this.todos[item].currStatus = 'active';
    }

    getStatus(item) {
        return this.todos[item].currStatus;
    }

    todoExists(todos, newItem) {
        return todos.some(todo => {
            return todo.item === newItem;
        });
    }
}