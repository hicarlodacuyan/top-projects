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
            position: '',
            company: '', 
            location: '',
            experienceFrom: '', 
            experienceTo: '',
            institution: '', 
            fieldOfStudy: '', 
            educationLocation: '', 
            educationFrom: '', 
            educationTo: '',
            contactDetails: [],
            experience: [],
            education: []
        };

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

        const { firstName, lastName, title, address, phoneNumber, email }   = this.state;
        const { position, company, location, experienceFrom, experienceTo } = this.state;
        const { institution, fieldOfStudy, educationLocation, educationFrom, educationTo } = this.state;

        this.setState({
            contactDetails: [firstName, lastName, title, address, phoneNumber, email],
            experience: [position, company, location, experienceFrom, experienceTo],
            education: [institution, fieldOfStudy, educationLocation, educationFrom, educationTo]
        });
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