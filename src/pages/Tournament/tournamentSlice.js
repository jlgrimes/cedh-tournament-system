import { createSlice } from '@reduxjs/toolkit'
import { getPairings } from '../../utils/pairing';

export const tournamentSlice = createSlice({
  name: 'tournament',
  initialState: {
    round: 0, // round = 0 indicates that the tournament has not started yet
    players: [],
    pairings: {}
  },
  reducers: {
    startTournament: (state, action) => {
      state.round = 1;
      state.players = action.payload;
      state.pairings[1] = getPairings(action.payload);
    },
    loadPlayers: (state, action) => {
      state.players = action.payload;
    },
    nextRound: (state) => {
      state.round += 1;
      state.pairings[state.round] = getPairings(state.players);
      // Insert real next round logic here
    },
  },
})

// Action creators are generated for each case reducer function
export const { loadPlayers, nextRound, startTournament } = tournamentSlice.actions;

export default tournamentSlice.reducer;