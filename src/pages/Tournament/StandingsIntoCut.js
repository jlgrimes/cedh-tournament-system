import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

import { useSelector } from 'react-redux';

const StandingsIntoCut = () => {
  const standings = useSelector((state) => state.tournament.players);
  console.log(standings);

  return (
    <div>
      {standings}
    </div>
  )
};

export default StandingsIntoCut;