import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import landing from '../../assets/landing.svg';
import notfound from '../../assets/notfound.svg';

import useAPI, { CharacterProps } from '../../services/useAPI';
import CharacterCard from '../../Components/CharacterCard';
import { Container, Title, SearchWrapper, SearchIcon, Vector, Row, ButtonFavorites } from './styles';

const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [characters, setCharacter] = useState<CharacterProps[]>([]);
  const currentSearch = getSearchValue();
  const charactersArr = useAPI();
  const history = useHistory();

  useEffect(() => {
    const filteredCharacters = charactersArr.filter(character => character.name.includes(inputValue));
    setCharacter(filteredCharacters);
  }, [inputValue]);


  function getSearchValue() {
    if (inputValue === '') return <Vector src={landing} />
    if (characters.length === 0) return <Vector src={notfound} />

    return characters.map(({ name, img, psiPowers, gender, _id }) => (
      <CharacterCard name={name} img={img} psiPowers={psiPowers} gender={gender} id={_id} />
    ));
  }

  return (
    <Container>
      <Title>Psychonauts Characters</Title>
      <Row>
        <SearchWrapper>
          <SearchIcon />
          <input placeholder='Write a character name' onChange={event => setInputValue(event.target.value)} />
        </SearchWrapper>
        <ButtonFavorites onClick={() => history.push('./favorites')} >Favorites</ButtonFavorites>
      </Row>
      
      {currentSearch}
    </Container>
  );
}

export default Search;