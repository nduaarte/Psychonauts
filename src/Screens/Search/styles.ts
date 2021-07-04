import styled from 'styled-components';
import { HiOutlineSearch } from 'react-icons/hi';

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 28px;
  color: var(--primary);
  margin-bottom: 30px;
`;

export const SearchWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;

  padding: 10px;
  border-radius: 5px;
  margin-bottom: 60px;
  background-color: var(--white);
  box-shadow: 0px 3px 7px 1px rgba(0,0,0,0.1);
`;

export const SearchIcon = styled(HiOutlineSearch)`
  width: 18px;
  height: 18px;
  margin-right: 10px;
  color: var(--grey);
`;

export const Vector = styled.img`
  align-self: flex-end;
  width: 100%;
`;

