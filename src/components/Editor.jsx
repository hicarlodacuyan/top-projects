import './Editor.css';
import React, { Component } from 'react';
import ContactDetails from './ContactDetails';
import ExperienceDetails from './ExperienceDetails';

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
                        <div className='experiences'>
                            {this.props.state.experiences.map((exp, index) => <ExperienceDetails key={index} state={this.props.state} index={index} changeExperienceHandler={this.props.changeExperienceHandler} />)}
                        </div>
                        <input className='add-btn' type="button" value="Add" onClick={this.props.experienceHandler} />
                    </div>

                    <div className='education'>
                        <h3 className='education-title'>Education</h3>
                        {/* <div className='education-inputs'>
                            <input className='institution' type="text" placeholder='Institution' />
                            <input className='field-of-study' type="text" placeholder='Field of Study' />
                            <input className='education-location' type="text" placeholder='Location' />
                            <input className='education-from' type="date" placeholder='From' />
                            <input className='education-to' type="date" placeholder='To' />
                        </div> */}
                        <input className='add-btn' type="button" value="Add" />
                    </div>
                </form>
            </section>
        );
    }
}

export default Editor;