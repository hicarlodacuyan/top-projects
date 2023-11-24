import './Editor.css';
import React from 'react';
import ContactDetails from './ContactDetails';
import ExperienceDetails from './ExperienceDetails';
import EducationDetails from './EducationDetails';

const Editor = (props) => {
    return (
        <section className="editor-container">
            <div className='heading-container'>
                <h2 className='editor-title'>Editor</h2>
                <p className='editor-para'>Completely fill-out the fields for best results</p>
            </div>
            <form className='editor-forms' onSubmit={props.submitHandler}>
                <ContactDetails state={props.state} changeHandler={props.changeHandler} />
                <div className='experience-inputs-container'>
                    <h3 className='experience-title'>Experience</h3>
                    
                    <div className='experiences'>
                        {props.state.experiences.map((exp, index) => {
                            return <ExperienceDetails 
                                        key={index} 
                                        state={props.state} 
                                        index={index} 
                                        changeExperienceHandler={props.changeExperienceHandler} 
                                        deleteExperienceHandler={props.deleteExperienceHandler} 
                                    />;
                        })}
                        <input className='add-btn' type="button" value="Add" onClick={props.experienceHandler} />
                    </div>
                </div>

                <div className='education'>
                    <h3 className='education-title'>Education</h3>

                    <div className='educations'>
                        {props.state.educations.map((edu, index) => {
                            return <EducationDetails 
                                        key={index} 
                                        state={props.state} 
                                        index={index} 
                                        changeEducationHandler={props.changeEducationHandler} 
                                        deleteEducationHandler={props.deleteEducationHandler} 
                                    />;
                        })}
                        <input className='add-btn' type="button" value="Add" onClick={props.educationHandler} />
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Editor;