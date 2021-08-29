import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { NEW_TOURNAMENT } from '../../constants/urls';
import { PairingsView, Standings } from '.';

const Tournament = () => {
  const { round, tournamentStep } = useSelector((state) => state.tournament);

  const TOURNAMENT_STEPS = [
    {
      component: <PairingsView />
    },
    {
      component: <Standings />
    },
    {
      component: <PairingsView isFinalRound />
    },
    {
      component: <Standings endOfTournament />
    }
  ];

  if (round === 0) {
    return <Redirect to={NEW_TOURNAMENT} />;
  }

  return (
    <div>
      {TOURNAMENT_STEPS[tournamentStep].component}
    </div>
  );
}

export default Tournament;