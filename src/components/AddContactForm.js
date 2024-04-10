import React, { useState } from 'react';

const AddContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(newContact => {
        // Here you can update your React state with the newly added contact
        onAddContact(newContact);
        // Reset form fields
        setName('');
        setEmail('');
      })
      .catch(error => {
        console.error('Error adding contact: ', error);
      });
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h2 className="card-title">Add Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Add Contact</button>
        </form>
      </div>
    </div>
  );
};

export default AddContactForm;
