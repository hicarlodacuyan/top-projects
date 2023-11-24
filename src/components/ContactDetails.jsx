import React from "react";

const ContactDetails = (props) => {
  return (
    <div className='contact-details'>
      <h3 className='contact-title'>Contact details</h3>
      <div className='contact-inputs'>
          <input 
            type="text"
            name="firstName" 
            placeholder='First name'
            value={props.state.contactDetails.firstName}
            onChange={props.changeHandler}
            required />

          <input 
            type="text"
            name="lastName" 
            placeholder='Last name'
            value={props.state.contactDetails.lastName}
            onChange={props.changeHandler}
            required />

          <input 
            type="text" 
            name="title"
            placeholder='Title'
            value={props.state.contactDetails.title}
            onChange={props.changeHandler}
            required />

          <input 
            type="text"
            name="address" 
            placeholder='Address'
            value={props.state.contactDetails.address}
            onChange={props.changeHandler}
            required />

          <input 
            type="number"
            name="phoneNumber" 
            placeholder='Phone number'
            value={props.state.contactDetails.phoneNumber}
            onChange={props.changeHandler}
            required />

          <input 
            type="email"
            name="email" 
            placeholder='Email'
            value={props.state.contactDetails.email}
            onChange={props.changeHandler}
            required />
      </div>
    </div>
  );
};

export default ContactDetails;