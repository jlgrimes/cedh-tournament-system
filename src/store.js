import { configureStore } from '@reduxjs/toolkit';
import tournamentReducer from './pages/Tournament/tournamentSlice';

export default configureStore({
  reducer: {
    tournament: tournamentReducer
  }
});