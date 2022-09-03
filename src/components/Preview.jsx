import './Preview.css';
import React, { Component } from 'react';

class Preview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { contactDetails } = this.props.state;

        return (
            <section className="preview-container">
                <h2 className='preview-title'>Preview</h2>
                <div className='output-preview'>
                    <div className='preview-contact-details'>
                        {contactDetails.map((data) => <p key={data}>{data}</p>)}
                    </div>
                </div>
                <button className='print-btn'>Print</button>
            </section>
        );
        
    }
}

export default Preview;