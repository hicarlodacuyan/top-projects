import React, { Component } from "react"; 

class ExperienceDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='experience-inputs'>
            <p className="experience-number">Experience</p>

            <input 
              className='position' 
              type="text"
              name="experiences"
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
              name="experienceLocation"
              value={this.props.state.experienceLocation}
              onChange={this.props.changeHandler} 
              placeholder='Location'
              required />

            <input 
              className='experience-from' 
              type="date"
              name="experienceFrom"
              value={this.props.state.experienceFrom}
              onChange={this.props.changeHandler}  
              placeholder='From'
              required />

            <input 
              className='experience-to' 
              type="date"
              name="experienceTo"
              value={this.props.state.experienceTo}
              onChange={this.props.changeHandler} 
              placeholder='To'
              required />

      </div>
    );
  }
}

export default ExperienceDetails;

