import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { useSelector } from 'react-redux';
import orderBy from 'lodash/orderBy';

import { getTotalPoints } from '../../utils/pairing';

const StandingsIntoCut = () => {
  const players = useSelector((state) => state.tournament.players)
  const standings = orderBy(players, (player) => getTotalPoints(player), 'desc');

  return (
    <div>
      <List>
        {standings.map((player) => (
          <ListItem>
            <ListItemText>
              {`${player.name} - ${getTotalPoints(player)} points`}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  )
};

export default StandingsIntoCut;