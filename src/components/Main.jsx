import './Main.css';
import React, { Component } from 'react';
import Editor from './Editor';
import Preview from './Preview';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            title: '', 
            address: '', 
            phoneNumber: '', 
            email: '',
            contactDetails: []
        };

        this.experience = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;

        this.setState({
            ...this.state,
            [event.target.name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { firstName, lastName, title, address, phoneNumber, email } = this.state;

        this.setState({
            contactDetails: [firstName, lastName, title, address, phoneNumber, email]
        })

        console.log(this.state);
    }

    render() {
        return (
            <main className="main-container">
                <Editor state={this.state} changeHandler={this.handleChange} submitHandler={this.handleSubmit} />
                <Preview state={this.state} />
            </main>
        );
    }
}

export default Main;