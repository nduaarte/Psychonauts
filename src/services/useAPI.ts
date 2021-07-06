import { useState, useEffect } from 'react';
import axios from 'axios';

export interface CharacterProps {
  gender: string;
  img: string;
  _id: string;
  name: string;
  psiPowers: PsiPowersEntity[];
  __v: number;
}

export interface PsiPowersEntity {
  description: string;
  img: string;
  _id: string;
  name: string;
}

function useAPI() {
  const baseURL = 'https://psychonauts-api.herokuapp.com/api/characters';
  const [character, setCharacter] = useState<CharacterProps[]>([]);

  useEffect(() => {
    async function fetchCharacter() {
      const { data } = await axios(baseURL);
      setCharacter(data);
    }
  
    fetchCharacter();
  }, []);

  return character;
}

export default useAPI;