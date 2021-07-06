import styled from 'styled-components';
import { RiInformationLine } from 'react-icons/ri';

export const Container = styled.div`
  width: 90%;
  padding: 20px;
  margin: 15px;
  border-radius: 10px;

  background-color: var(--white);
  box-shadow: 4px 4px 13px 0px rgba(67,67,67,0.32);

  @media(min-width: 1024px) {
    display: flex;
    justify-content: center;
    width: 40%;
    min-height: 60vh;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media(min-width: 1024px) {
    width: 45%;
  }
`;

export const CharacterName = styled.h3`
  font-size: 24px;
  color: var(--primary);
  margin-bottom: 20px;
`;

export const CharacterImage = styled.img`
  width: 180px;
  max-height: 350px;
  border-radius: 10px;
`;

export const RightWrapper = styled.div`
  margin-top: 50px;

  @media(min-width: 1024px) {
    width: 55%;
  }
`;

export const PowersWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  border: 2px solid var(--lightGrey);
  background-color: var(--darkWhite);
  border-radius: 10px;
  margin-bottom: 5px;

  @media(min-width: 1024px) {
    min-height: 200px;
  }
`;

export const PowersTitle = styled.h4`
  font-size: 22px;
  color: var(--primary);
  margin-bottom: 10px;
`;

export const PowersImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PowerImage = styled.img`
  width: 60px;
  margin: 8px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const GenderIcon = styled(RiInformationLine)`
  width: 24px;
  height: 24px;
  color: var(--primary);
`;

export const GenderText = styled.span`
  font-size: 16px;
  margin-left: 3px;
  font-weight: bold;
  color: var(--primary);
`;

export const FavText = styled.span`
  font-size: 16px;
  margin-left: 3px;
  font-weight: bold;
  color: var(--primary);
`;

interface FavoriteButtonProps {
  handleColor: boolean | undefined;
}

export const FavoriteButton = styled.button<FavoriteButtonProps>`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  :hover {
    cursor: pointer;
  }

  ${FavText} {
    color: ${props => props.handleColor ? '#3F3D56' : '#6C63FF'};
  }
`;
