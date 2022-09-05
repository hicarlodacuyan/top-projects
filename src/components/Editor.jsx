import './Editor.css';
import React, { Component } from 'react';
import ContactDetails from './ContactDetails';
import ExperienceDetails from './ExperienceDetails';
import EducationDetails from './EducationDetails';

class Editor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="editor-container">
                <div className='heading-container'>
                    <h2 className='editor-title'>Editor</h2>
                    <p className='editor-para'>Completely fill-out the fields for best results</p>
                </div>
                <form className='editor-forms' onSubmit={this.props.submitHandler}>
                    <ContactDetails state={this.props.state} changeHandler={this.props.changeHandler} />
                    <div className='experience'>
                        <h3 className='experience-title'>Experience</h3>

                        <input className='add-btn' type="button" value="Add" onClick={this.props.experienceHandler} />

                        <div className='experiences'>
                            {this.props.state.experiences.map((exp, index) => <ExperienceDetails key={index} state={this.props.state} index={index} changeExperienceHandler={this.props.changeExperienceHandler} />)}
                        </div>
                    </div>

                    <div className='education'>
                        <h3 className='education-title'>Education</h3>

                        <input className='add-btn' type="button" value="Add" onClick={this.props.educationHandler} />

                        <div className='educations'>
                            {this.props.state.educations.map((edu, index) => <EducationDetails key={index} state={this.props.state} index={index} changeEducationHandler={this.props.changeEducationHandler} />)}
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}

export default Editor;