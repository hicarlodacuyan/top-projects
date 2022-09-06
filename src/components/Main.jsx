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
            experiences: [],
            educations: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addExperience = this.addExperience.bind(this);
        this.handleExperienceChange = this.handleExperienceChange.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.handleEducationChange = this.handleEducationChange.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);
        this.deleteEducation = this.deleteEducation.bind(this);
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

    handleSubmit(event) {
        event.preventDefault();
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

    handleEducationChange(event) {
        const { value, name } = event.target;
        const key = event.target.dataset.key;

        let educations = [...this.state.educations];
        let education = {...educations[key]};
        education[name] = value;
        educations[key] = education;

        this.setState(prevState => ({
            ...prevState,
            educations
        }))
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

    addEducation() {
        this.setState(prevState => ({
            ...prevState,
            educations: [...prevState.educations].concat({
                institution: '',
                fieldOfStudy: '',
                educationLocation: '',
                educationFrom: '',
                educationTo: ''
            })
        }));
    }

    // handleEducationChange(event) {
    //     const { value, name } = event.target;
    //     const key = event.target.dataset.key;

    //     let educations = [...this.state.educations];
    //     let education = {...educations[key]};
    //     education[name] = value;
    //     educations[key] = education;

    //     this.setState(prevState => ({
    //         ...prevState,
    //         educations
    //     }))
    // }

    deleteExperience(event) {
        event.preventDefault();
        const key = event.target.dataset.key;
        let experiences = [...this.state.experiences];
        experiences.splice(key, 1);

        this.setState(prevState => ({
            ...prevState,
            experiences
        }));
    }

    deleteEducation(event) {
        event.preventDefault();
        const key = event.target.dataset.key;
        let educations = [...this.state.educations];
        educations.splice(key, 1);

        this.setState(prevState => ({
            ...prevState,
            educations
        }));
    }

    render() {
        return (
            <main className="main-container">
                <Editor 
                    state={this.state} 
                    changeHandler={this.handleChange} 
                    submitHandler={this.handleSubmit} 
                    experienceHandler={this.addExperience} 
                    changeExperienceHandler={this.handleExperienceChange} 
                    educationHandler={this.addEducation}
                    changeEducationHandler={this.handleEducationChange}
                    deleteExperienceHandler={this.deleteExperience}
                    deleteEducationHandler={this.deleteEducation} />
                <Preview state={this.state} />
            </main>
        );
    }
}

export default Main;