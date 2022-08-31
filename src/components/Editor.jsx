import './Editor.css';
import React, { Component } from 'react';

class Editor extends Component {
    render() {
        return (
            <section className="editor-container">
                <div className='heading-container'>
                    <h2 className='editor-title'>Editor</h2>
                    <p className='editor-para'>Completely fill-out the fields for best results</p>
                </div>
                <form className='contact-details'>
                    <h3 className='contact-title'>Contact details</h3>
                    <div className='contact-inputs'>
                        <input type="text" placeholder='First name' />
                        <input type="text" placeholder='Last name' />
                        <input type="text" placeholder='Title' />
                        <input type="text" placeholder='Address' />
                        <input type="number" placeholder='Phone number' />
                        <input type="email" placeholder='Email' />
                    </div>
                    <input className='add-btn' type="submit" value="Add" />
                </form>

                <form className='experience'>
                    <h3 className='experience-title'>Experience</h3>
                    <div className='experience-inputs'>
                        <input className='position' type="text" placeholder='Position' />
                        <input className='company' type="text" placeholder='Company' />
                        <input className='experience-location' type="text" placeholder='Location' />
                        <input className='experience-from' type="date" placeholder='From' />
                        <input className='experience-to' type="date" placeholder='To' />
                    </div>
                    <input className='add-btn' type="submit" value="Add" />
                </form>

                <form className='education'>
                    <h3 className='education-title'>Education</h3>
                    <div className='education-inputs'>
                        <input className='institution' type="text" placeholder='Institution' />
                        <input className='field-of-study' type="text" placeholder='Field of Study' />
                        <input className='education-location' type="text" placeholder='Location' />
                        <input className='education-from' type="date" placeholder='From' />
                        <input className='education-to' type="date" placeholder='To' />
                    </div>
                    <input className='add-btn' type="submit" value="Add" />
                </form>
            </section>
        );
    }
}

export default Editor;