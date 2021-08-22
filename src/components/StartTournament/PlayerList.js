import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const PlayerList = ({ players, removePlayer }) => {
  return (
    <List>
      {players.map((player) => (
        <ListItem>
          <ListItemText>
            {player.name}
          </ListItemText>
          <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => removePlayer(player)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default PlayerList;