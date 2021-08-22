import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';

import { Pairings } from '../../components/Tournament';
import { NEW_TOURNAMENT } from '../../constants/urls';

const Tournament = () => {
  const { name, round } = useSelector((state) => state.tournament);

  if (round === 0) {
    return <Redirect to={NEW_TOURNAMENT} />;
  }

  return (
    <div>
      <Typography variant='h2'>{name}</Typography>
      <Typography variant='h4'>Round {round}</Typography>
      <Pairings />
    </div>
  );
}

export default Tournament;