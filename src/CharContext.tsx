import React, { createContext, useContext, useState } from 'react';

interface ContextType {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  age: number;
  setAge: React.Dispatch<React.SetStateAction<number>>;
}

const CharContext = createContext<ContextType | undefined>(undefined);

 const useCharContext = () => {
  const context = useContext(CharContext);
  if (!context) {
    throw new Error('useCharContext must be used within a CharProvider');
  }
  return context;
};

interface CharProviderProps {
  children: React.ReactNode;
}

 const CharProvider: React.FC<CharProviderProps> = ({ children }) => {
  const [page, setPage] = useState(1);
  const [age, setAge] = useState(20);

  return (
    <CharContext.Provider value={{ page, setPage, age, setAge}}>
      {children}
    </CharContext.Provider>
  );
};

export { CharProvider, useCharContext };