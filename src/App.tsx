import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { CharProvider, useCharContext } from './CharContext';
import Character from './components/Character';
import HandlePage from './components/HandlePage';

function App() {
  return (
    <CharProvider>
      <AppContent />
    </CharProvider>
  );
}

function AppContent() {
  const [data, setData] = useState({ results: [] });
  const { page } = useCharContext();

  useEffect(() => {
    const characters = async () => {
      try {
        const result = await axios(`https://rickandmortyapi.com/api/character/?page=${page}`);
        setData(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    characters();
  }, [page]);

  return (
    <>
      <HandlePage />
      {data.results.map(character => {
        return (
          <div key={character.id}>
            <Character
              name={character.name}
              status={character.status}
              species={character.species}
              type={character.type}
              gender={character.gender}
              origin={character.origin.name}
            />
          </div>
        );
      })}
    </>
  );
}

export default App;
