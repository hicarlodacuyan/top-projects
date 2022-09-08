import React from "react"; 

const ExperienceDetails = (props) => {
  return (
    <div className='experience-inputs'>
      <p className="experience-number">Job {props.index + 1}</p>

      <input 
        className='position' 
        type="text"
        name="position"
        data-key={props.index}
        value={props.state.experiences[props.index].position}
        onChange={props.changeExperienceHandler}
        placeholder='Position'
        required />

      <input 
        className='company' 
        type="text"
        name='company'
        data-key={props.index}
        value={props.state.experiences[props.index].company}
        onChange={props.changeExperienceHandler} 
        placeholder='Company'
        required />
        
      <input 
        className='experience-location' 
        type="text"
        name="experienceLocation"
        data-key={props.index}
        value={props.state.experiences[props.index].experienceLocation}
        onChange={props.changeExperienceHandler} 
        placeholder='Location'
        required />

      <input 
        className='experience-from' 
        type="date"
        name="experienceFrom"
        data-key={props.index}
        value={props.state.experiences[props.index].experienceFrom}
        onChange={props.changeExperienceHandler}  
        placeholder='From'
        required />

      <input 
        className='experience-to' 
        type="date"
        name="experienceTo"
        data-key={props.index}
        value={props.state.experiences[props.index].experienceTo}
        onChange={props.changeExperienceHandler} 
        placeholder='To'
        required />

      <button 
        type="button"
        className="delete-btn"
        onClick={props.deleteExperienceHandler}
        data-key={props.index}>
          Delete
      </button>
    </div>
  );
};

export default ExperienceDetails;