import React from 'react';
import { useSelector } from 'react-redux'

const Tournament = () => {
  const players = useSelector((state) => state.tournament.players);

  console.log(players);
  return (
    <div>
      i am a tournament
    </div>
  );
}

export default Tournament;