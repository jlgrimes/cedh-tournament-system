import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';

import { Pairings } from '../../components/Tournament';

const PairingsView = ({ isFinalRound }) => {
  const { name, round } = useSelector((state) => state.tournament);

  const getRoundText = () => isFinalRound ? 'Final Round' : `Round ${round}`

  return (
    <div>
      <Typography variant='h2'>{name}</Typography>
      <Typography variant='h4'>{getRoundText()}</Typography>
      <Pairings />
    </div>
  );
};

export default PairingsView;