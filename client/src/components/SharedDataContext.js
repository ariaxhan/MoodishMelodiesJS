import React, { createContext, useState } from 'react';

const SharedDataContext = createContext();

export const SharedDataProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recommendationsData, setRecommendationsData] = useState([]);

  return (
    <SharedDataContext.Provider value={{ searchTerm, setSearchTerm, recommendationsData, setRecommendationsData }}>
      {children}
    </SharedDataContext.Provider>
  );
};

export default SharedDataContext;
