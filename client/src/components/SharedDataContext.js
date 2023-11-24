import React, { createContext, useState } from 'react';

const SharedDataContext = createContext();

export const SharedDataProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SharedDataContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SharedDataContext.Provider>
  );
};

export default SharedDataContext;
