/* eslint-disable no-useless-constructor */
import './Editor.css';
import React, { Component } from 'react';
// import ExperienceInputs from './ExperienceInputs';

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
                <form className='contact-details' onSubmit={this.props.submitHandler}>
                    <h3 className='contact-title'>Contact details</h3>
                    <div className='contact-inputs'>
                        <input 
                            type="text"  
                            name="firstName" 
                            placeholder='First name' 
                            value={this.props.state.firstName} 
                            onChange={this.props.changeHandler}
                            required />
                        <input 
                            type="text"  
                            name="lastName" 
                            placeholder='Last name'
                            value={this.props.state.lastName} 
                            onChange={this.props.changeHandler}
                            required />
                        <input 
                            type="text"  
                            name="title" 
                            value={this.props.state.title} 
                            onChange={this.props.changeHandler} 
                            placeholder='Title' 
                            required />
                        <input 
                            type="text"  
                            name='address' 
                            value={this.props.state.address} 
                            onChange={this.props.changeHandler} 
                            placeholder='Address' 
                            required />
                        <input 
                            type="number" 
                            name='phoneNumber' 
                            value={this.props.state.phoneNumber} 
                            onChange={this.props.changeHandler} 
                            placeholder='Phone number' 
                            required />
                        <input 
                            type="email" 
                            name='email' 
                            value={this.props.state.email} 
                            onChange={this.props.changeHandler} 
                            placeholder='Email' 
                            required />
                    </div>
                    <input className='submit-btn' type="submit" value="Submit" />
                </form>

                <form className='experience' onSubmit={this.props.submitHandler}>
                    <h3 className='experience-title'>Experience</h3>
                    <div className='experience-inputs'>
                        <input
                            className='position' 
                            type="text"
                            name='position'
                            value={this.props.state.position}
                            onChange={this.props.changeHandler} 
                            placeholder='Position' 
                            required />
                        <input 
                            className='company' 
                            type="text"
                            name='company'
                            value={this.props.state.company}
                            onChange={this.props.changeHandler}  
                            placeholder='Company'
                            required />
                        <input 
                            className='experience-location' 
                            type="text"
                            name='location'
                            value={this.props.state.experienceLocation}
                            onChange={this.props.changeHandler} 
                            placeholder='Location'
                            required />
                        <input 
                            className='experience-from' 
                            type="date"
                            name='experienceFrom'
                            value={this.props.state.experienceFrom}
                            onChange={this.props.changeHandler}
                            placeholder='From'
                            required />
                        <input 
                            className='experience-to' 
                            type="date"
                            name='experienceTo'
                            value={this.props.state.experienceTo}
                            onChange={this.props.changeHandler}
                            placeholder='To'
                            required />
                    </div>
                    <div className='experience-btns'>
                        <input className='add-btn' type="button" value="Add" />
                        <input className='submit-btn' type="submit" value="Submit" />
                    </div>
                </form>

                <form className='education' onSubmit={this.props.submitHandler}>
                    <h3 className='education-title'>Education</h3>
                    <div className='education-inputs'>
                        <input 
                            className='institution' 
                            type="text"
                            name='institution'
                            value={this.props.state.institution}
                            onChange={this.props.changeHandler}
                            placeholder='Institution'
                            required />
                        <input 
                            className='field-of-study' 
                            type="text"
                            name='fieldOfStudy'
                            value={this.props.state.fieldOfStudy}
                            onChange={this.props.changeHandler} 
                            placeholder='Field of Study'
                            required />
                        <input 
                            className='education-location' 
                            type="text"
                            name='educationLocation'
                            value={this.props.state.educationLocation}
                            onChange={this.props.changeHandler} 
                            placeholder='Location'
                            required />
                        <input 
                            className='education-from' 
                            type="date"
                            name='educationFrom'
                            value={this.props.state.educationFrom}
                            onChange={this.props.changeHandler} 
                            placeholder='From'
                            required />
                        <input 
                            className='education-to' 
                            type="date"
                            name='educationTo'
                            value={this.props.state.educationTo}
                            onChange={this.props.changeHandler}  
                            placeholder='To'
                            required />
                    </div>
                    <div className='education-btns'>
                        <input className='add-btn' type="button" value="Add" />
                        <input className='submit-btn' type="submit" value="Submit" />
                    </div>
                </form>
            </section>
        );
    }
}

export default Editor;