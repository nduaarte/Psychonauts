import styled from 'styled-components';
import { RiInformationLine } from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';

export const Container = styled.div`

  background-color: var(--white);
  border-radius: 10px;
  padding: 20px;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CharacterName = styled.h3`
  font-size: 24px;
  color: var(--primary);
  margin-bottom: 20px;
`;

export const CharacterImage = styled.img`
  width: 180px;
`;

export const RightWrapper = styled.div`
  margin-top: 50px;

  button {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    :hover {
      cursor: pointer;
    }
  }
`;

export const PowersWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  border: 2px solid var(--lightGrey);
  background-color: var(--darkWhite);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 5px;
`;

export const PowersTitle = styled.h4`
  font-size: 22px;
  color: var(--primary);
  margin-bottom: 10px;
`;

export const PowersSubWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PowerImage = styled.img`
  width: 60px;
  margin: 0 10px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
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

export const FavIcon = styled(AiOutlineStar)`
  width: 24px;
  height: 24px;
  color: var(--primary);
`;

export const FavText = styled.span`
  font-size: 16px;
  margin-left: 3px;
  font-weight: bold;
  color: var(--primary);
`;
