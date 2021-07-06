export interface RootState {
  FavoritesReducer: {
    favorites: Array<string>;
  }
}

const INITIAL_STATE = {
  favorites: []
};

export default function FavoritesReducer(state = INITIAL_STATE, action: { type: any; value: any }) {
  switch (action.type) {
    case 'ADD_FAVORITES':
      return { ...state, favorites: [...state.favorites, action.value] };
    case 'DELETE_FAVORITES':
      return { ...state, favorites: state.favorites.filter(item => item !== action.value) }
    default:
      return state;
  }
}

export function ADD_FAVORITES(value: string) {
  return { type: 'ADD_FAVORITES', value };
};

export function DELETE_FAVORITES(value: string) {
  return { type: 'DELETE_FAVORITES', value };
};

