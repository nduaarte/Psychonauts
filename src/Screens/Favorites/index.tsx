import React from 'react';
import { useSelector } from 'react-redux';

import useAPI from '../../services/useAPI';
import CharacterCard from '../../Components/CharacterCard';
import { RootState } from '../../Redux/FavoritesReducer';
import { Container, Title, CardsWrapper } from './styles';

const Favorites: React.FC = () => {
  const favoritesId = useSelector((state: RootState) => state.FavoritesReducer.favorites);
  const charactersArr = useAPI().map(char => char._id);


  for(let i=0; i < charactersArr.length; i++) {
    let vrau = favoritesId.find(item => item === charactersArr[i]);

    console.log(vrau);
    
  }
  

  return(
    <Container>
      <Title>Favorites</Title>
      <CardsWrapper>
        
      </CardsWrapper>
    </Container>
  );
}

export default Favorites;