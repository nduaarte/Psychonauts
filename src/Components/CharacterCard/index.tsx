import React, { useState } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

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

interface CharacterCardProps {
  name: string;
  img: string;
  psiPowers: Array<PsiPowersEntity>;
  gender: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, img, psiPowers, gender }) => {
  const [isFavorite, setIsFavorite] = useState(false);

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

        <FavoriteButton handleColor={isFavorite} onClick={() => setIsFavorite(!isFavorite)}>
          {isFavorite ? <AiFillStar size={24} color={'#6C63FF'} /> : <AiOutlineStar size={24} color={'#3F3D56'} />}
          <FavText>Favorite</FavText>
        </FavoriteButton>
      </RightWrapper>
    </Container>
  );
}

export default CharacterCard;