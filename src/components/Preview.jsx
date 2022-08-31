import './Preview.css';
import React, { Component } from 'react';

class Preview extends Component {
    render() {
        return (
            <section className="preview-container">
                <h2 className='preview-title'>Preview</h2>
                <div className='output-preview'></div>
                <button className='print-btn'>Print</button>
            </section>
        );
        
    }
}

export default Preview;