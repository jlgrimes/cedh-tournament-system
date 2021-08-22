import React from 'react';
import { useSelector } from 'react-redux'

const Tournament = () => {
  const pairings = useSelector((state) => state.tournament.pairings);

  console.log(pairings);
  return (
    <div>
      i am a tournament
    </div>
  );
}

export default Tournament;