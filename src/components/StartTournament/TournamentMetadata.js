import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';

const TournamentMetadata = () => {
  const { metadata } = useSelector((state) => state.tournament);

  return (
    <div>
      <Typography variant='h2'>{metadata.name}</Typography>
      <Typography variant='h4'>{metadata.numRounds} Rounds</Typography>
    </div>
  );
};

export default TournamentMetadata;