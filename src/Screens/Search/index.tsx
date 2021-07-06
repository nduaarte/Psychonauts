import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import landing from '../../assets/landing.svg';
import notfound from '../../assets/notfound.svg';
import { CharacterProps } from '../../services/TypesAPI';
import CharacterCard from '../../Components/CharacterCard';
import { Container, Title, SearchWrapper, SearchIcon, Vector, Row, ButtonFavorites, Loading, CharactersWrapper } from './styles';

const Search: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>();
  const [characters, setCharacter] = useState<CharacterProps[]>([]);
  const [charactersArr, setCharactersArr] = useState<CharacterProps[]>([]);
  const currentSearch = handleDisplay();
  const history = useHistory();

  useEffect(() => {
    axios.get("https://psychonauts-api.herokuapp.com/api/characters").then(response => {
      setCharactersArr(response.data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const filteredCharacters = charactersArr.filter(character => character.name.includes(inputValue));
    setCharacter(filteredCharacters);
  }, [charactersArr, inputValue]);


  function handleDisplay() {
    if (isLoading) return <Loading />
    if (inputValue === '') return <Vector src={landing} />
    if (characters.length === 0) return <Vector src={notfound} />

    return characters.map(({ name, img, psiPowers, gender }) => (
      <CharacterCard name={name} img={img} psiPowers={psiPowers} gender={gender} />
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

      <CharactersWrapper>
        {currentSearch}
      </CharactersWrapper>
    </Container>
  );
}

export default Search;