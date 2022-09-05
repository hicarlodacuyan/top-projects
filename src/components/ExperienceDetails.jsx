import React, { Component } from "react"; 

class ExperienceDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='experience-inputs'>
            <p className="experience-number">Job {this.props.index + 1}</p>

            <input 
              className='position' 
              type="text"
              name="position"
              data-key={this.props.index}
              value={this.props.state.experiences[this.props.index].position}
              onChange={this.props.changeExperienceHandler}
              placeholder='Position'
              required />

            <input 
              className='company' 
              type="text"
              name='company'
              data-key={this.props.index}
              value={this.props.state.experiences[this.props.index].company}
              onChange={this.props.changeExperienceHandler} 
              placeholder='Company'
              required />
              
            <input 
              className='experience-location' 
              type="text"
              name="experienceLocation"
              data-key={this.props.index}
              value={this.props.state.experiences[this.props.index].experienceLocation}
              onChange={this.props.changeExperienceHandler} 
              placeholder='Location'
              required />

            <input 
              className='experience-from' 
              type="date"
              name="experienceFrom"
              data-key={this.props.index}
              value={this.props.state.experiences[this.props.index].experienceFrom}
              onChange={this.props.changeExperienceHandler}  
              placeholder='From'
              required />

            <input 
              className='experience-to' 
              type="date"
              name="experienceTo"
              data-key={this.props.index}
              value={this.props.state.experiences[this.props.index].experienceTo}
              onChange={this.props.changeExperienceHandler} 
              placeholder='To'
              required />

            <button className="delete-btn">Delete</button>
      </div>
    );
  }
}

export default ExperienceDetails;

