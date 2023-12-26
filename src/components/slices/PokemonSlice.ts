import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import request from '../../services/request';

interface PokemonState {
  loadingStatus: 'idle' | 'loading' | 'succeeded' | 'error';
}

export type Pokemon = { idNumber: number; name: string; url: string };

const pokemonsAdapter = createEntityAdapter({
  selectId: (pokemon: Pokemon) => pokemon.idNumber,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = pokemonsAdapter.getInitialState<PokemonState>({
  loadingStatus: 'idle',
});

export const fetchAllPokemons = createAsyncThunk('pokemons/fetchPokemons', async () => {
  const response = await request();
  return response;
});

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPokemons.pending, (state) => {
        state.loadingStatus = 'loading';
      })
      .addCase(fetchAllPokemons.fulfilled, (state, action) => {
        state.loadingStatus = 'idle';
        pokemonsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchAllPokemons.rejected, (state) => {
        state.loadingStatus = 'error';
      })
      .addDefaultCase(() => {});
  },
});
const { reducer } = pokemonsSlice;
export default reducer;

export const { selectAll } = pokemonsAdapter.getSelectors((state: any) => state.pokemons);
