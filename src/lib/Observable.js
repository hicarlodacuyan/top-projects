class Observable {
    constructor() {
        this.observers = {};
    }

    subscribe(event, fn) {
        if(!this.observers.hasOwnProperty(event)) {
            this.observers[event] = [];
        }

        this.observers[event].push(fn);
    }

    notify(event, data) {
        if(!this.observers.hasOwnProperty(event)) return [];

        this.observers[event].map(fn => fn(data));
    }
}

export default new Observable();