export default class PubSub {
    constructor() {
        this.events = {};
    }

    subscribe(event, fn) {
        if(!this.events.hasOwnProperty(event)) {
            this.events[event] = [];
        }

        return this.events[event].push(fn);
    }

    publish(event, data = {}) {
        if(!this.events.hasOwnProperty(event)) {
            return [];
        }

        return this.events[event].map(fn => fn(data));
    }
}