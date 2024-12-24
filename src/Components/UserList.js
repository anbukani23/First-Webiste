// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../api';

const UserList = ({ setEditingUser }) => {
  const [users, setUsers] = useState([]);

  // Fetch users on component mount
  useEffect(() => {
    getUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the users:', error);
      });
  }, []);

  // Handle delete user
  const handleDelete = (id) => {
    deleteUser(id)
      .then(() => {
        // Update user list after deletion
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => setEditingUser(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
