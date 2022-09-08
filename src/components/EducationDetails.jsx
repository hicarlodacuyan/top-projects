import React from "react";

const EducationDetails = (props) => {
    return (
        <div className='education-inputs'>
            <p className="education-number">School {props.index + 1}</p>

            <input 
                className='institution' 
                type="text"
                name="institution"
                data-key={props.index}
                value={props.state.educations[props.index].institution} 
                onChange={props.changeEducationHandler}
                placeholder='Institution'
                required />

            <input 
                className='field-of-study' 
                type="text"
                name="fieldOfStudy"
                data-key={props.index}
                value={props.state.educations[props.index].fieldOfStudy}
                onChange={props.changeEducationHandler} 
                placeholder='Field of Study'
                required />

            <input 
                className='education-location' 
                type="text"
                name="educationLocation"
                data-key={props.index}
                value={props.state.educations[props.index].educationLocation}
                onChange={props.changeEducationHandler} 
                placeholder='Location'
                required />

            <input 
                className='education-from' 
                type="date"
                name="educationFrom"
                data-key={props.index}
                value={props.state.educations[props.index].educationFrom}
                onChange={props.changeEducationHandler} 
                placeholder='From'
                required />

            <input 
                className='education-to'
                type="date"
                name="educationTo"
                data-key={props.index}
                value={props.state.educations[props.index].educationTo}
                onChange={props.changeEducationHandler} 
                placeholder='To'
                required />

            <button
                type="button"
                onClick={props.deleteEducationHandler} 
                className="education-delete-btn"
                data-key={props.index}>
                    Delete
            </button>
        </div>
    );
};

export default EducationDetails;