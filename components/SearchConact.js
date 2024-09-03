import React, { useState } from 'react';

const SearchContact = ({ contacts, setContacts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filteredContacts = contacts.filter(contact => 
      contact.firstName.toLowerCase().includes(value) ||
      contact.lastName.toLowerCase().includes(value) ||
      contact.phoneNumber.includes(value)
    );
    setContacts(filteredContacts);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={handleSearch} 
      />
    </div>
  );
}

export default SearchContact;