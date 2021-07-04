import React from 'react';

import landing from '../../assets/landing.svg';
import CharacterCard from '../../Components/CharacterCard';
import { Container, Title, SearchWrapper, SearchIcon, Vector } from './styles';

const Search: React.FC = () => {
  return (
    <Container>
      <Title>Psychonauts Characters</Title>
      <SearchWrapper>
        <SearchIcon />
        <input placeholder='Write a character name' />
      </SearchWrapper>
      
      <CharacterCard />
      {/* <Vector src={landing} /> */}
    </Container>
  );
}

export default Search;