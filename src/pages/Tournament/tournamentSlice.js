import { createSlice } from '@reduxjs/toolkit'

export const tournamentSlice = createSlice({
  name: 'tournament',
  initialState: {
    round: 1,
    players: []
  },
  reducers: {
    loadPlayers: (state, action) => {
      state.players = action.payload;
    },
    nextRound: (state) => {
      state.round += 1;
      // Insert real next round logic here
    },
  },
})

// Action creators are generated for each case reducer function
export const { loadPlayers, nextRound } = tournamentSlice.actions;

export default tournamentSlice.reducer;