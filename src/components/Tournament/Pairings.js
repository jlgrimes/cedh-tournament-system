import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Tooltip, Button, Select, MenuItem, Paper, Grid, List, ListItem, ListItemText, ListItemSecondaryAction, Typography } from '@material-ui/core';

import { nextRound } from '../../pages/Tournament/tournamentSlice';
import { POINT_VALUES } from '../../constants/pairings';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 16
  }
}));

const NextRoundButton = ({ currentRoundPoints, isFinalRound }) => {
  const dispatch = useDispatch();
  const numberOfPlayers = useSelector(({ tournament }) => tournament.players.length)

  const notAllPointsSet = () => {
    // If it's the final round, we check against 4
    if (isFinalRound) {
      return Object.keys(currentRoundPoints).length !== 4;
    }

    return Object.keys(currentRoundPoints).length !== numberOfPlayers;
  };

  if (notAllPointsSet()) {
    return (
      <Tooltip title="Please assign points for every player before moving on">
        <span>
          <Button
            variant="contained"
            color="primary"
            disabled
          >
            Next Round
          </Button>
        </span>
      </Tooltip>
    )
  }


  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => dispatch(nextRound(currentRoundPoints))}
    >
      Next Round
    </Button>
  )
}

const Pairings = ({ isFinalRound }) => {
  const classes = useStyles();

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
        {currentPairings.map((pairing, idx) => (
          <Grid item xs={6}>
            <Paper className={classes.paper}>
            <Typography variant="h5" component="h2">
              Table {idx + 1}
            </Typography>
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
      <NextRoundButton isFinalRound={isFinalRound} currentRoundPoints={currentRoundPoints} />
    </div>

  )
};

export default Pairings;