import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

import { RootState } from '../../Redux/FavoritesReducer';
import { PsiPowersEntity } from '../../services/TypesAPI';
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
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, img, psiPowers, gender }) => {
  const [isFavorite, setIsFavorite] = useState(true);
  const dispatch = useDispatch();
  const favoriteIdArr = useSelector((state: RootState) => state.FavoritesReducer.favorites);

  function addFavorite() {
    let check = favoriteIdArr.includes(name);
    check ? dispatch({ type: 'DELETE_FAVORITES', value: name }) : dispatch({ type: 'ADD_FAVORITES', value: name });

    setIsFavorite(check);
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
          {isFavorite ? <AiOutlineStar size={24} color={'#3F3D56'} /> : <AiFillStar size={24} color={'#524db4'} />}
          <FavText>Favorite</FavText>
        </FavoriteButton>
      </RightWrapper>
    </Container>
  );
}

export default CharacterCard;