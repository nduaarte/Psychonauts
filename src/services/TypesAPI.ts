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