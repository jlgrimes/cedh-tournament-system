import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Pairings } from '../../components/Tournament';
import { NEW_TOURNAMENT } from '../../constants/urls';

const Tournament = () => {
  const currentRound = useSelector((state) => state.tournament.round);

  if (currentRound === 0) {
    return <Redirect to={NEW_TOURNAMENT} />;
  }

  return (
    <div>
      <Pairings />
    </div>
  );
}

export default Tournament;