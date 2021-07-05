import { ReactNode } from 'react';

import { Container } from './styles';

interface FavoritesProps {
  children: ReactNode;
}

function Favorites({ children }: FavoritesProps) {
  return (
    <Container>
      <h1>Favorites</h1>
      {children}
    </Container>
  );
};

export default Favorites;
