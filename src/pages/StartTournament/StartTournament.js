import React, { useState } from 'react';
import uniqueId from 'lodash/uniqueId';

import { PlayerImport, PlayerList } from '../../components/StartTournament';

const StartTournament = () => {
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
      <PlayerImport addPlayer={addPlayer} />
      <PlayerList {...{ players, removePlayer }} />
    </div>
  )
};

export default StartTournament;