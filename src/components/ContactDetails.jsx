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
              value={this.props.state.contactDetails.firstName}
              onChange={this.props.changeHandler}
              required />

            <input 
              type="text"
              name="lastName" 
              placeholder='Last name'
              value={this.props.state.contactDetails.lastName}
              onChange={this.props.changeHandler}
              required />

            <input 
              type="text" 
              name="title"
              placeholder='Title'
              value={this.props.state.contactDetails.title}
              onChange={this.props.changeHandler}
              required />

            <input 
              type="text"
              name="address" 
              placeholder='Address'
              value={this.props.state.contactDetails.address}
              onChange={this.props.changeHandler}
              required />

            <input 
              type="number"
              name="phoneNumber" 
              placeholder='Phone number'
              value={this.props.state.contactDetails.phoneNumber}
              onChange={this.props.changeHandler}
              required />

            <input 
              type="email"
              name="email" 
              placeholder='Email'
              value={this.props.state.contactDetails.email}
              onChange={this.props.changeHandler}
              required />

        </div>
      </div>
    );
  }
}

export default ContactDetails;