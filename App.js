import React, { useState, useEffect } from 'react';
import ContactsView from './components/ContactsView';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import ViewContactDetails from './components/ViewContactDetails';
import SearchContact from './components/SearchContact';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [viewContact, setViewContact] = useState(null);

  useEffect(() => {
    // Fetch contacts from the JSON feed
    fetch('https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json')
      .then(response => response.json())
      .then(data => setContacts(data.contacts));
  }, []);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const updateContact = (updatedContact) => {
    setContacts(contacts.map(contact => 
      contact.id === updatedContact.id ? updatedContact : contact
    ));
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="App">
      <SearchContact contacts={contacts} setContacts={setContacts} />
      <ContactsView 
        contacts={contacts} 
        setSelectedContact={setSelectedContact} 
        deleteContact={deleteContact} 
        setViewContact={setViewContact}
      />
      <AddContact addContact={addContact} />
      {selectedContact && (
        <EditContact 
          contact={selectedContact} 
          updateContact={updateContact} 
          setSelectedContact={setSelectedContact}
        />
      )}
      {viewContact && (
        <ViewContactDetails contact={viewContact} setViewContact={setViewContact} />
      )}
    </div>
  );
}

export default App;