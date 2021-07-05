import React, { useState } from 'react';

import landing from '../../assets/landing.svg';
import useAPI from '../../services/useAPI';
import CharacterCard from '../../Components/CharacterCard';
import { Container, Title, SearchWrapper, SearchIcon, Vector } from './styles';

const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const character = useAPI(inputValue) || null;

  return (
    <Container>
      <Title>Psychonauts Characters</Title>
      <SearchWrapper>
        <SearchIcon />
        <input placeholder='Write a character name' onChange={event => setInputValue(event.target.value)} />
      </SearchWrapper>

      {
      character === null 
      ? <Vector src={landing} /> 
      : <CharacterCard name={character.name} img={character.img} psiPowers={character.psiPowers} gender={character.gender} />
      }

    </Container>
  );
}

export default Search;