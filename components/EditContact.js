import React from 'react';
import ContactForm from './components/ContactForm';

const EditContact = ({ contact, updateContact, setSelectedContact }) => {
  const handleUpdateContact = (updatedContact) => {
    updateContact(updatedContact);
    setSelectedContact(null);
  };

  return (
    <div>
      <h2>Edit Contact</h2>
      <ContactForm contact={contact} onSubmit={handleUpdateContact} />
    </div>
  );
}

export default EditContact;