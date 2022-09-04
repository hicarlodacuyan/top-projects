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
            experiences: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.addExperience = this.addExperience.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;

        this.setState({
            ...this.state,
            [event.target.name]: value
        });
    }

    addExperience() {
        this.setState({
            experiences: [...this.state.experiences].concat({
                position: '',
                company: '',
                experienceLocation: '',
                experienceFrom: '',
                experienceTo: ''
            })
        });
    }

    render() {
        return (
            <main className="main-container">
                <Editor state={this.state} changeHandler={this.handleChange} experienceHandler={this.addExperience} />
                <Preview state={this.state} />
            </main>
        );
    }
}

export default Main;