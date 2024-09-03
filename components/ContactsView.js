import React from 'react';

const ContactsView = ({ contacts, setSelectedContact, deleteContact, setViewContact }) => {
  return (
    <div className="contacts-view">
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <span>{contact.firstName} {contact.lastName}</span>
            <button onClick={() => setViewContact(contact)}>👁</button>
            <button onClick={() => setSelectedContact(contact)}>✏</button>
            <button onClick={() => deleteContact(contact.id)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactsView;