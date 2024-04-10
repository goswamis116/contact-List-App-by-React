import React, { useState } from 'react';
import axios from 'axios';

const UpdateContactForm = ({ contact, onUpdateContact }) => {
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`, { name, email })
      .then(response => {
        onUpdateContact(response.data);
      })
      .catch(error => {
        console.error('Error updating contact: ', error);
      });
  };

  return (
    <div>
      <h2>Update Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Update Contact</button>
      </form>
    </div>
  );
};

export default UpdateContactForm;
