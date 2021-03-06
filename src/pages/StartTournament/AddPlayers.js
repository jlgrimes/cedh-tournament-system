import React, { useState } from 'react';
import uniqueId from 'lodash/uniqueId';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { PlayerImport, PlayerList, TournamentMetadata } from '../../components/StartTournament';
import { TOURNAMENT } from '../../constants/urls';

import { useDispatch } from 'react-redux';
import { startTournament } from '../Tournament/tournamentSlice';

const AddPlayers = () => {
  const dispatch = useDispatch();
  const [players, setPlayers] = useState([]);

  const addPlayer = (playerName) => {
    const newPlayer = {
      id: uniqueId(),
      name: playerName
    };

    setPlayers([...players, newPlayer])
  };

  const removePlayer = (player) => {
    setPlayers(players.filter(({ id }) => id !== player.id))
  };

  return (
    <div>
      <TournamentMetadata />
      <PlayerImport addPlayer={addPlayer} />
      <PlayerList {...{ players, removePlayer }} />
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={TOURNAMENT}
        onClick={() => {
          dispatch(startTournament(players));
        }}
      >
        Start Tournament
      </Button>
    </div>
  );
};

export default AddPlayers;