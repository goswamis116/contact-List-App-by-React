import React from 'react';

const Contact = ({ contact, onDeleteContact }) => {
  const handleDelete = () => {
    onDeleteContact(contact.id);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">
          <strong>Email:</strong> {contact.email}<br />
          <strong>Address:</strong> {contact.address.street}, {contact.address.suite}, {contact.address.city}, {contact.address.zipcode}
        </p>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Contact;
