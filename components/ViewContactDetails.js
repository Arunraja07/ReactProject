import React from 'react';

const ViewContactDetails = ({ contact, setViewContact }) => {
  return (
    <div>
      <h2>Contact Details</h2>
      <p><strong>First Name:</strong> {contact.firstName}</p>
      <p><strong>Last Name:</strong> {contact.lastName}</p>
      <p><strong>Phone Number:</strong> {contact.phoneNumber}</p>
      <button onClick={() => setViewContact(null)}>Close</button>
    </div>
  );
}

export default ViewContactDetails;