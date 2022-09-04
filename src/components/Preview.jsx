import './Preview.css';
import React, { Component } from 'react';

class Preview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { firstName, lastName, title, address, phoneNumber, email, experiences } = this.props.state;
        
        return (
            <section className="preview-container">
                <h2 className='preview-title'>Preview</h2>
                <div className='output-preview'>
                    <div className='preview-contact-details'>
                        <p>{firstName}</p>
                        <p>{lastName}</p>
                        <p>{title}</p>
                        <p>{address}</p>
                        <p>{phoneNumber}</p>
                        <p>{email}</p>
                    </div>
                </div>
                <button className='print-btn'>Print</button>
            </section>
        );
        
    }
}

export default Preview;