import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Wrapper = styled.div`
  @media (min-width: 850px) {
    width: 40%;
    height: 80vh;

    background-color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 30px;
    border-radius: 20px;
    -webkit-box-shadow: 5px 5px 8px -5px rgba(0,0,0,0.22); 
    box-shadow: 5px 5px 8px -5px rgba(0,0,0,0.22);
  }
`;

export const Title = styled.h1`
  color: var(--primary);
`;


export const FavoritesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const FavoritesName = styled.span`
  display: flex;
  align-items: center;
  color: var(--secondary);

  font-weight: bold;
  line-height: 40px;
  font-size: 18px;
`;

export const FavIcon = styled(AiFillStar)`
  width: 22px;
  height: 22px;
  margin-right: 5px;
`;




