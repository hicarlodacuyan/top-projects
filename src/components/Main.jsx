import './Main.css';
import React, { Component } from 'react';
import Editor from './Editor';
import Preview from './Preview';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contactDetails: {
                firstName: '',
                lastName: '',
                title: '', 
                address: '', 
                phoneNumber: '', 
                email: ''
            },
            experiences: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.addExperience = this.addExperience.bind(this);
        this.handleExperienceChange = this.handleExperienceChange.bind(this);
    }

    handleChange(event) {
        const { value, name } = event.target;

        this.setState(prevState => ({
            ...prevState,
            contactDetails: {
                ...prevState.contactDetails,
                [name]: value
            }
        }));
    }

    handleExperienceChange(event) {
        const { value, name } = event.target;
        const key = event.target.dataset.key;

        let experiences = [...this.state.experiences];
        let experience = {...experiences[key]};
        experience[name] = value;
        experiences[key] = experience;
        
        this.setState(prevState => ({
            ...prevState,
            experiences
        }));
    }

    addExperience() {
        this.setState(prevState => ({
            ...prevState,
            experiences: [...prevState.experiences].concat({
                position: '',
                company: '',
                experienceLocation: '',
                experienceFrom: '',
                experienceTo: ''
            })
        }));
    }

    render() {
        return (
            <main className="main-container">
                <Editor state={this.state} changeHandler={this.handleChange} experienceHandler={this.addExperience} changeExperienceHandler={this.handleExperienceChange} />
                <Preview state={this.state} />
            </main>
        );
    }
}

export default Main;