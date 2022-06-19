import PubSub from "../lib/pubsub";

export default class Store {
    constructor(params) {
        this.state = {};
        this.actions = {};
        this.mutations = {};
        this.status = 'resting';
        this.events = new PubSub();

        if(params.hasOwnProperty('actions')) {
            this.actions = params.actions;
        }

        if(params.hasOwnProperty('mutations')) {
            this.mutations = params.mutations;
        }

        this.state = new Proxy((params.state || {}), {
            set: function(state, key, value) {
                state[key] = value;

                this.events.publish('stateChange', this.state);

                if(this.status !== 'mutation') {
                    console.warn(`You should use a mutation to set ${key}`);
                }

                this.status = 'resting';

                return true;
            }
        });
    }

    dispatch(actionKey, data) {
        if(typeof this.actions[actionKey] !== 'function') {
            console.error(`Action "${actionKey} doesn't exist.`);
            return false;
        }

        this.status = 'action';
        
        this.actions[actionKey](this, data);

        return true;
    }

    commit(mutationKey, data) {
        if(typeof this.mutations[mutationKey] !== 'function') {
            console.log(`Mutation "${mutationKey}" doesn't exist`);
            return false;
        }

        this.status = 'mutation';

        let newState = this.mutations[mutationKey](this.state, data);

        this.state = Object.assign(this.state, newState);

        return true;
    }
}