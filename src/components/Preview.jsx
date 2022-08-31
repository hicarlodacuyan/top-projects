/* eslint-disable no-useless-constructor */
import './Preview.css';
import React, { Component } from 'react';

class Preview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { contactDetails, experience, education } = this.props.state;

        return (
            <section className="preview-container">
                <h2 className='preview-title'>Preview</h2>
                <div className='output-preview'>
                    <div className='preview-contact-details'>
                        {contactDetails.map((data) => <p>{data}</p>)}
                    </div>
                    <div className='preview-experience-details'>
                        {experience.map((data) => <p>{data}</p>)}
                    </div>
                    <div className='preview-education-details'>
                        {education.map((data) => <p>{data}</p>)}
                    </div>
                </div>
                <button className='print-btn'>Print</button>
            </section>
        );
        
    }
}

export default Preview;