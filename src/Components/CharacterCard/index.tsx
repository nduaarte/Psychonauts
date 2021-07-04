import React from 'react';

import { 
  Container, 
  LeftWrapper, 
  CharacterName, 
  CharacterImage, 
  RightWrapper,
  PowersWrapper,
  PowersTitle,
  PowersSubWrapper,
  PowerImage,
  Row,
  GenderIcon,
  GenderText,
  FavIcon,
  FavText
} from './styles';

import aa from '../../assets/razputin-aquato.png';
import clairvoyance from '../../assets/clairvoyance.png';

interface CharacterCardProps {

}

const CharacterCard: React.FC<CharacterCardProps> = () => {
  return (
    <Container>
      <LeftWrapper>
        <CharacterName>{'razputin aquato'}</CharacterName>
        <CharacterImage src={aa} />
      </LeftWrapper>

      <RightWrapper>
        <PowersWrapper>
          <PowersTitle>Powers</PowersTitle>
          <PowersSubWrapper>
            <PowerImage src={clairvoyance} />
            <PowerImage src={clairvoyance} />
            <PowerImage src={clairvoyance} />
            <PowerImage src={clairvoyance} />
            <PowerImage src={clairvoyance} />
          </PowersSubWrapper>
        </PowersWrapper>

        <Row>
          <GenderIcon />
          <GenderText>{`Gender: Male`}</GenderText>
        </Row>

        <button>
          <FavIcon />
          <FavText>Favorite</FavText>
        </button>
      </RightWrapper>
    </Container>
  );
}

export default CharacterCard;