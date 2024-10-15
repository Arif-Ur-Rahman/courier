// src/contexts/AuthContext.jsx

import React, { createContext, useState, useEffect } from 'react';
import { decodeJwt } from 'jose';

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to set user from token
  const setUserFromToken = (token) => {
    try {
      const decoded = decodeJwt(token);
      setUser({
        username: decoded.name,
        email: decoded.email,
      });
    } catch (error) {
      console.error('Invalid token:', error);
      setUser(null);
      localStorage.removeItem('token');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUserFromToken(token);
    }
    setLoading(false);
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setUserFromToken(token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
