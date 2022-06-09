export default class Project {
    constructor() {
        this.todos = [];
    }

    get() {
        return this.todos;
    }

    add(item) {
        this.todos.push({
            item,
            currStatus: 'active' 
        });
    }

    delete(item) {
        this.todos.splice(item, 1);
    }

    changeStatus(item) {
        this.todos[item].currStatus === 'active' ? this.todos[item].currStatus = 'completed' : this.todos[item].currStatus = 'active';
    }

    getStatus(item) {
        return this.todos[item].currStatus;
    }
}