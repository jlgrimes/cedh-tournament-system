import { createSlice } from '@reduxjs/toolkit'
import { getPairings, updatePlayerRoundData, getFinalRoundPairings } from '../../utils/pairing';

export const tournamentSlice = createSlice({
  name: 'tournament',
  initialState: {
    metadata: {
      name: '',
      numRounds: 1
    },
    // Which step of the tournament we're on. Step 0 is initial pairings, step 1 is standings, step 2 is final round pairings
    tournamentStep: 0,
    round: 0, // round = 0 indicates that the tournament has not started yet
    players: [],
    pairings: {}
  },
  reducers: {
    updateTournamentMetadata: (state, action) => {
      state.metadata = action.payload;
    },
    startTournament: (state, action) => {
      state.round = 1;
      state.players = action.payload;
      state.pairings[1] = getPairings(action.payload);
    },
    loadPlayers: (state, action) => {
      state.players = action.payload;
    },
    nextRound: (state, action) => {
      // Update players with the round results
      state.players = updatePlayerRoundData(state.players, action.payload, state.round);
      // Increment round number by 1
      state.round += 1;

      // If we've hit the last round, go to next tournament step
      // Or if we're at the last round, go to the final standings
      if (state.round > state.metadata.numRounds) {
        state.tournamentStep += 1;
        return;
      }

      // Generates the next round pairings
      state.pairings[state.round] = getPairings(state.players);
    },
    startFinalRound: (state) => {
      // Get the final round pairings
      state.pairings[state.round] = getFinalRoundPairings(state.players);
      // Sets the tournament step to 2, which is showing the final round pairings
      state.tournamentStep = 2;
    },
    endTournament: (state) => {

    }
  },
})

// Action creators are generated for each case reducer function
export const { loadPlayers, nextRound, startTournament, updateTournamentMetadata, startFinalRound } = tournamentSlice.actions;

export default tournamentSlice.reducer;