import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../Redux/FavoritesReducer';
import { Container, Wrapper, Title, FavoritesWrapper, FavoritesName, FavIcon } from './styles';

const Favorites: React.FC = () => {
  const favoritesId = useSelector((state: RootState) => state.FavoritesReducer.favorites);
  const characters = favoritesId.map(character =>
    <FavoritesName><FavIcon />{character}</FavoritesName>
  );

  return (
    <Container>
      <Wrapper>
        <Title>Favorites</Title>
        <FavoritesWrapper>
          {characters}
        </FavoritesWrapper>
      </Wrapper>
    </Container>
  );
}

export default Favorites;