import React, { Component } from "react";

class ContactDetails extends Component {
  render() {
    return (
      <div className='contact-details'>
        <h3 className='contact-title'>Contact details</h3>
        <div className='contact-inputs'>
            <input type="text" placeholder='First name' />
            <input type="text" placeholder='Last name' />
            <input type="text" placeholder='Title' />
            <input type="text" placeholder='Address' />
            <input type="number" placeholder='Phone number' />
            <input type="email" placeholder='Email' />
        </div>
      </div>
    );
  }
}

export default ContactDetails;