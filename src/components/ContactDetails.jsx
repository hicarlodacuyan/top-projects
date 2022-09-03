import React, { Component } from "react";

class ContactDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='contact-details'>
        <h3 className='contact-title'>Contact details</h3>
        <div className='contact-inputs'>
            <input 
              type="text"
              name="firstName" 
              placeholder='First name'
              value={this.props.state.contactDetails[0]}
              onChange={this.props.changeHandler}
              required />

            <input 
              type="text"
              name="lastName" 
              placeholder='Last name'
              value={this.props.state.contactDetails[1]}
              onChange={this.props.changeHandler}
              required />

            <input 
              type="text" 
              name="title"
              placeholder='Title'
              value={this.props.state.contactDetails[2]}
              onChange={this.props.changeHandler}
              required />

            <input 
              type="text"
              name="address" 
              placeholder='Address'
              value={this.props.state.contactDetails[3]}
              onChange={this.props.changeHandler}
              required />

            <input 
              type="number"
              name="phoneNumber" 
              placeholder='Phone number'
              value={this.props.state.contactDetails[4]}
              onChange={this.props.changeHandler}
              required />

            <input 
              type="email"
              name="email" 
              placeholder='Email'
              value={this.props.state.contactDetails[5]}
              onChange={this.props.changeHandler}
              required />

        </div>
      </div>
    );
  }
}

export default ContactDetails;