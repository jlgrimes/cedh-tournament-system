import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'
import { Select, MenuItem, Paper, Grid, List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 16
  }
}));

const POINT_VALUES = [
  {
    label: 'Win',
    value: 3
  },
  {
    label: 'Second',
    value: 2
  },
  {
    label: 'Third/Draw',
    value: 1
  },
  {
    label: 'Fourth',
    value: 0
  }
];

const Pairings = () => {
  const classes = useStyles();

  const currentPairings = useSelector(({ tournament }) => tournament.pairings[tournament.round]);

  const [currentRoundPoints, setCurrentRoundPoints] = useState(currentPairings.map((pairing => pairing.map(_ => null))));
  
  const setPlayerCurrentRoundPoints = (pairingIdx, playerIdx, points) => {
    let newRoundPoints = currentRoundPoints;
    newRoundPoints[pairingIdx][playerIdx] = points;
    setCurrentRoundPoints(newRoundPoints);
  };

  return (
    <Grid container spacing={2}>
      {currentPairings.map((pairing, pairingIdx) => (
        <Grid item xs={6}>
          <Paper className={classes.paper}>
              <List>
              {pairing.map((player, playerIdx) => (
                <ListItem>
                  <ListItemText>
                    {player.name}
                  </ListItemText>
                  <ListItemSecondaryAction>
                    <Select
                      onChange={(e) => setPlayerCurrentRoundPoints(pairingIdx, playerIdx, e.target.value)}
                    >
                      {POINT_VALUES.map(({ label, value }) => (
                        <MenuItem value={value}>{`${label} - ${value}`}</MenuItem>
                      ))}
                    </Select>
                  </ListItemSecondaryAction>
              </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
};

export default Pairings;