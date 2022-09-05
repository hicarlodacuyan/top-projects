import './Preview.css';
import React, { Component } from 'react';

class Preview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { contactDetails, experiences, educations } = this.props.state;
        
        return (
            <section className="preview-container">
                <h2 className='preview-title'>Preview</h2>
                <div className='output-preview'>
                    <div className='preview-contact-details'>
                        <p>{contactDetails.firstName}</p>
                        <p>{contactDetails.lastName}</p>
                        <p>{contactDetails.title}</p>
                        <p>{contactDetails.address}</p>
                        <p>{contactDetails.phoneNumber}</p>
                        <p>{contactDetails.email}</p>
                    </div>
                    {experiences.map((exp, index) => 
                        <div className='preview-experience-details' key={index}>
                            <p>{exp.position}</p>
                            <p>{exp.company}</p>
                            <p>{exp.experienceLocation}</p>
                            <p>{exp.experienceFrom}</p>
                            <p>{exp.experienceTo}</p>
                        </div>
                    )}
                    {educations.map((exp, index) => 
                        <div className='preview-education-details' key={index}>
                            <p>{exp.institution}</p>
                            <p>{exp.fieldOfStudy}</p>
                            <p>{exp.educationLocation}</p>
                            <p>{exp.educationFrom}</p>
                            <p>{exp.educationTo}</p>
                        </div>
                    )}
                </div>
                <button className='print-btn'>Print</button>
            </section>
        );
        
    }
}

export default Preview;