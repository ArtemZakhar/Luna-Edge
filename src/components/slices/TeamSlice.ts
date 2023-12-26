import { EntityId, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export type Pokemon = { id: EntityId };

const pokemonsTeamAdapter = createEntityAdapter();

const pokemonsTeamSlice = createSlice({
  name: 'team',
  initialState: pokemonsTeamAdapter.getInitialState(),
  reducers: {
    pokemonAdded: (state, action) => {
      pokemonsTeamAdapter.addOne(state, action.payload);
    },
    pokemonDeleted: (state, action) => {
      pokemonsTeamAdapter.removeOne(state, action.payload);
    },
    pokemonUpdated: pokemonsTeamAdapter.updateOne,
    pokemonUpdatedMany: pokemonsTeamAdapter.updateMany,
    pokemonDeletedMany: pokemonsTeamAdapter.removeMany,
  },
});
const { actions, reducer } = pokemonsTeamSlice;
export default reducer;

export const { selectAll } = pokemonsTeamAdapter.getSelectors((state: any) => state.team);

export const {
  pokemonAdded,
  pokemonDeleted,
  pokemonUpdated,
  pokemonUpdatedMany,
  pokemonDeletedMany,
} = actions;
