import React, { createContext, useContext, useState } from 'react';

interface ContextType {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  specie: string;
  setSpecie: React.Dispatch<React.SetStateAction<string>>;
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
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [specie, setSpecie] = useState('');

  return (
    <CharContext.Provider value={{ page, setPage, name, setName, status, setStatus, specie, setSpecie }}>
      {children}
    </CharContext.Provider>
  );
};

export { CharProvider, useCharContext };