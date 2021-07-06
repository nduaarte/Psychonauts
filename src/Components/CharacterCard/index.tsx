import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

import { RootState } from '../../Redux/FavoritesReducer';
import { PsiPowersEntity } from '../../services/useAPI';
import {
  Container,
  LeftWrapper,
  CharacterName,
  CharacterImage,
  RightWrapper,
  PowersWrapper,
  PowersTitle,
  PowersImageWrapper,
  PowerImage,
  Row,
  GenderIcon,
  GenderText,
  FavoriteButton,
  FavText
} from './styles';

export interface CharacterCardProps {
  name: string;
  img: string;
  psiPowers: Array<PsiPowersEntity>;
  gender: string;
  id: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, img, psiPowers, gender, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const favoriteIdArr = useSelector((state: RootState) => state.FavoritesReducer.favorites);

  function addFavorite() {
    const check = favoriteIdArr.includes(id);
    setIsFavorite(check);
    check ? dispatch({ type: 'DELETE_FAVORITES', value: id }) : dispatch({ type: 'ADD_FAVORITES', value: id });
  }

  return (
    <Container>
      <LeftWrapper>
        <CharacterName>{name}</CharacterName>
        <CharacterImage src={img} alt={name} />
      </LeftWrapper>

      <RightWrapper>
        <PowersWrapper>
          <PowersTitle>Powers</PowersTitle>
          <PowersImageWrapper>
            {psiPowers.map(power => <PowerImage src={power.img} alt={power.name} />)}
          </PowersImageWrapper>
        </PowersWrapper>

        <Row>
          <GenderIcon />
          <GenderText>{`Gender: ${gender}`}</GenderText>
        </Row>

        <FavoriteButton handleColor={isFavorite} onClick={addFavorite}>
          {isFavorite ? <AiFillStar size={24} color={'#524db4'} /> : <AiOutlineStar size={24} color={'#3F3D56'} />}
          <FavText>Favorite</FavText>
        </FavoriteButton>
      </RightWrapper>
    </Container>
  );
}

export default CharacterCard;