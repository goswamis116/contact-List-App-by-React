import React, { useState } from 'react';
import ContactList from './components/ContactList';
import AddContactForm from './components/AddContactForm';
import UpdateContactForm from './components/UpdateContactForm';

function App() {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4 bg-primary text-white text-center">Contact Management System By Santanu</h1>
      <div className="row">
        <div className="col-md-6">
          <ContactList />
        </div>
        <div className="col-md-6">
          <AddContactForm onAddContact={handleAddContact} />
        </div>
      </div>
    </div>
  );
}

export default App;
