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

function useAPI(charName: string) {
  const baseURL = 'https://psychonauts-api.herokuapp.com/api/characters?name=';
  const [character, setCharacter] = useState<CharacterProps>();

  useEffect(() => {
    async function fetchCharacter() {
      const { data } = await axios(`${baseURL}${charName}`);
      setCharacter(data);
    }
  
    fetchCharacter();
  }, [charName]);

  if(charName === '') return null;
  return character;
}

export default useAPI;