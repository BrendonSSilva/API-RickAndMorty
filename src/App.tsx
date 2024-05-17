import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { CharProvider, useCharContext } from './CharContext';
import Character from './components/Character';
import HandlePage from './components/HandlePage';
import HandleName from './components/HandleName';
import HandleStatus from './components/HandleStatus';
import HandleSpecie from './components/HandleSpecie';
import { ThemeProvider } from 'styled-components';
import { Card, theme } from './assets/styles/index'
import Footer from './components/Footer';

function App() {
  return (
    <CharProvider>
      <ThemeProvider theme={theme}>
        <AppContent />
      </ThemeProvider>
    </CharProvider>
  );
}

function AppContent() {
  const [data, setData] = useState({ results: [] });
  const { page, name, status, specie } = useCharContext();

  useEffect(() => {
    const characters = async () => {
      try {
        const result = await axios(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&species=${specie}`);
        // const result = await axios(`https://rickandmortyapi.com/api/character/?page=${page}&name=${theName}&status=${stt}&species=${specie}`);
        setData(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    characters();
  }, [page, name, status, specie]);

  return (
    <>
      <HandleName />
      <HandleSpecie />
      <HandleStatus />
      <HandlePage />


      <Card>
        {data.results.map(character => {
          return (
            <div key={character.id}>
              <Character
                image={character.image}
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
      </Card>
      <Footer/>
    </>
  );
}

export default App;
