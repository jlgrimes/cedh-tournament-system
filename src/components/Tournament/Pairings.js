import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Select, MenuItem, Paper, Grid, List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';

import { nextRound } from '../../pages/Tournament/tournamentSlice';
import { POINT_VALUES } from '../../constants/pairings';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 16
  }
}));

const Pairings = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const currentPairings = useSelector(({ tournament }) => tournament.pairings[tournament.round]);
  const currentRound = useSelector(({ tournament }) => tournament.round);

  const [currentRoundPoints, setCurrentRoundPoints] = useState({});
  
  // Updates the current round points whenever the round changes
  useEffect(() => {
    setCurrentRoundPoints({});
  }, [currentRound]);

  const setPlayerCurrentRoundPoints = (player, points) => {
    setCurrentRoundPoints({...currentRoundPoints, [player.id]: points});
  }

  return (
    <div>
      <Grid container spacing={2}>
        {currentPairings.map((pairing) => (
          <Grid item xs={6}>
            <Paper className={classes.paper}>
                <List>
                {pairing.map((player) => (
                  <ListItem>
                    <ListItemText>
                      {player.name}
                    </ListItemText>
                    <ListItemSecondaryAction>
                      <Select
                        onChange={(e) => setPlayerCurrentRoundPoints(player, e.target.value)}
                        value={currentRoundPoints[player.id] ?? ''}
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
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(nextRound(currentRoundPoints))}
      >
        Next Round
      </Button>
    </div>

  )
};

export default Pairings;