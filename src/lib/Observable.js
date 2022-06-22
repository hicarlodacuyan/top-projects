class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(event, fn) {
        this.observers.push(fn);
    }

    notify(event, data) {
        this.observers.forEach(observer => observer(data));
    }
}

export default new Observable();