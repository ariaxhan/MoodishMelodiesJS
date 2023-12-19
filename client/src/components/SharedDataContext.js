import React, { createContext, useState } from 'react';

// uses SharedDataContext to create variables that can be set and used across components
export const SharedDataContext = createContext({
    searchTerm: "",
    setSearchTerm: () => {},
    recommendationsData: [],
    setRecommendationsData: () => {},
});

const SharedDataProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recommendationsData, setRecommendationsData] = useState("");

  return (
    <SharedDataContext.Provider value={{
        searchTerm: searchTerm,
        setSearchTerm: setSearchTerm,
        recommendationsData: recommendationsData,
        setRecommendationsData: setRecommendationsData,
    }}>
      {children}
    </SharedDataContext.Provider>
  );
};

export default SharedDataProvider;