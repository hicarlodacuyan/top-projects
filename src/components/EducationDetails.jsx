import React, { Component } from "react";

class EducationDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='education-inputs'>
                <p className="education-number">School {this.props.index + 1}</p>

                <input 
                    className='institution' 
                    type="text"
                    name="institution"
                    data-key={this.props.index}
                    value={this.props.state.educations[this.props.index].institution} 
                    onChange={this.props.changeEducationHandler}
                    placeholder='Institution'
                    required />

                <input 
                    className='field-of-study' 
                    type="text"
                    name="fieldOfStudy"
                    data-key={this.props.index}
                    value={this.props.state.educations[this.props.index].fieldOfStudy}
                    onChange={this.props.changeEducationHandler} 
                    placeholder='Field of Study'
                    required />

                <input 
                    className='education-location' 
                    type="text"
                    name="educationLocation"
                    data-key={this.props.index}
                    value={this.props.state.educations[this.props.index].educationLocation}
                    onChange={this.props.changeEducationHandler} 
                    placeholder='Location'
                    required />

                <input 
                    className='education-from' 
                    type="date"
                    name="educationFrom"
                    data-key={this.props.index}
                    value={this.props.state.educations[this.props.index].educationFrom}
                    onChange={this.props.changeEducationHandler} 
                    placeholder='From'
                    required />

                <input 
                    className='education-to'
                    type="date"
                    name="educationTo"
                    data-key={this.props.index}
                    value={this.props.state.educations[this.props.index].educationTo}
                    onChange={this.props.changeEducationHandler} 
                    placeholder='To'
                    required />

                <button className="education-delete-btn">Delete</button>
            </div> 
        );
    }
}

export default EducationDetails;