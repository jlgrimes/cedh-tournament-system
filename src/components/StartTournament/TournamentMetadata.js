import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Typography, IconButton, Dialog, DialogTitle } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

import { TournamentSettingsForm } from '.';

const TournamentMetadata = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { metadata } = useSelector((state) => state.tournament);

  return (
    <div>
      <Typography variant='h2'>{metadata.name}</Typography>
      <Typography variant='h4'>{metadata.numRounds} Rounds</Typography>
      <IconButton onClick={() => setSettingsOpen(true)}>
        <SettingsIcon />
      </IconButton>
      <Dialog open={settingsOpen} onClose={() => setSettingsOpen(false)}>
        <DialogTitle>Edit tournament information</DialogTitle>
        <TournamentSettingsForm onComplete={() => setSettingsOpen(false)} />
      </Dialog>
    </div>
  );
};

export default TournamentMetadata;