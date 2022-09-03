import React, { Component } from "react"; 

class ExperienceDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='experience-inputs'>
            <p className="experience-number">Experience {this.props.item}</p>

            <input 
              className='position' 
              type="text"
              name={`position${this.props.item}`}
              onChange={this.props.changeHandler}
              placeholder='Position'
              required />

            <input 
              className='company' 
              type="text"
              name={`company${this.props.item}`}
              onChange={this.props.changeHandler} 
              placeholder='Company'
              required />
              
            <input 
              className='experience-location' 
              type="text"
              name={`experienceLocation${this.props.item}`}
              onChange={this.props.changeHandler} 
              placeholder='Location'
              required />

            <input 
              className='experience-from' 
              type="date"
              name={`experienceFrom${this.props.item}`}
              onChange={this.props.changeHandler}  
              placeholder='From'
              required />

            <input 
              className='experience-to' 
              type="date"
              name={`experienceTo${this.props.item}`}
              onChange={this.props.changeHandler} 
              placeholder='To'
              required />

      </div>
    );
  }
}

export default ExperienceDetails;

