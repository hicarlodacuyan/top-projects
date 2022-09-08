import './Main.css';
import React, { useState } from 'react';
import Editor from './Editor';
import Preview from './Preview';

const Main = () => {
    const [state, setState] = useState({
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
    });

    const handleSubmit = (event) => event.preventDefault();

    const handleChange = (event) => {
        const { value, name } = event.target;

        setState((prevState) => ({
            ...prevState,
            contactDetails: {
                ...prevState.contactDetails,
                [name]: value
            }
        }))
    };

    const handleExperienceChange = (event) => {
        const { value, name } = event.target;
        const key = event.target.dataset.key;
        let experiences = [...state.experiences];
        let experience = {...experiences[key]};

        experience[name] = value;
        experiences[key] = experience;

        setState((prevState) => ({
            ...prevState,
            experiences
        }));
    };

    const handleEducationChange = (event) => {
        const { value, name } = event.target;
        const key = event.target.dataset.key;

        let educations = [...state.educations];
        let education = {...educations[key]};
        education[name] = value;
        educations[key] = education;

        setState((prevState) => ({
            ...prevState,
            educations
        }));
    };

    const addExperience = () => {
        setState((prevState) => ({
            ...prevState,
            experiences: [...prevState.experiences].concat({
                position: '',
                company: '',
                experienceLocation: '',
                experienceFrom: '',
                experienceTo: ''
            })
        }));
    };

    const addEducation = () => {
        setState((prevState) => ({
            ...prevState,
            educations: [...prevState.educations].concat({
                institution: '',
                fieldOfStudy: '',
                educationLocation: '',
                educationFrom: '',
                educationTo: ''
            })
        }));
    };

    const deleteExperience = (event) => {
        event.preventDefault();
        const key = event.target.dataset.key;
        let experiences = [...state.experiences];
        experiences.splice(key, 1);

        setState((prevState) => ({
            ...prevState,
            experiences
        }));
    };

    const deleteEducation = (event) => {
        event.preventDefault();
        const key = event.target.dataset.key;
        let educations = [...state.educations];
        educations.splice(key, 1);

        setState((prevState) => ({
            ...prevState,
            educations
        }));
    };

    return (
        <main className="main-container">
            <Editor 
                state={state} 
                changeHandler={handleChange} 
                submitHandler={handleSubmit} 
                experienceHandler={addExperience}
                educationHandler={addEducation} 
                changeExperienceHandler={handleExperienceChange} 
                changeEducationHandler={handleEducationChange}
                deleteExperienceHandler={deleteExperience}
                deleteEducationHandler={deleteEducation} 
            />
            <Preview state={state} />
        </main>
    );
};

export default Main;