// src/components/UserForm.js
import React, { useState, useEffect } from 'react';
import { createUser, updateUser } from '../api';

const UserForm = ({ user, setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email };

    if (user) {
      updateUser(user.id, userData)
        .then(() => {
          setUser(null); // Reset form
        })
        .catch((error) => {
          console.error('Error updating user:', error);
        });
    } else {
      createUser(userData)
        .then(() => {
          setName('');
          setEmail('');
        })
        .catch((error) => {
          console.error('Error creating user:', error);
        });
    }
  };

  return (
    <div>
      <h2>{user ? 'Edit User' : 'Create New User'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">{user ? 'Update User' : 'Create User'}</button>
      </form>
    </div>
  );
};

export default UserForm;
