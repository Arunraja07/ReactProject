import React, { useState } from 'react';
import ContactForm from './components/ContactForm.js';

const AddContact = ({ addContact }) => {
  const [showForm, setShowForm] = useState(false);

  const handleAddContact = (contact) => {
    addContact(contact);
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}>Add Contact</button>
      {showForm && <ContactForm onSubmit={handleAddContact} />}
    </div>
  );
}

export default AddContact;