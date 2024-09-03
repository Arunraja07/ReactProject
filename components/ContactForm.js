import React, { useState, useEffect } from 'react';

const ContactForm = ({ contact, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });

  useEffect(() => {
    if (contact) {
      setFormData(contact);
    }
  }, [contact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const validateForm = () => {
    const { firstName, lastName, phoneNumber } = formData;
    if (!firstName || !lastName || !phoneNumber) {
      alert("All fields are required.");
      return false;
    }
    return true;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input 
          type="text" 
          name="firstName" 
          value={formData.firstName} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input 
          type="text" 
          name="lastName" 
          value={formData.lastName} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input 
          type="text" 
          name="phoneNumber" 
          value={formData.phoneNumber} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;