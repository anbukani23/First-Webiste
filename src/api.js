// src/api.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users'; // Replace with your backend URL

// GET all users
export const getUsers = () => {
  return axios.get(API_URL);
};

// POST new user
export const createUser = (userData) => {
  return axios.post(API_URL, userData);
};

// PUT update user
export const updateUser = (id, userData) => {
  return axios.put(`${API_URL}/${id}`, userData);
};

// DELETE user
export const deleteUser = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
