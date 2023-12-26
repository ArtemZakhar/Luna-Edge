import { EntityId, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export type Coach = { text: string; id: EntityId };

const coachAdapter = createEntityAdapter();

const pokemonsTeamSlice = createSlice({
  name: 'coach',
  initialState: coachAdapter.getInitialState(),
  reducers: {
    coachNameAdded: (state, action) => {
      coachAdapter.upsertOne(state, action.payload);
    },
  },
});
const { actions, reducer } = pokemonsTeamSlice;
export default reducer;

export const { selectAll } = coachAdapter.getSelectors((state: any) => state.coach);

export const { coachNameAdded } = actions;
