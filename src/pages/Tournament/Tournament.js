import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { Pairings } from '../../components/Tournament';
import { NEW_TOURNAMENT } from '../../constants/urls';
import { nextRound } from './tournamentSlice';

const Tournament = () => {
  const dispatch = useDispatch();
  const currentRound = useSelector((state) => state.tournament.round);

  if (currentRound === 0) {
    return <Redirect to={NEW_TOURNAMENT} />;
  }

  return (
    <div>
      <Pairings />
      <Button onClick={() => dispatch(nextRound())}>Next Round</Button>
    </div>
  );
}

export default Tournament;