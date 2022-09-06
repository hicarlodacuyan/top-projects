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
                    <section className='preview-contact-container'>
                        <div className='preview-contact-details'>
                            <p className='firstName'>{contactDetails.firstName}</p>
                            <p className='lastName'>{contactDetails.lastName}</p>
                            <p className='title'>{contactDetails.title}</p>
                            <p className='address'>{contactDetails.address}</p>
                            <p className='phoneNumber'>{contactDetails.phoneNumber}</p>
                            <p className='email'>{contactDetails.email}</p>
                        </div>
                    </section>
                    <section className='preview-experience-container'>
                        {experiences.map((exp, index) => 
                            <div className='preview-experience-details' key={index}>
                                <p>{exp.position}</p>
                                <p>{exp.company}</p>
                                <p>{exp.experienceLocation}</p>
                                <p>{exp.experienceFrom}</p>
                                <p>{exp.experienceTo}</p>
                            </div>
                        )}
                    </section>
                    <section className='preview-education-container'>
                        {educations.map((exp, index) => 
                            <div className='preview-education-details' key={index}>
                                <p>{exp.institution}</p>
                                <p>{exp.fieldOfStudy}</p>
                                <p>{exp.educationLocation}</p>
                                <p>{exp.educationFrom}</p>
                                <p>{exp.educationTo}</p>
                            </div>
                        )}
                    </section>
                </div>
                <button className='print-btn'>Print</button>
            </section>
        );
        
    }
}

export default Preview;