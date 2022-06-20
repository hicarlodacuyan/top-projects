export default class Component {
    constructor(options) {
        this.element = document.querySelector(options.selector);
        this.data = options.data;
        this.template = options.template;
        this.event = options.event;
    }

    render() {
        this.element.innerHTML = this.template(this.data);
        this.event();
    }
}