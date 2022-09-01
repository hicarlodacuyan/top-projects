import './Editor.css';
import React, { Component } from 'react';
import ContactDetails from './ContactDetails';
import ExperienceDetails from './ExperienceDetails';

class Editor extends Component {
    constructor() {
        super();

        this.state = {
            experiences: [<ExperienceDetails />]
        };

        this.addExperience = this.addExperience.bind(this);
    }

    addExperience() {
        this.setState({
            experiences: this.state.experiences.concat(<ExperienceDetails />)
        })
    }

    render() {
        return (
            <section className="editor-container">
                <div className='heading-container'>
                    <h2 className='editor-title'>Editor</h2>
                    <p className='editor-para'>Completely fill-out the fields for best results</p>
                </div>
                <form className='editor-forms'>
                    <ContactDetails />
                    <div className='experience'>
                        <h3 className='experience-title'>Experience</h3>
                        <div className='experiences'>
                            {this.state.experiences.map((experience, index) => <ExperienceDetails key={index} item={index + 1} />)}
                        </div>
                        <input className='add-btn' type="button" value="Add" onClick={this.addExperience} />
                    </div>

                    <div className='education'>
                        <h3 className='education-title'>Education</h3>
                        <div className='education-inputs'>
                            <input className='institution' type="text" placeholder='Institution' />
                            <input className='field-of-study' type="text" placeholder='Field of Study' />
                            <input className='education-location' type="text" placeholder='Location' />
                            <input className='education-from' type="date" placeholder='From' />
                            <input className='education-to' type="date" placeholder='To' />
                        </div>
                        <input className='add-btn' type="button" value="Add" />
                    </div>

                    <input className='submit-btn' type="submit" value="Submit" />
                </form>
            </section>
        );
    }
}

export default Editor;