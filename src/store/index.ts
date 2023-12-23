import { configureStore } from '@reduxjs/toolkit';
import pokemons from '../components/PokemonSlice/PokemonSlice';

const stringMiddleware = () => (next: any) => (action: string | {}) => {
  if (typeof action === 'string') {
    return next({
      type: action,
    });
  }
  return next(action);
};

const store = configureStore({
  reducer: { pokemons },
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
