import { createContext, useContext, useState } from 'react';
import { mockUsers, mockChild } from '../data/mockData';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [child, setChild] = useState(null);

  const login = (email, password) => {

    const foundUser = mockUsers.find(
      u => u.email === email && u.password === password
    );
    
    if (foundUser) {
      setUser(foundUser);
      if (foundUser.role === 'parent') {
        setChild(mockChild);
      }
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setChild(null);
  };

  return (
    <AuthContext.Provider value={{ user, child, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
