import React, { Component } from "react"; 

class ExperienceDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='experience-inputs'>
            <p className="experience-number">Experience {this.props.item}</p>
            <input className='position' type="text" placeholder='Position' />
            <input className='company' type="text" placeholder='Company' />
            <input className='experience-location' type="text" placeholder='Location' />
            <input className='experience-from' type="date" placeholder='From' />
            <input className='experience-to' type="date" placeholder='To' />
      </div>
    );
  }
}

export default ExperienceDetails;

